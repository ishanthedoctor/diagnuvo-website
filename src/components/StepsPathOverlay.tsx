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

      {/* DEBUG: you MUST see this red square. Remove later. */}
      <rect x="20" y="20" width="60" height="60" fill="red" />

      {/* Start dot */}
      <circle cx="220" cy="420" r="10" fill="rgba(0,0,0,0.95)" />
      <circle
        cx="220"
        cy="420"
        r="20"
        fill="none"
        stroke="rgba(90,231,255,0.8)"
        strokeWidth="2"
      />

      {/* Base path */}
      <path
        d="M220 420 C 420 420, 520 300, 720 320 S 1020 460, 1180 360 S 1340 340, 1400 380"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="4"
      />

      {/* Glowing progress path */}
      <motion.path
        d="M220 420 C 420 420, 520 300, 720 320 S 1020 460, 1180 360 S 1340 340, 1400 380"
        fill="none"
        stroke="rgba(90,231,255,1)"
        strokeWidth="6"
        strokeLinecap="round"
        filter="url(#glow)"
        style={{ pathLength: p }}
      />

      {/* End dot */}
      <circle cx="1400" cy="380" r="8" fill="rgba(90,231,255,1)" filter="url(#glow)" />
      <circle
        cx="1400"
        cy="380"
        r="16"
        fill="none"
        stroke="rgba(90,231,255,0.9)"
        strokeWidth="2"
      />
    </svg>
  );
}
