"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { siteConfig } from "@/config/siteConfig";
import { Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-navy-950 border-t border-electric-500/15 text-slate-300 pt-12 sm:pt-16 pb-24 sm:pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-electric-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-10 border-b border-white/5">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Helping small businesses, local retail shops, workshops, and growing enterprises solve real operational problems with practical, high-performance digital technology.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              {/* WhatsApp Link */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium hover:bg-emerald-500/20 transition active:scale-95"
                aria-label="Direct WhatsApp Contact"
              >
                <span>WhatsApp Business</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Instagram Link */}
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-medium hover:bg-pink-500/20 transition active:scale-95"
                aria-label="Official Instagram Profile"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2 & 3: Quick Links & Services in a clean 2-column subgrid on mobile */}
          <div className="grid grid-cols-2 gap-6 col-span-1 md:col-span-2 lg:col-span-2">
            {/* Navigation Links */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
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

              {/* Our Services & Case Studies */}
              <div className="space-y-3">
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
                  Our Services
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {siteConfig.services.map((svc) => (
                    <li key={svc.id}>
                      <Link
                        href={`/services/${svc.id}`}
                        className="text-slate-400 hover:text-electric-300 transition-colors"
                      >
                        {svc.title}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-1 border-t border-white/5">
                    <Link
                      href="/projects/apani-dukan"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      Apani Dukan App
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/fabrication-billing"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      Fabrication Billing ERP
                    </Link>
                  </li>
                </ul>
              </div>
          </div>

          {/* Column 4: Contact & Consultations */}
          <div className="space-y-3 col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
              Verified Contacts
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="text-slate-200 font-mono hover:text-emerald-400 transition font-medium"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-electric-400 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                    Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-electric-400 hover:underline break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                    Working Hours
                  </span>
                  <span className="text-slate-200 text-xs font-medium leading-relaxed block">
                    Available Anytime (24/7)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © {currentYear} {siteConfig.companyName}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-slate-200 transition">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/contact" className="hover:text-slate-200 transition">
              Contact & Enquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
