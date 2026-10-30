import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ShieldCheck, Lock, FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy and information handling practices of ${siteConfig.companyName}.`,
  alternates: {
    canonical: "https://rkgroupofitsolutions.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="pb-24 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="pt-6 space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/25 text-electric-400 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          Data Protection & Privacy
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-mono">
          Last Updated: {lastUpdated} • {siteConfig.companyName}
        </p>
      </section>

      {/* Main Content Card */}
      <div className="rounded-3xl bg-navy-900/80 border border-electric-500/15 p-6 sm:p-10 space-y-8 text-sm text-slate-300 leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-electric-400" />
            1. Overview
          </h2>
          <p>
            At <strong>{siteConfig.companyName}</strong> ("we," "our," or "us"), we respect your personal privacy and are committed to protecting the information you share with us. This Privacy Policy explains how we collect, store, and process your personal and business information when you visit our website or communicate with us regarding website development, mobile application development, or software services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-electric-400" />
            2. Information We Collect
          </h2>
          <p>
            We only collect information that you deliberately provide to us when submitting an enquiry, booking a free consultation, or contacting us through WhatsApp, phone, or email. This may include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-xs sm:text-sm">
            <li>Your Name and Business or Store Name</li>
            <li>Your Email Address and Telephone / WhatsApp Number</li>
            <li>Project Requirements, service selections, and budget parameters</li>
            <li>Communications exchanged during project scoping and milestone reviews</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-electric-400" />
            3. How We Use Your Information
          </h2>
          <p>
            Information collected through our website is used strictly for legitimate business interactions:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-xs sm:text-sm">
            <li>Responding to your project enquiries and preparing proposals</li>
            <li>Providing technical consultations, demos, and feasibility advice</li>
            <li>Coordinating development milestones and ongoing maintenance support</li>
            <li>Maintaining internal records of client discussions and agreements</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            4. Absolute No-Sale of Data Guarantee
          </h2>
          <p className="p-4 rounded-xl bg-navy-950 border border-emerald-500/20 text-emerald-300 text-xs sm:text-sm">
            <strong>We do not sell, rent, trade, or distribute your personal or commercial contact information to any third-party marketing agencies or lead brokers under any circumstances.</strong>
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-electric-400" />
            5. Cookies and Web Analytics
          </h2>
          <p>
            Our website uses minimal, privacy-respecting cookies and standard technical logging (such as IP addresses, browser types, and visiting timestamps) solely to analyze website performance, ensure rapid page loading, and prevent spam submissions on our contact forms.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-electric-400" />
            6. Your Rights and Data Control
          </h2>
          <p>
            You have the right to request a copy of the information you have submitted to us, ask us to correct inaccurate details, or request that your contact record be permanently deleted from our database.
          </p>
          <p>
            To exercise any of these rights, please contact us directly via email at{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-electric-400 hover:underline font-mono"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3 border-t border-white/5 pt-6">
          <h2 className="text-lg font-bold text-white">
            7. Contact for Privacy Matters
          </h2>
          <p>
            For any queries regarding this policy or how your project data is handled, you may reach out to:
          </p>
          <div className="p-4 rounded-xl bg-navy-950 text-xs space-y-1 font-mono text-slate-300">
            <div><strong>{siteConfig.companyName}</strong></div>
            <div>Email: {siteConfig.contact.email}</div>
            <div>WhatsApp: {siteConfig.contact.phoneDisplay}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
