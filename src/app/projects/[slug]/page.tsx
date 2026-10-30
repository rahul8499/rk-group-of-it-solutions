import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import ProjectScreenshotViewer from "@/components/ProjectScreenshotViewer";
import LocalServiceAreas from "@/components/LocalServiceAreas";
import {
  FolderGit2,
  CheckCircle2,
  Layers,
  Cpu,
  ChevronRight,
  MessageCircle,
  Phone,
  ArrowRight,
  Code2,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes for all verified projects
export async function generateStaticParams() {
  return siteConfig.projects.map((project) => ({
    slug: project.id,
  }));
}

// Dynamic, keyword-dense metadata for Google rankings
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = siteConfig.projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rkgroupofitsolutions.com";
  const canonicalUrl = `${baseUrl}/projects/${project.id}`;

  const titles: Record<string, string> = {
    "apani-dukan": "Apani Dukan - Digital Retail & Grocery Ordering App | RK Group",
    "fabrication-billing": "Fabrication Billing & Metal Estimation Software System | RK Group",
  };

  const descriptions: Record<string, string> = {
    "apani-dukan":
      "Apani Dukan is a verified digital shopping and local store ordering application engineered by RK Group of IT Solutions. Features 2km-20km GPS radius filtering, shopkeeper catalog management, and WhatsApp dispatch.",
    "fabrication-billing":
      "Industrial billing, metal weight estimation, and GST quotation software suite built by RK Group for welding works, aluminum fabricators, and metal contractors in Pune & Maharashtra.",
  };

  const title = titles[project.id] || `${project.title} Case Study | RK Group of IT Solutions`;
  const description = descriptions[project.id] || project.shortDescription;

  return {
    title,
    description,
    keywords: [
      project.title,
      `${project.title} RK Group`,
      `${project.title} Case Study`,
      project.category,
      "Software Development Pune",
      "RK Group of IT Solutions",
      "Rahul Kolhe",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: project.imagePath ? `${baseUrl}${project.imagePath}` : `${baseUrl}/brand-solutions-logo.png`,
          width: 1200,
          height: 630,
          alt: `${project.title} - RK Group of IT Solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.imagePath ? `${baseUrl}${project.imagePath}` : `${baseUrl}/brand-solutions-logo.png`],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = siteConfig.projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rkgroupofitsolutions.com";
  const canonicalUrl = `${baseUrl}/projects/${project.id}`;

  // SoftwareApplication JSON-LD Schema
  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": canonicalUrl,
        name: project.title,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, iOS, Web, Windows",
        creator: {
          "@type": "Organization",
          name: "RK Group of IT Solutions",
          url: baseUrl,
          founder: {
            "@type": "Person",
            name: "Rahul Kolhe",
          },
        },
        description: project.solution,
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
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${baseUrl}/projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <div className="pb-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-4">
          <ol className="flex items-center gap-2 text-xs text-slate-400">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            </li>
            <li className="text-electric-400 font-semibold truncate">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* Hero Header */}
        <header className="relative rounded-3xl bg-gradient-to-b from-navy-900 to-navy-950 border border-electric-500/20 p-6 sm:p-12 lg:p-14 overflow-hidden shadow-2xl">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Verified Case Study • {project.status} Solution</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.title} | <span className="text-gradient-electric">{project.category}</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  `Hello Rahul Kolhe / RK Group, I checked out the ${project.title} case study and want to build a similar software for my business.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-xs tracking-wider uppercase transition shadow-xl shadow-electric-500/25 flex items-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Similar Software</span>
              </a>

              <Link
                href="/projects"
                className="px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-750 text-slate-200 text-xs font-semibold uppercase tracking-wider transition border border-white/10"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </header>

        {/* Live Interactive Screenshot Showcase */}
        <section aria-labelledby="interface-heading" className="space-y-4">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h2 id="interface-heading" className="text-2xl sm:text-3xl font-extrabold text-white">
              Application <span className="text-gradient-electric">Interface & Visual Showcase</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Interactive preview of the actual user experience engineered by RK Group.
            </p>
          </div>

          <ProjectScreenshotViewer
            projectId={project.id}
            customerDesktop={project.customerDesktopImagePath}
            customerMobile={project.customerMobileImagePath}
            sellerDesktop={project.sellerDesktopImagePath}
            sellerMobile={project.sellerMobileImagePath}
            desktopImage={project.desktopImagePath}
            mobileImage={project.mobileImagePath}
            title={project.title}
          />
        </section>

        {/* Problem vs Solution Deep Dive */}
        <section aria-labelledby="architecture-heading" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Operational Problem */}
          <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-rose-500/20 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span>Operational Bottleneck (The Problem)</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Why Existing Methods Were Failing
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Engineered Solution */}
          <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-emerald-500/20 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>RK Group Engineering Solution</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              How RK Group Solved This Challenge
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Key Features List */}
        <section aria-labelledby="features-heading" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 id="features-heading" className="text-2xl sm:text-3xl font-extrabold text-white">
              Key Features & <span className="text-gradient-electric">Capabilities</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Core functionalities built into {project.title} for maximum reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-navy-900/60 border border-white/5 flex items-start gap-3 hover:border-electric-500/30 transition"
              >
                <div className="w-7 h-7 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-electric-400" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Used */}
        <section aria-labelledby="tech-heading" className="p-6 sm:p-8 rounded-2xl bg-navy-950 border border-white/5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 id="tech-heading" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Code2 className="w-4 h-4 text-electric-400" />
              Technologies Engineered In This Project
            </h3>
            <span className="text-[11px] font-mono text-emerald-400">Production Code</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-navy-900 border border-electric-500/20 text-xs font-mono text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Local Areas Grid */}
        <LocalServiceAreas />

        {/* CTA Bar */}
        <section aria-labelledby="project-cta-heading" className="text-center rounded-3xl bg-navy-900 border border-electric-500/30 p-8 sm:p-12 space-y-4 shadow-xl">
          <h2 id="project-cta-heading" className="text-2xl sm:text-3xl font-extrabold text-white">
            Need a Similar Solution Engineered For Your Company?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Whether you need a digital retail ordering system like Apani Dukan or an industrial billing suite, RK Group builds tailor-made software that fits your exact workflow.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                `Hi RK Group, I saw the ${project.title} case study and want to build a similar software.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-xs tracking-wider uppercase transition shadow-xl shadow-electric-500/25 active:scale-95 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Requirements on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-750 text-slate-200 font-semibold text-xs tracking-wider uppercase transition border border-white/10"
            >
              Request Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
