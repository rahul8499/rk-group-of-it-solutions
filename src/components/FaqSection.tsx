"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "How long does a typical website or mobile app take to build?",
      answer:
        "Standard business websites and landing pages are typically delivered within 5 to 8 working days. Custom mobile applications (like Apani Dukan) or billing software generally take 2 to 3 weeks depending on the number of features, product categories, and integrations required.",
    },
    {
      question: "Will our website and mobile app work smoothly on budget smartphones?",
      answer:
        "Yes, absolutely. We prioritize lightweight, highly optimized code architectures (Next.js, React Native, and Tailwind CSS). Our solutions are rigorously tested on low-bandwidth networks and budget Android devices to guarantee fast loading and responsive touch interactions.",
    },
    {
      question: "Can our staff easily manage products, prices, and orders without knowing coding?",
      answer:
        "Yes. We design intuitive, simple admin desks. You or your staff can add new products, update prices, change stock status, and view customer orders in just a few taps from your phone or desktop computer without touching a single line of code.",
    },
    {
      question: "Do you provide support and maintenance after the website or app goes live?",
      answer:
        "Yes. Every project includes launch-phase support to resolve any initial adjustments. We also offer dedicated ongoing IT maintenance plans covering server monitoring, security updates, feature additions, and emergency technical troubleshooting.",
    },
    {
      question: "How do project milestones and payments work?",
      answer:
        "We operate with complete financial transparency. Projects are split into clear milestone stages: requirements agreement, design review, development preview, and final deployment. You inspect progress at each milestone before proceeding.",
    },
    {
      question: "Who owns the code and database once the project is finished?",
      answer:
        "You do. Once a custom project is delivered and settled, you retain full intellectual ownership of your application assets, database structures, and repositories.",
    },
  ];

  return (
    <section className="rounded-3xl bg-navy-900/70 border border-electric-500/20 p-6 sm:p-10 shadow-xl">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-electric-500/10 text-electric-400 border border-electric-500/20">
          <HelpCircle className="w-3.5 h-3.5" />
          Clear Answers
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Everything you need to know about our development timelines, pricing, and process.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-navy-950/90 border-electric-500/40 shadow-lg shadow-electric-500/5"
                  : "bg-navy-950/50 border-white/5 hover:border-white/10"
              }`}
            >
              <button
                id={`faq-btn-${index}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-xs sm:text-sm font-bold text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-electric-400 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
