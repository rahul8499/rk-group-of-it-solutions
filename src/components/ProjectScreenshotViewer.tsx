"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Monitor, Smartphone, Store, ShoppingBag, ZoomIn, CheckCircle2 } from "lucide-react";

interface ProjectScreenshotViewerProps {
  projectId: string;
  customerDesktop?: string;
  customerMobile?: string;
  sellerDesktop?: string;
  sellerMobile?: string;
  desktopImage?: string;
  mobileImage?: string;
  title: string;
}

export default function ProjectScreenshotViewer({
  projectId,
  customerDesktop,
  customerMobile,
  sellerDesktop,
  sellerMobile,
  desktopImage,
  mobileImage,
  title,
}: ProjectScreenshotViewerProps) {
  const [activeTab, setActiveTab] = useState<"customer" | "seller">("customer");
  const [activeDevice, setActiveDevice] = useState<"desktop" | "mobile">("desktop");

  const isDualApp = projectId === "apani-dukan";

  const getCurrentImage = () => {
    if (isDualApp) {
      if (activeTab === "customer") {
        return activeDevice === "desktop"
          ? customerDesktop || "/projects/apani-dukan-customer-desktop.png"
          : customerMobile || "/projects/apani-dukan-customer-mobile.png";
      } else {
        return activeDevice === "desktop"
          ? sellerDesktop || "/projects/apani-dukan-seller-desktop.png"
          : sellerMobile || "/projects/apani-dukan-seller-mobile.png";
      }
    } else {
      return activeDevice === "desktop"
        ? desktopImage || "/projects/fabrication-billing-desktop.png"
        : mobileImage || "/projects/fabrication-billing-mobile.png";
    }
  };

  const currentImg = getCurrentImage();

  return (
    <div className="rounded-3xl bg-navy-900/90 border border-electric-500/25 p-4 sm:p-8 space-y-6 shadow-2xl">
      {/* Switcher Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-white/5">
        {/* Left: Dual Role Switcher (Apani Dukan) */}
        {isDualApp ? (
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-navy-950 border border-white/5">
            <button
              onClick={() => setActiveTab("customer")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTab === "customer"
                  ? "bg-electric-500 text-white shadow-md shadow-electric-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Customer Storefront</span>
            </button>
            <button
              onClick={() => setActiveTab("seller")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTab === "seller"
                  ? "bg-electric-500 text-white shadow-md shadow-electric-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>Shopkeeper Admin</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Live Industrial System Screenshot</span>
          </div>
        )}

        {/* Right: Device Switcher (Desktop vs Mobile) */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-navy-950 border border-white/5">
          <button
            onClick={() => setActiveDevice("desktop")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
              activeDevice === "desktop"
                ? "bg-electric-500 text-white shadow-md shadow-electric-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop View</span>
          </button>
          <button
            onClick={() => setActiveDevice("mobile")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
              activeDevice === "mobile"
                ? "bg-electric-500 text-white shadow-md shadow-electric-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile View</span>
          </button>
        </div>
      </div>

      {/* Screen Presentation Container */}
      <div className="relative rounded-2xl bg-navy-950 border border-white/10 overflow-hidden flex items-center justify-center p-2 sm:p-4 min-h-[320px] sm:min-h-[500px]">
        {activeDevice === "desktop" ? (
          <div className="w-full relative rounded-xl overflow-hidden shadow-2xl border border-white/5">
            {/* Browser top chrome */}
            <div className="bg-navy-900 px-4 py-2 flex items-center gap-2 border-b border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-3 text-[11px] font-mono text-slate-400 truncate">
                https://rkgroupofitsolutions.com/projects/{projectId} • Verified Application
              </span>
            </div>
            <div className="relative w-full aspect-[16/10] bg-navy-950">
              <Image
                src={currentImg}
                alt={`${title} - Desktop Interface`}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
          </div>
        ) : (
          /* Phone Frame Container */
          <div className="w-full max-w-[340px] relative rounded-[36px] p-2 bg-gradient-to-b from-slate-700 to-slate-900 border-2 border-slate-600 shadow-2xl">
            <div className="rounded-[30px] overflow-hidden bg-navy-950 relative aspect-[9/19] border border-black/40">
              {/* Phone speaker pill */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/80 rounded-full z-20 flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-slate-900 border border-slate-700 mr-2" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
              </div>
              <Image
                src={currentImg}
                alt={`${title} - Mobile Interface`}
                fill
                className="object-contain"
                sizes="340px"
              />
            </div>
          </div>
        )}
      </div>

      <p className="text-center text-xs text-slate-400 font-mono">
        Viewing: {title} • {activeDevice.toUpperCase()} Interface
      </p>
    </div>
  );
}
