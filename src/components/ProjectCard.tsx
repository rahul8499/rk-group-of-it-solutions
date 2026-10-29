"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Layers, Cpu, ExternalLink, ChevronRight, X, Maximize2, ShoppingBag, Store } from "lucide-react";
import { ApaniDukanMockup, DashboardIllustration } from "./SvgIllustrations";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  status: "Completed" | "In Development" | "Concept";
  shortDescription: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  demoType: "live" | "preview" | "mockup";
  imagePath?: string;
  customerImagePath?: string;
  sellerImagePath?: string;
  mockupType?: "mobile" | "dashboard" | "system";
}

interface ProjectCardProps {
  project: ProjectData;
  onOpenDetails?: (project: ProjectData) => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSide, setActiveSide] = useState<"customer" | "seller">("customer");

  const getStatusBadge = (status: ProjectData["status"]) => {
    switch (status) {
      case "Completed":
        return (
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Completed & Verified
          </span>
        );
      case "In Development":
        return (
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            In Active Development
          </span>
        );
      case "Concept":
        return (
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Architectural Concept
          </span>
        );
    }
  };

  // Determine current active preview image
  const displayImage =
    project.customerImagePath && project.sellerImagePath
      ? activeSide === "customer"
        ? project.customerImagePath
        : project.sellerImagePath
      : project.imagePath;

  return (
    <>
      <div className="rounded-2xl bg-navy-900/80 border border-electric-500/15 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-electric-400/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-950">
        {/* Visual Preview Section */}
        <div className="relative h-60 bg-navy-950/90 border-b border-white/5 flex flex-col items-center justify-center p-3 overflow-hidden group">
          {displayImage ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={displayImage}
                alt={`${project.title} (${activeSide} interface) - RK Group of IT Solutions`}
                width={400}
                height={260}
                className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105 rounded-lg shadow-lg"
                priority={project.id === "apani-dukan"}
              />
            </div>
          ) : project.mockupType === "mobile" ? (
            <div className="scale-75 origin-center">
              <ApaniDukanMockup />
            </div>
          ) : (
            <div className="w-full">
              <DashboardIllustration />
            </div>
          )}

          {/* Floating Category Pill */}
          <div className="absolute top-3 left-3 z-10">
            {getStatusBadge(project.status)}
          </div>

          {/* Dual Interface Switcher if both customer and seller exist */}
          {project.customerImagePath && project.sellerImagePath && (
            <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between gap-2 z-10 bg-navy-950/90 backdrop-blur-md p-1 rounded-xl border border-white/10 shadow-lg">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveSide("customer");
                }}
                className={`flex-1 py-1 px-2 rounded-lg text-[10px] font-semibold transition flex items-center justify-center gap-1 ${
                  activeSide === "customer"
                    ? "bg-electric-500 text-white shadow-md shadow-electric-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <ShoppingBag className="w-3 h-3" />
                <span>Customer View</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveSide("seller");
                }}
                className={`flex-1 py-1 px-2 rounded-lg text-[10px] font-semibold transition flex items-center justify-center gap-1 ${
                  activeSide === "seller"
                    ? "bg-electric-500 text-white shadow-md shadow-electric-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Store className="w-3 h-3" />
                <span>Seller View</span>
              </button>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-electric-400">
              {project.category}
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Key Features Pill Previews */}
            <div className="mt-4 space-y-1.5">
              <div className="text-xs font-semibold text-slate-300">Key Capabilities:</div>
              {project.features.slice(0, 3).map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="pt-3 border-t border-white/5">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-navy-800 text-slate-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-2">
            <button
              onClick={() => {
                if (onOpenDetails) {
                  onOpenDetails(project);
                } else {
                  setModalOpen(true);
                }
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-navy-800 hover:bg-electric-500 hover:text-white text-slate-200 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 border border-white/5 hover:border-transparent shadow-sm"
            >
              <span>View Case Study & Real Screens</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Detail Case Study Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            className="fixed inset-0"
            onClick={() => setModalOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-3xl rounded-2xl bg-navy-900 border border-electric-500/30 p-6 sm:p-8 shadow-2xl z-10 max-h-[92vh] overflow-y-auto text-slate-100">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              {getStatusBadge(project.status)}
              <span className="text-xs font-mono text-slate-400 uppercase">
                {project.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {project.title}
            </h2>

            {/* Screenshots Display with Tabs */}
            {project.customerImagePath && project.sellerImagePath ? (
              <div className="mb-6 rounded-2xl bg-navy-950 border border-white/10 p-3 sm:p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveSide("customer")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                        activeSide === "customer"
                          ? "bg-electric-500 text-white shadow-lg shadow-electric-500/20"
                          : "bg-navy-850 text-slate-400 hover:text-white border border-white/5"
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Customer View (Nearby Stores)</span>
                    </button>
                    <button
                      onClick={() => setActiveSide("seller")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                        activeSide === "seller"
                          ? "bg-electric-500 text-white shadow-lg shadow-electric-500/20"
                          : "bg-navy-850 text-slate-400 hover:text-white border border-white/5"
                      }`}
                    >
                      <Store className="w-3.5 h-3.5" />
                      <span>Seller View (Store Setup & Orders)</span>
                    </button>
                  </div>
                  <span className="text-[11px] text-electric-400 font-mono">
                    {activeSide === "customer" ? "Verified Customer Interface" : "Verified Merchant Dashboard"}
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-navy-900/60 p-2 border border-white/5 flex items-center justify-center">
                  <Image
                    src={activeSide === "customer" ? project.customerImagePath : project.sellerImagePath}
                    alt={`${project.title} - ${activeSide} view`}
                    width={800}
                    height={500}
                    className="w-full max-h-[380px] object-contain rounded-lg shadow-lg"
                  />
                </div>

                <div className="text-xs text-slate-400 text-center px-2">
                  {activeSide === "customer" ? (
                    <span>
                      <strong className="text-slate-200">Customer Portal:</strong> Customers discover verified local shops within 2km to 20km, search categories (garments, daily essentials), and order directly via WhatsApp.
                    </span>
                  ) : (
                    <span>
                      <strong className="text-slate-200">Merchant Dashboard:</strong> Shopkeepers connect their WhatsApp order number (<span className="text-electric-300 font-mono">7796216506</span>), run 1-Click CSV bulk product imports, configure sizes (XS-XXL, 28-46), and set store GPS address.
                    </span>
                  )}
                </div>
              </div>
            ) : project.imagePath ? (
              <div className="mb-6 rounded-xl overflow-hidden border border-white/10 bg-navy-950 p-2 flex items-center justify-center">
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  width={700}
                  height={400}
                  className="w-full max-h-[320px] object-contain rounded-lg"
                />
              </div>
            ) : null}

            <div className="space-y-5 text-sm text-slate-300">
              {/* Problem Statement */}
              <div className="p-4 rounded-xl bg-navy-950/90 border border-rose-500/20">
                <h4 className="text-xs uppercase tracking-wider font-bold text-rose-400 mb-1.5">
                  The Problem Addressed:
                </h4>
                <p className="leading-relaxed text-xs sm:text-sm text-slate-300">
                  {project.problem}
                </p>
              </div>

              {/* Solution Developed */}
              <div className="p-4 rounded-xl bg-navy-950/90 border border-electric-500/20">
                <h4 className="text-xs uppercase tracking-wider font-bold text-electric-400 mb-1.5">
                  Solution Built by RK Group:
                </h4>
                <p className="leading-relaxed text-xs sm:text-sm text-slate-300">
                  {project.solution}
                </p>
              </div>

              {/* Features Actually Implemented */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
                  Key Implemented Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {project.features.map((feat, idx) => (
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

              {/* Confirmed Technologies */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-navy-800 text-electric-300 border border-electric-500/20 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Integrity Note */}
              <div className="p-3 rounded-lg bg-navy-950 border border-white/5 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Honesty Guarantee:</span> All capabilities listed above reflect functional architecture and software features created by RK Group of IT Solutions.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold transition"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
