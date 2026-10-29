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

  const filters = ["All", "Completed", "In Development", "Concept"];

  const filteredProjects = siteConfig.projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.status === activeFilter;
  });

  return (
    <div className="pb-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <RevealOnScroll direction="down">
        <section className="text-center max-w-3xl mx-auto pt-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/25 text-electric-400 text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            Verified Portfolio & Work
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Featured <span className="text-gradient-electric">Projects & Systems</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Explore genuine digital solutions engineered by RK Group of IT Solutions. All status badges accurately represent current development stages.
          </p>

          {/* Filter Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === filter
                    ? "bg-electric-500 text-white shadow-lg shadow-electric-500/25"
                    : "bg-navy-900 text-slate-400 hover:text-white border border-white/5"
                }`}
              >
                {filter}
                {filter === "Completed" && (
                  <span className="ml-1.5 px-1.5 py-0.2 rounded-full bg-emerald-500/30 text-[10px]">
                    1
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/* Projects Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <RevealOnScroll key={project.id} direction="up" delay={idx * 100}>
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
        <section className="rounded-2xl bg-navy-900/60 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Zero Inflated Claims Policy
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              We only showcase software architecture, codebases, and features that we have genuinely engineered. Unfinished modules are strictly designated as "In Development".
            </p>
          </div>

          <button
            onClick={() => openConsultation()}
            className="px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold tracking-wider uppercase transition shadow-lg shadow-electric-500/20 whitespace-nowrap active:scale-95"
          >
            Discuss a Custom Project
          </button>
        </section>
      </RevealOnScroll>
    </div>
  );
}
