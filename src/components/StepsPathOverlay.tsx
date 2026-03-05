import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  targetRef: React.RefObject<HTMLElement | null>;
};

export default function StepsPathOverlay({ targetRef }: Props) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // scroll 0..1 → draw 0..1
  const p = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <svg
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
      viewBox="0 0 1440 800"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 🔧 TUNE THESE 2 POINTS to match your dots */}
      {/* Left dot (start) */}
      <circle cx="170" cy="430" r="10" fill="rgba(0,0,0,0.95)" />
      <circle
        cx="170"
        cy="430"
        r="18"
        fill="none"
        stroke="rgba(90,231,255,0.35)"
        strokeWidth="2"
      />

      {/* Right dot (end / Step 7) */}
      <circle cx="1370" cy="365" r="8" fill="rgba(90,231,255,1)" filter="url(#glow)" />
      <circle
        cx="1370"
        cy="365"
        r="14"
        fill="none"
        stroke="rgba(90,231,255,0.55)"
        strokeWidth="2"
      />

      {/* ✅ Only ONE line (no grey base line) */}
      <motion.path
        d="M170 430 C 420 520, 560 300, 820 355 S 1120 470, 1370 365"
        fill="none"
        stroke="rgba(90,231,255,1)"
        strokeWidth="6"
        strokeLinecap="round"
        filter="url(#glow)"
        style={{ pathLength: p }}
      />
    </svg>
  );
}
