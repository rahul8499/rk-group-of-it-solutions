"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "Website Development",
    projectBudget: "Under ₹25,000",
    preferredContact: "WhatsApp",
    projectDescription: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [submissionId, setSubmissionId] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loadedAt, setLoadedAt] = useState<number>(0);
  const [isRateLimited, setIsRateLimited] = useState(false);

  React.useEffect(() => {
    setLoadedAt(Date.now());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setFeedbackMessage("");
    setIsRateLimited(false);

    // Basic validation
    if (!formData.name.trim() || !formData.projectDescription.trim()) {
      setFormStatus("error");
      setFeedbackMessage("Please provide your name and a short description of your project.");
      return;
    }

    if (!formData.email.trim() && !formData.phone.trim()) {
      setFormStatus("error");
      setFeedbackMessage("Please enter at least one contact channel (Email or Phone/WhatsApp).");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website_url: honeypot, // Honeypot trap
          _loadedAt: loadedAt, // Velocity verification
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          setIsRateLimited(true);
        }
        throw new Error(result.message || "Failed to submit enquiry.");
      }

      setSubmissionId(result.enquiryId || "ENQ-" + Date.now().toString().slice(-6));
      setFormStatus("success");
      setFeedbackMessage(
        result.message ||
          "Your enquiry has been registered and WhatsApp is opening to connect you directly with our team!"
      );

      // Instantly open WhatsApp with all pre-filled enquiry details
      try {
        const waUrl = getDirectWhatsAppUrl();
        window.open(waUrl, "_blank");
      } catch {
        // Pop-up blocker fallback, user can still click the button
      }
    } catch (err: unknown) {
      setFormStatus("error");
      setFeedbackMessage(
        err instanceof Error
          ? err.message
          : "An unexpected network error occurred. Please use WhatsApp for direct contact."
      );
    }
  };

  const getDirectWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello RK Group of IT Solutions,\n\nI have a project enquiry:\n` +
        `• Name: ${formData.name || "Client"}\n` +
        `• Business: ${formData.businessName || "Not specified"}\n` +
        `• Service: ${formData.service}\n` +
        `• Budget: ${formData.projectBudget}\n` +
        `• Details: ${formData.projectDescription || "Discussing scope"}\n` +
        `• Preferred Contact: ${formData.preferredContact}`
    );
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="rounded-2xl bg-navy-900/90 border border-electric-500/20 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
      {formStatus === "success" ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center text-3xl font-bold">
            ✓
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              Reference #{submissionId}
            </span>
            <h3 className="text-2xl font-bold text-white">Enquiry Registered</h3>
          </div>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            {feedbackMessage}
          </p>

          <div className="p-4 rounded-xl bg-navy-950 border border-white/10 text-left text-xs text-slate-300 space-y-1.5 max-w-md mx-auto mt-4">
            <div className="font-semibold text-slate-200">Enquiry Summary:</div>
            <div><span className="text-slate-400">Client:</span> {formData.name} {formData.businessName ? `(${formData.businessName})` : ""}</div>
            <div><span className="text-slate-400">Service:</span> {formData.service}</div>
            <div><span className="text-slate-400">Preferred Method:</span> {formData.preferredContact}</div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
            >
              <span>Instant WhatsApp Discussion ↗</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setFormStatus("idle");
                setFormData({
                  name: "",
                  businessName: "",
                  email: "",
                  phone: "",
                  service: "Website Development",
                  projectBudget: "Under ₹25,000",
                  preferredContact: "WhatsApp",
                  projectDescription: "",
                });
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 font-medium text-sm transition"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="border-b border-white/5 pb-4">
            <h3 className="text-xl font-bold text-white">Project Enquiry Form</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Provide your details below and we will prepare a clear roadmap for your business.
            </p>
          </div>

          {/* Anti-spam honeypot - invisible to users, traps automated bots */}
          <div className="hidden opacity-0 pointer-events-none absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website_url">Leave this empty</label>
            <input
              type="text"
              id="website_url"
              name="website_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {formStatus === "error" && (
            <div
              className={`p-4 rounded-xl border text-xs sm:text-sm animate-shake ${
                isRateLimited
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-200"
                  : "bg-rose-500/10 border-rose-500/30 text-rose-300"
              }`}
            >
              <div className="flex items-start gap-2.5">
                <span className="text-base">{isRateLimited ? "🛡️" : "⚠️"}</span>
                <div className="flex-1 space-y-2">
                  <div className="font-semibold text-white">
                    {isRateLimited ? "Anti-Spam Security Protection Active" : "Submission Notice"}
                  </div>
                  <p className="leading-relaxed">{feedbackMessage}</p>
                  {isRateLimited && (
                    <a
                      href={getDirectWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition shadow-md shadow-emerald-600/20"
                    >
                      <span>Connect Directly on WhatsApp 💬</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                Full Name <span className="text-electric-400">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Rahul Kolhe"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400 placeholder:text-slate-400"
              />
            </div>

            <div>
              <label htmlFor="contact-business" className="block text-xs font-medium text-slate-300 mb-1.5">
                Business / Store Name <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                id="contact-business"
                name="businessName"
                type="text"
                placeholder="e.g. Apex Hardware / EduClasses"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400 placeholder:text-slate-400"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                Phone / WhatsApp Number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="contact-service" className="block text-xs font-medium text-slate-300 mb-1.5">
                Service Required <span className="text-electric-400">*</span>
              </label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400"
              >
                <option value="Website Development">Website Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Custom Software Development">Custom Software Development</option>
                <option value="IT Support & Maintenance">IT Support & Maintenance</option>
                <option value="Automation & Consulting">Automation & Consulting</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-budget" className="block text-xs font-medium text-slate-300 mb-1.5">
                Target Budget <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <select
                id="contact-budget"
                name="projectBudget"
                value={formData.projectBudget}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400"
              >
                <option value="Under ₹15,000">Under ₹15,000 (Starter)</option>
                <option value="₹15,000 - ₹35,000">₹15,000 – ₹35,000 (Growth)</option>
                <option value="₹35,000 - ₹75,000">₹35,000 – ₹75,000 (Custom)</option>
                <option value="₹75,000+">₹75,000+ (Enterprise)</option>
                <option value="Flexible / Needs Quote">Flexible / Needs Quote</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-pref" className="block text-xs font-medium text-slate-300 mb-1.5">
                Preferred Contact
              </label>
              <select
                id="contact-pref"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400"
              >
                <option value="WhatsApp">WhatsApp</option>
                <option value="Phone Call">Phone Call</option>
                <option value="Email">Email</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="contact-desc" className="block text-xs font-medium text-slate-300 mb-1.5">
              Project Description / Problem to Solve <span className="text-electric-400">*</span>
            </label>
            <textarea
              id="contact-desc"
              name="projectDescription"
              required
              rows={4}
              placeholder="Tell us what you are trying to build or automate. For example: 'We need a customer ordering app for our local shop to cut down manual phone orders...'"
              value={formData.projectDescription}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400 placeholder:text-slate-400"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-sm transition shadow-lg shadow-electric-500/25 flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {formStatus === "submitting" ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting Enquiry...
                </>
              ) : (
                <>
                  <span>Send & Connect on WhatsApp</span>
                  <span className="text-base">💬</span>
                </>
              )}
            </button>

            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline font-medium"
            >
              <span>Or click here to send via WhatsApp</span>
              <span>↗</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
