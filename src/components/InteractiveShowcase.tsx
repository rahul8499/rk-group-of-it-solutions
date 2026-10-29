"use client";

import React, { useState } from "react";

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<"tailwind" | "features" | "stats">("tailwind");
  const [accentColor, setAccentColor] = useState<"cyan" | "purple" | "emerald" | "amber">("cyan");
  const [counter, setCounter] = useState(42);
  const [copied, setCopied] = useState(false);

  const accentStyles = {
    cyan: {
      badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      glow: "from-cyan-500/20 via-blue-500/10 to-transparent",
      btn: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/25",
      border: "hover:border-cyan-500/40",
      text: "text-cyan-400",
      ring: "ring-cyan-400",
    },
    purple: {
      badge: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      glow: "from-purple-500/20 via-pink-500/10 to-transparent",
      btn: "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 shadow-purple-500/25",
      border: "hover:border-purple-500/40",
      text: "text-purple-400",
      ring: "ring-purple-400",
    },
    emerald: {
      badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      glow: "from-emerald-500/20 via-teal-500/10 to-transparent",
      btn: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-emerald-500/25",
      border: "hover:border-emerald-500/40",
      text: "text-emerald-400",
      ring: "ring-emerald-400",
    },
    amber: {
      badge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      glow: "from-amber-500/20 via-orange-500/10 to-transparent",
      btn: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 shadow-amber-500/25",
      border: "hover:border-amber-500/40",
      text: "text-amber-400",
      ring: "ring-amber-400",
    },
  }[accentColor];

  const copySnippet = () => {
    navigator.clipboard.writeText("npm run dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl relative overflow-hidden transition-all duration-300">
      {/* Background radial highlight */}
      <div
        className={`absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br ${accentStyles.glow} rounded-full blur-3xl pointer-events-none transition-all duration-700`}
      />

      {/* Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-xl font-bold text-white tracking-tight">Interactive Tailwind Demo</h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Test real-time Tailwind CSS v3 utility classes and interactive state updates.
          </p>
        </div>

        {/* Accent Selector */}
        <div className="flex items-center gap-2 bg-slate-950/70 p-1.5 rounded-xl border border-slate-800/90 self-start sm:self-auto">
          <span className="text-xs font-medium text-slate-400 px-2">Accent:</span>
          {(["cyan", "purple", "emerald", "amber"] as const).map((color) => (
            <button
              key={color}
              id={`accent-${color}-btn`}
              onClick={() => setAccentColor(color)}
              className={`w-6 h-6 rounded-lg transition-transform duration-200 ${
                accentColor === color ? "scale-110 ring-2 ring-white/60" : "opacity-60 hover:opacity-100"
              } ${
                color === "cyan"
                  ? "bg-cyan-500"
                  : color === "purple"
                  ? "bg-purple-500"
                  : color === "emerald"
                  ? "bg-emerald-500"
                  : "bg-amber-500"
              }`}
              title={`${color} theme`}
            />
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mt-6 border-b border-slate-800/60 pb-3">
        <button
          id="tab-tailwind-btn"
          onClick={() => setActiveTab("tailwind")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
            activeTab === "tailwind"
              ? "bg-slate-800 text-white shadow-sm"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
          }`}
        >
          Tailwind v3 Setup
        </button>
        <button
          id="tab-features-btn"
          onClick={() => setActiveTab("features")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
            activeTab === "features"
              ? "bg-slate-800 text-white shadow-sm"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
          }`}
        >
          Live Components
        </button>
        <button
          id="tab-stats-btn"
          onClick={() => setActiveTab("stats")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
            activeTab === "stats"
              ? "bg-slate-800 text-white shadow-sm"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
          }`}
        >
          Environment Info
        </button>
      </div>

      {/* Tab Contents */}
      <div className="mt-6">
        {activeTab === "tailwind" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-sm font-mono text-slate-300">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 mb-2 border-b border-slate-800/60">
                <span>tailwind.config.js</span>
                <span className={`px-2 py-0.5 rounded border text-[11px] ${accentStyles.badge}`}>v3.4 Enabled</span>
              </div>
              <pre className="text-xs text-slate-300 overflow-x-auto leading-relaxed">
{`module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { extend: {} },
  plugins: [],
}`}
              </pre>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-slate-950/40 border border-slate-800/60">
              <div className="flex items-center gap-3">
                <code className="text-xs sm:text-sm bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-emerald-400 font-mono">
                  $ npm run dev
                </code>
                <span className="text-xs text-slate-400">Run local development server</span>
              </div>
              <button
                id="copy-dev-cmd-btn"
                onClick={copySnippet}
                className="w-full sm:w-auto px-4 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              >
                {copied ? "✓ Copied!" : "Copy Command"}
              </button>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Interactive Counter Card */}
            <div className={`p-5 rounded-2xl bg-slate-950/60 border border-slate-800 ${accentStyles.border} transition-all`}>
              <h4 className="text-sm font-semibold text-white mb-1">State Counter Widget</h4>
              <p className="text-xs text-slate-400 mb-4">React client interactivity with Tailwind transitions</p>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-extrabold text-white font-mono bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                  {counter}
                </div>
                <div className="flex gap-2">
                  <button
                    id="counter-dec-btn"
                    onClick={() => setCounter((c) => c - 1)}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-bold transition active:scale-95"
                  >
                    -
                  </button>
                  <button
                    id="counter-inc-btn"
                    onClick={() => setCounter((c) => c + 1)}
                    className={`px-3 h-9 flex items-center justify-center rounded-lg text-white font-bold transition shadow-md active:scale-95 ${accentStyles.btn}`}
                  >
                    + Boost
                  </button>
                  <button
                    id="counter-reset-btn"
                    onClick={() => setCounter(0)}
                    className="px-2.5 h-9 text-xs rounded-lg bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Gradient & Glass Card */}
            <div className={`p-5 rounded-2xl bg-slate-950/60 border border-slate-800 ${accentStyles.border} transition-all flex flex-col justify-between`}>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Modern UI Badges</h4>
                <p className="text-xs text-slate-400 mb-3">Pill tags with glassmorphism and glow effects</p>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${accentStyles.badge}`}>
                    Tailwind v3
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    Next.js 16
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                    React 19
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    App Router
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Dynamic Styling Status</span>
                <span className={`font-semibold ${accentStyles.text}`}>Active & Synchronized</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "stats" && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Next.js Version", value: "16.4.3", badge: "Latest" },
              { label: "React Engine", value: "19.3.0", badge: "Modern" },
              { label: "Tailwind CSS", value: "v3.4.17", badge: "Configured" },
              { label: "Architecture", value: "App Router", badge: "Src Directory" },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 text-center">
                <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase block mb-1">
                  {stat.label}
                </span>
                <span className="text-lg font-bold text-white block">{stat.value}</span>
                <span className={`inline-block mt-2 px-2 py-0.5 text-[10px] font-medium rounded-full border ${accentStyles.badge}`}>
                  {stat.badge}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
