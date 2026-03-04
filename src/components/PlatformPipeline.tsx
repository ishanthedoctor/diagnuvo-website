import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
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
  description: string;
  icon: React.ElementType;
  cta?: string;
};

export default function PlatformPipeline() {
  const steps: Step[] = useMemo(
    () => [
      {
        id: "s1",
        step: "STEP 01",
        title: "Patient Arrival & Smart Triage",
        description: "Signal detection and priority triage in seconds.",
        icon: Activity,
      },
      {
        id: "s2",
        step: "STEP 02",
        title: "Rapid Assessment & Imaging Trigger",
        description: "Protocols surfaced instantly—no hunting for info.",
        icon: ScanSearch,
        cta: "CALL TEAM",
      },
      {
        id: "s3",
        step: "STEP 03",
        title: "AI-Supported Clinical Decisions",
        description: "Decision support that stays within clinician control.",
        icon: BrainCircuit,
        cta: "TRANSFER READY",
      },
      {
        id: "s4",
        step: "STEP 04",
        title: "Orchestrated Care & Escalation",
        description: "One-click coordination across teams and pathways.",
        icon: Stethoscope,
      },
      {
        id: "s5",
        step: "STEP 05",
        title: "Audit-Ready Governance",
        description: "Immutable action trail for safety and compliance.",
        icon: ShieldCheck,
      },
    ],
    []
  );

  const [activeStep, setActiveStep] = useState(0);

  // Refs to each step row on the right so we can anchor the floating card precisely.
  const railRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [cardTop, setCardTop] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1400); // smoother + less frantic than 1200ms
    return () => clearInterval(interval);
  }, [steps.length]);

  const computeCardTop = () => {
    const rail = railRef.current;
    const row = rowRefs.current[activeStep];
    if (!rail || !row) return;

    const railRect = rail.getBoundingClientRect();
    const rowRect = row.getBoundingClientRect();

    // Center the card to the row, relative to rail container.
    const rowCenter = rowRect.top - railRect.top + rowRect.height / 2;

    // Card is ~140px tall; offset so its center aligns.
    const desiredTop = rowCenter - 70;

    // Clamp within rail bounds.
    const min = 8;
    const max = Math.max(8, rail.clientHeight - 148);
    setCardTop(Math.min(Math.max(desiredTop, min), max));
  };

  useLayoutEffect(() => {
    computeCardTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep]);

  useEffect(() => {
    const onResize = () => computeCardTop();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep]);

  const progressPct = (activeStep / (steps.length - 1)) * 100;

  return (
    <section className="relative py-24 bg-[#020617] text-white overflow-hidden">
      {/* Background: keep it sharp (less blur), add subtle grid + vignette */}
      <div className="absolute inset-0 pointer-events-none">
        {/* subtle animated grid */}
        <motion.div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }}
          transition={{ duration: 6, ease: "linear", repeat: Infinity }}
        />
        {/* glows (reduced blur so it doesn't look out of focus) */}
        <div className="absolute -top-24 -left-24 w-[520px] h-[520px] bg-cyan-500/10 rounded-full blur-[80px]" />
        <div className="absolute -bottom-28 -right-28 w-[620px] h-[620px] bg-blue-600/10 rounded-full blur-[90px]" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,6,23,0.75)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: text */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <p className="text-cyan-300/90 tracking-[0.18em] text-xs font-semibold">
            PLATFORM PIPELINE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
            Orchestrated emergency care,
            <span className="text-cyan-200"> step by step</span>.
          </h2>

          <p className="text-blue-100/85 text-lg leading-relaxed max-w-xl">
            Diagnuvo ED™ connects signals, protocols, and escalation into one
            workflow—so clinicians act faster with clarity, not clicks.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
              Real-time signal fusion
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
              Protocol activation
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
              Escalation clarity
            </span>
          </div>
        </motion.div>

        {/* RIGHT: vertical pipeline */}
        <div ref={railRef} className="relative">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 overflow-hidden">
            {/* subtle inner grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* rail */}
            <div className="absolute left-10 top-10 bottom-10 w-px bg-white/10" />
            <motion.div
              className="absolute left-10 top-10 w-px bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.7)]"
              animate={{ height: `${progressPct}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ bottom: "auto" }}
            />

            {/* Steps */}
            <div className="relative z-10 flex flex-col gap-7 pl-6">
              {steps.map((s, idx) => {
                const Icon = s.icon;
                const isActive = idx === activeStep;
                const isPast = idx < activeStep;

                return (
                  <div
                    key={s.id}
                    ref={(el) => {
                      rowRefs.current[idx] = el;
                    }}
                    className="relative flex items-start gap-5"
                  >
                    {/* Icon bubble */}
                    <div
                      className={[
                        "relative z-10 flex items-center justify-center rounded-full border-2 transition-all duration-500",
                        isActive
                          ? "w-14 h-14 border-cyan-300 text-cyan-200 shadow-[0_0_22px_rgba(34,211,238,0.55)] scale-110 bg-[#020617]"
                          : isPast
                          ? "w-12 h-12 border-cyan-300/50 text-cyan-200/60 bg-[#020617]"
                          : "w-12 h-12 border-white/15 text-white/35 bg-[#020617]",
                      ].join(" ")}
                    >
                      <Icon size={22} />
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border border-cyan-300/60"
                          animate={{ scale: [1, 1.35], opacity: [0.9, 0] }}
                          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                    </div>

                    {/* Text */}
                    <div className="pt-1">
                      <div className="text-cyan-200/85 text-xs font-semibold tracking-[0.18em]">
                        {s.step}
                      </div>

                      <div
                        className={[
                          "font-semibold leading-snug",
                          isActive ? "text-white text-xl" : "text-white/75 text-lg",
                        ].join(" ")}
                      >
                        {s.title}
                      </div>

                      <div className="text-blue-100/75 text-sm mt-1 max-w-sm">
                        {s.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating detail card anchored to active step (NO misplacement) */}
            <AnimatePresence>
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 16, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 10, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute right-8 w-[320px] max-w-[78%] z-20"
                style={{ top: `${cardTop}px` }}
              >
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl p-5">
                  <div className="text-cyan-200/85 text-xs font-semibold tracking-[0.18em]">
                    {steps[activeStep].step}
                  </div>

                  <div className="text-white font-semibold text-lg mt-1 leading-snug">
                    {steps[activeStep].title}
                  </div>

                  <div className="text-blue-100/80 text-sm mt-2 leading-relaxed">
                    {steps[activeStep].description}
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    {/* progress bar */}
                    <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-2 bg-cyan-300/90"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.2, ease: "linear" }}
                      />
                    </div>
                    <div className="text-white/55 text-xs font-medium">
                      {activeStep + 1}/{steps.length}
                    </div>
                  </div>

                  {steps[activeStep].cta && (
                    <div className="mt-4">
                      <button
                        type="button"
                        className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-sm font-semibold tracking-wide transition"
                      >
                        {steps[activeStep].cta}
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* note: on small screens, floating card overlaps; this keeps it usable */}
          <p className="mt-3 text-xs text-white/40">
            Tip: On mobile, the floating card appears over the panel by design.
          </p>
        </div>
      </div>
    </section>
  );
}
