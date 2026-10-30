import React from "react";
import Link from "next/link";
import { MapPin, Building2, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

interface LocalServiceAreasProps {
  className?: string;
  showTitle?: boolean;
}

export default function LocalServiceAreas({
  className = "",
  showTitle = true,
}: LocalServiceAreasProps) {
  const puneHubs = [
    { name: "Hinjewadi IT Park", type: "Tech Hub (Phase 1, 2, 3)", note: "Enterprise & Tech Startups" },
    { name: "Kharadi & EON IT Park", type: "IT & Business Zone", note: "Corporate Solutions & Cloud" },
    { name: "Baner & Balewadi", type: "Commercial & Retail Hub", note: "Modern Web & Mobile Apps" },
    { name: "Wakad & Pimple Saudagar", type: "High-Growth Tech Corridor", note: "Bespoke SaaS & Web Portals" },
    { name: "Kothrud & Karve Nagar", type: "Education & Business Center", note: "Custom ERP & Coaching Apps" },
    { name: "Viman Nagar & Kalyani Nagar", type: "Retail & F&B Hub", note: "POS, Billing & E-Commerce" },
    { name: "Hadapsar & Magarpatta City", type: "Cybercity & SEZ", note: "Full-Stack Custom Software" },
    { name: "Pimpri-Chinchwad (PCMC)", type: "Industrial & Manufacturing Hub", note: "Bhosari MIDC & Chakan ERP" },
    { name: "Shivajinagar & FC Road", type: "Central Business District", note: "Corporate & Consultant Sites" },
    { name: "Aundh & Senapati Bapat Road", type: "Commercial Tech Strip", note: "Healthcare & Clinic Software" },
  ];

  const regionalCoverage = [
    { region: "Mumbai & Navi Mumbai", highlight: "Fintech, E-commerce, Corporate Portals" },
    { region: "Thane & Kalyan", highlight: "Retail POS, Distribution Management" },
    { region: "Nashik & Northern MH", highlight: "Agri-Tech, Manufacturing, Local Retail" },
    { region: "Chhatrapati Sambhaji Nagar", highlight: "Industrial ERP, Workshop Billing" },
    { region: "Kolhapur & Western MH", highlight: "Trading, Wholesale & Logistics" },
    { region: "Pan-India & Global Remote", highlight: "Fast Cloud Deployment & 24/7 Digital Delivery" },
  ];

  return (
    <section
      aria-label="Service Areas in Pune, Maharashtra and Pan-India"
      className={`rounded-3xl bg-navy-900/60 border border-electric-500/20 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl ${className}`}
    >
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-500/5 blur-3xl pointer-events-none" />

      {showTitle && (
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/25 text-electric-400 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            Local Pune & Regional Maharashtra Coverage
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Premier IT & Software Development Company in{" "}
            <span className="text-gradient-electric">Pune & Maharashtra</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Headquartered in Pune, Maharashtra, <strong className="text-white">RK Group of IT Solutions</strong> delivers high-converting websites, Android/iOS mobile applications, and industrial billing systems across major technology parks, industrial MIDCs, and retail commercial centers.
          </p>
        </div>
      )}

      {/* Pune Corridors Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-electric-400" />
            <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
              Key IT Parks & Commercial Clusters We Serve in Pune (PCMC)
            </h3>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 hidden sm:inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            On-Site & Virtual Consultation Available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {puneHubs.map((hub, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-navy-950/80 border border-white/5 hover:border-electric-500/30 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200 group-hover:text-electric-300 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-electric-400 flex-shrink-0" />
                  <span>{hub.name}</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-mono">{hub.type}</p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-white/5 text-[10px] text-slate-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                <span className="truncate">{hub.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Maharashtra & Pan-India Strip */}
      <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
        <h3 className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider">
          Maharashtra & Pan-India Delivery Footprint
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {regionalCoverage.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-navy-950/50 border border-white/5 flex items-start gap-3"
            >
              <div className="w-7 h-7 rounded-lg bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-electric-400" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-semibold text-white">{item.region}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{item.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust & Guarantee Callout */}
      <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-electric-950/40 via-navy-950 to-navy-950 border border-electric-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center flex-shrink-0 hidden sm:flex">
            <ShieldCheck className="w-5 h-5 text-electric-400" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-bold text-white block">
              Looking for a Reliable Local Tech Partner in Pune?
            </span>
            <span className="text-[11px] sm:text-xs text-slate-400 block mt-0.5">
              Discuss directly with Founder & Lead Engineer Rahul Kolhe. No sales middlemen, 100% transparent pricing.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-shrink-0 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold text-xs tracking-wider uppercase transition shadow-lg shadow-electric-500/20 text-center flex items-center justify-center gap-1.5 active:scale-95"
          >
            <span>Book Pune Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
