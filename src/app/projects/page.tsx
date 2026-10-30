"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import ProjectCard, { ProjectData } from "@/components/ProjectCard";
import { useConsultation } from "@/components/SiteLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import { FolderGit2, CheckCircle2, Clock, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  const { openConsultation } = useConsultation();
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = [
    { id: "All", label: "All Verified Products", count: siteConfig.projects.length },
    {
      id: "Completed",
      label: "Completed Solutions",
      count: siteConfig.projects.filter((p) => p.status === "Completed").length,
    },
  ];

  const filteredProjects = siteConfig.projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.status === activeFilter;
  });

  return (
    <div className="pb-24 space-y-12 sm:space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <RevealOnScroll direction="down">
        <section className="text-center max-w-3xl mx-auto pt-4 sm:pt-6 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/25 text-electric-400 text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            Verified Portfolio & Genuine Software
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Featured <span className="text-gradient-electric">Projects & Systems</span>
          </h1>
          <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
            Explore genuine digital solutions engineered by <strong className="text-white">RK Group of IT Solutions</strong>. Real applications built to solve real business operational problems.
          </p>

          {/* Filter Badges */}
          <div className="pt-2 sm:pt-3 flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? "bg-electric-500 text-white shadow-lg shadow-electric-500/25"
                    : "bg-navy-900 text-slate-400 hover:text-white border border-white/5"
                }`}
              >
                <span>{filter.label}</span>
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/* Projects Grid (Side by Side on Desktop, Stacked on Mobile) */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <RevealOnScroll key={project.id} direction="up" delay={idx * 100} className="h-full flex flex-col">
              <ProjectCard project={project as ProjectData} />
            </RevealOnScroll>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No projects found matching the selected filter.
          </div>
        )}
      </section>

      {/* Trust & Methodology Notice */}
      <RevealOnScroll direction="scale">
        <section className="rounded-2xl bg-navy-900/60 border border-white/10 p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              100% Genuine Software Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
              We only showcase software architecture, codebases, and features that we have genuinely engineered. Every system shown above is production-tested and verified.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => openConsultation()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold tracking-wider uppercase transition shadow-lg shadow-electric-500/20 whitespace-nowrap active:scale-95 text-center"
            >
              Discuss Your Software Idea
            </button>
            <a
              href="https://wa.me/917796216506?text=Hi%20RK%20Group,%20I%20saw%20your%20projects%20(Apani%20Dukan%20and%20Fabrication%20Billing)%20and%20would%20like%20to%20discuss%20a%20solution."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-750 text-slate-200 text-xs font-semibold transition border border-white/10 text-center whitespace-nowrap"
            >
              WhatsApp Us
            </a>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
