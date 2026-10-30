import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rkgroupofitsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "RK Group of IT Solutions (RK Group) | Websites, Mobile Apps & Custom Software",
    template: `%s | ${siteConfig.companyName} (RK Group)`,
  },
  description:
    "Official website of RK Group of IT Solutions (RK Group). We build professional websites, Android/iOS mobile apps, billing software, and custom business management systems.",
  applicationName: "RK Group of IT Solutions (RK Group)",
  keywords: [
    // Exact branded match keywords for Google
    "RK Group",
    "rk group",
    "R K Group",
    "R.K. Group",
    "RK Group of IT Solutions",
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
    "RK Group Website",
    "rkgroup",
    "rkgroupofitsolutions",
    "rkgroupofitsolutions.com",
    "https://rkgroupofitsolutions.com",
    "rkgroupitsolutions",
    "rkgroupofitsolution",
    "rk_group_of_it_solution",
    "RK Group of IT Solutions Pune",
    "RK Group of IT Solutions Maharashtra",
    "RK Group India",
    "Rahul Kolhe",
    "Rahul Kolhe RK Group",
    "Apani Dukan",
    "Apani Dukan RK Group",
    // Core Services Keywords
    "Website Development Company",
    "Mobile App Development Services",
    "Android App Development India",
    "Custom Software Development",
    "Billing Software for Retail Stores",
    "IT Support and Maintenance Services",
    "Business Automation Solutions",
    "Web Design Agency Pune",
    "Best IT Company in Maharashtra",
    "Software Development Agency India",
  ],
  authors: [{ name: siteConfig.companyName, url: baseUrl }],
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,
  alternates: {
    canonical: baseUrl,
    types: {
      "application/rss+xml": `${baseUrl}/feed.xml`,
    },
  },
  icons: {
    icon: "/brand-solutions-logo.png",
    shortcut: "/brand-solutions-logo.png",
    apple: "/brand-solutions-logo.png",
  },
  manifest: "/manifest.webmanifest",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    title: "RK Group of IT Solutions (RK Group) | Websites, Mobile Apps & Software",
    description:
      "Official website of RK Group of IT Solutions (RK Group). Professional websites, Android/iOS mobile applications, billing software, and custom IT solutions.",
    siteName: "RK Group of IT Solutions (RK Group)",
    images: [
      {
        url: "/brand-solutions-logo.png",
        width: 987,
        height: 269,
        alt: `${siteConfig.companyName} (RK Group) Official Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RK Group of IT Solutions (RK Group) | Websites, Mobile Apps & Software",
    description:
      "Official website of RK Group of IT Solutions (RK Group). Professional websites, Android/iOS mobile applications, billing software, and custom IT solutions.",
    images: ["/brand-solutions-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
  },
  category: "technology",
  classification: "IT Services and Software Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="antialiased bg-navy-950 text-slate-100">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
