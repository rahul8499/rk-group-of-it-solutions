"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { CheckCircle2, Clock, Sparkles, ArrowRight } from "lucide-react";
import { useConsultation } from "./SiteLayout";

export default function ProjectEstimator() {
  const { openConsultation } = useConsultation();

  const businessTypes = [
    { id: "shop", label: "Retail Shop / Store", icon: "🏪" },
    { id: "salon", label: "Salon / Spa / Wellness", icon: "💇" },
    { id: "clinic", label: "Doctor / Healthcare Clinic", icon: "🩺" },
    { id: "restaurant", label: "Restaurant / Cafe / Food", icon: "🍽️" },
    { id: "gym", label: "Gym / Fitness Center", icon: "🏋️" },
    { id: "coaching", label: "Coaching Class / Institute", icon: "🎓" },
    { id: "distributor", label: "Wholesaler / Distributor", icon: "📦" },
    { id: "startup", label: "Startup / Tech Business", icon: "🚀" },
  ];

  const projectGoals = [
    {
      id: "website",
      name: "Professional Business Website",
      desc: "Fast, mobile-friendly showcase with SEO, enquiry forms & WhatsApp integration",
      timeline: "5 – 8 Days",
      complexity: "Standard",
    },
    {
      id: "mobile-app",
      name: "Custom Android / Cross-Platform App",
      desc: "Customer-facing ordering/booking app with push notifications & admin panel",
      timeline: "14 – 21 Days",
      complexity: "Advanced",
    },
    {
      id: "software",
      name: "Custom Billing & Operational System",
      desc: "Replace notebooks & spreadsheets with automated POS, stock & GST invoices",
      timeline: "10 – 16 Days",
      complexity: "High Efficiency",
    },
    {
      id: "complete-suite",
      name: "Complete Digital Suite (Web + App + Desk)",
      desc: "All-in-one ecosystem connecting your mobile customers and daily counter billing",
      timeline: "3 – 4 Weeks",
      complexity: "Enterprise",
    },
  ];

  const [selectedBusiness, setSelectedBusiness] = useState(businessTypes[0]);
  const [selectedGoal, setSelectedGoal] = useState(projectGoals[0]);

  const getWhatsAppPrefilledUrl = () => {
    const text = encodeURIComponent(
      `Hello RK Group of IT Solutions,\n\nI used your online Project Scope Estimator:\n` +
        `• My Business Type: ${selectedBusiness.label}\n` +
        `• Required Solution: ${selectedGoal.name}\n` +
        `• Estimated Timeline: ${selectedGoal.timeline}\n\n` +
        `Can we discuss the exact milestone plan and pricing for my project?`
    );
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="rounded-3xl bg-navy-900/90 border border-electric-500/25 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-electric-500/15 text-electric-400 border border-electric-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Planning Tool
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Estimate Your Project Scope & Timeline
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Select your business category and the solution you need to view estimated delivery milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Selectors */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Business Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
              1. What Type of Business Are You?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
              {businessTypes.map((biz) => (
                <button
                  key={biz.id}
                  onClick={() => setSelectedBusiness(biz)}
                  className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center gap-2.5 ${
                    selectedBusiness.id === biz.id
                      ? "bg-electric-500/15 border-electric-400 text-white shadow-md shadow-electric-500/10 font-semibold"
                      : "bg-navy-950/70 border-white/5 text-slate-400 hover:text-white hover:border-white/10"
                  }`}
                >
                  <span className="text-base flex-shrink-0">{biz.icon}</span>
                  <span className="truncate">{biz.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Goal */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
              2. What Digital Solution Do You Need?
            </label>
            <div className="space-y-2">
              {projectGoals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoal(goal)}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-start justify-between gap-3 ${
                    selectedGoal.id === goal.id
                      ? "bg-electric-500/15 border-electric-400 shadow-md shadow-electric-500/10"
                      : "bg-navy-950/70 border-white/5 hover:border-white/10"
                  }`}
                >
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      {goal.name}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {goal.desc}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-800 text-electric-300 whitespace-nowrap border border-white/5">
                    {goal.complexity}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Live Estimated Output Card */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 border border-electric-500/30 shadow-xl space-y-5">
          <div className="border-b border-white/10 pb-4">
            <span className="text-[10px] uppercase font-mono tracking-wider text-electric-400 block font-semibold">
              Live Scope Blueprint
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              {selectedBusiness.label}
            </h3>
            <p className="text-xs text-slate-400">
              Target Solution: <span className="text-slate-200">{selectedGoal.name}</span>
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-navy-900/80 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-electric-400" />
                <span>Estimated Timeline:</span>
              </div>
              <span className="text-sm font-bold text-emerald-400 font-mono">
                {selectedGoal.timeline}
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <span className="font-semibold text-slate-400 block text-[11px]">
                Guaranteed Inclusions:
              </span>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Mobile & Desktop responsive design</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Direct WhatsApp enquiry routing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Testing, deployment & post-launch support</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2.5">
            <a
              href={getWhatsAppPrefilledUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 text-center"
            >
              <span>Get Exact Quote on WhatsApp ↗</span>
            </a>

            <button
              onClick={() => openConsultation(selectedGoal.id)}
              className="w-full py-2.5 px-4 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 text-xs font-semibold transition text-center"
            >
              Schedule a Project Discussion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
