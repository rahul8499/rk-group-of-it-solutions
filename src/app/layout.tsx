import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";
import { siteConfig } from "@/config/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.companyName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Website Development Services",
    "Mobile App Development",
    "Custom Software Development",
    "IT Support and Maintenance",
    "Business Automation Solutions",
    "Local Shop Shopping App",
    "Apani Dukan",
    "RK Group of IT Solutions",
  ],
  authors: [{ name: siteConfig.companyName }],
  creator: siteConfig.companyName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rkgroupitsolutions.com",
    title: `${siteConfig.companyName} | Technology Solutions That Help Your Business Grow`,
    description: siteConfig.description,
    siteName: siteConfig.companyName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.companyName,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <body className="antialiased bg-navy-950 text-slate-100">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
