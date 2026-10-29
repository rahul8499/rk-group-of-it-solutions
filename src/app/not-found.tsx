import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-electric-500/10 border border-electric-500/30 text-electric-400 font-mono font-bold text-3xl shadow-xl shadow-electric-500/10">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-white">Page Not Found</h1>
          <p className="text-sm text-slate-400">
            The page you are looking for doesn't exist or has been moved. Explore our core services or return to the homepage.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-xs tracking-wider uppercase transition shadow-lg shadow-electric-500/20 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-850 text-slate-300 font-semibold text-xs tracking-wider uppercase transition border border-white/10"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}
