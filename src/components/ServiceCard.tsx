import React from "react";
import Link from "next/link";
import { Globe, Smartphone, Cpu, ShieldCheck, ArrowRight, Check } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  deliverables: string[];
  badge?: string;
  onSelectService?: (serviceId: string) => void;
}

export default function ServiceCard({
  id,
  title,
  shortDescription,
  category,
  deliverables,
  badge,
  onSelectService,
}: ServiceCardProps) {
  const getIcon = () => {
    switch (id) {
      case "website-development":
        return <Globe className="w-6 h-6 text-electric-400" />;
      case "mobile-app-development":
        return <Smartphone className="w-6 h-6 text-electric-400" />;
      case "custom-software-development":
        return <Cpu className="w-6 h-6 text-electric-400" />;
      case "it-support-maintenance":
        return <ShieldCheck className="w-6 h-6 text-electric-400" />;
      default:
        return <Globe className="w-6 h-6 text-electric-400" />;
    }
  };

  return (
    <div className="group relative rounded-2xl bg-navy-900/80 border border-electric-500/15 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-electric-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-electric-500/10 h-full">
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center transition-transform group-hover:scale-105 flex-shrink-0">
            {getIcon()}
          </div>
          {badge && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-navy-800 text-electric-300 border border-white/5">
              {badge}
            </span>
          )}
        </div>

        <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
          {category}
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-electric-300 transition-colors min-h-[52px] sm:min-h-[56px] flex items-center">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed min-h-[64px] sm:min-h-[68px]">
          {shortDescription}
        </p>

        {/* Key Deliverables Highlights */}
        <div className="mt-auto pt-4 border-t border-white/5 space-y-2">
          <span className="text-xs font-semibold text-slate-300 block">
            What's Included:
          </span>
          <ul className="space-y-2 min-h-[104px]">
            {deliverables.slice(0, 4).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
        <Link
          href={`/services#${id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-400 hover:text-white transition-colors"
          aria-label={`Learn more about ${title} services`}
        >
          <span>Learn More</span>
          <span className="sr-only">about {title}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>

        {onSelectService && (
          <button
            onClick={() => onSelectService(id)}
            className="text-[11px] px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-electric-500 text-slate-300 hover:text-white transition font-medium active:scale-95"
            aria-label={`Inquire about ${title} service`}
          >
            Inquire
          </button>
        )}
      </div>
    </div>
  );
}
