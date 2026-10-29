"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { useConsultation } from "./SiteLayout";
import { MessageSquare, Zap } from "lucide-react";

export default function MobileBottomBar() {
  const { openConsultation } = useConsultation();

  const encodedMessage = encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  );
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodedMessage}`;

  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-navy-950/95 backdrop-blur-lg border-t border-electric-500/20 px-3 py-2.5 flex items-center gap-2 shadow-2xl"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 active:scale-95 transition"
      >
        <span className="text-sm">💬</span>
        <span>WhatsApp</span>
      </a>

      <button
        onClick={() => openConsultation()}
        className="flex-1 py-2.5 px-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-electric-500/20 active:scale-95 transition"
      >
        <Zap className="w-3.5 h-3.5 text-amber-300" />
        <span>Get Free Quote</span>
      </button>
    </aside>
  );
}
