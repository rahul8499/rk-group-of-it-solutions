"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-navy-950 border-t border-electric-500/15 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-electric-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Helping small businesses, local retail shops, startups, and growing enterprises solve real operational problems with practical, high-performance digital technology.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* WhatsApp Link */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium hover:bg-emerald-500/20 transition"
                aria-label="Direct WhatsApp Contact"
              >
                <span>WhatsApp Business</span>
                <span className="text-[10px]">↗</span>
              </a>

              {/* Instagram Link */}
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-medium hover:bg-pink-500/20 transition"
                aria-label="Official Instagram Profile"
              >
                <span>Instagram</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.services.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services#${svc.id}`}
                    className="text-slate-400 hover:text-electric-300 transition-colors"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Consultations */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Verified Contacts
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                  Phone / WhatsApp
                </span>
                <span className="text-slate-200 font-mono">
                  {siteConfig.contact.phoneDisplay}
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-electric-400 hover:underline break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                  Working Hours
                </span>
                <span className="text-slate-300 text-xs">
                  {siteConfig.contact.businessHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {siteConfig.companyName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition">
              Contact & Enquiries
            </Link>
            <span className="text-slate-400">
              Built with Next.js & Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
