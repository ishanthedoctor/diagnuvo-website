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

const steps = [
  {
    title: "Unify ED Signals",
    description: "Ingest vitals, labs, and EMS data in real-time. No more fragmented charts.",
    icon: Activity,
  },
  {
    title: "Risk & Detection Engines",
    description: "Continuous AI monitoring detects subtle deterioration before it becomes critical.",
    icon: BrainCircuit,
  },
  {
    title: "Workflow Orchestration",
    description: "One-click protocol activation. Coordinate teams instantly without phone tag.",
    icon: Zap,
  },
  {
    title: "Audit-Ready Governance",
    description: "Every action, timestamped and immutable. Built for compliance and quality review.",
    icon: Lock,
  },
];

const CLINICIAN_NAME = "Dr Ishanjit Singh Sandhu";

export default function PlatformTour() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ✅ Stable: no .to() usage
  const glowTop = useTransform(scrollYProgress, [0, 1], ["4%", "96%"]);

  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveStep(0);
    else if (latest < 0.5) setActiveStep(1);
    else if (latest < 0.75) setActiveStep(2);
    else setActiveStep(3);
  });

  return (
    <section
      id="platform"
      ref={containerRef}
      className="relative bg-[#020617] text-white h-[400vh] scroll-mt-20"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 bg-[#020617]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50" />
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col justify-center h-full py-20">
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                Diagnuvo ED™{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  features
                </span>
              </h2>

              {/* ✅ Only text inside <p> */}
              <p className="text-white/60 text-lg max-w-md">
                A unified intelligence layer that transforms raw emergency data into orchestrated action.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative flex flex-col gap-12">
              {/* Vertical line background */}
              <div className="absolute left-[23px] top-4 bottom-4 w-px bg-white/10" />

              {/* Vertical line progress */}
              <motion.div
                className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-cyan-400 origin-top shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                style={{ scaleY: scrollYProgress }}
              />

              {/* Moving glow head */}
              <motion.div
                className="absolute left-[23px] -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.9)]"
                style={{ top: glowTop }}
              />

              {steps.map((step, i) => (
                <div key={i} className="relative pl-14">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-cyan-400" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      <p className="text-sm text-white/60 mt-1 max-w-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Demo Panel */}
          <div className="relative h-[500px] md:h-[600px] w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 rounded-2xl border border-cyan-500/0 group-hover:border-cyan-500/30 transition-colors duration-500 pointer-events-none" />

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: activeStep === 0 ? 1 : 0,
                scale: activeStep === 0 ? 1 : 0.95,
                pointerEvents: activeStep === 0 ? "auto" : "none",
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-8 flex flex-col items-center justify-center"
            >
              <div className="relative w-full max-w-sm">
                <motion.div
                  animate={activeStep === 0 ? { y: [20, 0], opacity: [0, 1] } : { opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute -top-16 -left-8 md:-left-12 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-lg z-20"
                >
                  <div className="text-xs text-cyan-300 font-mono mb-1">EMS ETA: 4m</div>
                  <div className="text-sm text-white font-medium">Chest Pain, 65M</div>
                </motion.div>

                <motion.div
                  animate={activeStep === 0 ? { x: [20, 0], opacity: [0, 1] } : { opacity: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute -right-4 md:-right-8 top-12 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-lg z-20"
                >
                  <div className="text-xs text-rose-400 font-mono mb-1">LAB ALERT</div>
                  <div className="text-sm text-white font-medium">Trop: 0.08 ng/mL</div>
                </motion.div>

                <motion.div
                  animate={activeStep === 0 ? { y: [-20, 0], opacity: [0, 1] } : { opacity: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -bottom-12 left-4 md:left-8 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-lg z-20"
                >
                  <div className="text-xs text-emerald-400 font-mono mb-1">VITALS</div>
                  <div className="text-sm text-white font-medium">BP: 165/90 HR: 110</div>
                </motion.div>

                <div className="bg-[#0a1128] border border-cyan-500/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)] relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-white">John Smith</h4>
                      <div className="text-sm text-white/60 mt-1">MRN: 882910 • DOB: 04/12/1958</div>
                    </div>
                    <div className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/30">
                      ESI 2
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                        initial={{ width: 0 }}
                        animate={activeStep === 0 ? { width: "100%" } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                    </div>
                    <div className="text-xs text-center text-cyan-400 font-mono uppercase tracking-wider">
                      Context Unified
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: activeStep === 1 ? 1 : 0,
                scale: activeStep === 1 ? 1 : 0.95,
                pointerEvents: activeStep === 1 ? "auto" : "none",
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-8 flex flex-col items-center justify-center"
            >
              <div className="w-full max-w-sm bg-[#0a1128] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                  <ActivitySquare className="text-rose-400" />
                  <h4 className="text-lg font-semibold text-white">Sepsis Risk Engine</h4>
                </div>

                <div className="relative h-32 flex items-end justify-between gap-2 mb-6">
                  {[20, 35, 45, 60, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: activeStep === 1 ? `${h}%` : 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className={`w-full rounded-t-md ${
                        i === 4 ? "bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)]" : "bg-white/20"
                      }`}
                    />
                  ))}
                  <div className="absolute top-1/3 left-0 right-0 border-t border-dashed border-rose-500/50" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: activeStep === 1 ? 1 : 0, y: activeStep === 1 ? 0 : 10 }}
                  transition={{ delay: 0.8 }}
                  className="bg-rose-500/20 border border-rose-500/50 rounded-lg p-3 flex items-center justify-between shadow-[0_0_20px_rgba(244,63,94,0.2)]"
                >
                  <div className="flex items-center gap-2 text-rose-400">
                    <ShieldAlert size={18} />
                    <span className="font-bold text-sm tracking-wide">REASSESS NOW</span>
                  </div>
                  <span className="text-xs text-rose-300 font-mono">Score: 8.4</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: activeStep === 2 ? 1 : 0,
                scale: activeStep === 2 ? 1 : 0.95,
                pointerEvents: activeStep === 2 ? "auto" : "none",
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-8 flex flex-col items-center justify-center"
            >
              <div className="w-full max-w-sm">
                <h4 className="text-white/60 text-sm font-medium mb-4 uppercase tracking-wider text-center">
                  Recommended Actions
                </h4>
                <div className="space-y-3">
                  {[
                    { label: "Call Neurology", icon: Phone, primary: true },
                    { label: "Initiate Transfer", icon: ArrowRight },
                    { label: "Prepare Intubation", icon: Activity },
                    { label: "Call IR", icon: Phone },
                  ].map((action, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: activeStep === 2 ? 1 : 0, x: activeStep === 2 ? 0 : -20 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                        action.primary
                          ? "bg-cyan-500/10 border-cyan-500/50 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                          : "bg-white/5 border-white/10 text-white hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <action.icon size={18} />
                        <span className="font-medium">{action.label}</span>
                      </div>
                      <ChevronRight size={18} className="opacity-50" />
                    </motion.button>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: activeStep === 2 ? 1 : 0, y: activeStep === 2 ? 0 : 20 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Stroke call activated
                </motion.div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: activeStep === 3 ? 1 : 0,
                scale: activeStep === 3 ? 1 : 0.95,
                pointerEvents: activeStep === 3 ? "auto" : "none",
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-8 flex flex-col items-center justify-center"
            >
              <div className="w-full max-w-sm bg-[#0a1128] border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                  <Lock className="text-cyan-400" size={20} />
                  <h4 className="text-lg font-semibold text-white">Audit Log</h4>
                </div>

                <div className="space-y-4 relative">
                  {[
                    { time: "14:02:11", user: CLINICIAN_NAME, action: "Viewed Patient Chart" },
                    { time: "14:05:33", user: "System", action: "Sepsis Alert Triggered" },
                    { time: "14:06:01", user: "Nurse Joy", action: "Acknowledged Alert" },
                    { time: "14:08:45", user: CLINICIAN_NAME, action: "Ordered Lactate" },
                  ].map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: activeStep === 3 ? 1 : 0, x: activeStep === 3 ? 0 : 20 }}
                      transition={{ delay: i * 0.15 }}
                      className="relative flex items-center gap-4"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)] z-10" />
                      <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 flex justify-between items-center">
                        <div>
                          <div className="text-xs text-cyan-400 mb-1">{log.user}</div>
                          <div className="text-sm text-white/80">{log.action}</div>
                        </div>
                        <div className="text-xs text-white/40 font-mono">{log.time}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
