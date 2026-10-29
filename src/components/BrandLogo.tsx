import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  showTagline?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "badge-with-text" | "full-image";
}

export default function BrandLogo({
  showTagline = false,
  className = "",
  size = "md",
  variant = "badge-with-text",
}: BrandLogoProps) {
  const iconDimensions = {
    sm: { width: 36, height: 44, className: "w-9 h-auto" },
    md: { width: 48, height: 58, className: "w-11 sm:w-12 h-auto" },
    lg: { width: 62, height: 75, className: "w-14 sm:w-16 h-auto" },
  };

  const textSizes = {
    sm: "text-base font-bold",
    md: "text-lg sm:text-xl font-black",
    lg: "text-2xl sm:text-3xl font-black",
  };

  const subTextSizes = {
    sm: "text-[9px] tracking-wider font-semibold",
    md: "text-[10px] sm:text-[11px] tracking-widest font-bold",
    lg: "text-xs tracking-widest font-bold",
  };

  if (variant === "full-image") {
    return (
      <Link
        href="/"
        className={`group inline-flex items-center transition-opacity hover:opacity-95 ${className}`}
        aria-label="RK Group of IT Solutions - Home"
      >
        <div className="relative h-12 sm:h-14 w-auto">
          <Image
            src="/rk-logo.png"
            alt="RK Group of IT Solutions"
            width={240}
            height={100}
            className="h-full w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(0,102,255,0.25)]"
            priority
          />
        </div>
      </Link>
    );
  }

  const dim = iconDimensions[size];

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-95 ${className}`}
      aria-label="RK Group of IT Solutions - Home"
    >
      {/* Real 3D Isometric RK Emblem Icon */}
      <div
        className={`relative ${dim.className} flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
      >
        <Image
          src="/rk-emblem.png"
          alt="RK Group of IT Solutions 3D Logo"
          width={dim.width * 2} // 2x for Retina sharpness
          height={dim.height * 2}
          className="w-full h-auto object-contain filter drop-shadow-[0_2px_10px_rgba(0,102,255,0.35)]"
          priority
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black tracking-tight text-white ${textSizes[size]}`}
          >
            RK Group
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />
        </div>
        <span
          className={`font-bold uppercase text-electric-400 mt-1 ${subTextSizes[size]}`}
        >
          of IT Solutions
        </span>
        {showTagline && (
          <span className="text-[11px] text-slate-400 mt-1 hidden sm:block font-medium">
            Your Vision | Our Code | Better Tomorrow
          </span>
        )}
      </div>
    </Link>
  );
}
