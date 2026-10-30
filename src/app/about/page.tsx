"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { useConsultation } from "@/components/SiteLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  Code2,
  Target,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Store,
  Rocket,
  GraduationCap,
  Boxes,
  Workflow,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const { openConsultation } = useConsultation();

  return (
    <div className="pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <RevealOnScroll direction="down">
        <section className="text-center max-w-3xl mx-auto pt-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/25 text-electric-400 text-xs font-semibold">
            <Target className="w-3.5 h-3.5" />
            About RK Group of IT Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            About RK Group of IT Solutions | <span className="text-gradient-electric">Practical Tech for Business</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            {siteConfig.tagline}
          </p>
        </section>
      </RevealOnScroll>

      {/* Company Introduction & Mission */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7">
          <RevealOnScroll direction="up" delay={100} className="h-full">
            <div className="rounded-3xl bg-navy-900/80 border border-electric-500/20 p-8 sm:p-10 flex flex-col justify-between space-y-6 h-full shadow-xl">
              <div className="space-y-4">
                <span className="text-xs uppercase font-mono tracking-wider text-electric-400">
                  Who We Are
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Focused on Solving Operational Friction With Code
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  <strong>RK Group of IT Solutions</strong> is an IT service and custom software development company. We partner with local shops, retail stores, small-to-midsize businesses, and startups to solve real-world daily challenges using modern digital tools.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We believe technology shouldn't be overly complicated or inaccessible for smaller enterprises. Whether you need a customer-facing Android app like our featured project <em>Apani Dukan</em>, a high-converting business website, or custom software to replace error-prone paper registers, we design practical solutions that your staff can easily operate.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-navy-950/70 border border-white/5 space-y-2">
                <div className="text-xs font-semibold text-electric-400 uppercase tracking-wider">
                  Our Core Mission
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  To make reliable software development, mobile application engineering, and digital workflows accessible, cost-effective, and transparent for every ambitious enterprise.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Development Approach Card */}
        <div className="lg:col-span-5">
          <RevealOnScroll direction="up" delay={200} className="h-full">
            <div className="rounded-3xl bg-navy-900/80 border border-electric-500/20 p-8 sm:p-10 flex flex-col justify-between space-y-6 h-full shadow-xl">
              <div className="space-y-4">
                <span className="text-xs uppercase font-mono tracking-wider text-electric-400">
                  Our Development Approach
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Practical, Clean & Maintainable
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We write clean, modular TypeScript, Next.js, and modern APIs with strict quality standards:
                </p>

                <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>No Bloated Overhead:</strong> Fast page speeds and lightweight architectures designed for regular devices.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>User-Centric UI:</strong> Clean layouts so your customers and workers require minimal training to use.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Direct Owner Interaction:</strong> You work directly with the developers building your software.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => openConsultation()}
                  className="w-full py-3 px-4 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-xs tracking-wider uppercase transition text-center shadow-lg shadow-electric-500/25 active:scale-95"
                >
                  Start a Conversation
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Quality and Communication Principles */}
      <section className="rounded-3xl bg-navy-900/60 border border-white/5 p-8 sm:p-12">
        <RevealOnScroll direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-400">
              Our Standards
            </span>
            <h2 className="text-3xl font-bold text-white">
              Quality & Communication Principles
            </h2>
            <p className="text-sm text-slate-400">
              We hold ourselves to strict standards of transparency, integrity, and follow-through.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RevealOnScroll direction="up" delay={100}>
            <div className="p-6 rounded-2xl bg-navy-950/80 border border-white/5 space-y-3 h-full hover:border-electric-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-white">
                Honest Scope & Realistic Timelines
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We never promise unrealistic 24-hour turnaround times that result in broken code. We outline honest milestone deadlines and stick to them.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={200}>
            <div className="p-6 rounded-2xl bg-navy-950/80 border border-white/5 space-y-3 h-full hover:border-electric-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-white">
                Transparent Code Ownership
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Once a custom project is delivered and settled, you receive full intellectual ownership of your assets, database structures, and repositories.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={300}>
            <div className="p-6 rounded-2xl bg-navy-950/80 border border-white/5 space-y-3 h-full hover:border-electric-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-white">
                Direct Post-Launch Reliability
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                A software solution is only as good as its uptime. We provide ongoing support options to troubleshoot bugs, fix hostings, and deploy updates.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Types of Businesses Served */}
      <section className="space-y-8">
        <RevealOnScroll direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-400">
              Who We Serve
            </span>
            <h2 className="text-3xl font-bold text-white">
              Industries & Business Categories
            </h2>
            <p className="text-sm text-slate-400">
              We adapt our engineering to match the unique workflows of these sectors:
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.targetAudiences.map((target, idx) => (
            <RevealOnScroll key={idx} direction="up" delay={(idx % 3) * 100}>
              <div className="p-6 rounded-2xl bg-navy-900/80 border border-white/5 space-y-2 h-full hover:border-electric-500/30 transition-all">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-electric-400" />
                  {target.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {target.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <RevealOnScroll direction="scale">
        <section className="rounded-2xl bg-gradient-to-r from-navy-900 to-navy-850 border border-electric-500/25 p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Let’s Discuss Practical Tech for Your Business
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            No jargon, no pressure. Just a straightforward conversation about what your company needs to grow.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-sm transition shadow-lg shadow-electric-500/25 active:scale-95"
            >
              Contact RK Group
            </Link>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
