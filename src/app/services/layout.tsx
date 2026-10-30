import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "IT Services & Software Solutions",
  description:
    "Explore professional technology services by RK Group of IT Solutions: Website development, Android apps, custom billing/ERP software, and IT maintenance.",
  keywords: [
    "Website Development",
    "Android App Development",
    "Custom Software Development",
    "IT Support",
    "RK Group of IT Solutions Services",
  ],
  alternates: {
    canonical: "https://rkgroupofitsolutions.com/services",
  },
  openGraph: {
    title: `IT Services & Solutions | ${siteConfig.companyName}`,
    description:
      "Website development, Android apps, custom business software, and ongoing IT support tailored for your business.",
    url: "https://rkgroupofitsolutions.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
