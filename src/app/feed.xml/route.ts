import { NextResponse } from "next/server";
import { siteConfig } from "@/config/siteConfig";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rkgroupofitsolutions.com";

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${siteConfig.companyName} (RK Group)</title>
  <link>${baseUrl}</link>
  <description>${siteConfig.description}</description>
  <language>en-in</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />

  <item>
    <title>Apani Dukan - Digital Shopping &amp; Local Retail Store Platform</title>
    <link>${baseUrl}/projects#apani-dukan</link>
    <description>Local neighborhood digital shopping and store catalog application engineered by RK Group of IT Solutions.</description>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <guid>${baseUrl}/projects#apani-dukan</guid>
  </item>

  <item>
    <title>Fabrication &amp; Welding Billing Suite - Industrial Estimation ERP</title>
    <link>${baseUrl}/projects#fabrication-billing</link>
    <description>Specialized billing, measurement calculator, and quotation software engineered for fabrication workshops.</description>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <guid>${baseUrl}/projects#fabrication-billing</guid>
  </item>

  <item>
    <title>Website Development &amp; Web Engineering Services</title>
    <link>${baseUrl}/services#website-development</link>
    <description>Custom responsive websites, web applications, and Google SEO-ready digital platforms.</description>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <guid>${baseUrl}/services#website-development</guid>
  </item>

  <item>
    <title>Mobile App Development - Android &amp; Cross-Platform</title>
    <link>${baseUrl}/services#mobile-app-development</link>
    <description>User-friendly Android and mobile applications engineered by RK Group of IT Solutions.</description>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <guid>${baseUrl}/services#mobile-app-development</guid>
  </item>

  <item>
    <title>Custom Software &amp; Business Automation Systems</title>
    <link>${baseUrl}/services#custom-software-development</link>
    <description>Tailor-made software to replace manual spreadsheets and manage daily operations.</description>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <guid>${baseUrl}/services#custom-software-development</guid>
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
