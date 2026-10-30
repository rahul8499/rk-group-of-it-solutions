import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Projects & Case Studies | Apani Dukan & Custom Systems",
  description:
    "Explore verified solutions engineered by RK Group of IT Solutions, including Apani Dukan digital retail ordering app and custom business software.",
  keywords: [
    "Apani Dukan",
    "Apani Dukan Shopping App",
    "RK Group Projects",
    "RK Group of IT Solutions Case Studies",
    "Custom Software Portfolio",
  ],
  alternates: {
    canonical: "https://rkgroupofitsolutions.com/projects",
  },
  openGraph: {
    title: `Projects & Case Studies | ${siteConfig.companyName}`,
    description:
      "Explore Apani Dukan and real-world digital solutions engineered by RK Group of IT Solutions.",
    url: "https://rkgroupofitsolutions.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
