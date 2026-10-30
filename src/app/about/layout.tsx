import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "About Us | Our Story & Engineering Philosophy",
  description:
    "Learn about RK Group of IT Solutions, founded by Rahul Kolhe. We build practical, modern software and websites that empower Indian businesses to grow.",
  keywords: [
    "About RK Group of IT Solutions",
    "Rahul Kolhe",
    "RK Group History",
    "IT Company Pune Maharashtra",
    "Software Engineering Team",
  ],
  alternates: {
    canonical: "https://rkgroupitsolutions.com/about",
  },
  openGraph: {
    title: `About Us | ${siteConfig.companyName}`,
    description:
      "Helping small businesses, local retail shops, and startups solve real operational problems with practical technology.",
    url: "https://rkgroupitsolutions.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
