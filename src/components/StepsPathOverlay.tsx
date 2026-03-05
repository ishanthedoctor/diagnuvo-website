import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

type Props = {
  targetRef: React.RefObject<HTMLElement>;
};

export default function StepsPathOverlay({ targetRef }: Props) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const p = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <svg
      className="pointer-events-none fixed inset-0 z-30"
      viewBox="0 0 1440 800"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Left start dot */}
      <circle cx="220" cy="420" r="10" fill="rgba(0,0,0,0.9)" />
      <circle
        cx="220"
        cy="420"
        r="18"
        fill="none"
        stroke="rgba(90,231,255,0.25)"
        strokeWidth="2"
      />

      {/* Faint base path */}
      <path
        d="M220 420 C 420 420, 520 300, 720 320 S 1020 460, 1180 360 S 1340 340, 1400 380"
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="3"
      />

      {/* Glowing scroll-drawn path */}
      <motion.path
        d="M220 420 C 420 420, 520 300, 720 320 S 1020 460, 1180 360 S 1340 340, 1400 380"
        fill="none"
        stroke="rgba(90,231,255,0.95)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#glow)"
        style={{ pathLength: p }}
      />

      {/* End dot */}
      <circle
        cx="1400"
        cy="380"
        r="7"
        fill="rgba(90,231,255,0.95)"
        filter="url(#glow)"
      />
      <circle
        cx="1400"
        cy="380"
        r="14"
        fill="none"
        stroke="rgba(90,231,255,0.55)"
        strokeWidth="2"
      />
    </svg>
  );
}
