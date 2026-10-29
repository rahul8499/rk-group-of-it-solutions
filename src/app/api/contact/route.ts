import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      businessName,
      email,
      phone,
      service,
      projectBudget,
      preferredContact,
      projectDescription,
      source,
    } = body;

    // Server-side validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Name is required." },
        { status: 400 }
      );
    }

    if (!projectDescription || !projectDescription.trim()) {
      return NextResponse.json(
        { success: false, message: "Project description is required." },
        { status: 400 }
      );
    }

    if ((!email || !email.trim()) && (!phone || !phone.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide either an email or a phone number for communication.",
        },
        { status: 400 }
      );
    }

    // Generate unique reference ID & Timestamp
    const enquiryId = `RK-${Date.now().toString().slice(-6)}`;
    const timestamp = new Date().toISOString();

    const enquiryRecord = {
      enquiryId,
      timestamp,
      source: source || "Website Contact Form",
      client: {
        name: name.trim(),
        businessName: businessName?.trim() || "Not specified",
        email: email?.trim() || "Not provided",
        phone: phone?.trim() || "Not provided",
        preferredContact: preferredContact || "WhatsApp",
      },
      project: {
        service: service || "General IT Solutions",
        budget: projectBudget || "Not specified",
        description: projectDescription.trim(),
      },
    };

    // 1. Log structured lead record to server console
    console.log("[RK Group Contact API] New Lead Received:", JSON.stringify(enquiryRecord, null, 2));

    // 2. Permanently save to data/enquiries.json file on server
    try {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "enquiries.json");

      // Ensure directory exists
      await fs.mkdir(dataDir, { recursive: true });

      let existingEnquiries: unknown[] = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        existingEnquiries = JSON.parse(fileContent);
        if (!Array.isArray(existingEnquiries)) existingEnquiries = [];
      } catch {
        // File doesn't exist yet, start with empty list
        existingEnquiries = [];
      }

      existingEnquiries.unshift(enquiryRecord); // Add newest first
      await fs.writeFile(filePath, JSON.stringify(existingEnquiries, null, 2), "utf-8");
      console.log(`[RK Group Contact API] Successfully saved to ${filePath}`);
    } catch (fileErr) {
      console.error("[RK Group Contact API] Error saving to file:", fileErr);
    }

    // 3. Optional: If you configure a Webhook (e.g. Discord, Telegram, Slack, or Google Sheets), you can trigger it here:
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

    // 4. Optional: Direct Server-to-Owner WhatsApp alert via free CallMeBot gateway
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
        message: "Failed to process enquiry. Please use WhatsApp for immediate contact.",
      },
      { status: 500 }
    );
  }
}
