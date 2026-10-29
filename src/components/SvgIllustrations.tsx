"use client";

import React, { useState } from "react";
import Image from "next/image";

// Interactive Multi-Device Ecosystem Showcase (Switch between Dashboard, Apani Dukan Mobile, and Code Engine)
export function HeroTechVisual() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "mobile" | "code">("dashboard");
  const [cartCount, setCartCount] = useState(2);
  const [copiedNotification, setCopiedNotification] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto select-none">
      {/* Dynamic ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-electric-500/20 via-sky-500/15 to-indigo-600/20 blur-3xl rounded-3xl -z-10 animate-pulse-slow" />

      {/* Main Container */}
      <div className="relative rounded-2xl bg-navy-900/95 border border-electric-500/30 shadow-2xl shadow-navy-950/90 overflow-hidden backdrop-blur-xl">
        {/* Window Top Navigation Bar with Interactive Tabs */}
        <div className="flex flex-wrap items-center justify-between px-3 sm:px-4 py-3 bg-navy-950/90 border-b border-white/10 gap-2">
          {/* Window control buttons */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-1 text-[11px] font-mono text-slate-400 hidden sm:inline">
              rk-suite://active
            </span>
          </div>

          {/* Device / View Switcher Tabs */}
          <div className="flex items-center bg-navy-900/90 p-1 rounded-xl border border-white/5 text-[11px]">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-2.5 sm:px-3 py-1 rounded-lg font-medium transition-all ${
                activeTab === "dashboard"
                  ? "bg-electric-500 text-white shadow-md shadow-electric-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📊 SaaS Dashboard
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-2.5 sm:px-3 py-1 rounded-lg font-medium transition-all ${
                activeTab === "mobile"
                  ? "bg-electric-500 text-white shadow-md shadow-electric-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📱 Apani Dukan App
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-2.5 sm:px-3 py-1 rounded-lg font-medium transition-all ${
                activeTab === "code"
                  ? "bg-electric-500 text-white shadow-md shadow-electric-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ⚡ TypeScript API
            </button>
          </div>

          {/* System status pill */}
          <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            99.98% SLA
          </div>
        </div>

        {/* Tab 1: Dashboard View */}
        {activeTab === "dashboard" && (
          <div className="p-4 sm:p-6 grid grid-cols-12 gap-4 animate-in fade-in duration-300">
            {/* Left Mini Sidebar */}
            <div className="hidden sm:flex col-span-3 flex-col gap-2 pr-2 border-r border-white/5">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold px-2">
                Operations
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-electric-500/15 text-electric-400 font-medium text-xs border border-electric-500/30">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Realtime Desk
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 text-xs transition">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Customer Orders
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 text-xs transition">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Stock Alert
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 text-xs transition">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Tax / Reports
              </div>
            </div>

            {/* Main Area */}
            <div className="col-span-12 sm:col-span-9 flex flex-col gap-3.5">
              {/* Stat Cards */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 rounded-xl bg-navy-850/90 border border-white/5 flex flex-col">
                  <span className="text-[10px] text-slate-400">Daily Invoices</span>
                  <span className="text-base sm:text-lg font-bold text-white mt-0.5">148 Bills</span>
                  <span className="text-[9px] text-emerald-400 font-medium">Auto-generated</span>
                </div>
                <div className="p-3 rounded-xl bg-navy-850/90 border border-white/5 flex flex-col">
                  <span className="text-[10px] text-slate-400">Order Dispatch</span>
                  <span className="text-base sm:text-lg font-bold text-electric-400 mt-0.5">99.4%</span>
                  <span className="text-[9px] text-sky-400 font-medium">On schedule</span>
                </div>
                <div className="p-3 rounded-xl bg-navy-850/90 border border-white/5 flex flex-col">
                  <span className="text-[10px] text-slate-400">Server Health</span>
                  <span className="text-base sm:text-lg font-bold text-emerald-400 mt-0.5">100%</span>
                  <span className="text-[9px] text-slate-400 font-medium">Instant Sync</span>
                </div>
              </div>

              {/* Real-time Visual Curve */}
              <div className="p-3.5 rounded-xl bg-navy-850/60 border border-white/5 flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">Daily Workflow Dispatch</span>
                  <span className="text-[10px] text-electric-400 font-mono">Live WebSocket</span>
                </div>

                <div className="h-24 w-full pt-1">
                  <svg viewBox="0 0 400 90" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="chartGradHero" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0066FF" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                    <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                    <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />

                    <path
                      d="M0,75 Q60,35 120,45 T240,20 T340,40 T400,10 L400,90 L0,90 Z"
                      fill="url(#chartGradHero)"
                    />
                    <path
                      d="M0,75 Q60,35 120,45 T240,20 T340,40 T400,10"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="120" cy="45" r="4" fill="#0066FF" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="240" cy="20" r="4" fill="#00D2FF" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="400" cy="10" r="4" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Bottom activity ticker */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Mobile App + POS Billing Connected
                </span>
                <span className="font-mono text-electric-400">RK Group Architecture</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Apani Dukan Mobile View */}
        {activeTab === "mobile" && (
          <div className="p-4 sm:p-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              {/* Left explanation */}
              <div className="sm:col-span-5 space-y-3">
                <div className="inline-block px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] font-semibold">
                  Interactive Mobile Demo
                </div>
                <h4 className="text-base font-bold text-white">Apani Dukan App Interface</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Click the <strong>"+ Add"</strong> buttons below to test adding grocery items directly to the cart simulation!
                </p>
                <div className="p-3 rounded-xl bg-navy-950 border border-white/5 space-y-1 text-xs">
                  <div className="text-slate-400">Status: <span className="text-emerald-400 font-semibold">Live in Production</span></div>
                  <div className="text-slate-400">Order Dispatch: <span className="text-electric-400 font-mono">Direct WhatsApp & SMS</span></div>
                </div>
              </div>

              {/* Right Mini Phone Card */}
              <div className="sm:col-span-7 rounded-2xl bg-navy-950 border border-electric-500/30 p-3.5 space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🏪</span>
                    <span className="text-xs font-bold text-white">Apani Dukan Store</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                    Open Now
                  </span>
                </div>

                {/* Items */}
                <div className="space-y-1.5">
                  <div className="p-2 rounded-lg bg-navy-900 border border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-slate-200">🌾 Chakki Fresh Atta (5kg)</div>
                      <div className="text-[10px] text-electric-400 font-bold">₹245</div>
                    </div>
                    <button
                      onClick={() => setCartCount((prev) => prev + 1)}
                      className="px-2.5 py-1 rounded bg-electric-500 hover:bg-electric-400 text-white text-[11px] font-bold active:scale-95 transition"
                    >
                      + Add
                    </button>
                  </div>

                  <div className="p-2 rounded-lg bg-navy-900 border border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-slate-200">🥛 Pure Desi Ghee (1L)</div>
                      <div className="text-[10px] text-electric-400 font-bold">₹620</div>
                    </div>
                    <button
                      onClick={() => setCartCount((prev) => prev + 1)}
                      className="px-2.5 py-1 rounded bg-electric-500 hover:bg-electric-400 text-white text-[11px] font-bold active:scale-95 transition"
                    >
                      + Add
                    </button>
                  </div>
                </div>

                {/* Live Cart Bar */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-300">
                    Cart Items: <strong className="text-emerald-400">{cartCount}</strong>
                  </span>
                  <div className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-[10px] font-bold shadow flex items-center gap-1">
                    WhatsApp Order Ready ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: TypeScript Code Preview */}
        {activeTab === "code" && (
          <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 bg-navy-950/90 overflow-x-auto animate-in fade-in duration-300">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[11px] text-slate-400">
              <span>api/orders/dispatch.ts</span>
              <span className="text-emerald-400">TypeCheck Passed</span>
            </div>
            <pre className="text-[11px] sm:text-xs leading-relaxed space-y-1">
              <code>
                <span className="text-purple-400">export async function</span>{" "}
                <span className="text-electric-300">processOrder</span>(
                <span className="text-amber-300">order</span>:{" "}
                <span className="text-sky-300">OrderPayload</span>) &#123;
                <br />
                {"  "}<span className="text-slate-400">// 1. Validate stock threshold</span>
                <br />
                {"  "}<span className="text-purple-400">const</span> stock ={" "}
                <span className="text-purple-400">await</span> db.inventory.check(order.itemId);
                <br />
                {"  "}<span className="text-purple-400">if</span> (!stock.isAvailable) &#123;
                <br />
                {"    "}<span className="text-purple-400">return</span> ApiError(
                <span className="text-emerald-300">"Item out of stock"</span>);
                <br />
                {"  "}&#125;
                <br />
                {"  "}<span className="text-slate-400">// 2. Trigger auto-invoice & WhatsApp ping</span>
                <br />
                {"  "}<span className="text-purple-400">await</span> rkServices.sendWhatsAppNotice(order);
                <br />
                {"  "}<span className="text-purple-400">return</span> Response.json(&#123; status:{" "}
                <span className="text-emerald-300">"DISPATCHED"</span> &#125;);
                <br />
                &#125;
              </code>
            </pre>
          </div>
        )}
      </div>

      {/* Floating Badges with gentle modern animation */}
      <div className="absolute -bottom-4 -left-2 sm:-left-5 p-3 rounded-xl bg-navy-850/95 border border-electric-500/30 shadow-xl flex items-center gap-3 backdrop-blur-md animate-float-slow hidden sm:flex">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
          ✓
        </div>
        <div>
          <div className="text-xs font-semibold text-white">Production Tested</div>
          <div className="text-[10px] text-slate-400">Zero Lag Mobile Experience</div>
        </div>
      </div>

      <div className="absolute -top-3 -right-2 sm:-right-4 p-3 rounded-xl bg-navy-850/95 border border-electric-500/30 shadow-xl flex items-center gap-3 backdrop-blur-md animate-float-reverse hidden sm:flex">
        <div className="w-8 h-8 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 font-bold text-sm">
          ⚡
        </div>
        <div>
          <div className="text-xs font-semibold text-white">Full Stack Architecture</div>
          <div className="text-[10px] text-slate-400">TypeScript + Next.js + DB</div>
        </div>
      </div>
    </div>
  );
}

// Apani Dukan Static Mockup
export function ApaniDukanMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="absolute -inset-3 bg-gradient-to-tr from-electric-500/30 via-sky-500/20 to-teal-500/10 rounded-[40px] blur-xl -z-10 animate-pulse-slow" />

      <div className="relative rounded-[36px] bg-navy-950 p-3 border-2 border-slate-700/60 shadow-2xl shadow-navy-950">
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-navy-900 rounded-full border border-white/10 z-20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-slate-800 mr-2" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
        </div>

        <div className="relative rounded-[28px] bg-navy-900 overflow-hidden border border-white/5 pt-8 pb-4 px-3 flex flex-col gap-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center font-bold text-white text-xs">
                🏪
              </div>
              <div>
                <div className="text-xs font-bold text-white">Apani Dukan</div>
                <div className="text-[9px] text-emerald-400">Local Shop Online</div>
              </div>
            </div>
            <div className="p-1.5 rounded-md bg-navy-800 text-slate-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="flex gap-1.5 overflow-x-auto text-[10px] pb-1 scrollbar-none">
            <span className="px-2.5 py-1 rounded-full bg-electric-500 text-white font-medium whitespace-nowrap">All Items</span>
            <span className="px-2.5 py-1 rounded-full bg-navy-800 text-slate-300 whitespace-nowrap">Daily Essentials</span>
            <span className="px-2.5 py-1 rounded-full bg-navy-800 text-slate-300 whitespace-nowrap">Snacks</span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-navy-850 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-base">🌾</div>
                <div>
                  <div className="text-xs font-semibold text-slate-100">Chakki Atta (5kg)</div>
                  <div className="text-[10px] text-slate-400">In Stock</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-electric-400">₹245</div>
                <span className="inline-block px-2 py-0.5 rounded bg-electric-500/20 text-electric-300 text-[9px] font-semibold">+ Add</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-navy-850 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-base">🥛</div>
                <div>
                  <div className="text-xs font-semibold text-slate-100">Desi Ghee (1L)</div>
                  <div className="text-[10px] text-slate-400">Verified Quality</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-electric-400">₹620</div>
                <span className="inline-block px-2 py-0.5 rounded bg-electric-500/20 text-electric-300 text-[9px] font-semibold">+ Add</span>
              </div>
            </div>
          </div>

          <div className="mt-1 p-2.5 rounded-xl bg-gradient-to-r from-emerald-600/30 to-electric-600/30 border border-emerald-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">2</span>
              <span className="text-[11px] font-semibold text-white">Items Selected</span>
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-500 text-white text-[10px] font-bold">
              WhatsApp Order ↗
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Software Dashboard Preview
export function DashboardIllustration() {
  return (
    <div className="relative w-full rounded-xl bg-navy-900 border border-electric-500/20 p-4 overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-electric-500 animate-pulse" />
          <span className="text-xs font-semibold text-slate-200">Stock & Invoice Desk</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-navy-800 text-slate-300 font-mono">v2.4 Ready</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-3">
        <div className="p-3 rounded-lg bg-navy-850 border border-white/5">
          <div className="text-[10px] text-slate-400">Low Stock Alert</div>
          <div className="text-sm font-bold text-rose-400 mt-1">4 Items Needed</div>
          <div className="w-full bg-navy-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-rose-500 h-full w-3/4 rounded-full" />
          </div>
        </div>
        <div className="p-3 rounded-lg bg-navy-850 border border-white/5">
          <div className="text-[10px] text-slate-400">Today's Transactions</div>
          <div className="text-sm font-bold text-emerald-400 mt-1">₹48,250</div>
          <div className="w-full bg-navy-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-emerald-500 h-full w-4/5 rounded-full" />
          </div>
        </div>
      </div>

      <div className="mt-3 p-2.5 rounded-lg bg-navy-950 font-mono text-[11px] text-slate-400 flex items-center justify-between">
        <span>GST Invoice #INV-2026-089</span>
        <span className="text-emerald-400 font-semibold">Saved & Auto-Printed</span>
      </div>
    </div>
  );
}
