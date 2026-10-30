import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rkgroupofitsolutions.com";
  const currentDate = new Date();

  return [
    // 1. Homepage
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}/brand-solutions-logo.png`,
        `${baseUrl}/projects/apani-dukan-customer-desktop.png`,
        `${baseUrl}/projects/fabrication-billing-desktop.png`,
      ],
    },

    // 2. Main Services Hub
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/brand-solutions-logo.png`,
      ],
    },

    // 3. Dedicated Service Landing Pages (Programmatic SEO)
    {
      url: `${baseUrl}/services/website-development`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/brand-solutions-logo.png`,
      ],
    },
    {
      url: `${baseUrl}/services/mobile-app-development`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/brand-solutions-logo.png`,
        `${baseUrl}/projects/apani-dukan-customer-mobile.png`,
      ],
    },
    {
      url: `${baseUrl}/services/custom-software-development`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/brand-solutions-logo.png`,
        `${baseUrl}/projects/fabrication-billing-desktop.png`,
      ],
    },
    {
      url: `${baseUrl}/services/it-support-maintenance`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/brand-solutions-logo.png`,
      ],
    },

    // 4. Main Projects Hub
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${baseUrl}/projects/apani-dukan-customer-desktop.png`,
        `${baseUrl}/projects/apani-dukan-seller-desktop.png`,
        `${baseUrl}/projects/fabrication-billing-desktop.png`,
      ],
    },

    // 5. Dedicated Project Case Studies
    {
      url: `${baseUrl}/projects/apani-dukan`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${baseUrl}/projects/apani-dukan-customer-desktop.png`,
        `${baseUrl}/projects/apani-dukan-customer-mobile.png`,
        `${baseUrl}/projects/apani-dukan-seller-desktop.png`,
        `${baseUrl}/projects/apani-dukan-seller-mobile.png`,
      ],
    },
    {
      url: `${baseUrl}/projects/fabrication-billing`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${baseUrl}/projects/fabrication-billing-desktop.png`,
        `${baseUrl}/projects/fabrication-billing-mobile.png`,
      ],
    },

    // 6. Company & Trust Pages
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [
        `${baseUrl}/brand-solutions-logo.png`,
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
