import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Activity,
  ScanSearch,
  BrainCircuit,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

type Step = {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  cta?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

export default function PlatformPipeline() {
  const pipelineSteps: Step[] = useMemo(
    () => [
      {
        id: "s1",
        step: "STEP 01",
        title: "Patient Arrival & Smart Triage",
        subtitle: "Signal detection and priority triage in seconds.",
        icon: Activity,
      },
      {
        id: "s2",
        step: "STEP 02",
        title: "Rapid Assessment & Imaging Trigger",
        subtitle: "Protocols surfaced instantly—no hunting for info.",
        cta: "CALL TEAM",
        icon: ScanSearch,
      },
      {
        id: "s3",
        step: "STEP 03",
        title: "AI-Supported Clinical Decisions",
        subtitle: "Decision support that stays within clinician control.",
        cta: "TRANSFER READY",
        icon: BrainCircuit,
      },
      {
        id: "s4",
        step: "STEP 04",
        title: "Orchestrated Care & Escalation",
        subtitle: "One-click coordination across teams and pathways.",
        icon: Stethoscope,
      },
      {
        id: "s5",
        step: "STEP 05",
        title: "Audit-Ready Governance",
        subtitle: "Immutable action trail for safety and compliance.",
        icon: ShieldCheck,
      },
    ],
    []
  );

  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle steps (stable, no stacking / duplication)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
    }, 3200); // slower = cleaner
    return () => clearInterval(interval);
  }, [pipelineSteps.length]);

  // Anchor positions for the floating card (matches each row)
  // These are tuned for the row spacing used below.
  const floatTopByIndex = useMemo(() => {
    // row height ~ 96px (py + content). adjust if you change spacing.
    const base = 10; // padding offset inside panel
    const row = 96;
    return pipelineSteps.map((_, i) => base + i * row);
  }, [pipelineSteps]);

  const current = pipelineSteps[activeStep];
  const progressPct = Math.round(((activeStep + 1) / pipelineSteps.length) * 100);

  return (
    <section className="relative py-24 bg-[#020617] text-white overflow-hidden">
      {/* Background: subtle moving grid + glow (NOT blurry on content) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        />
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-cyan-500/12 blur-[110px]" />
        <div className="absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full bg-blue-600/12 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_72%)] opacity-90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest text-white/70">
                PLATFORM PIPELINE
              </div>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                Every critical moment,
                <span className="text-cyan-300"> clarity</span>.
              </h2>

              <p className="mt-5 text-white/70 text-lg max-w-xl">
                Diagnuvo ED™ coordinates signals, teams, and time-critical pathways
                into a single, auditable flow—so clinicians act faster with fewer clicks.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition">
                  See workflow
                </button>
                <button className="px-5 py-2.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/25 border border-cyan-400/30 text-cyan-100 transition">
                  Escalation clarity
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Pipeline Panel */}
          <div className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl overflow-hidden">
              {/* Inner padding */}
              <div className="relative p-7">
                {/* Vertical line */}
                <div className="absolute left-[34px] top-8 bottom-8 w-[2px] bg-white/10" />

                {/* Progress line */}
                <motion.div
                  className="absolute left-[34px] top-8 w-[2px] bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.45)]"
                  animate={{
                    height: `${(activeStep / (pipelineSteps.length - 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ transformOrigin: "top" }}
                />

                {/* Steps list */}
                <div className="space-y-6">
                  {pipelineSteps.map((s, i) => {
                    const Icon = s.icon;
                    const isActive = i === activeStep;
                    const isPast = i < activeStep;

                    return (
                      <div
                        key={s.id}
                        className="relative flex items-start gap-5 pl-3"
                        style={{ minHeight: 78 }}
                      >
                        {/* Icon */}
                        <div
                          className={[
                            "relative z-10 flex items-center justify-center w-14 h-14 rounded-full border transition",
                            isActive
                              ? "border-cyan-300 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.35)] bg-[#020617]"
                              : isPast
                              ? "border-cyan-300/40 text-cyan-200/60 bg-[#020617]"
                              : "border-white/15 text-white/35 bg-[#020617]",
                          ].join(" ")}
                        >
                          <Icon size={24} />
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-full border border-cyan-300/70"
                              animate={{ opacity: [1, 0], scale: [1, 1.55] }}
                              transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                            />
                          )}
                        </div>

                        {/* Text */}
                        <div className="pt-1">
                          <div className="text-xs tracking-[0.25em] text-cyan-200/70">
                            {s.step}
                          </div>
                          <div
                            className={[
                              "mt-1 font-semibold leading-snug",
                              isActive ? "text-white" : "text-white/75",
                            ].join(" ")}
                          >
                            {s.title}
                          </div>
                          <div className="mt-1 text-sm text-white/60">
                            {s.subtitle}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* ONE floating card only (no duplicates) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 14, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute right-7 w-[360px] max-w-[calc(100%-56px)] rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-xl"
                    style={{
                      top: floatTopByIndex[activeStep],
                    }}
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-xs tracking-[0.25em] text-cyan-200/75">
                          {current.step}
                        </div>
                        <div className="text-xs text-white/60">
                          {activeStep + 1}/{pipelineSteps.length}
                        </div>
                      </div>

                      <div className="mt-2 text-base font-semibold leading-snug text-white">
                        {current.title}
                      </div>
                      <div className="mt-1 text-sm text-white/70">
                        {current.subtitle}
                      </div>

                      {/* Progress bar */}
                      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full bg-cyan-300/80"
                          initial={{ width: 0 }}
                          animate={{ width: `${progressPct}%` }}
                          transition={{ duration: 0.45, ease: "easeInOut" }}
                        />
                      </div>

                      {/* CTA (optional) */}
                      {current.cta ? (
                        <button className="mt-3 w-full rounded-xl border border-white/15 bg-white/10 hover:bg-white/15 transition py-2 text-sm font-semibold text-white/90">
                          {current.cta}
                        </button>
                      ) : null}
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

            {/* soft outer glow */}
            <div className="pointer-events-none absolute -inset-8 rounded-[32px] bg-cyan-500/5 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
