import React from "react";
import { siteConfig } from "@/config/siteConfig";

export default function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rkgroupofitsolutions.com";

  // Enterprise-grade multi-entity linked knowledge graph
  const knowledgeGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Primary Organization Entity
      {
        "@type": ["Organization", "ITService", "Corporation"],
        "@id": `${baseUrl}/#organization`,
        name: "RK Group of IT Solutions",
        legalName: "RK Group of IT Solutions",
        alternateName: [
          "RK Group",
          "rk group",
          "R K Group",
          "R.K. Group",
          "RK Group of IT Solution",
          "RK Group IT Solutions",
          "RK Group IT Solution",
          "RK Group IT",
          "RK IT Group",
          "RK IT Solutions",
          "RK IT Solution",
          "RK Solutions",
          "RK Solution",
          "RK Group Software",
          "RK Group Tech",
          "RK Group Company",
          "RK Group Official",
          "rk_group_of_it_solution",
          "rkgroupofitsolution",
          "rkgroupofitsolutions",
          "rkgroupofitsolutions.com",
          "https://rkgroupofitsolutions.com",
          "rkgroupitsolutions",
          "RK Group Pune",
          "RK Group Maharashtra",
          "RK Group India",
          "Rahul Kolhe",
          "Rahul Kolhe RK Group",
        ],
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${baseUrl}/#logo`,
          url: `${baseUrl}/brand-solutions-logo.png`,
          contentUrl: `${baseUrl}/brand-solutions-logo.png`,
          caption: "RK Group of IT Solutions Logo",
          width: 987,
          height: 269,
        },
        image: `${baseUrl}/brand-solutions-logo.png`,
        description:
          "Official website of RK Group of IT Solutions (RK Group). We build professional websites, Android/iOS mobile applications, billing software, and custom business management systems.",
        telephone: siteConfig.contact.phoneDisplay,
        email: siteConfig.contact.email,
        founder: {
          "@type": "Person",
          "@id": `${baseUrl}/#founder`,
          name: "Rahul Kolhe",
          jobTitle: "Founder & Lead Software Engineer",
          sameAs: ["https://github.com/rahul8499"],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        sameAs: [
          siteConfig.contact.instagramUrl,
          "https://github.com/rahul8499/rk-group-of-it-solutions",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phoneDisplay,
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Marathi"],
            hoursAvailable: "Mo-Su 00:00-23:59",
          },
          {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phoneDisplay,
            contactType: "sales",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Marathi"],
            hoursAvailable: "Mo-Su 00:00-23:59",
          },
        ],
        knowsAbout: [
          "Website Development",
          "Mobile App Development",
          "Android Applications",
          "Custom Software Development",
          "Retail Billing & POS Software",
          "Industrial ERP & Estimation Suite",
          "Next.js Architecture",
          "React Native",
          "Search Engine Optimization (SEO)",
        ],
      },

      // 2. WebSite Entity with Sitelinks & SearchAction
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "RK Group of IT Solutions (RK Group)",
        alternateName: [
          "RK Group",
          "RK Group of IT Solutions",
          "RK Group IT",
          "RK Solutions",
          "rkgroupofitsolutions",
          "rkgroupofitsolutions.com",
        ],
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        inLanguage: "en-IN",
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/services?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },

      // 3. Local Business / Professional Service Entity with Review Rating & Geo
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#localbusiness`,
        name: "RK Group of IT Solutions",
        alternateName: "RK Group",
        url: baseUrl,
        image: `${baseUrl}/brand-solutions-logo.png`,
        telephone: siteConfig.contact.phoneDisplay,
        email: siteConfig.contact.email,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          postalCode: "411001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.5204,
          longitude: 73.8567,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "34",
          bestRating: "5",
          worstRating: "1",
        },
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
        hasMap: "https://maps.google.com/?q=Pune,Maharashtra,India",
        areaServed: [
          { "@type": "City", "name": "Pune" },
          { "@type": "Place", "name": "Hinjewadi IT Park, Pune" },
          { "@type": "Place", "name": "Kharadi & EON Free Zone, Pune" },
          { "@type": "Place", "name": "Baner & Balewadi, Pune" },
          { "@type": "Place", "name": "Wakad & Pimple Saudagar, Pune" },
          { "@type": "Place", "name": "Kothrud, Pune" },
          { "@type": "Place", "name": "Hadapsar & Magarpatta City, Pune" },
          { "@type": "Place", "name": "Pimpri-Chinchwad (PCMC), Pune" },
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Nashik" },
          { "@type": "State", "name": "Maharashtra" },
          { "@type": "Country", "name": "India" },
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
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Technology & Software Engineering Services",
          itemListElement: siteConfig.services.map((service, index) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${baseUrl}/services/${service.id}`,
              url: `${baseUrl}/services/${service.id}`,
              name: service.title,
              description: service.shortDescription,
              category: service.category,
              provider: {
                "@id": `${baseUrl}/#organization`,
              },
            },
            position: index + 1,
          })),
        },
      },

      // 4. Google FAQ Rich Results Schema
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "How long does a typical website or mobile app take to build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Standard business websites and company landing pages are typically delivered within 5 to 8 working days. Custom mobile applications (like Apani Dukan) or billing software generally take 2 to 3 weeks depending on the number of features, product categories, and integrations required.",
            },
          },
          {
            "@type": "Question",
            name: "Will our website and mobile app work smoothly on budget smartphones?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, absolutely. We prioritize lightweight, highly optimized code architectures (Next.js, React Native, and Tailwind CSS). Our solutions are rigorously tested on low-bandwidth networks and budget Android devices to guarantee fast loading and responsive touch interactions.",
            },
          },
          {
            "@type": "Question",
            name: "Can our staff easily manage products, prices, and orders without knowing coding?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We design intuitive, simple admin desks. You or your staff can add new products, update prices, change stock status, and view customer orders in just a few taps from your phone or desktop computer without touching a single line of code.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide support and maintenance after the website or app goes live?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Every project includes launch-phase support to resolve any initial adjustments. We also offer dedicated ongoing IT maintenance plans covering server monitoring, security updates, feature additions, and emergency technical troubleshooting.",
            },
          },
          {
            "@type": "Question",
            name: "How do project milestones and payments work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We operate with complete financial transparency. Projects are split into clear milestone stages: requirements agreement, design review, development preview, and final deployment. You inspect progress at each milestone before proceeding.",
            },
          },
          {
            "@type": "Question",
            name: "Who owns the code and database once the project is finished?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You do. Once a custom project is delivered and settled, you retain full intellectual ownership of your application assets, database structures, and repositories.",
            },
          },
        ],
      },

      // 5. Featured Software Products Schemas
      {
        "@type": "SoftwareApplication",
        "@id": `${baseUrl}/projects/apani-dukan`,
        url: `${baseUrl}/projects/apani-dukan`,
        name: "Apani Dukan",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, iOS, Web",
        creator: {
          "@id": `${baseUrl}/#organization`,
        },
        description:
          "Digital shopping and local store ordering application engineered by RK Group of IT Solutions to empower neighborhood shops to receive digital orders.",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "28",
          bestRating: "5",
          worstRating: "1",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${baseUrl}/projects/fabrication-billing`,
        url: `${baseUrl}/projects/fabrication-billing`,
        name: "Fabrication & Welding Billing Suite",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Windows, Android",
        creator: {
          "@id": `${baseUrl}/#organization`,
        },
        description:
          "Specialized industrial estimation, metal weight calculation, and GST quotation software engineered for fabrication workshops.",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "22",
          bestRating: "5",
          worstRating: "1",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },

      // 6. BreadcrumbList for Clean Google Sitelinks
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${baseUrl}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Projects",
            item: `${baseUrl}/projects`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "About Us",
            item: `${baseUrl}/about`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Contact",
            item: `${baseUrl}/contact`,
          },
        ],
      },

      // 7. Founder Person Entity
      {
        "@type": "Person",
        "@id": `${baseUrl}/#founder`,
        name: "Rahul Kolhe",
        jobTitle: "Founder & Lead Software Engineer",
        worksFor: {
          "@id": `${baseUrl}/#organization`,
        },
        sameAs: [
          "https://github.com/rahul8499",
          siteConfig.contact.instagramUrl,
        ],
        knowsAbout: [
          "Website Development",
          "Android App Development",
          "Custom Software Architecture",
          "Next.js",
          "React",
          "Database Architecture",
          "Python",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(knowledgeGraph),
      }}
    />
  );
}
