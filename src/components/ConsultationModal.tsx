"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  initialService = "",
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    contactMethod: "whatsapp",
    phone: "",
    email: "",
    service: initialService || "website-development",
    problemDescription: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Free Consultation Modal",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to submit request.");
      }

      setStatus("success");

      // Instantly open WhatsApp with consultation details
      try {
        const waUrl = getWhatsAppDirectLink();
        window.open(waUrl, "_blank");
      } catch {
        // Fallback for pop-up blocker
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try contacting via WhatsApp."
      );
    }
  };

  const getWhatsAppDirectLink = () => {
    const text = encodeURIComponent(
      `Hello RK Group of IT Solutions,\n\nI want to discuss a project:\n- Name: ${formData.name || "Client"}\n- Business: ${formData.businessName || "Not specified"}\n- Service: ${formData.service}\n- Requirement: ${formData.problemDescription || "Initial consultation"}`
    );
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Backdrop click */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-2xl bg-navy-900 border border-electric-500/30 p-6 sm:p-8 shadow-2xl shadow-navy-950 text-slate-100 z-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-bold text-white">Consultation Request Received!</h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
              Thank you, <span className="font-semibold text-white">{formData.name}</span>. We will review your requirement and reach out via your preferred method.
            </p>

            <div className="pt-3 border-t border-white/10 space-y-3">
              <p className="text-xs text-slate-400">
                Want an instant response? You can also message us directly on WhatsApp right now:
              </p>
              <a
                href={getWhatsAppDirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition shadow-lg shadow-emerald-600/20"
              >
                <span>Continue on WhatsApp ↗</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 text-sm font-medium transition"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-electric-500/10 text-electric-400 text-xs font-semibold border border-electric-500/20">
                Project Discussion
              </span>
              <h2 className="text-2xl font-bold text-white mt-2">
                Get a Free Consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Tell us about your business requirement. We'll suggest a practical digital solution with clear pricing.
              </p>
            </div>

            {status === "error" && (
              <div className="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Your Full Name <span className="text-electric-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Business / Store Name <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sharma Grocery Store / Tech Studio"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Service You Need <span className="text-electric-400">*</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400"
                >
                  <option value="website-development">Website Development</option>
                  <option value="mobile-app-development">Mobile App Development</option>
                  <option value="custom-software-development">Custom Software Development</option>
                  <option value="it-support-maintenance">IT Support & Maintenance</option>
                  <option value="general-consultation">General Technical Advice / Automation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp <span className="text-electric-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  What business problem are you trying to solve? <span className="text-electric-400">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. We want to show our retail products online and allow customers to place WhatsApp orders..."
                  value={formData.problemDescription}
                  onChange={(e) =>
                    setFormData({ ...formData, problemDescription: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 px-4 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-sm transition shadow-lg shadow-electric-500/25 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting Requirement...
                    </>
                  ) : (
                    <>
                      <span>Submit & Open in WhatsApp</span>
                      <span className="text-base">💬</span>
                    </>
                  )}
                </button>

                <div className="text-center text-[11px] text-slate-400">
                  Prefer direct chat?{" "}
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-medium"
                  >
                    Open WhatsApp directly ↗
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
