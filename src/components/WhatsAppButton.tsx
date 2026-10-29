"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const encodedMessage = encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  );
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodedMessage}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3"
    >
      {/* Tooltip speech bubble */}
      <div
        className={`hidden md:block transition-all duration-300 transform ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <div className="bg-navy-900 border border-electric-500/30 text-white text-xs px-3.5 py-2 rounded-xl shadow-xl shadow-navy-950/80 whitespace-nowrap">
          <span className="font-semibold text-emerald-400">Quick Discussion:</span> Chat with us on WhatsApp
        </div>
      </div>

      {/* Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Chat on WhatsApp with RK Group of IT Solutions"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping pointer-events-none opacity-75" />

        {/* WhatsApp Vector Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2C6.516 2 2.031 6.484 2.031 12C2.031 13.969 2.594 15.813 3.609 17.391L2 22L6.766 20.453C8.313 21.391 10.125 21.906 12.031 21.906C17.547 21.906 22.031 17.422 22.031 11.906C22.031 6.391 17.547 2 12.031 2ZM12.031 20.219C10.375 20.219 8.781 19.75 7.422 18.891L7.109 18.703L4.25 19.625L5.203 16.859L4.984 16.516C4.047 15.109 3.563 13.578 3.563 11.984C3.563 7.328 7.359 3.531 12.031 3.531C16.703 3.531 20.5 7.328 20.5 12C20.5 16.672 16.703 20.219 12.031 20.219ZM16.672 14.531C16.422 14.406 15.172 13.781 14.938 13.688C14.703 13.594 14.547 13.547 14.375 13.797C14.203 14.047 13.719 14.625 13.563 14.797C13.406 14.969 13.25 15 13 14.875C12.75 14.75 11.938 14.484 10.984 13.625C10.234 12.953 9.734 12.125 9.594 11.875C9.453 11.625 9.578 11.484 9.703 11.359C9.813 11.25 9.953 11.078 10.078 10.938C10.203 10.797 10.25 10.688 10.328 10.531C10.406 10.375 10.359 10.234 10.297 10.109C10.234 9.984 9.734 8.75 9.531 8.25C9.328 7.766 9.125 7.828 8.969 7.828C8.828 7.828 8.656 7.813 8.484 7.813C8.313 7.813 8.031 7.875 7.797 8.125C7.563 8.375 6.906 8.984 6.906 10.234C6.906 11.484 7.813 12.688 7.938 12.859C8.063 13.031 9.734 15.609 12.313 16.719C12.922 16.984 13.406 17.141 13.781 17.266C14.391 17.453 14.953 17.422 15.391 17.359C15.875 17.281 16.891 16.734 17.109 16.109C17.328 15.484 17.328 14.953 17.266 14.844C17.203 14.734 17.047 14.656 16.672 14.531Z" />
        </svg>
      </a>
    </aside>
  );
}
