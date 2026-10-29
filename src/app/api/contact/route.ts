import { NextResponse } from "next/server";

// ============================================================================
// SECURITY & IN-MEMORY RATE LIMITER
// ============================================================================
interface RateLimitRecord {
  count: number;
  resetAt: number;
  lastRequestTime: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();
const lastSubmissionsMap = new Map<string, number>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes window
const MAX_REQUESTS_PER_WINDOW = 4; // Max 4 submissions per 10 mins per IP
const MIN_COOLDOWN_MS = 6 * 1000; // Minimum 6 seconds between consecutive submissions

// Auto-cleanup stale entries every 15 minutes to prevent memory leaks
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitStore.entries()) {
      if (now > record.resetAt) {
        rateLimitStore.delete(ip);
      }
    }
    for (const [hash, time] of lastSubmissionsMap.entries()) {
      if (now - time > 10 * 60 * 1000) {
        lastSubmissionsMap.delete(hash);
      }
    }
  }, 15 * 60 * 1000);
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();
  return "127.0.0.1";
}

function sanitizeString(str: unknown, maxLen = 1000): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/<[^>]*>/g, "") // Strip any HTML tags
    .replace(/[<>]/g, "") // Remove remaining angle brackets
    .trim()
    .slice(0, maxLen);
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);
    const now = Date.now();

    // 1. RATE LIMITING PER IP
    let clientRecord = rateLimitStore.get(clientIp);

    if (!clientRecord || now > clientRecord.resetAt) {
      clientRecord = {
        count: 1,
        resetAt: now + WINDOW_MS,
        lastRequestTime: now,
      };
      rateLimitStore.set(clientIp, clientRecord);
    } else {
      // Cooldown check (too fast consecutive requests)
      if (now - clientRecord.lastRequestTime < MIN_COOLDOWN_MS) {
        return NextResponse.json(
          {
            success: false,
            code: "RAPID_REQUEST",
            message:
              "Please wait a few seconds between submissions, or message us directly on WhatsApp.",
          },
          { status: 429 }
        );
      }

      // Max request limit check
      if (clientRecord.count >= MAX_REQUESTS_PER_WINDOW) {
        const remainingMinutes = Math.ceil((clientRecord.resetAt - now) / 60000);
        return NextResponse.json(
          {
            success: false,
            code: "RATE_LIMITED",
            message: `Too many submissions detected from your connection. Please wait ${remainingMinutes} minute(s) before trying again, or message our team directly on WhatsApp (+91 77962 16506).`,
          },
          { status: 429 }
        );
      }

      clientRecord.count += 1;
      clientRecord.lastRequestTime = now;
      rateLimitStore.set(clientIp, clientRecord);
    }

    // 2. PARSE PAYLOAD
    let body: Record<string, unknown> = {};
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request payload format." },
        { status: 400 }
      );
    }

    const {
      name,
      businessName,
      email,
      phone,
      service,
      projectBudget,
      preferredContact,
      projectDescription,
      problemDescription,
      source,
      website_url, // Honeypot field
      hp_security_check, // Secondary honeypot
      _loadedAt, // Client form load timestamp
    } = body;

    // 3. HONEYPOT ANTI-BOT TRAP
    // Automated scrapers fill in hidden fields. If populated, silently drop.
    if (website_url || hp_security_check) {
      console.warn(`[Anti-Spam Security] Honeypot triggered by IP ${clientIp}. Silently dropping submission.`);
      return NextResponse.json(
        {
          success: true,
          message: "Enquiry received successfully.",
        },
        { status: 200 }
      );
    }

    // 4. SUBMISSION VELOCITY CHECK
    // Humans take at least 1.5 - 2 seconds to view & submit a form.
    if (_loadedAt && typeof _loadedAt === "number" && _loadedAt > 0) {
      const elapsed = now - _loadedAt;
      if (elapsed < 1400) {
        console.warn(`[Anti-Spam Security] Bot velocity detected (${elapsed}ms) from IP ${clientIp}. Rejecting.`);
        return NextResponse.json(
          {
            success: false,
            code: "BOT_VELOCITY",
            message: "Submission completed too fast. Please verify you are a human user.",
          },
          { status: 400 }
        );
      }
    }

    // 5. INPUT SANITIZATION
    const cleanName = sanitizeString(name, 80);
    const cleanBusiness = sanitizeString(businessName, 100) || "Not specified";
    const cleanEmail = sanitizeString(email, 100);
    const cleanPhone = sanitizeString(phone, 25);
    const cleanService = sanitizeString(service, 80) || "General IT Solutions";
    const cleanBudget = sanitizeString(projectBudget, 80) || "Not specified";
    const cleanPreferred = sanitizeString(preferredContact, 30) || "WhatsApp";
    const cleanDescription =
      sanitizeString(projectDescription, 2000) ||
      sanitizeString(problemDescription, 2000);
    const cleanSource = sanitizeString(source, 80) || "Website Contact Form";

    // 6. VALIDATION CHECKS
    if (!cleanName || cleanName.length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    // Anti-spam: check for URLs in the Name field
    if (/https?:\/\/|www\.|\.com|\.ru|\.xyz/i.test(cleanName)) {
      return NextResponse.json(
        { success: false, message: "Links or URLs are not allowed in the name field." },
        { status: 400 }
      );
    }

    if (!cleanDescription || cleanDescription.length < 6) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a brief description of your project or requirements (at least 6 characters).",
        },
        { status: 400 }
      );
    }

    if (!cleanEmail && !cleanPhone) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide either an email or a phone number for communication.",
        },
        { status: 400 }
      );
    }

    // Phone format check if provided
    if (cleanPhone) {
      const digitsOnly = cleanPhone.replace(/\D/g, "");
      if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        return NextResponse.json(
          { success: false, message: "Please enter a valid phone or WhatsApp number (7-15 digits)." },
          { status: 400 }
        );
      }
    }

    // Email format check if provided
    if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 7. DUPLICATE CONTENT DEDUPLICATION
    const dedupeKey = `${cleanPhone || cleanEmail}_${cleanDescription.slice(0, 30)}`.toLowerCase();
    const lastSubTime = lastSubmissionsMap.get(dedupeKey);
    if (lastSubTime && now - lastSubTime < 180 * 1000) {
      return NextResponse.json(
        {
          success: true,
          message:
            "Your enquiry has already been received and our engineering team is reviewing it. WhatsApp is open to connect directly.",
        },
        { status: 200 }
      );
    }
    lastSubmissionsMap.set(dedupeKey, now);

    // 8. RECORD GENERATION
    const enquiryId = `RK-${Date.now().toString().slice(-6)}`;
    const timestamp = new Date().toISOString();

    const enquiryRecord = {
      enquiryId,
      timestamp,
      source: cleanSource,
      clientIp: clientIp.replace(/(\d+)\.(\d+)\.(\d+)\.(\d+)/, "$1.$2.***.***"), // IP masked for privacy
      client: {
        name: cleanName,
        businessName: cleanBusiness,
        email: cleanEmail || "Not provided",
        phone: cleanPhone || "Not provided",
        preferredContact: cleanPreferred,
      },
      project: {
        service: cleanService,
        budget: cleanBudget,
        description: cleanDescription,
      },
    };

    // 9. LOG VERIFIED LEAD DETAILS (Recorded in Vercel Runtime Logs)
    console.log(`[RK Group Contact API] New Verified Lead (#${enquiryId}) from IP ${clientIp}:`, JSON.stringify(enquiryRecord));

    // 10. OPTIONAL WEBHOOK (Discord, Slack, Zapier, Telegram, Google Sheets)
    if (process.env.LEAD_WEBHOOK_URL) {
      try {
        await fetch(process.env.LEAD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(enquiryRecord),
        });
      } catch (webhookErr) {
        console.error("[RK Group Contact API] Webhook error:", webhookErr);
      }
    }

    // 11. OPTIONAL CALLMEBOT FREE WHATSAPP GATEWAY ALERT
    if (process.env.CALLMEBOT_PHONE && process.env.CALLMEBOT_API_KEY) {
      try {
        const messageText = encodeURIComponent(
          `🚀 *New Lead on RK Group Website (#${enquiryId})*\n\n` +
            `👤 *Name:* ${enquiryRecord.client.name}\n` +
            `🏢 *Business:* ${enquiryRecord.client.businessName}\n` +
            `📞 *Phone:* ${enquiryRecord.client.phone}\n` +
            `✉️ *Email:* ${enquiryRecord.client.email}\n` +
            `🛠️ *Service:* ${enquiryRecord.project.service}\n` +
            `💰 *Budget:* ${enquiryRecord.project.budget}\n` +
            `📝 *Requirement:* ${enquiryRecord.project.description}`
        );
        const callMeBotUrl = `https://api.callmebot.com/whatsapp.php?phone=${process.env.CALLMEBOT_PHONE}&text=${messageText}&apikey=${process.env.CALLMEBOT_API_KEY}`;
        await fetch(callMeBotUrl);
      } catch (waErr) {
        console.error("[RK Group Contact API] Failed to send CallMeBot WhatsApp alert:", waErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        enquiryId,
        message: "Enquiry received successfully. Our engineering team will review your specifications.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[RK Group Contact API] Submission Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process enquiry. Please connect directly via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
