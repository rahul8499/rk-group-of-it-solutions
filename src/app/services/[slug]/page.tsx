import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import LocalServiceAreas from "@/components/LocalServiceAreas";
import {
  Globe,
  Smartphone,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  PlusCircle,
  ArrowRight,
  ChevronRight,
  Star,
  Check,
  X,
  Phone,
  MessageCircle,
  Sparkles,
  Zap,
  Code2,
  Lock,
  Layers,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes for all 4 services at build time
export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.id,
  }));
}

// Generate rich, dynamic, keyword-optimized metadata for Google
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.id === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rkgroupofitsolutions.com";
  const canonicalUrl = `${baseUrl}/services/${service.id}`;

  const titles: Record<string, string> = {
    "website-development": "Website Development Company in Pune | RK Group of IT Solutions",
    "mobile-app-development": "Mobile App Development Company in Pune | Android & iOS Apps",
    "custom-software-development": "Custom Software Development in Pune | ERP & Billing Systems",
    "it-support-maintenance": "IT Support & Website Maintenance Services in Pune | 24/7 AMC",
  };

  const descriptions: Record<string, string> = {
    "website-development":
      "Looking for the best website development company in Pune? RK Group builds fast, Google SEO-optimized Next.js websites for retail shops, startups, clinics, and businesses.",
    "mobile-app-development":
      "Top mobile app development company in Pune. RK Group engineers high-performance Android & cross-platform apps with Play Store deployment, real-time sync, and WhatsApp integration.",
    "custom-software-development":
      "Custom software and ERP development in Pune, Maharashtra. We build customized billing, stock inventory, and workshop management software engineered for your exact business workflow.",
    "it-support-maintenance":
      "Reliable IT support, server management, and website maintenance services in Pune. 24/7 uptime monitoring, security patches, regular backups, and rapid bug fixes.",
  };

  const title = titles[service.id] || `${service.title} | RK Group of IT Solutions`;
  const description = descriptions[service.id] || service.shortDescription;

  return {
    title,
    description,
    keywords: [
      service.title,
      `${service.title} Pune`,
      `${service.title} Maharashtra`,
      `${service.title} India`,
      `Best ${service.title} Agency`,
      "RK Group",
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
          url: `${baseUrl}/brand-solutions-logo.png`,
          width: 987,
          height: 269,
          alt: `${service.title} by RK Group of IT Solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/brand-solutions-logo.png`],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rkgroupofitsolutions.com";
  const canonicalUrl = `${baseUrl}/services/${service.id}`;

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "website-development":
        return <Globe className="w-10 h-10 text-electric-400" />;
      case "mobile-app-development":
        return <Smartphone className="w-10 h-10 text-electric-400" />;
      case "custom-software-development":
        return <Cpu className="w-10 h-10 text-electric-400" />;
      case "it-support-maintenance":
        return <ShieldCheck className="w-10 h-10 text-electric-400" />;
      default:
        return <Globe className="w-10 h-10 text-electric-400" />;
    }
  };

  // Service-specific tech stack
  const techStacks: Record<string, string[]> = {
    "website-development": ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "Vercel", "Google SEO Tools"],
    "mobile-app-development": ["React Native", "Android SDK", "RESTful APIs", "Firebase", "PostgreSQL", "Google Play Console"],
    "custom-software-development": ["Next.js", "Node.js", "PostgreSQL", "Prisma ORM", "Docker", "Tailwind CSS", "PDF & POS Drivers"],
    "it-support-maintenance": ["Linux", "Nginx", "SSL Encryption", "Cloudflare", "GitHub CI/CD", "Uptime Robot", "Automated Backups"],
  };

  // Service-specific FAQs for Google FAQ Schema
  const serviceFaqs: Record<string, { q: string; a: string }[]> = {
    "website-development": [
      {
        q: "Why choose Next.js website development over WordPress or Wix?",
        a: "Next.js delivers unmatched 95+ Core Web Vitals speed scores, instant server-side rendering for Google SEO, zero vulnerable third-party plugins, and tailor-made designs built specifically for your business branding.",
      },
      {
        q: "How long does it take RK Group to build a business website in Pune?",
        a: "Standard business websites and landing pages are delivered within 5 to 8 working days. Complex multi-page portals with custom booking or payment gateways take approximately 2 weeks.",
      },
      {
        q: "Will my website rank on Google search for local searches in Pune?",
        a: "Yes. Every website we build includes semantic HTML5 tags, JSON-LD Schema structured data, localized Pune metadata, OpenGraph tags, automated XML sitemaps, and clean URL routing optimized for Google Search Console.",
      },
      {
        q: "Can I manage products, photos, and inquiries without knowing coding?",
        a: "Absolutely. We engineer clean, password-protected management desks and integrate instant WhatsApp enquiry alerts directly to your phone.",
      },
    ],
    "mobile-app-development": [
      {
        q: "Do you publish the mobile app to Google Play Store?",
        a: "Yes. We handle end-to-end APK/AAB bundle compilation, Play Store developer console setup, privacy policy compliance, app icon formatting, and launch verification.",
      },
      {
        q: "Will the app work smoothly on budget Android phones in India?",
        a: "Yes. We engineer lightweight React Native applications optimized for low memory usage, smooth 60fps scrolling, and low-bandwidth 4G/3G network conditions.",
      },
      {
        q: "Can my store app send instant WhatsApp order alerts to my counter?",
        a: "Yes. Our applications include direct WhatsApp order dispatch routing and real-time push notifications so you never miss a customer order.",
      },
    ],
    "custom-software-development": [
      {
        q: "What kind of custom software does RK Group develop?",
        a: "We engineer custom GST billing suites, workshop estimation systems (such as our Fabrication & Welding ERP), retail store POS counters, inventory trackers, and patient management desks.",
      },
      {
        q: "Can the software connect with thermal receipt printers and barcode scanners?",
        a: "Yes. We support thermal printer connectivity (58mm and 80mm ESC/POS), barcode/QR code scanners, and 1-click PDF invoice sharing via WhatsApp.",
      },
      {
        q: "Who retains ownership of the code and business database?",
        a: "You retain 100% intellectual property ownership of your application code, customer databases, and business records upon project settlement.",
      },
    ],
    "it-support-maintenance": [
      {
        q: "What is included in an Annual IT Maintenance Contract (AMC)?",
        a: "Our AMC covers 24/7 uptime monitoring, SSL certificate renewals, automated off-site database backups, security patches, page speed tuning, bug fixes, and emergency SLA troubleshooting.",
      },
      {
        q: "Do you support websites built by other companies or developers?",
        a: "Yes. We conduct a preliminary architectural audit of your existing codebase, resolve lingering bugs, upgrade outdated dependencies, and migrate to fast cloud hosting.",
      },
      {
        q: "How quickly do you respond to urgent downtime incidents?",
        a: "For AMC clients, we provide prioritized direct WhatsApp and phone emergency support with immediate triage response.",
      },
    ],
  };

  // Comparison matrix data
  const comparisonData: Record<
    string,
    { title: string; rkGroup: string; alternative: string; items: { feature: string; rk: boolean; alt: boolean; note: string }[] }
  > = {
    "website-development": {
      title: "RK Group Custom Web Architecture vs Generic Website Builders",
      rkGroup: "RK Group Next.js Architecture",
      alternative: "Generic WordPress / Wix Builder",
      items: [
        { feature: "Google PageSpeed Score", rk: true, alt: false, note: "95+ on Mobile vs 40-60 on bloated builders" },
        { feature: "Built-in Rich JSON-LD SEO", rk: true, alt: false, note: "Verified Schema.org graphs included by default" },
        { feature: "Zero Plugin Vulnerabilities", rk: true, alt: false, note: "No hacked plugin vectors or constant paywalls" },
        { feature: "100% Custom Tailored UI", rk: true, alt: false, note: "Built for your exact business flow, not rigid templates" },
        { feature: "Direct WhatsApp Order Capture", rk: true, alt: true, note: "Pre-configured 1-click lead routing" },
      ],
    },
    "mobile-app-development": {
      title: "RK Group High-Performance App vs Sluggish Hybrid WebViews",
      rkGroup: "RK Group React Native App",
      alternative: "Clunky WebView Wrapper",
      items: [
        { feature: "Native Smooth 60fps Experience", rk: true, alt: false, note: "Smooth animations & instant touch response" },
        { feature: "Offline Data Support", rk: true, alt: false, note: "Local caching works even when 4G network dips" },
        { feature: "Google Play Store Ready", rk: true, alt: true, note: "Complies with all latest 2026 Google API policies" },
        { feature: "Integrated Admin Desk", rk: true, alt: false, note: "Control items & prices directly from your smartphone" },
      ],
    },
    "custom-software-development": {
      title: "RK Group Tailored ERP vs Messy Spreadsheets & Rigid Box Software",
      rkGroup: "RK Group Tailored ERP",
      alternative: "Manual Spreadsheets / Tally Only",
      items: [
        { feature: "Zero Calculation Mistakes", rk: true, alt: false, note: "Auto-computes measurements, weights & tax rates" },
        { feature: "1-Click WhatsApp PDF Sharing", rk: true, alt: false, note: "Instant quotations sent directly to client phones" },
        { feature: "Multi-Staff Role Permissions", rk: true, alt: false, note: "Protect sensitive profit margins from counter staff" },
        { feature: "Cloud Auto-Backup", rk: true, alt: false, note: "No lost data when office computer crashes" },
      ],
    },
    "it-support-maintenance": {
      title: "Proactive Managed Support vs Reactive Crisis Fixing",
      rkGroup: "RK Group Proactive Maintenance",
      alternative: "Call Developer Only When Broken",
      items: [
        { feature: "24/7 Automated Uptime Checks", rk: true, alt: false, note: "Fix issues before your customers notice" },
        { feature: "Scheduled Weekly Cloud Backups", rk: true, alt: false, note: "Guaranteed recovery in case of accidental corruption" },
        { feature: "Continuous Speed & SEO Audits", rk: true, alt: false, note: "Keep Core Web Vitals in Google's green zone" },
        { feature: "Direct WhatsApp Engineer Hotline", rk: true, alt: false, note: "Talk directly to software engineers, not call centers" },
      ],
    },
  };

  const currentFaqs = serviceFaqs[service.id] || [];
  const currentComp = comparisonData[service.id];
  const currentStack = techStacks[service.id] || [];

  // Dedicated JSON-LD Schema for this specific Service page
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": canonicalUrl,
        name: service.title,
        description: service.fullDescription,
        provider: {
          "@type": "Organization",
          name: "RK Group of IT Solutions",
          url: baseUrl,
          telephone: siteConfig.contact.phoneDisplay,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        },
        areaServed: [
          { "@type": "City", name: "Pune" },
          { "@type": "State", name: "Maharashtra" },
          { "@type": "Country", name: "India" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title} Deliverables`,
          itemListElement: service.deliverables.map((item, idx) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item,
            },
            position: idx + 1,
          })),
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
            name: "Services",
            item: `${baseUrl}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: currentFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            </li>
            <li className="text-electric-400 font-semibold truncate">
              {service.title}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="relative rounded-3xl bg-gradient-to-b from-navy-900 to-navy-950 border border-electric-500/20 p-6 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-500/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/25 text-electric-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{service.category} • Pune & Maharashtra</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.title} in Pune |{" "}
                <span className="text-gradient-electric">Engineered by RK Group</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {service.fullDescription}
              </p>

              {/* Verified Author Credibility */}
              <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
                <div className="w-8 h-8 rounded-full bg-electric-500/20 border border-electric-500/40 flex items-center justify-center font-bold text-electric-300">
                  RK
                </div>
                <div>
                  <span className="text-slate-200 font-semibold block">
                    Rahul Kolhe
                  </span>
                  <span>Founder & Lead Software Engineer at RK Group</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Rahul Kolhe / RK Group, I am interested in discussing ${service.title} for my business.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-xs tracking-wider uppercase transition shadow-xl shadow-electric-500/25 flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discuss on WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-850 text-slate-200 font-semibold text-xs tracking-wider uppercase transition border border-white/10 text-center"
                >
                  Request Project Estimate
                </Link>
              </div>
            </div>

            {/* Right Badge Box */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-navy-950/80 border border-electric-500/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center">
                    {getServiceIcon(service.id)}
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="text-base font-bold text-white">
                    Why Work with RK Group?
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct engineering expertise, zero outsourcing markups, and dedicated post-launch support.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>On-site consultation available in Pune</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Milestone-based progress reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>100% intellectual property ownership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Deliverables Section (Inclusions & Upgrades) */}
        <section aria-labelledby="deliverables-heading" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 id="deliverables-heading" className="text-2xl sm:text-3xl font-extrabold text-white">
              What Is Included In Our <span className="text-gradient-electric">{service.title}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Complete architectural transparency. You know every deliverable before we begin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Core Inclusions */}
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-emerald-500/20 space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Standard Core Deliverables
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">
                  Base Package
                </span>
              </div>

              <ul className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional Add-ons */}
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-electric-500/20 space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-bold uppercase tracking-wider text-electric-400 flex items-center gap-2">
                  <PlusCircle className="w-4 h-4" />
                  Optional Upgrades & Integrations
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-electric-500/10 text-electric-300">
                  On Demand
                </span>
              </div>

              <ul className="space-y-3">
                {service.optionalAddons.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <PlusCircle className="w-4 h-4 text-electric-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack Banner */}
        <section aria-labelledby="tech-stack-heading" className="p-6 sm:p-8 rounded-2xl bg-navy-950/80 border border-white/5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 id="tech-stack-heading" className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Code2 className="w-4 h-4 text-electric-400" />
                Technology Stack Used for {service.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Modern, reliable, and enterprise-grade frameworks selected for high speed and long-term stability.
              </p>
            </div>
            <span className="text-[11px] font-mono text-electric-400">Production Tested</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            {currentStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-navy-900 border border-electric-500/20 text-xs font-mono text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Comparison Matrix Table */}
        {currentComp && (
          <section aria-labelledby="comparison-heading" className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 id="comparison-heading" className="text-2xl sm:text-3xl font-extrabold text-white">
                How We Compare: <span className="text-gradient-electric">{currentComp.title}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Understand the architectural difference that makes RK Group solutions faster, safer, and higher converting.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-electric-500/20 bg-navy-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-navy-950/90 text-white font-semibold border-b border-white/10">
                  <tr>
                    <th scope="col" className="p-4 sm:p-5">Feature & Capability</th>
                    <th scope="col" className="p-4 sm:p-5 text-electric-400 bg-electric-500/10">
                      {currentComp.rkGroup}
                    </th>
                    <th scope="col" className="p-4 sm:p-5 text-slate-400">
                      {currentComp.alternative}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {currentComp.items.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition">
                      <td className="p-4 sm:p-5 font-medium text-white">
                        <span>{row.feature}</span>
                        <span className="block text-[11px] text-slate-400 font-normal mt-0.5">
                          {row.note}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 bg-electric-500/5">
                        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                          <Check className="w-4 h-4" />
                          <span>Included / Superior</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5">
                        <div className="flex items-center gap-1.5 text-slate-400">
                          {row.alt ? (
                            <span className="text-amber-400">Partial / Rigid</span>
                          ) : (
                            <span className="text-rose-400">Limited / Slower</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Localized Pune Coverage */}
        <LocalServiceAreas />

        {/* Service-Specific FAQs */}
        {currentFaqs.length > 0 && (
          <section aria-labelledby="faq-heading" className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-white">
                Frequently Asked Questions About <span className="text-gradient-electric">{service.title}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Clear, straightforward answers to help you make informed business decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-navy-900/80 border border-white/5 space-y-2 hover:border-electric-500/30 transition"
                >
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-start gap-2">
                    <span className="text-electric-400 font-mono">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Conversion Bar */}
        <section aria-labelledby="cta-heading" className="text-center rounded-3xl bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 border border-electric-500/30 p-8 sm:p-12 space-y-4 shadow-2xl">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Begin Your <span className="text-gradient-electric">{service.title}</span> Project?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Speak directly with Founder & Lead Engineer Rahul Kolhe. We analyze your requirements and provide an honest, cost-effective quote.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                `Hello RK Group, I want to discuss a project for ${service.title}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-xs tracking-wider uppercase transition shadow-xl shadow-electric-500/25 flex items-center gap-2 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="px-7 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-750 text-slate-200 font-semibold text-xs tracking-wider uppercase transition border border-white/10 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call +91 77962 16506</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
