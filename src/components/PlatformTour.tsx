import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
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
  TrendingUp,
  History,
  CheckCircle2,
  Users,
  FileText,
  MousePointer2,
} from "lucide-react";

const steps = [
  {
    title: "Unify ED Signals",
    description: "Ingest vitals, labs, and EMS data in real-time. No more fragmented charts.",
    icon: Activity,
    contextLabel: "Ingesting Live Data",
  },
  {
    title: "Risk & Detection Engines",
    description: "Continuous AI monitoring detects subtle deterioration before it becomes critical.",
    icon: BrainCircuit,
    contextLabel: "Analyzing Risk Patterns",
  },
  {
    title: "Workflow Orchestration",
    description: "One-click protocol activation. Coordinate teams instantly without phone tag.",
    icon: Zap,
    contextLabel: "Orchestrating Care Team",
  },
  {
    title: "Audit-Ready Governance",
    description: "Every action, timestamped and immutable. Built for compliance and quality review.",
    icon: Lock,
    contextLabel: "Securing Audit Trail",
  },
];

const CLINICIAN_NAME = "Dr Ishanjit Singh Sandhu";
const TRANSITION_DURATION = 1.5;
const TRANSITION_EASE = [0.4, 0, 0.2, 1];

// Orb positions matching the vertical layout
const ORB_POSITIONS = ["6%", "35.3%", "64.6%", "94%"];
const LINE_SCALES = [0.05, 0.35, 0.65, 1.0];

