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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [pipelineSteps.length]);

  const floatTopByIndex = useMemo(() => {
    const base = 10;
    const row = 96;
    return pipelineSteps.map((_, i) => base + i * row);
  }, [pipelineSteps]);

  const current = pipelineSteps[activeStep];
  const progressPct = Math.round(((activeStep + 1) / pipelineSteps.length) * 100);

  return (
    <section className="relative py-24 bg-[#020617] text-white overflow-hidden">

      {/* background grid */}
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT TEXT */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest text-white/70">
              PLATFORM PIPELINE
            </div>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Every critical moment,
              <span className="text-cyan-300"> clarity</span>.
            </h2>

            <p className="mt-5 text-white/70 text-lg max-w-xl">
              Diagnuvo ED™ coordinates signals, teams, and time-critical pathways
              into a single auditable flow.
            </p>
          </div>

          {/* RIGHT PANEL */}
          <div className="relative">

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl overflow-hidden">
              <div className="relative p-7">

                {/* PIPELINE LINE */}
                <div className="absolute left-[42px] top-0 bottom-0 w-[2px] bg-white/10" />

                <motion.div
                  className="absolute left-[42px] top-0 w-[2px] bg-cyan-400"
                  animate={{
                    height: `${((activeStep + 1) / pipelineSteps.length) * 100}%`
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* STEPS */}
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

                        {/* ICON */}
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
                              transition={{
                                duration: 1.4,
                                repeat: Infinity,
                                ease: "easeOut"
                              }}
                            />
                          )}
                        </div>

                        {/* TEXT */}
                        <div className="pt-1">
                          <div className="text-xs tracking-[0.25em] text-cyan-200/70">
                            {s.step}
                          </div>

                          <div
                            className={[
                              "mt-1 font-semibold",
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

                {/* FLOAT CARD */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 14, y: 6 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 10, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="absolute right-7 w-[360px] rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-xl"
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

                      <div className="mt-2 text-base font-semibold text-white">
                        {current.title}
                      </div>

                      <div className="mt-1 text-sm text-white/70">
                        {current.subtitle}
                      </div>

                      {/* progress bar */}
                      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">

                        <motion.div
                          className="h-full bg-cyan-300/80"
                          initial={{ width: 0 }}
                          animate={{ width: `${progressPct}%` }}
                          transition={{ duration: 0.4 }}
                        />

                      </div>

                      {current.cta && (
                        <button className="mt-3 w-full rounded-xl border border-white/15 bg-white/10 hover:bg-white/15 transition py-2 text-sm font-semibold">
                          {current.cta}
                        </button>
                      )}

                    </div>

                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

            <div className="pointer-events-none absolute -inset-8 rounded-[32px] bg-cyan-500/5 blur-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
