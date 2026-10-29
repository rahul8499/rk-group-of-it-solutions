"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { useConsultation } from "@/components/SiteLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  Globe,
  Smartphone,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  PlusCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ServicesPage() {
  const { openConsultation } = useConsultation();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "website-development":
        return <Globe className="w-8 h-8 text-electric-400" />;
      case "mobile-app-development":
        return <Smartphone className="w-8 h-8 text-electric-400" />;
      case "custom-software-development":
        return <Cpu className="w-8 h-8 text-electric-400" />;
      case "it-support-maintenance":
        return <ShieldCheck className="w-8 h-8 text-electric-400" />;
      default:
        return <Globe className="w-8 h-8 text-electric-400" />;
    }
  };

  return (
    <div className="pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <RevealOnScroll direction="down">
        <section className="text-center max-w-3xl mx-auto pt-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/25 text-electric-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Practical & Honest IT Services
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services Engineered for <span className="text-gradient-electric">Business Growth</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            We clearly separate standard core inclusions from optional advanced add-ons so you get complete transparency with zero hidden surprises.
          </p>
        </section>
      </RevealOnScroll>

      {/* Services List */}
      <div className="space-y-16">
        {siteConfig.services.map((service, index) => (
          <RevealOnScroll key={service.id} direction="up" delay={index * 50}>
            <section
              id={service.id}
              className="scroll-mt-28 rounded-3xl bg-navy-900/80 border border-electric-500/20 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-electric-400/40"
            >
              {/* Subtle card glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-electric-500/5 blur-3xl pointer-events-none" />

              <div className="space-y-8">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center flex-shrink-0">
                      {getServiceIcon(service.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-electric-400">
                        {service.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <button
                    onClick={() => openConsultation(service.id)}
                    className="px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-xs tracking-wider uppercase transition shadow-lg shadow-electric-500/20 flex items-center justify-center gap-2 self-start sm:self-auto active:scale-95"
                  >
                    <span>Discuss Your Requirements</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
                  {service.fullDescription}
                </p>

                {/* Grid: Core Inclusions vs Optional Addons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Standard Core Deliverables */}
                  <div className="p-6 rounded-2xl bg-navy-950/80 border border-emerald-500/20 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                        Standard Inclusions (Base Scope)
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">
                        Always Included
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Paid Addons */}
                  <div className="p-6 rounded-2xl bg-navy-950/80 border border-electric-500/20 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-bold tracking-wider text-electric-400">
                        Optional Upgrades & Add-ons
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-electric-500/10 text-electric-300">
                        Available on Request
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {service.optionalAddons.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <PlusCircle className="w-4 h-4 text-electric-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Ideal for banner */}
                <div className="p-4 rounded-xl bg-navy-950/40 border border-white/5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-400">
                  <span className="font-semibold text-slate-200">Recommended for:</span>
                  {service.idealFor.map((target, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-navy-800 text-slate-300 border border-white/5"
                    >
                      {target}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </RevealOnScroll>
        ))}
      </div>

      {/* Bottom CTA */}
      <RevealOnScroll direction="scale">
        <section className="text-center rounded-2xl bg-navy-900 border border-electric-500/20 p-8 sm:p-12 space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Not Sure Which Service Suits Your Need?
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            We offer honest consultations. Tell us what your business is currently facing, and we will recommend the most cost-effective path.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openConsultation()}
              className="px-8 py-3.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-sm transition shadow-lg shadow-electric-500/25 active:scale-95"
            >
              Request a Free Assessment
            </button>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
