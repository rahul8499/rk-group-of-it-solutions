import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rkgroupofitsolutions.com";
  const currentDate = new Date();

  return [
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
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${baseUrl}/brand-solutions-logo.png`,
      ],
    },
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
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${baseUrl}/brand-solutions-logo.png`,
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
