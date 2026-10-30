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

const baseUrl = "https://rkgroupitsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteConfig.companyName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description:
    "RK Group of IT Solutions provides professional website development, Android mobile apps, billing software, and custom software solutions for businesses and retail stores.",
  applicationName: siteConfig.companyName,
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
  },
  icons: {
    icon: "/brand-solutions-logo.png",
    shortcut: "/brand-solutions-logo.png",
    apple: "/brand-solutions-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    title: `${siteConfig.companyName} | Technology Solutions That Help Your Business Grow`,
    description:
      "Professional websites, Android mobile applications, billing software, and custom IT solutions engineered by RK Group of IT Solutions.",
    siteName: siteConfig.companyName,
    images: [
      {
        url: "/brand-solutions-logo.png",
        width: 987,
        height: 269,
        alt: `${siteConfig.companyName} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.companyName} | ${siteConfig.tagline}`,
    description:
      "Professional websites, Android mobile applications, billing software, and custom IT solutions engineered by RK Group of IT Solutions.",
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
