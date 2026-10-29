import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  showTagline?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "badge-with-text" | "full-image";
  priority?: boolean;
}

export default function BrandLogo({
  showTagline = false,
  className = "",
  size = "md",
  priority = true,
}: BrandLogoProps) {
  // Height sizing for the brand logo graphic (aspect ratio approx 3.67:1)
  const sizeClasses = {
    sm: "h-10 sm:h-11 w-auto",
    md: "h-12 sm:h-14 md:h-16 w-auto",
    lg: "h-16 sm:h-20 w-auto",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex items-center transition-all duration-200 hover:opacity-95 active:scale-[0.98] ${className}`}
      aria-label="RK Group of IT Solutions - Home"
    >
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
        <Image
          src="/brand-solutions-logo.png"
          alt="RK Group of IT Solutions - Your Vision | Our Innovation"
          width={987}
          height={269}
          className="h-full w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(0,102,255,0.28)] transition-transform duration-200 group-hover:scale-[1.02]"
          priority={priority}
        />
      </div>
    </Link>
  );
}