export default function PlatformTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isStrokeActivated, setIsStrokeActivated] = useState(false);
  const stepRef = useRef(0);

  // Reset internal animations when entering the step to allow re-demonstration
  useEffect(() => {
    if (activeStep === 2) {
      setIsStrokeActivated(false);
    }
  }, [activeStep]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Divide the 400vh scroll into 4 discrete zones (0-0.25, 0.25-0.5, 0.5-0.75, 0.75-1.0)
    const targetStep = Math.min(Math.floor(latest * 4), 3);

    // Only trigger if the step has changed and we aren't currently locked in an animation
    if (targetStep !== stepRef.current && !isAnimating) {
      stepRef.current = targetStep;
      setActiveStep(targetStep);
      setIsAnimating(true);
      
      // Lock transitions for exactly 1.5 seconds as requested
      setTimeout(() => {
        setIsAnimating(false);
      }, 1500);
    }
  });

  // Sync stepRef on mount
  useEffect(() => {
    stepRef.current = activeStep;
  }, []);

  return (
    <section
      id="platform"
      ref={containerRef}
      className="relative bg-[#020617] text-white h-[400vh] scroll-mt-20"
    >
      <div className="sticky top-0 h-screen w-full flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0 bg-[#020617]">
          {/* Vertical Sweep Animation */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <motion.div
              className="absolute top-0 bottom-0 w-px bg-cyan-500/10"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent shadow-[0_0_30px_rgba(34,211,238,0.4)]" />
            </motion.div>
          </div>
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
          {/* Left: Timeline */}
          <div className="flex flex-col justify-center h-full py-20">
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                Diagnuvo ED™{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  features
                </span>
              </h2>
              <p className="text-white/60 text-lg max-w-md">
                A unified intelligence layer that transforms raw emergency data into orchestrated action.
              </p>
            </div>

            <div className="relative flex flex-col gap-12">
              {/* Vertical line background */}
              <div className="absolute left-[23px] top-4 bottom-4 w-px bg-white/10" />

              {/* Vertical line progress glow - Synchronized 1.5s animation */}
              <motion.div
                className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-cyan-400 origin-top shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                animate={{ scaleY: LINE_SCALES[activeStep] }}
                transition={{ duration: TRANSITION_DURATION, ease: TRANSITION_EASE }}
              />

              {/* Moving glowing orb - Synchronized 1.5s animation */}
              <motion.div
                className="absolute left-[23px] -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,1)] z-20 border-2 border-white"
                animate={{ top: ORB_POSITIONS[activeStep] }}
                transition={{ duration: TRANSITION_DURATION, ease: TRANSITION_EASE }}
              >
                {/* Floating Context Label */}
                <div className="absolute left-8 top-12 whitespace-nowrap">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-3 h-px bg-cyan-400" />
                      <motion.span 
                        animate={{ 
                          boxShadow: ["0 0 10px rgba(34,211,238,0.2)", "0 0 20px rgba(34,211,238,0.5)", "0 0 10px rgba(34,211,238,0.2)"] 
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-[11px] font-bold text-cyan-300 uppercase tracking-[0.2em] bg-cyan-950/90 px-3 py-1.5 rounded-full backdrop-blur-md border border-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                      >
                        {steps[activeStep].contextLabel}
                      </motion.span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {steps.map((step, i) => (
                <div key={i} className={`relative pl-14 transition-all duration-500 ${activeStep === i ? 'opacity-100 scale-105' : 'opacity-30 scale-100'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors duration-500 ${activeStep === i ? 'bg-cyan-500/20 border-cyan-400/50' : 'bg-white/5 border-white/10'}`}>
                      <step.icon className={`w-5 h-5 ${activeStep === i ? 'text-cyan-400' : 'text-white/40'}`} />
                    </div>

                    <div>
                      <h3 className={`text-lg font-semibold transition-colors duration-500 ${activeStep === i ? 'text-white' : 'text-white/70'}`}>{step.title}</h3>
                      <p className="text-sm text-white/60 mt-1 max-sm:hidden">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Demo Panel */}
          <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center group">
            {/* The Card Base */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 rounded-2xl border border-cyan-500/0 group-hover:border-cyan-500/30 transition-colors duration-500" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95, y: 30, filter: "blur(12px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.95, 
                  y: -30, 
                  filter: "blur(12px)",
                  transition: { duration: 0.3, ease: "easeOut" } 
                }}
                transition={{ 
                  duration: 0.9, // Starts at 300ms (after exit), ends at 1200ms
                  ease: TRANSITION_EASE 
                }}
                className="absolute inset-0 p-8 flex flex-col items-center justify-center z-10"
              >
                {/* Step 1: Unify ED Signals */}
                {activeStep === 0 && (
                  <motion.div 
                    initial={{ filter: "drop-shadow(0 0 0px rgba(34,211,238,0))" }}
                    animate={{ filter: "drop-shadow(0 0 25px rgba(34,211,238,0.25))" }}
                    transition={{ delay: 0.9, duration: 0.3 }} // Starts at 1200ms, ends at 1500ms
                    className="relative w-full max-w-sm space-y-4"
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-12 -left-6 bg-cyan-500/10 backdrop-blur-md border border-cyan-500/30 p-3 rounded-xl shadow-lg z-30"
                    >
                      <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-1">Live EMS Feed</div>
                      <div className="text-sm text-white font-medium">ETA: 4m • Chest Pain</div>
                    </motion.div>

                    <div className="bg-[#0a1128] border border-cyan-500/30 rounded-2xl p-6 shadow-2xl space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xl font-bold text-white">Unified Patient Context</h4>
                          <div className="text-xs text-white/40 mt-1">MRN: 882910 • John Smith</div>
                        </div>
                        <div className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-[10px] font-bold border border-emerald-500/30">
                          LIVE
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <div className="text-[10px] text-white/40 uppercase mb-1">Incoming Vitals</div>
                          <div className="text-sm font-bold text-emerald-400">BP: 165/90</div>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <div className="text-[10px] text-white/40 uppercase mb-1">Critical Lab Data</div>
                          <div className="text-sm font-bold text-rose-400">Trop: 0.08</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5 }}
                          />
                        </div>
                        <div className="text-[10px] text-center text-cyan-400 font-mono uppercase tracking-widest">
                          Synchronizing Signals...
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Risk & Detection Engines */}
                {activeStep === 1 && (
                  <motion.div 
                    initial={{ filter: "drop-shadow(0 0 0px rgba(244,63,94,0))" }}
                    animate={{ filter: "drop-shadow(0 0 25px rgba(244,63,94,0.25))" }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    className="relative w-full max-w-sm space-y-4"
                  >
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -top-12 -right-6 bg-rose-500/10 backdrop-blur-md border border-rose-500/30 p-3 rounded-xl shadow-lg z-30"
                    >
                      <div className="text-[10px] text-rose-400 font-bold uppercase tracking-wider mb-1">Alert Status</div>
                      <div className="text-sm text-white font-medium">High Deterioration Risk</div>
                    </motion.div>

                    <div className="bg-[#0a1128] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
                          <ActivitySquare className="text-rose-400 w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-white">Sepsis Risk Engine</h4>
                      </div>

                      <div className="relative h-32 flex items-end justify-between gap-2 px-2">
                        {[20, 35, 45, 60, 85].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
                            className={`w-full rounded-md ${i === 4 ? "bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.6)]" : "bg-white/10"}`}
                          />
                        ))}
                        <div className="absolute top-1/3 left-0 right-0 border-t border-dashed border-rose-500/30" />
                      </div>

                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3 text-rose-400">
                          <ShieldAlert size={18} />
                          <span className="font-bold text-sm tracking-wide uppercase">Reassess Now</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-[10px] text-white/40 uppercase font-medium">Score:</span>
                          <span className="text-sm font-bold text-white font-mono">8.4</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Workflow Orchestration */}
                {activeStep === 2 && (
                  <motion.div 
                    initial={{ filter: "drop-shadow(0 0 0px rgba(16,185,129,0))" }}
                    animate={{ filter: "drop-shadow(0 0 25px rgba(16,185,129,0.25))" }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    className="relative w-full max-w-sm space-y-4"
                  >
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-12 -left-6 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 p-3 rounded-xl shadow-lg z-30 min-w-[180px]"
                    >
                      <AnimatePresence mode="wait">
                        {!isStrokeActivated ? (
                          <motion.div
                            key="inactive"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-1">Protocol Activation</div>
                            <div className="text-sm text-white font-medium">Stroke Pathway Active</div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="active"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col"
                          >
                            <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-1">Status Update</div>
                            <div className="text-sm text-white font-bold flex items-center gap-2">
                              <CheckCircle2 size={14} className="text-emerald-400" />
                              Stroke Pathway Activated
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <div className="bg-[#0a1128] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4 relative overflow-hidden">
                      <div className="text-center pb-2 border-b border-white/5">
                        <h4 className="text-white font-bold">Team Coordination</h4>
                      </div>

                      <div className="space-y-3">
                        {[
                          { label: "Neurology Paged", icon: Users, status: "ACK" },
                          { label: "Transfer / Escalation Workflow", icon: ArrowRight, status: "READY" },
                          { label: "ICU Bed Requested", icon: CheckCircle2, status: "PENDING" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                            <div className="flex items-center gap-3">
                              <item.icon size={16} className="text-cyan-400" />
                              <span className="text-sm text-white/80">{item.label}</span>
                            </div>
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${item.status === 'READY' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-white/40'}`}>
                              {item.status}
                            </span>
                          </div>
                        ))}

                        {/* New Option: Activate Stroke Protocol */}
                        <motion.div 
                          animate={isStrokeActivated ? { scale: [1, 0.95, 1], backgroundColor: "rgba(16, 185, 129, 0.2)" } : {}}
                          transition={{ duration: 0.3 }}
                          className={`flex items-center justify-between p-3 rounded-xl border transition-colors duration-300 ${isStrokeActivated ? 'bg-emerald-500/20 border-emerald-500/50' : 'bg-white/5 border-white/10'}`}
                        >
                          <div className="flex items-center gap-3">
                            <Zap size={16} className={isStrokeActivated ? "text-emerald-400" : "text-cyan-400"} />
                            <span className={`text-sm font-bold ${isStrokeActivated ? 'text-emerald-400' : 'text-white/80'}`}>Activate Stroke Protocol</span>
                          </div>
                          {isStrokeActivated && <CheckCircle2 size={14} className="text-emerald-400" />}
                        </motion.div>
                      </div>

                      {/* Mouse Cursor Animation */}
                      {!isStrokeActivated && (
                        <motion.div
                          initial={{ x: 300, y: 400, opacity: 0 }}
                          animate={{ 
                            x: 180, 
                            y: 285, 
                            opacity: 1,
                          }}
                          transition={{ 
                            delay: 1.5, 
                            duration: 1.2,
                            ease: "easeOut"
                          }}
                          className="absolute z-50 pointer-events-none text-white drop-shadow-lg"
                        >
                          <motion.div
                            animate={{ scale: [1, 1, 0.7, 1] }}
                            transition={{ delay: 2.8, duration: 0.3 }}
                            onAnimationComplete={() => {
                              setIsStrokeActivated(true);
                            }}
                          >
                            <MousePointer2 size={24} fill="white" />
                          </motion.div>
                        </motion.div>
                      )}

                      <div className="pt-2">
                        <div className="flex justify-between text-[10px] text-white/40 mb-2">
                          <span>Action Flow Indicators</span>
                          <span>{isStrokeActivated ? "100%" : "65%"} Complete</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full ${isStrokeActivated ? 'bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-emerald-400/50'}`}
                            initial={{ width: "65%" }}
                            animate={{ width: isStrokeActivated ? "100%" : "65%" }}
                            transition={{ duration: 0.8 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Audit-Ready Governance */}
                {activeStep === 3 && (
                  <motion.div 
                    initial={{ filter: "drop-shadow(0 0 0px rgba(34,211,238,0))" }}
                    animate={{ filter: "drop-shadow(0 0 25px rgba(34,211,238,0.25))" }}
                    transition={{ delay: 0.9, duration: 0.3 }}
                    className="relative w-full max-w-sm space-y-4"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -top-12 -right-6 bg-cyan-500/10 backdrop-blur-md border border-cyan-500/30 p-3 rounded-xl shadow-lg z-30"
                    >
                      <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-1">Compliance-Ready Records</div>
                      <div className="text-sm text-white font-medium">Immutable Event Log Secured</div>
                    </motion.div>

                    <div className="bg-[#0a1128] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-6">
                      <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                        <Lock className="text-cyan-400" size={20} />
                        <h4 className="text-xl font-bold text-white">Audit Log</h4>
                      </div>

                      <div className="space-y-4">
                        {[
                          { time: "14:02:11", action: "Viewed Patient Chart", user: CLINICIAN_NAME },
                          { time: "14:05:33", action: "Sepsis Alert Triggered", user: "System" },
                          { time: "14:06:01", action: "Acknowledged Alert", user: "Nurse Joy" },
                          { time: "14:08:45", action: "Ordered Lactate", user: CLINICIAN_NAME },
                        ].map((log, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] shrink-0" />
                            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center">
                              <div className="space-y-1">
                                <div className="text-[11px] text-cyan-400 font-medium tracking-wide">{log.user}</div>
                                <div className="text-sm text-white/90 font-medium">{log.action}</div>
                              </div>
                              <div className="text-[11px] text-white/40 font-mono">{log.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
