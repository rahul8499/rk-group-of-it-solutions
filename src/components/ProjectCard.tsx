"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Layers, Cpu, ExternalLink, ChevronRight, X, Maximize2, ShoppingBag, Store, Monitor, Smartphone } from "lucide-react";
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
  customerDesktopImagePath?: string;
  customerMobileImagePath?: string;
  sellerDesktopImagePath?: string;
  sellerMobileImagePath?: string;
  desktopImagePath?: string;
  mobileImagePath?: string;
  mockupType?: "mobile" | "dashboard" | "system";
}

interface ProjectCardProps {
  project: ProjectData;
  onOpenDetails?: (project: ProjectData) => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSide, setActiveSide] = useState<"customer" | "seller">("customer");
  const [activeDevice, setActiveDevice] = useState<"desktop" | "mobile">("desktop");

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

  const getDisplayImage = (side: "customer" | "seller", device: "desktop" | "mobile"): string => {
    if (side === "customer") {
      return (
        (device === "mobile"
          ? project.customerMobileImagePath || project.customerImagePath
          : project.customerDesktopImagePath || project.customerImagePath) ||
        project.imagePath ||
        "/projects/apani-dukan-customer-desktop.png"
      );
    } else {
      return (
        (device === "mobile"
          ? project.sellerMobileImagePath || project.sellerImagePath
          : project.sellerDesktopImagePath || project.sellerImagePath) ||
        project.imagePath ||
        "/projects/apani-dukan-seller-desktop.png"
      );
    }
  };

  // Determine current active preview image
  const displayImage: string | undefined =
    project.customerImagePath && project.sellerImagePath
      ? getDisplayImage(activeSide, activeDevice)
      : project.desktopImagePath && project.mobileImagePath
      ? activeDevice === "mobile"
        ? project.mobileImagePath
        : project.desktopImagePath
      : project.imagePath;

  return (
    <>
      <div className="rounded-2xl bg-navy-900/80 border border-electric-500/15 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-electric-400/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-950 h-full">
        {/* Visual Preview Section */}
        <div className="relative h-64 bg-navy-950/90 border-b border-white/5 flex flex-col items-center justify-center p-3 overflow-hidden group">
          {displayImage ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={displayImage}
                alt={`${project.title} (${activeSide} - ${activeDevice}) - RK Group of IT Solutions`}
                width={500}
                height={320}
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
            <div className="absolute bottom-2 inset-x-2 flex items-center justify-between gap-1.5 z-10 bg-navy-950/95 backdrop-blur-md p-1.5 rounded-xl border border-white/10 shadow-xl">
              {/* Role Tabs */}
              <div className="flex items-center gap-1 flex-1">
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
                  <span>Customer</span>
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
                  <span>Seller</span>
                </button>
              </div>

              {/* Device Toggle */}
              <div className="flex items-center gap-0.5 p-0.5 rounded-lg bg-navy-900 border border-white/5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDevice("desktop");
                  }}
                  className={`py-0.5 px-1.5 rounded text-[10px] font-semibold transition flex items-center gap-0.5 ${
                    activeDevice === "desktop"
                      ? "bg-navy-800 text-white border border-white/10 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Monitor className="w-2.5 h-2.5" />
                  <span>Desktop</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDevice("mobile");
                  }}
                  className={`py-0.5 px-1.5 rounded text-[10px] font-semibold transition flex items-center gap-0.5 ${
                    activeDevice === "mobile"
                      ? "bg-navy-800 text-white border border-white/10 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Smartphone className="w-2.5 h-2.5" />
                  <span>Mobile</span>
                </button>
              </div>
            </div>
          )}

          {/* Dual Screen Switcher for Projects with Desktop & Mobile (e.g. Fabrication Billing) */}
          {project.desktopImagePath && project.mobileImagePath && !project.customerImagePath && (
            <div className="absolute bottom-2 inset-x-2 flex items-center justify-center z-10 bg-navy-950/95 backdrop-blur-md p-1.5 rounded-xl border border-white/10 shadow-xl">
              <div className="flex items-center gap-1 p-0.5 rounded-lg bg-navy-900 border border-white/5 w-full justify-center">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDevice("desktop");
                  }}
                  className={`flex-1 py-1 px-3 rounded-lg text-[10px] font-semibold transition flex items-center justify-center gap-1.5 ${
                    activeDevice === "desktop"
                      ? "bg-electric-500 text-white shadow-md shadow-electric-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Monitor className="w-3 h-3" />
                  <span>Desktop View</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDevice("mobile");
                  }}
                  className={`flex-1 py-1 px-3 rounded-lg text-[10px] font-semibold transition flex items-center justify-center gap-1.5 ${
                    activeDevice === "mobile"
                      ? "bg-electric-500 text-white shadow-md shadow-electric-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Smartphone className="w-3 h-3" />
                  <span>Mobile View</span>
                </button>
              </div>
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

          {/* Action Trigger */}
          <div className="pt-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (onOpenDetails) {
                    onOpenDetails(project);
                  } else {
                    setModalOpen(true);
                  }
                }}
                className="flex-1 py-2.5 px-3 rounded-xl bg-navy-800 hover:bg-navy-750 text-slate-200 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 border border-white/5"
              >
                <span>Quick Preview</span>
              </button>

              <Link
                href={`/projects/${project.id}`}
                className="flex-1 py-2.5 px-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-md shadow-electric-500/20 active:scale-95"
              >
                <span>Full Case Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
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

            {/* Screenshots Display with 4 View Tabs */}
            {project.customerImagePath && project.sellerImagePath ? (
              <div className="mb-6 rounded-2xl bg-navy-950 border border-white/10 p-3 sm:p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 flex-wrap gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Role tabs */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setActiveSide("customer")}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                          activeSide === "customer"
                            ? "bg-electric-500 text-white shadow-lg shadow-electric-500/20"
                            : "bg-navy-850 text-slate-400 hover:text-white border border-white/5"
                        }`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Customer View</span>
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
                        <span>Seller View</span>
                      </button>
                    </div>

                    {/* Device toggle */}
                    <div className="flex items-center gap-1 p-0.5 rounded-xl bg-navy-900 border border-white/5">
                      <button
                        type="button"
                        onClick={() => setActiveDevice("desktop")}
                        className={`py-1 px-2.5 rounded-lg text-[11px] font-semibold transition flex items-center gap-1 ${
                          activeDevice === "desktop"
                            ? "bg-navy-800 text-white border border-white/10 shadow-sm"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <Monitor className="w-3.5 h-3.5" />
                        <span>Desktop</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveDevice("mobile")}
                        className={`py-1 px-2.5 rounded-lg text-[11px] font-semibold transition flex items-center gap-1 ${
                          activeDevice === "mobile"
                            ? "bg-navy-800 text-white border border-white/10 shadow-sm"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>Mobile</span>
                      </button>
                    </div>
                  </div>

                  <span className="text-[11px] text-electric-400 font-mono">
                    {activeSide === "customer"
                      ? activeDevice === "desktop"
                        ? "Customer Desktop Storefront"
                        : "Customer Mobile Shopping App"
                      : activeDevice === "desktop"
                      ? "Merchant Desktop Admin Dashboard"
                      : "Merchant Mobile Store Manager"}
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-navy-900/60 p-2 border border-white/5 flex items-center justify-center">
                  <Image
                    src={getDisplayImage(activeSide, activeDevice)}
                    alt={`${project.title} - ${activeSide} (${activeDevice}) view`}
                    width={900}
                    height={550}
                    className="w-full max-h-[440px] object-contain rounded-lg shadow-lg"
                  />
                </div>

                <div className="text-xs text-slate-400 text-center px-2">
                  {activeSide === "customer" ? (
                    activeDevice === "desktop" ? (
                      <span>
                        <strong className="text-slate-200">Customer Desktop Portal:</strong> Search verified local shops within 2km to 20km, category discovery & instant map directions.
                      </span>
                    ) : (
                      <span>
                        <strong className="text-slate-200">Customer Mobile App:</strong> Fast touch shopping, mobile cart, and direct WhatsApp 1-tap checkout.
                      </span>
                    )
                  ) : activeDevice === "desktop" ? (
                    <span>
                      <strong className="text-slate-200">Merchant Desktop Dashboard:</strong> WhatsApp order number (<span className="text-electric-300 font-mono">7796216506</span>), 1-Click CSV bulk product import, variant sizing (XS-XXL, 28-46), and store GPS setup.
                    </span>
                  ) : (
                    <span>
                      <strong className="text-slate-200">Merchant Mobile App:</strong> Real-time order notification routing, mobile catalog management, and store live toggle.
                    </span>
                  )}
                </div>
              </div>
            ) : project.desktopImagePath && project.mobileImagePath ? (
              <div className="mb-6 rounded-2xl bg-navy-950 border border-white/10 p-3 sm:p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setActiveDevice("desktop")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                        activeDevice === "desktop"
                          ? "bg-electric-500 text-white shadow-lg shadow-electric-500/20"
                          : "bg-navy-850 text-slate-400 hover:text-white border border-white/5"
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Desktop Workspace</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveDevice("mobile")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                        activeDevice === "mobile"
                          ? "bg-electric-500 text-white shadow-lg shadow-electric-500/20"
                          : "bg-navy-850 text-slate-400 hover:text-white border border-white/5"
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Mobile Workspace</span>
                    </button>
                  </div>

                  <span className="text-[11px] text-electric-400 font-mono">
                    {activeDevice === "desktop"
                      ? "RS Fabrication Desktop Dashboard & Invoicing Suite"
                      : "RS Fabrication Mobile Workshop App"}
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-navy-900/60 p-2 border border-white/5 flex items-center justify-center min-h-[300px]">
                  <Image
                    src={activeDevice === "mobile" ? project.mobileImagePath : project.desktopImagePath}
                    alt={`${project.title} (${activeDevice} view)`}
                    width={900}
                    height={550}
                    className="w-full max-h-[440px] object-contain rounded-lg shadow-lg"
                  />
                </div>

                <div className="text-xs text-slate-400 text-center px-2">
                  {activeDevice === "desktop" ? (
                    <span>
                      <strong className="text-slate-200">Desktop Billing Dashboard:</strong> Full financial overview, GST cash to pay, recent invoices, quotations, purchase records, and one-click cloud backup.
                    </span>
                  ) : (
                    <span>
                      <strong className="text-slate-200">Mobile Workshop View:</strong> Instant on-site invoice & quotation creation directly from customer fabrication site or workshop floor.
                    </span>
                  )}
                </div>
              </div>
            ) : project.imagePath ? (
              <div className="mb-6 rounded-xl overflow-hidden border border-white/10 bg-navy-950 p-2 flex items-center justify-center">
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  width={900}
                  height={550}
                  className="w-full max-h-[440px] object-contain rounded-lg shadow-xl"
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

              {/* Integrity Note */}
              <div className="p-3 rounded-lg bg-navy-950 border border-white/5 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Honesty Guarantee:</span> All capabilities listed above reflect functional architecture and software features created by RK Group of IT Solutions.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-1.5 text-xs text-electric-400 hover:text-white font-semibold transition"
              >
                <span>Open Dedicated Case Study Page</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>

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
