import { NextResponse } from "next/server";
import { siteConfig } from "@/config/siteConfig";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rkgroupofitsolutions.com";
  const buildDate = new Date().toUTCString();

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${siteConfig.companyName} (RK Group)</title>
  <link>${baseUrl}</link>
  <description>${siteConfig.description}</description>
  <language>en-in</language>
  <lastBuildDate>${buildDate}</lastBuildDate>
  <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />

  <item>
    <title>Website Development Company in Pune | RK Group</title>
    <link>${baseUrl}/services/website-development</link>
    <description>Fast, Google SEO-ready Next.js websites for retail shops, startups, clinics, and businesses in Pune and Maharashtra.</description>
    <pubDate>${buildDate}</pubDate>
    <guid>${baseUrl}/services/website-development</guid>
  </item>

  <item>
    <title>Mobile App Development in Pune | Android &amp; Cross-Platform</title>
    <link>${baseUrl}/services/mobile-app-development</link>
    <description>High-performance Android and cross-platform apps with Google Play Store deployment and WhatsApp integration.</description>
    <pubDate>${buildDate}</pubDate>
    <guid>${baseUrl}/services/mobile-app-development</guid>
  </item>

  <item>
    <title>Custom Software Development &amp; ERP Systems Pune</title>
    <link>${baseUrl}/services/custom-software-development</link>
    <description>Tailored billing, stock inventory, and workshop management software engineered for unique business operations.</description>
    <pubDate>${buildDate}</pubDate>
    <guid>${baseUrl}/services/custom-software-development</guid>
  </item>

  <item>
    <title>IT Support &amp; Website Maintenance Services in Pune</title>
    <link>${baseUrl}/services/it-support-maintenance</link>
    <description>Proactive technical troubleshooting, security patching, speed optimization, and 24/7 continuous IT reliability.</description>
    <pubDate>${buildDate}</pubDate>
    <guid>${baseUrl}/services/it-support-maintenance</guid>
  </item>

  <item>
    <title>Apani Dukan - Digital Retail &amp; Grocery Ordering Platform Case Study</title>
    <link>${baseUrl}/projects/apani-dukan</link>
    <description>Local neighborhood digital shopping and store catalog application engineered by RK Group of IT Solutions.</description>
    <pubDate>${buildDate}</pubDate>
    <guid>${baseUrl}/projects/apani-dukan</guid>
  </item>

  <item>
    <title>Fabrication &amp; Welding Billing Suite - Industrial ERP Case Study</title>
    <link>${baseUrl}/projects/fabrication-billing</link>
    <description>Specialized industrial billing, metal weight estimation, and GST quotation software suite built for fabricators.</description>
    <pubDate>${buildDate}</pubDate>
    <guid>${baseUrl}/projects/fabrication-billing</guid>
  </item>
</channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
