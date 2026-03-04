import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Activity,
  ScanLine,
  Stethoscope,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

type PipelineStep = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
};

type FloatingCard = {
  id: string;
  text: string;
  top: string;
  left: string;
  bg: string;
  border: string;
  color: string;
};

const pipelineSteps: PipelineStep[] = [
  {
    id: "step-01",
    label: "STEP 01",
    title: "Patient Arrival & Smart Triage",
    subtitle: "Signal detection and priority triage in seconds.",
    icon: Activity,
  },
  {
    id: "step-02",
    label: "STEP 02",
    title: "Rapid Assessment & Imaging Trigger",
    subtitle: "Protocols surfaced instantly—no hunting for info.",
    icon: ScanLine,
  },
  {
    id: "step-03",
    label: "STEP 03",
    title: "AI-Supported Clinical Decisions",
    subtitle: "Decision support that stays within clinician control.",
    icon: BrainCircuit,
  },
  {
    id: "step-04",
    label: "STEP 04",
    title: "Orchestrated Care & Escalation",
    subtitle: "One-click coordination across teams and pathways.",
    icon: Stethoscope,
  },
  {
    id: "step-05",
    label: "STEP 05",
    title: "Audit-Ready Governance",
    subtitle: "Immutable action trail for safety and compliance.",
    icon: ShieldCheck,
  },
];

const floatingCardsByStep: Record<number, FloatingCard[]> = {
  0: [
    {
      id: "c1",
      text: "TRIAGE QUEUE",
      top: "10%",
      left: "58%",
      bg: "bg-white/5",
      border: "border-white/10",
      color: "text-cyan-200",
    },
    {
      id: "c2",
      text: "HIGH: John Smith",
      top: "22%",
      left: "62%",
      bg: "bg-red-500/10",
      border: "border-red-400/20",
      color: "text-red-200",
    },
    {
      id: "c3",
      text: "MEDIUM: Sarah Jenkins",
      top: "34%",
      left: "60%",
      bg: "bg-amber-500/10",
      border: "border-amber-400/20",
      color: "text-amber-200",
    },
    {
      id: "c4",
      text: "LOW: Michael Chen",
      top: "46%",
      left: "61%",
      bg: "bg-emerald-500/10",
      border: "border-emerald-400/20",
      color: "text-emerald-200",
    },
  ],
  1: [
    {
      id: "c1",
      text: "CT REQUESTED",
      top: "18%",
      left: "60%",
      bg: "bg-cyan-500/10",
      border: "border-cyan-400/20",
      color: "text-cyan-200",
    },
    {
      id: "c2",
      text: "Door-to-CT: 9m",
      top: "33%",
      left: "62%",
      bg: "bg-white/5",
      border: "border-white/10",
      color: "text-blue-100",
    },
  ],
  2: [
    {
      id: "c1",
      text: "RISK PANEL",
      top: "18%",
      left: "60%",
      bg: "bg-white/5",
      border: "border-white/10",
      color: "text-blue-100",
    },
    {
      id: "c2",
      text: "ICU Probability ↑",
      top: "33%",
      left: "62%",
      bg: "bg-cyan-500/10",
      border: "border-cyan-400/20",
      color: "text-cyan-200",
    },
  ],
  3: [
    {
      id: "c1",
      text: "CALL TEAM",
      top: "20%",
      left: "60%",
      bg: "bg-white/5",
      border: "border-white/10",
      color: "text-blue-100",
    },
    {
      id: "c2",
      text: "TRANSFER READY",
      top: "38%",
      left: "62%",
      bg: "bg-cyan-500/10",
      border: "border-cyan-400/20",
      color: "text-cyan-200",
    },
  ],
  4: [
    {
      id: "c1",
      text: "AUDIT LOG",
      top: "22%",
      left: "60%",
      bg: "bg-white/5",
      border: "border-white/10",
      color: "text-blue-100",
    },
    {
      id: "c2",
      text: "IMMUTABLE",
      top: "40%",
      left: "62%",
      bg: "bg-cyan-500/10",
      border: "border-cyan-400/20",
      color: "text-cyan-200",
    },
  ],
};

export default function PlatformPipeline() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
    }, 1200); // ~6s loop for 5 steps
    return () => clearInterval(interval);
  }, []);

  const step = pipelineSteps[activeStep];
  const cards = floatingCardsByStep[activeStep] ?? [];

  return (
    <section className="relative py-28 bg-[#020617] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle animated grid */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        />

        {/* Cyan glow gradients */}
        <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[680px] h-[680px] bg-blue-600/10 rounded-full blur-[170px]" />

        {/* Vignette edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_72%)] opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-200/90 bg-white/5 border border-white/10 rounded-full px-3 py-1 w-fit">
            PLATFORM PIPELINE
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
            Orchestrated Emergency Workflows
          </h2>

          <p className="mt-5 text-blue-100/80 text-lg leading-relaxed max-w-xl">
            A single intelligence layer that unifies signals, detects deterioration,
            and drives protocol execution—without breaking clinical flow.
          </p>

          <div className="mt-10">
            <div className="text-cyan-200 text-sm font-semibold tracking-widest">
              {step.label}
            </div>
            <div className="mt-2 text-2xl md:text-3xl font-bold">
              {step.title}
            </div>
            <div className="mt-2 text-blue-100/80">{step.subtitle}</div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-[760px] flex items-center justify-center">
          {/* Visual container */}
          <div className="relative w-full max-w-xl">
            {/* Vertical pipeline line background */}
            <div className="absolute left-[31px] top-8 bottom-8 w-0.5 bg-white/10 rounded-full" />

            {/* Animated progress line */}
            <motion.div
              className="absolute left-[31px] top-8 w-0.5 bg-cyan-400 rounded-full shadow-[0_0_18px_rgba(34,211,238,0.75)]"
              animate={{
                height: `${(activeStep / (pipelineSteps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ bottom: "auto" }}
            />

            {/* Steps */}
            <div className="flex flex-col justify-between h-[640px] relative z-10 py-6">
              {pipelineSteps.map((s, index) => {
                const isActive = index === activeStep;
                const isPast = index <= activeStep;
                const Icon = s.icon;

                return (
                  <div key={s.id} className="relative flex items-center gap-6">
                    <div
                      className={[
                        "relative flex items-center justify-center w-16 h-16 rounded-full border-2 transition-all duration-500 bg-[#020617]",
                        isActive
                          ? "border-cyan-400 text-cyan-200 shadow-[0_0_22px_rgba(34,211,238,0.55)] scale-110"
                          : isPast
                          ? "border-cyan-400/50 text-cyan-200/60"
                          : "border-white/10 text-white/30",
                      ].join(" ")}
                    >
                      <Icon size={28} />
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border border-cyan-400"
                          animate={{ scale: [1, 1.6], opacity: [1, 0] }}
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="text-xs font-semibold tracking-widest text-cyan-200/80">
                        {s.label}
                      </div>
                      <div
                        className={[
                          "mt-1 font-semibold leading-tight",
                          isActive ? "text-white text-xl" : "text-white/70 text-lg",
                        ].join(" ")}
                      >
                        {s.title}
                      </div>
                      <div className="mt-1 text-sm text-blue-100/70">
                        {s.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating UI cards */}
            <AnimatePresence>
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 16, y: 8 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 10, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className={[
                    "absolute z-20 px-4 py-2 rounded-xl border backdrop-blur-md shadow-xl",
                    card.bg,
                    card.border,
                  ].join(" ")}
                  style={{ top: card.top, left: card.left }}
                >
                  <span className={["text-sm font-bold tracking-wide", card.color].join(" ")}>
                    {card.text}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
