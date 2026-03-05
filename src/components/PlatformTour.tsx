import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import {
  Activity,
  ShieldAlert,
  Zap,
  Lock,
  ChevronRight,
  Phone,
  ArrowRight,
  ActivitySquare,
  BrainCircuit,
} from "lucide-react";

const CLINICIAN_NAME = "Dr Ishanjit Singh Sandhu";

const steps = [
  {
    step: "STEP 01",
    title: "Patient Arrival & Smart Triage",
    subtitle: "Signal detection and priority triage in seconds.",
    icon: Activity,
    panelTitle: "TRIAGE QUEUE",
    panelItems: [
      { label: "John Smith", badge: "HIGH", tone: "red" },
      { label: "Sarah Jenkins", badge: "MEDIUM", tone: "amber" },
      { label: "Michael Chen", badge: "LOW", tone: "cyan" },
    ],
    footer: "Live signal detection",
  },
  {
    step: "STEP 02",
    title: "Rapid Assessment & Imaging Trigger",
    subtitle: "Protocols surfaced instantly—no hunting for info.",
    icon: ActivitySquare,
    panelTitle: "RECOMMENDED ACTIONS",
    panelItems: [
      { label: "Call Neurology", badge: "", tone: "cyan" },
      { label: "Initiate Transfer", badge: "", tone: "white" },
      { label: "Prepare Intubation", badge: "", tone: "white" },
      { label: "Call IR", badge: "", tone: "white" },
    ],
    footer: "Stroke call activated",
  },
  {
    step: "STEP 03",
    title: "Critical Risk Escalation",
    subtitle: "Severe cases trigger a visible escalation alert and checklist.",
    icon: ShieldAlert,
    panelTitle: "ESCALATION",
    panelItems: [
      { label: "REASSESS NOW", badge: "ACTIVE", tone: "red" },
      { label: "ICU Probability", badge: "HIGH", tone: "red" },
      { label: "Escalation Status", badge: "ACTIVE", tone: "red" },
    ],
    footer: "Audit-ready escalation trail",
  },
  {
    step: "STEP 04",
    title: "Workflow Orchestration",
    subtitle: "One-click protocol activation. Coordinate teams instantly.",
    icon: Zap,
    panelTitle: "WORKFLOW",
    panelItems: [
      { label: "Call Team", badge: "", tone: "cyan" },
      { label: "Initiate Transfer", badge: "", tone: "white" },
      { label: "Prepare Airway", badge: "", tone: "white" },
    ],
    footer: "Actions orchestrated",
  },
];

function Badge({ text, tone }: { text: string; tone: "red" | "amber" | "cyan" | "white" }) {
  const cls =
    tone === "red"
      ? "bg-red-500/15 text-red-200 border-red-400/25"
      : tone === "amber"
      ? "bg-amber-500/15 text-amber-200 border-amber-400/25"
      : tone === "cyan"
      ? "bg-cyan-500/15 text-cyan-200 border-cyan-400/25"
      : "bg-white/10 text-white/70 border-white/15";

  if (!text) return null;

  return (
    <span className={`px-2 py-0.5 text-[11px] rounded-full border ${cls}`}>
      {text}
    </span>
  );
}

export default function PlatformTour() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const railTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveStep(0);
    else if (latest < 0.5) setActiveStep(1);
    else if (latest < 0.75) setActiveStep(2);
    else setActiveStep(3);
  });

  const current = steps[activeStep];
  const Icon = current.icon;

  return (
    <section
      id="platform"
      ref={containerRef}
      className="relative bg-[#020617] text-white h-[400vh] scroll-mt-20 overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden relative">

        {/* background grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 35%, rgba(34,211,238,0.18), transparent 55%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/40" />
        </div>

        {/* fixed rail */}
<div className="pointer-events-none absolute left-6 md:left-12 top-0 h-full w-[80px] z-30 hidden lg:block">
  {/* Base rail (full height, dim) */}
  <div className="absolute top-0 left-[26px] h-full w-[2px] bg-white/10" />

  {/* Glowing rail: starts at the dot (50%) and grows DOWN */}
  <motion.div
    className="absolute left-[26px] w-[2px] bg-cyan-300"
    style={{
      top: "50%",
      scaleY: progressY,
      transformOrigin: "top",
      boxShadow: "0 0 18px rgba(34,211,238,0.35)",
      height: "50%",
    }}
  />

  {/* Dot (start point) */}
  <div
    className="absolute top-1/2 -translate-y-1/2 left-[-18px] w-4 h-4 rounded-full border border-cyan-300/40 bg-[#020617]"
    style={{ boxShadow: "0 0 18px rgba(34,211,238,0.35)" }}
  />
</div>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                {current.title}
              </h2>

              <p className="mt-5 text-white/70 text-lg max-w-xl">
                {current.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition">
                  Explore platform
                </button>
                <button className="px-5 py-2.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/25 border border-cyan-400/30 text-cyan-100 transition">
                  Escalation clarity
                </button>
              </div>

              <div className="mt-8 text-xs text-white/40">
                {CLINICIAN_NAME}
              </div>
            </div>

            {/* right card */}
            <div className="relative">
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl overflow-hidden">

                <div className="p-7">

                  <div className="flex items-start justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-cyan-300/40 bg-[#020617]">
                        <Icon size={22} className="text-cyan-200" />
                      </div>

                      <div>
                        <div className="text-xs tracking-[0.25em] text-cyan-200/70">
                          {current.step}
                        </div>
                        <div className="text-lg font-semibold mt-1">
                          {current.title}
                        </div>
                      </div>

                    </div>

                    <div className="text-xs text-white/60">
                      {activeStep + 1}/{steps.length}
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
