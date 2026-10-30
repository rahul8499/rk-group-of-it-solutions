import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  MessageCircle,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Project Discussion | Free Consultation",
  description:
    "Get in touch with RK Group of IT Solutions. Discuss your website, Android mobile app, or custom software requirements directly via WhatsApp (+91 77962 16506) or email.",
  keywords: [
    "Contact RK Group of IT Solutions",
    "RK Group Phone Number",
    "RK Group WhatsApp",
    "Hire Web Developers Pune",
    "IT Consultation India",
  ],
  alternates: {
    canonical: "https://rkgroupofitsolutions.com/contact",
  },
  openGraph: {
    title: `Contact Us & Free Consultation | ${siteConfig.companyName}`,
    description:
      "Direct consultation with our engineering team for websites, mobile apps, and business software.",
    url: "https://rkgroupofitsolutions.com/contact",
  },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <div className="pb-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <RevealOnScroll direction="down">
        <section className="text-center max-w-3xl mx-auto pt-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/25 text-electric-400 text-xs font-semibold">
            <MessageCircle className="w-3.5 h-3.5" />
            Direct Business Inquiries
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact RK Group of IT Solutions | <span className="text-gradient-electric">Get In Touch</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Tell us about your business requirement. We will review your scope and provide a transparent, practical roadmap.
          </p>
        </section>
      </RevealOnScroll>

      {/* Main Grid: Contact Details Sidebar + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Communication Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* WhatsApp Direct Highlight Box */}
          <RevealOnScroll direction="up" delay={100}>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-navy-900 border border-emerald-500/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-2xl">
                  💬
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Instant WhatsApp Chat</h3>
                  <p className="text-xs text-emerald-300">Fastest response for initial queries</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Have a quick question or prefer chatting directly with our team? Click below to send a pre-filled enquiry.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition shadow-lg shadow-emerald-600/30 active:scale-95"
              >
                <span>Chat on WhatsApp</span>
                <span className="text-sm">↗</span>
              </a>
            </div>
          </RevealOnScroll>

          {/* Contact Details Card */}
          <RevealOnScroll direction="up" delay={200}>
            <div className="p-6 rounded-2xl bg-navy-900/80 border border-electric-500/20 space-y-5 shadow-xl">
              <h3 className="text-base font-bold text-white border-b border-white/5 pb-3">
                Verified Contact Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-850 flex items-center justify-center text-electric-400 flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                      Phone / WhatsApp
                    </span>
                    <span className="text-white font-mono font-medium">
                      {siteConfig.contact.phoneDisplay}
                    </span>
                    <span className="block text-[11px] text-emerald-400 mt-0.5">
                      Available for Calls & Instant WhatsApp
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-850 flex items-center justify-center text-electric-400 flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-electric-400 hover:underline font-mono break-all font-medium"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-850 flex items-center justify-center text-pink-400 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                      Instagram Profile
                    </span>
                    <a
                      href={siteConfig.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:underline text-xs font-mono font-medium"
                    >
                      @rk_group_of_it_solution ↗
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-850 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                      Working Hours
                    </span>
                    <span className="text-slate-300">
                      {siteConfig.contact.businessHours}
                    </span>
                  </div>
                </div>

                {/* Location Note */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-850 flex items-center justify-center text-slate-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                      Meeting Location
                    </span>
                    <span className="text-slate-300">
                      {siteConfig.contact.addressNote}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* What Happens Next Card */}
          <RevealOnScroll direction="up" delay={300}>
            <div className="p-6 rounded-2xl bg-navy-900/60 border border-white/5 space-y-3 shadow-lg">
              <h4 className="text-xs uppercase font-bold tracking-wider text-electric-400">
                What Happens After You Inquire:
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>We review your requirements and clarify any technical questions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>We share a structured estimate with timeline and milestone plan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Zero obligation to proceed until you are 100% comfortable with the scope.</span>
                </li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <RevealOnScroll direction="scale" delay={150}>
            <ContactForm />
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
