"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { HeroTechVisual, ApaniDukanMockup } from "@/components/SvgIllustrations";
import ServiceCard from "@/components/ServiceCard";
import ProjectEstimator from "@/components/ProjectEstimator";
import FaqSection from "@/components/FaqSection";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useConsultation } from "@/components/SiteLayout";
import {
  ShieldCheck,
  MessageSquare,
  Cpu,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Store,
  Building2,
  Rocket,
  GraduationCap,
  Boxes,
  Workflow,
  Scissors,
  Stethoscope,
  UtensilsCrossed,
  Dumbbell,
  Sparkles,
  ExternalLink,
  PhoneCall,
  ShoppingBag,
  ZoomIn,
  X,
} from "lucide-react";

export default function HomePage() {
  const { openConsultation } = useConsultation();
  const [apaniModalOpen, setApaniModalOpen] = useState(false);
  const [apaniTab, setApaniTab] = useState<"customer" | "seller">("customer");
  const [modalTab, setModalTab] = useState<"customer" | "seller">("customer");
  const [enlargedImage, setEnlargedImage] = useState<{ src: string; title: string } | null>(null);

  const trustHighlights = [
    {
      title: "Solutions Built Around Your Needs",
      desc: "Every system is customized for your actual daily workflow, not forced into rigid pre-made templates.",
      icon: <Cpu className="w-5 h-5 text-electric-400" />,
    },
    {
      title: "Clear Communication",
      desc: "Transparent discussions without technical confusion. You always know what is being built and when.",
      icon: <MessageSquare className="w-5 h-5 text-electric-400" />,
    },
    {
      title: "Practical Technology",
      desc: "We pick stable, modern frameworks that run quickly on regular smartphones and desktop computers.",
      icon: <ShieldCheck className="w-5 h-5 text-electric-400" />,
    },
    {
      title: "Ongoing Support",
      desc: "We stay connected after deployment to ensure your website or software continues performing reliably.",
      icon: <Headphones className="w-5 h-5 text-electric-400" />,
    },
  ];

  const getTargetIcon = (iconName: string) => {
    switch (iconName) {
      case "Store":
        return <Store className="w-5 h-5 text-electric-400" />;
      case "Scissors":
        return <Scissors className="w-5 h-5 text-pink-400" />;
      case "Stethoscope":
        return <Stethoscope className="w-5 h-5 text-emerald-400" />;
      case "UtensilsCrossed":
        return <UtensilsCrossed className="w-5 h-5 text-amber-400" />;
      case "Dumbbell":
        return <Dumbbell className="w-5 h-5 text-sky-400" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      case "Boxes":
        return <Boxes className="w-5 h-5 text-orange-400" />;
      case "Building2":
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case "Rocket":
        return <Rocket className="w-5 h-5 text-purple-400" />;
      case "Workflow":
        return <Workflow className="w-5 h-5 text-teal-400" />;
      default:
        return <Building2 className="w-5 h-5 text-electric-400" />;
    }
  };

  const apaniDukan = siteConfig.projects[0];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-2 sm:pt-16 max-w-7xl mx-auto">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-electric-500/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left">
            <RevealOnScroll direction="down" delay={50}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/25 text-electric-400 text-xs font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
                Professional IT Services & Software Development
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={150}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.12]">
                Technology Solutions That Help Your{" "}
                <span className="text-gradient-electric">Business Grow</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={250}>
              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We build professional websites, mobile apps, and custom software to help businesses simplify their work, improve efficiency, and grow digitally.
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={350}>
              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-3.5">
                <button
                  onClick={() => openConsultation()}
                  className="w-full sm:w-auto px-7 py-3 sm:py-3.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-electric-500/25 hover:shadow-electric-500/40 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/services"
                  className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-xl bg-navy-900 hover:bg-navy-850 text-slate-200 font-medium text-sm transition border border-electric-500/20 hover:border-electric-400/40 text-center"
                >
                  Explore Our Services
                </Link>
              </div>

              {/* Quick trust metrics */}
              <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-[11px] sm:text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  Custom Architecture
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  Transparent Timelines
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  Ongoing Support
                </span>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <RevealOnScroll direction="scale" delay={200}>
              <HeroTechVisual />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION (Capability-based honesty, no fake metrics) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealOnScroll direction="up">
          <div className="rounded-2xl bg-navy-900/60 border border-electric-500/15 p-6 sm:p-10 backdrop-blur-sm">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <h2 className="text-xs uppercase tracking-widest font-semibold text-electric-400">
                Our Core Principles
              </h2>
              <p className="text-2xl sm:text-3xl font-bold text-white mt-1.5">
                Built on Honesty, Practical Code & Direct Value
              </p>
              <p className="text-sm text-slate-400 mt-2">
                We focus on measurable utility and clear engineering rather than inflated marketing promises.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustHighlights.map((item, idx) => (
                <RevealOnScroll key={idx} direction="up" delay={idx * 100}>
                  <div className="p-5 rounded-xl bg-navy-950/70 border border-white/5 space-y-2.5 transition-all duration-300 hover:border-electric-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-electric-500/10 h-full">
                    <div className="w-10 h-10 rounded-lg bg-navy-850 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 3. TARGET AUDIENCES / WHO WE HELP (Expanded 9 Sectors) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealOnScroll direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-electric-400">
                Businesses We Support
              </span>
              <h2 className="text-3xl font-bold text-white mt-1">
                Engineered for Real-World Workflows
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Whether running a local salon, clinic, retail shop, restaurant, or coaching institute, we design technology suited to your daily operations.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.targetAudiences.map((aud, index) => (
            <RevealOnScroll key={index} direction="up" delay={(index % 3) * 100}>
              <div className="p-6 rounded-2xl bg-navy-900/70 border border-white/5 hover:border-electric-500/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-start gap-4 h-full">
                <div className="w-11 h-11 rounded-xl bg-electric-500/10 border border-electric-500/20 flex-shrink-0 flex items-center justify-center">
                  {getTargetIcon(aud.icon)}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{aud.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {aud.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealOnScroll direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-400">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Practical Services to Grow Your Business
            </h2>
            <p className="text-sm text-slate-400">
              From customer-attracting websites to automated billing software and Android apps.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((svc, idx) => (
            <RevealOnScroll key={svc.id} direction="up" delay={idx * 100}>
              <ServiceCard
                id={svc.id}
                title={svc.title}
                shortDescription={svc.shortDescription}
                category={svc.category}
                deliverables={svc.deliverables}
                badge={svc.badge}
                onSelectService={(sId) => openConsultation(sId)}
              />
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-850 text-electric-300 font-semibold text-xs tracking-wide uppercase border border-electric-500/20 hover:border-electric-400/50 transition"
          >
            <span>View Complete Services & Inclusions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. FEATURED PROJECT: APANI DUKAN */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealOnScroll direction="scale">
          <div className="rounded-3xl bg-gradient-to-br from-navy-900 via-navy-850 to-navy-950 border border-electric-500/25 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric-500/10 blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Project Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Featured Case Study
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Completed & Verified Solution
                  </span>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {apaniDukan.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-electric-400 font-medium mt-1">
                    {apaniDukan.category}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {apaniDukan.shortDescription}
                </p>

                {/* Problem & Solution Compact */}
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-navy-950/80 border border-white/5 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                      The Problem Addressed:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {apaniDukan.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-950/80 border border-electric-500/20 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-electric-400">
                      Solution Built by RK Group:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {apaniDukan.solution}
                    </p>
                  </div>
                </div>

                {/* Verified Features */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-300 block">
                    Key Implemented Features:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {apaniDukan.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      setModalTab(apaniTab);
                      setApaniModalOpen(true);
                    }}
                    className="px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-electric-500/20 flex items-center gap-2 active:scale-95"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => openConsultation("mobile-app-development")}
                    className="px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-750 text-slate-200 text-xs font-semibold transition border border-white/10 active:scale-95"
                  >
                    Build an App for Your Shop
                  </button>
                </div>
              </div>

              {/* Right: Real Dual-View App Showcase */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-3">
                {/* Dual View Tab Switcher */}
                <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-navy-950/90 border border-electric-500/20 backdrop-blur-md shadow-xl">
                  <button
                    type="button"
                    onClick={() => setApaniTab("customer")}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                      apaniTab === "customer"
                        ? "bg-electric-500 text-white shadow-lg shadow-electric-500/25"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Customer Shopping View</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setApaniTab("seller")}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                      apaniTab === "seller"
                        ? "bg-electric-500 text-white shadow-lg shadow-electric-500/25"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Store className="w-3.5 h-3.5" />
                    <span>Seller / Store Admin View</span>
                  </button>
                </div>

                {/* Screenshot Display Card */}
                <div className="relative rounded-2xl overflow-hidden border border-electric-500/30 shadow-2xl bg-navy-950 p-2 sm:p-3 group">
                  {/* Floating Enlarge Button */}
                  <button
                    type="button"
                    onClick={() =>
                      setEnlargedImage({
                        src:
                          apaniTab === "customer"
                            ? apaniDukan.customerImagePath || "/projects/apani-dukan-customer.png"
                            : apaniDukan.sellerImagePath || "/projects/apani-dukan-seller.png",
                        title:
                          apaniTab === "customer"
                            ? "Apani Dukan - Customer Shopping & Nearby Stores Interface"
                            : "Apani Dukan - Shopkeeper / Seller Dashboard & Product Setup",
                      })
                    }
                    className="absolute top-4 right-4 z-10 px-2.5 py-1.5 rounded-lg bg-navy-900/90 hover:bg-electric-500 text-slate-200 hover:text-white border border-white/10 text-[11px] font-medium transition shadow-lg flex items-center gap-1.5 backdrop-blur-md"
                    title="Click to view high-resolution screenshot"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Enlarge</span>
                  </button>

                  {/* Active Screenshot */}
                  <div
                    onClick={() =>
                      setEnlargedImage({
                        src:
                          apaniTab === "customer"
                            ? apaniDukan.customerImagePath || "/projects/apani-dukan-customer.png"
                            : apaniDukan.sellerImagePath || "/projects/apani-dukan-seller.png",
                        title:
                          apaniTab === "customer"
                            ? "Apani Dukan - Customer Shopping & Nearby Stores Interface"
                            : "Apani Dukan - Shopkeeper / Seller Dashboard & Product Setup",
                      })
                    }
                    className="cursor-zoom-in relative rounded-xl overflow-hidden bg-navy-900/50 flex items-center justify-center min-h-[300px]"
                  >
                    <Image
                      src={
                        apaniTab === "customer"
                          ? apaniDukan.customerImagePath || "/projects/apani-dukan-customer.png"
                          : apaniDukan.sellerImagePath || "/projects/apani-dukan-seller.png"
                      }
                      alt={
                        apaniTab === "customer"
                          ? "Apani Dukan Customer Shopping Interface by RK Group of IT Solutions"
                          : "Apani Dukan Shopkeeper Management Interface by RK Group of IT Solutions"
                      }
                      width={700}
                      height={460}
                      className="rounded-lg object-contain w-full h-auto max-h-[380px] transition-transform duration-300 group-hover:scale-[1.01]"
                      priority
                    />
                  </div>

                  {/* Context Explanation Footer */}
                  <div className="mt-2.5 pt-2 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-1 px-1 text-[11px]">
                    <span className="text-electric-400 font-semibold flex items-center gap-1">
                      {apaniTab === "customer" ? (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Customer Discovery & Cart Portal</span>
                        </>
                      ) : (
                        <>
                          <Store className="w-3.5 h-3.5" />
                          <span>Seller Store & Order Management</span>
                        </>
                      )}
                    </span>
                    <span className="text-slate-400 text-center sm:text-right">
                      {apaniTab === "customer"
                        ? "Search verified stores within 2km-20km & order"
                        : "WhatsApp order phone (+91 7796216506) & 1-Click CSV"}
                    </span>
                  </div>

                  <div className="mt-1 text-center text-[10px] text-slate-500 font-mono">
                    Real App Interface • Apani Dukan by RK Group of IT Solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealOnScroll direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-400">
              Why Choose RK Group
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Practical Engineering for Growing Businesses
            </h2>
            <p className="text-sm text-slate-400">
              We operate with complete clarity on costs, timelines, and deliverables.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyChooseUs.map((reason, i) => (
            <RevealOnScroll key={i} direction="up" delay={(i % 3) * 100}>
              <div className="p-6 rounded-2xl bg-navy-900/70 border border-white/5 hover:border-electric-500/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 space-y-2.5 h-full">
                <div className="w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 font-bold text-sm">
                  0{i + 1}
                </div>
                <h3 className="text-base font-bold text-white">{reason.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 7. HOW WE WORK (5-STEP PROCESS) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealOnScroll direction="up">
          <div className="rounded-2xl bg-navy-900/60 border border-electric-500/15 p-8 sm:p-12">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-electric-400">
                Clear Development Process
              </span>
              <h2 className="text-3xl font-bold text-white">
                How We Work With You
              </h2>
              <p className="text-sm text-slate-400">
                A transparent five-step roadmap from initial conversation to project launch.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {siteConfig.workSteps.map((step, idx) => (
                <RevealOnScroll key={step.step} direction="up" delay={idx * 80}>
                  <div className="relative p-5 rounded-xl bg-navy-950/80 border border-white/5 space-y-3 flex flex-col justify-between h-full hover:border-electric-500/30 transition-all">
                    <div>
                      <span className="text-xs font-mono font-bold text-electric-400">
                        Step {step.step}
                      </span>
                      <h3 className="text-sm font-bold text-white mt-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed mt-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 8. INTERACTIVE PROJECT SCOPE ESTIMATOR */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealOnScroll direction="up">
          <ProjectEstimator />
        </RevealOnScroll>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealOnScroll direction="up">
          <FaqSection />
        </RevealOnScroll>
      </section>

      {/* 10. FINAL CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RevealOnScroll direction="scale">
          <div className="rounded-3xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-electric-500/30 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl mx-auto space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-electric-500/10 text-electric-300 border border-electric-500/20">
                Ready to Upgrade Your Business?
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Have a Business Problem We Can Solve?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Tell us what you need. Let’s discuss a practical digital solution for your business.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-sm transition shadow-xl shadow-electric-500/25 active:scale-95 text-center"
                >
                  Contact Us
                </Link>
                <button
                  onClick={() => openConsultation()}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-slate-200 font-semibold text-sm transition border border-electric-500/25 hover:border-electric-400/50"
                >
                  Request a Demo / Consultation
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Apani Dukan Detail Modal with Dual Customer/Seller Real Screen Explorer */}
      {apaniModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-950/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            className="fixed inset-0"
            onClick={() => setApaniModalOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-4xl rounded-2xl bg-navy-900 border border-electric-500/30 p-5 sm:p-8 shadow-2xl z-10 max-h-[92vh] overflow-y-auto text-slate-100">
            <button
              onClick={() => setApaniModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-navy-800 transition"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    Completed & Verified Solution
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Dual-Sided Architecture (Customer + Merchant)
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  Apani Dukan • Digital Shopping App & Local Retail Platform
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  A practical digital shopping and store catalog application developed to empower local shops to showcase items digitally and receive customer orders smoothly.
                </p>
              </div>

              {/* Dual View Screen Showcase inside Modal */}
              <div className="rounded-2xl bg-navy-950 border border-electric-500/20 p-4 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setModalTab("customer")}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                        modalTab === "customer"
                          ? "bg-electric-500 text-white shadow-lg shadow-electric-500/25"
                          : "bg-navy-850 text-slate-400 hover:text-white border border-white/5"
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Customer Shopping View</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalTab("seller")}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                        modalTab === "seller"
                          ? "bg-electric-500 text-white shadow-lg shadow-electric-500/25"
                          : "bg-navy-850 text-slate-400 hover:text-white border border-white/5"
                      }`}
                    >
                      <Store className="w-3.5 h-3.5" />
                      <span>Seller / Store Admin View</span>
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-electric-400">
                    {modalTab === "customer"
                      ? "Screen 1: Customer Nearby Discovery & Cart"
                      : "Screen 2: Merchant Store Setup & 1-Click Import"}
                  </span>
                </div>

                {/* Screenshot Display */}
                <div className="relative rounded-xl overflow-hidden bg-navy-900/60 p-2 sm:p-4 border border-white/5 flex items-center justify-center">
                  <div
                    onClick={() =>
                      setEnlargedImage({
                        src:
                          modalTab === "customer"
                            ? apaniDukan.customerImagePath || "/projects/apani-dukan-customer.png"
                            : apaniDukan.sellerImagePath || "/projects/apani-dukan-seller.png",
                        title:
                          modalTab === "customer"
                            ? "Apani Dukan - Customer Shopping Portal"
                            : "Apani Dukan - Merchant Setup & Inventory Dashboard",
                      })
                    }
                    className="cursor-zoom-in w-full flex items-center justify-center"
                    title="Click to view full screen"
                  >
                    <Image
                      src={
                        modalTab === "customer"
                          ? apaniDukan.customerImagePath || "/projects/apani-dukan-customer.png"
                          : apaniDukan.sellerImagePath || "/projects/apani-dukan-seller.png"
                      }
                      alt={
                        modalTab === "customer"
                          ? "Apani Dukan Customer Shopping Portal"
                          : "Apani Dukan Merchant Management Dashboard"
                      }
                      width={850}
                      height={500}
                      className="rounded-lg object-contain w-full h-auto max-h-[420px] shadow-2xl hover:opacity-95 transition"
                    />
                  </div>

                  <button
                    onClick={() =>
                      setEnlargedImage({
                        src:
                          modalTab === "customer"
                            ? apaniDukan.customerImagePath || "/projects/apani-dukan-customer.png"
                            : apaniDukan.sellerImagePath || "/projects/apani-dukan-seller.png",
                        title:
                          modalTab === "customer"
                            ? "Apani Dukan - Customer Shopping Portal"
                            : "Apani Dukan - Merchant Setup & Inventory Dashboard",
                      })
                    }
                    className="absolute top-4 right-4 p-2 rounded-lg bg-navy-900/90 text-slate-300 hover:text-white border border-white/10 text-xs flex items-center gap-1 shadow-lg"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Click to Zoom</span>
                  </button>
                </div>

                {/* Feature breakdown specific to the selected view */}
                {modalTab === "customer" ? (
                  <div className="p-3 rounded-xl bg-navy-900/70 border border-white/5 space-y-2 text-xs">
                    <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                      <ShoppingBag className="w-3.5 h-3.5 text-electric-400" />
                      <span>Customer Portal Capabilities:</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-400">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>Distance radius filtering (2km, 5km, 10km, 20km, Custom)</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>Instant keyword search (kirana, bakery, clothing, tools)</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>Verified local store badges (Ishika Collection, Fashion Hub)</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>Map navigation & direct WhatsApp store checkout</span>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-navy-900/70 border border-white/5 space-y-2 text-xs">
                    <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                      <Store className="w-3.5 h-3.5 text-electric-400" />
                      <span>Shopkeeper & Merchant Admin Capabilities:</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-400">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>WhatsApp order routing linked to merchant phone (7796216506)</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>1-Click Multi-Product & CSV Super Import engine</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>Custom storefront link & printable QR standee generator</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>Variant sizing (XS-XXL, 28 to 46, Free Size) & GPS mapping</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Problem Statement */}
              <div className="p-4 rounded-xl bg-navy-950 border border-rose-500/20 space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  The Problem Addressed:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {apaniDukan.problem}
                </p>
              </div>

              {/* Solution Built by RK Group */}
              <div className="p-4 rounded-xl bg-navy-950 border border-electric-500/20 space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-electric-400">
                  Solution Built by RK Group:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {apaniDukan.solution}
                </p>
              </div>

              {/* Key Implemented Features */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Implemented Features:
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {apaniDukan.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="p-2.5 rounded-lg bg-navy-850 border border-white/5 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Technologies Used:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {apaniDukan.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-navy-800 text-electric-300 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setApaniModalOpen(false);
                      openConsultation("mobile-app-development");
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold transition shadow-lg shadow-electric-500/25"
                  >
                    Build an App for Your Shop
                  </button>
                  <a
                    href="https://wa.me/917796216506?text=Hi%20RK%20Group,%20I%20saw%20the%20Apani%20Dukan%20case%20study%20and%20want%20to%20discuss%20a%20similar%20app%20for%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition text-center"
                  >
                    Discuss on WhatsApp
                  </a>
                </div>

                <button
                  onClick={() => setApaniModalOpen(false)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold transition"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Image Lightbox */}
      {enlargedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/95 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center">
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute -top-10 right-0 p-2 rounded-full text-slate-400 hover:text-white hover:bg-navy-800 transition"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="rounded-2xl overflow-hidden border border-electric-500/30 bg-navy-950 shadow-2xl p-2 max-h-[85vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={enlargedImage.src}
                alt={enlargedImage.title}
                width={1200}
                height={800}
                className="w-auto h-auto max-h-[80vh] object-contain rounded-xl"
              />
              <div className="mt-2 text-center text-xs text-slate-300 font-medium">
                {enlargedImage.title}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
