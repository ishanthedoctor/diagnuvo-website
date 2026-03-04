import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Activity,
  Scan,
  BrainCircuit,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

type Step = {
  id: string;
  step: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: number }>;
  accent: "cyan" | "blue";
  action?: string;
};

export default function PlatformPipeline() {
  const pipelineSteps: Step[] = useMemo(
    () => [
      {
        id: "s1",
        step: "STEP 01",
        title: "Patient Arrival & Smart Triage",
        description: "Signal detection and priority triage in seconds.",
        Icon: Activity,
        accent: "cyan",
      },
      {
        id: "s2",
        step: "STEP 02",
        title: "Rapid Assessment & Imaging Trigger",
        description: "Protocols surfaced instantly—no hunting for info.",
        Icon: Scan,
        accent: "cyan",
        action: "CALL TEAM",
      },
      {
        id: "s3",
        step: "STEP 03",
        title: "AI-Supported Clinical Decisions",
        description: "Decision support that stays within clinician control.",
        Icon: BrainCircuit,
        accent: "cyan",
        action: "TRANSFER READY",
      },
      {
        id: "s4",
        step: "STEP 04",
        title: "Orchestrated Care & Escalation",
        description: "One-click coordination across teams and pathways.",
        Icon: Stethoscope,
        accent: "blue",
      },
      {
        id: "s5",
        step: "STEP 05",
        title: "Audit-Ready Governance",
        description: "Immutable action trail for safety and compliance.",
        Icon: ShieldCheck,
        accent: "blue",
      },
    ],
    []
  );

  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
    }, 1400); // smooth, readable pace
    return () => clearInterval(interval);
  }, [pipelineSteps.length]);

  // Anchored card positions to prevent “misplaced” labels
  // These are relative to the right panel container.
  const cardPositions = useMemo(
    () => [
      { top: "12%", left: "58%" }, // step 1
      { top: "26%", left: "64%" }, // step 2
      { top: "44%", left: "60%" }, // step 3
      { top: "62%", left: "56%" }, // step 4
      { top: "78%", left: "54%" }, // step 5
    ],
    []
  );

  const current = pipelineSteps[activeStep];
  const currentPos = cardPositions[activeStep] ?? cardPositions[0];

  const progressPct =
    pipelineSteps.length <= 1
      ? 0
      : (activeStep / (pipelineSteps.length - 1)) * 100;

  return (
    <section className="relative py-24 bg-[#020617] text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* subtle animated grid */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }}
          transition={{ duration: 6, ease: "linear", repeat: Infinity }}
        />
        {/* glows */}
        <div className="absolute -top-24 left-1/4 w-[620px] h-[620px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-24 right-1/4 w-[760px] h-[760px] bg-blue-600/10 rounded-full blur-[160px]" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)] opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              A Clinical Workflow Pipeline
              <span className="block text-white/70 mt-3 text-xl md:text-2xl font-semibold">
                From arrival → imaging → decision → escalation → audit
              </span>
            </motion.h2>

            <div className="mt-10 space-y-6">
              {pipelineSteps.map((s, idx) => {
                const isActive = idx === activeStep;
                const isPast = idx < activeStep;

                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className="w-full text-left"
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : isPast ? 0.75 : 0.55,
                        y: isActive ? 0 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      className={[
                        "rounded-2xl border backdrop-blur-md px-5 py-4",
                        isActive
                          ? "border-cyan-300/40 bg-white/8"
                          : "border-white/10 bg-white/5 hover:bg-white/6 hover:border-white/20",
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={[
                            "mt-0.5 w-11 h-11 rounded-xl flex items-center justify-center border",
                            isActive
                              ? "border-cyan-300/40 bg-cyan-400/10"
                              : "border-white/10 bg-white/5",
                          ].join(" ")}
                        >
                          <s.Icon size={20} />
                        </div>

                        <div className="flex-1">
                          <div className="text-xs font-semibold tracking-widest text-cyan-200/80">
                            {s.step}
                          </div>
                          <div className="mt-1 text-lg md:text-xl font-semibold">
                            {s.title}
                          </div>
                          <div className="mt-1 text-sm md:text-base text-white/70">
                            {s.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-xl h-[640px] md:h-[680px]">
              {/* vertical line */}
              <div className="absolute left-[34px] top-10 bottom-10 w-[2px] bg-white/10 rounded-full" />
              <motion.div
                className="absolute left-[34px] top-10 w-[2px] bg-cyan-300/70 rounded-full shadow-[0_0_18px_rgba(34,211,238,0.55)]"
                animate={{ height: `${progressPct}%` }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />

              {/* step nodes */}
              <div className="absolute left-0 top-10 bottom-10 flex flex-col justify-between">
                {pipelineSteps.map((s, idx) => {
                  const isActive = idx === activeStep;
                  const isPast = idx < activeStep;

                  return (
                    <div key={s.id} className="flex items-center gap-4">
                      <div
                        className={[
                          "w-[70px] h-[70px] rounded-full flex items-center justify-center border transition-all duration-300",
                          isActive
                            ? "border-cyan-300/60 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.35)] scale-[1.06]"
                            : isPast
                            ? "border-cyan-300/25 bg-white/6"
                            : "border-white/10 bg-white/4",
                        ].join(" ")}
                      >
                        <s.Icon size={26} />
                      </div>

                      <div className="hidden md:block">
                        <div className="text-xs font-semibold tracking-widest text-cyan-200/80">
                          {s.step}
                        </div>
                        <div className="text-base font-semibold text-white/90">
                          {s.title}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Floating card - anchored to container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 24, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={[
                    "absolute z-20 min-w-[260px] max-w-[340px]",
                    "rounded-2xl border backdrop-blur-xl shadow-2xl",
                    "bg-white/7 border-white/12",
                  ].join(" ")}
                  style={{
                    top: currentPos.top,
                    left: currentPos.left,
                    transform: "translate(-10%, -50%)",
                  }}
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-semibold tracking-widest text-cyan-200/80">
                          {current.step}
                        </div>
                        <div className="mt-1 text-base font-semibold">
                          {current.title}
                        </div>
                      </div>

                      {current.action ? (
                        <span className="shrink-0 text-[11px] font-semibold px-3 py-1 rounded-full border border-cyan-300/30 bg-cyan-400/10 text-cyan-200">
                          {current.action}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-2 text-sm text-white/75">
                      {current.description}
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-[6px] flex-1 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full bg-cyan-300/70"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.0, ease: "linear" }}
                        />
                      </div>
                      <div className="text-[11px] text-white/60">
                        {activeStep + 1}/{pipelineSteps.length}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* subtle right-panel plate to “feel” like the other sections */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
