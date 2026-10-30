import React from "react";
import { siteConfig } from "@/config/siteConfig";

export default function JsonLd() {
  const baseUrl = "https://rkgroupitsolutions.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "ITService"],
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.companyName,
    alternateName: [
      "RK Group of IT Solution",
      "RK Group IT Solutions",
      "RK Group",
      "RK IT Solutions",
      "rk_group_of_it_solution",
      "RK Group of IT Solutions Pune",
      "RK Group of IT Solutions Maharashtra",
    ],
    url: baseUrl,
    logo: `${baseUrl}/brand-solutions-logo.png`,
    image: `${baseUrl}/brand-solutions-logo.png`,
    description:
      "RK Group of IT Solutions provides professional website development, Android mobile apps, billing software, and custom software solutions for businesses and retail stores.",
    telephone: siteConfig.contact.phoneDisplay,
    email: siteConfig.contact.email,
    founder: {
      "@type": "Person",
      name: "Rahul Kolhe",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Maharashtra",
    },
    sameAs: [siteConfig.contact.instagramUrl],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phoneDisplay,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phoneDisplay,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    priceRange: "₹₹",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT & Software Services",
      itemListElement: siteConfig.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
        },
        position: index + 1,
      })),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: siteConfig.companyName,
    alternateName: ["RK Group of IT Solution", "RK Group", "RK IT Solutions"],
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en-IN",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
