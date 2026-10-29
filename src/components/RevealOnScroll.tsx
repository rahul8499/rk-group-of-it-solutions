"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in milliseconds
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  threshold?: number;
}

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.15,
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once revealed, unobserve to keep rendered smoothly
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-10 opacity-0";
      case "down":
        return "-translate-y-10 opacity-0";
      case "left":
        return "translate-x-10 opacity-0";
      case "right":
        return "-translate-x-10 opacity-0";
      case "scale":
        return "scale-95 opacity-0";
      case "fade":
      default:
        return "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: "700ms",
      }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? "translate-y-0 translate-x-0 scale-100 opacity-100"
          : getInitialTransform()
      } ${className}`}
    >
      {children}
    </div>
  );
}
