import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Activity,
  BrainCircuit,
  Wind,
  HeartPulse,
  Bot,
  Scan,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  Lock
} from "lucide-react";

// A) ICU Risk Prediction
function ICURiskVisual() {
  return (
    <div className="absolute top-6 right-6 w-32 md:w-48 pointer-events-none">
      <div className="flex justify-between text-[10px] text-white/50 mb-1.5 font-mono uppercase tracking-wider">
        <span>Risk</span>
        <motion.span 
          animate={{ opacity: [0.7, 1, 0.7] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="text-red-400 font-bold"
        >
          72%
        </motion.span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden relative border border-white/5">
        <motion.div 
          animate={{ width: ["68%", "72%", "70%", "68%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500/80 to-red-500/80"
        />
        <motion.div 
          animate={{ left: ["68%", "72%", "70%", "68%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,1)] -ml-1"
        />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="h-[1px] w-full bg-white/5 relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 1.5, delay: i * 0.7, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// B) Diagnuvo AI
function AIAssistantVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1200);
    return () => clearTimeout(timer1);
  }, []);

  return (
    <div className="flex flex-col h-full w-full pointer-events-auto">
      {/* Header Area */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 shadow-inner text-cyan-400">
            <Bot size={20} />
          </div>
          <div className="text-[9px] font-bold text-cyan-400 tracking-wide uppercase bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded-full">
            Diagnuvo AI
          </div>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
          AI Clinical Assistant
        </h3>
        <p className="text-sm text-white/50 font-medium leading-relaxed">
          Voice-activated charting and real-time clinical queries.
        </p>
      </div>

      {/* Mini Demo Area */}
      <div className="mt-auto flex flex-col items-center justify-center w-full pb-2">
        <div className="w-full max-w-[320px] flex flex-col gap-3">
          {/* Chat Bubble */}
          <div className="bg-white/5 border border-cyan-500/30 rounded-lg p-3 text-sm text-white/80 shadow-inner min-h-[44px] flex items-center">
            <AnimatePresence mode="wait">
              {step === 0 ? (
                <motion.div key="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex gap-1.5 px-1">
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                </motion.div>
              ) : (
                <motion.div key="msg" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="leading-relaxed">
                  Stroke risk high. Suggested actions ready.
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 w-full">
            {["Call IR", "Initiate Transfer", "Prepare Intubation", "Call Neurology"].map(btn => (
              <div key={btn} className="flex-1 min-w-[45%] text-[10px] text-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-2 py-1.5 rounded font-medium tracking-wide hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_8px_rgba(34,211,238,0.2)] transition-all cursor-pointer truncate">
                {btn}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// C) Radiology Integration
function RadiologyVisual() {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const int = setInterval(() => setFrame(f => (f === 0 ? 1 : 0)), 2500);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="absolute top-5 right-5 flex flex-col items-end gap-3 pointer-events-none">
      <motion.div 
        animate={{ x: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="text-[9px] text-cyan-400/80 uppercase tracking-widest border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5 rounded-full font-semibold shadow-[0_0_8px_rgba(34,211,238,0.2)]"
      >
        DICOMweb: QIDO/WADO
      </motion.div>
      <div className="relative w-16 h-16 bg-black/60 rounded-lg border border-white/10 overflow-hidden flex items-center justify-center shadow-inner">
        <AnimatePresence mode="wait">
          <motion.div 
            key={frame}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
            className={`w-10 h-12 rounded-[40%] blur-[1px] ${frame === 0 ? 'bg-white/20' : 'bg-white/10'}`}
          />
        </AnimatePresence>
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-3 right-2 w-4 h-4 border border-cyan-400 bg-cyan-400/10 rounded-sm"
        />
      </div>
    </div>
  );
}

// D) Clinical Decision Support
function ClinicalDecisionVisual() {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const int = setInterval(() => setExpanded(e => !e), 5000);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="absolute top-5 right-5 flex flex-col items-end gap-2 pointer-events-none w-32">
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#0A1A2F] border border-cyan-500/30 rounded-md p-2 shadow-lg w-full"
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span className="text-[9px] font-bold text-emerald-400 tracking-wide">AHA/ASA — Class I</span>
        </div>
        <motion.div 
          animate={{ height: expanded ? "auto" : "12px", opacity: expanded ? 1 : 0.5 }}
          className="overflow-hidden text-[8px] text-white/60 leading-tight"
        >
          Administer IV tPA within 4.5 hours of symptom onset for eligible patients.
        </motion.div>
      </motion.div>
    </div>
  );
}

// E) Airway Safety Engine
function AirwaySafetyVisual() {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const int = setInterval(() => setAlert(a => !a), 4000);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="absolute top-5 right-5 flex flex-col items-end gap-2 pointer-events-none">
      <div className="bg-white/5 border border-white/10 px-2 py-1 rounded flex items-center gap-1.5">
        <span className="text-[9px] text-white/50 font-mono">Reassess GCS in</span>
        <span className="text-[10px] text-white font-mono font-bold">
          12<motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>:</motion.span>34
        </span>
      </div>
      <AnimatePresence>
        {alert && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-end gap-1 mt-1"
          >
            <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/40 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(248,113,113,0.2)]">
              <span className="text-[10px] font-bold text-red-400">GCS ≤ 8</span>
            </div>
            <div className="text-[8px] text-red-300 uppercase tracking-widest font-bold animate-pulse">
              Prepare for intubation
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// F) Audit & Governance
function AuditVisual() {
  const events = [
    { text: "CT ordered", time: "14:02" },
    { text: "Stroke alert activated", time: "14:05" },
    { text: "Neurology called", time: "14:08" }
  ];
  const [step, setStep] = useState(0);

  useEffect(() => {
    const int = setInterval(() => setStep(s => (s + 1) % 4), 2000);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="absolute top-5 right-5 flex flex-col items-end gap-2 pointer-events-none">
      <div className="relative pr-3 border-r border-white/10 space-y-2">
        {events.map((ev, i) => (
          <AnimatePresence key={ev.text}>
            {step > i && (
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-end gap-2 relative"
              >
                <span className="text-[8px] text-white/30 font-mono">{ev.time}</span>
                <span className="text-[9px] text-white/70 font-medium">{ev.text}</span>
                <div className="absolute -right-[15px] w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
}

// Protocol Carousel (replaces Stroke Pathway Intelligence visual)
const protocols = [
  {
    name: "Stroke Pathway",
    items: ["Thrombolysis", "Thrombectomy Transfer", "Door-to-Needle", "Door-to-Groin"]
  },
  {
    name: "Trauma Protocol",
    items: ["Major Trauma Activation", "Massive Transfusion Protocol (MTP)", "FAST/CT Trauma Pathway", "Trauma Theatre Ready"]
  },
  {
    name: "Cardiac Protocol",
    items: ["STEMI Activation", "Cath Lab Notify", "Post-ROSC Bundle", "Targeted Temperature Mgmt (TTM)"]
  },
  {
    name: "Sepsis Protocol",
    items: ["Sepsis Six", "Antibiotics < 1 hour", "Lactate/Fluids Bundle", "Escalate to ICU"]
  },
  {
    name: "Surgical Escalation",
    items: ["Surgical Review", "Theatre Booking", "Blood Products", "Transfer Coordination"]
  }
];

const allProtocolItems = protocols.flatMap((p, pIdx) => p.items.map((item, iIdx) => ({
  id: `${pIdx}-${iIdx}`,
  text: item,
  category: p.name,
})));

function ProtocolCarouselVisual() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % allProtocolItems.length);
    }, 2200);
    return () => clearInterval(int);
  }, []);

  const visibleItems = [
    allProtocolItems[currentIndex % allProtocolItems.length],
    allProtocolItems[(currentIndex + 1) % allProtocolItems.length],
    allProtocolItems[(currentIndex + 2) % allProtocolItems.length],
  ];

  const currentCategory = visibleItems[2].category;

  return (
    <div className="absolute top-5 right-5 left-5 bottom-24 flex flex-col items-end justify-start gap-3 pointer-events-none">
      {/* Category Pill */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCategory}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.3 }}
          className="text-[9px] font-bold text-cyan-300 tracking-wide uppercase bg-cyan-500/10 border border-cyan-500/30 px-2 py-1 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.2)]"
        >
          {currentCategory}
        </motion.div>
      </AnimatePresence>

      {/* Chips Container */}
      <div className="flex flex-col justify-end items-end gap-2 overflow-hidden h-[60px] md:h-[96px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_100%)] w-full pb-1">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ 
                opacity: i === 0 ? 0.3 : i === 1 ? 0.6 : 1, 
                y: 0, 
                scale: 1,
                borderColor: i === 2 ? ["rgba(34,211,238,0.8)", "rgba(34,211,238,0.2)"] : ["rgba(34,211,238,0.2)", "rgba(34,211,238,0.2)"],
                boxShadow: i === 2 ? ["0px 0px 12px rgba(34,211,238,0.4)", "0px 0px 0px rgba(34,211,238,0)"] : ["0px 0px 0px rgba(34,211,238,0)", "0px 0px 0px rgba(34,211,238,0)"]
              }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                duration: 0.5,
                borderColor: { duration: 0.4, ease: "easeOut" },
                boxShadow: { duration: 0.4, ease: "easeOut" }
              }}
              className="text-[9px] px-2.5 py-1.5 rounded-full border bg-[#061225] whitespace-nowrap font-medium tracking-wide text-white/80 shrink-0"
            >
              {item.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Real-Time Risk Detection (Keep existing but subtle)
function RealTimeRiskVisual() {
  return (
    <div className="absolute top-6 right-6 w-24 h-8 flex items-center justify-end pointer-events-none">
      <div className="flex items-center gap-[2px] h-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ height: ["20%", `${Math.random() * 60 + 20}%`, "20%"] }}
            transition={{ duration: 1 + Math.random(), repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="w-1 bg-red-400/30 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    title: "Clinical Decision Support",
    description: "Evidence-based guidelines integrated directly into the workflow.",
    icon: <Activity size={20} />,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1",
    color: "text-cyan-400",
    visual: <ClinicalDecisionVisual />
  },
  {
    title: "Various Medical Pathway Intelligence",
    description: "Accelerate door-to-needle times with automated medical protocols.",
    icon: <BrainCircuit size={20} />,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    rowSpan: "row-span-2",
    color: "text-cyan-400",
    visual: <ProtocolCarouselVisual />
  },
  {
    title: "Airway Safety Engine",
    description: "Predictive modeling for difficult intubations and airway management.",
    icon: <Wind size={20} />,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    rowSpan: "row-span-1",
    color: "text-red-400",
    visual: <AirwaySafetyVisual />
  },
  {
    title: "ICU Risk Prediction",
    description: "Identify patients at high risk for clinical deterioration early.",
    icon: <HeartPulse size={20} />,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1",
    color: "text-red-400",
    visual: <ICURiskVisual />
  },
  {
    title: "AI Clinical Assistant",
    description: "Voice-activated charting and real-time clinical queries.",
    icon: <Bot size={20} />,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    rowSpan: "row-span-2",
    color: "text-cyan-400",
    visual: <AIAssistantVisual />,
    customLayout: true
  },
  {
    title: "Radiology Integration",
    description: "Seamless PACS integration with AI-flagged critical findings.",
    icon: <Scan size={20} />,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1",
    color: "text-cyan-400",
    visual: <RadiologyVisual />
  },
  {
    title: "Audit & Governance",
    description: "Comprehensive tracking for quality improvement and compliance.",
    icon: <FileCheck size={20} />,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    rowSpan: "row-span-1",
    color: "text-emerald-400",
    visual: <AuditVisual />
  },
  {
    title: "Real-Time Risk Detection",
    description: "Continuous monitoring of vital signs and lab results for subtle changes.",
    icon: <AlertTriangle size={20} />,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-1",
    color: "text-red-400",
    visual: <RealTimeRiskVisual />
  },
];

export default function FeaturesBento() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 bg-gradient-to-b from-[#061225] to-[#040A14] relative overflow-hidden border-t border-white/5"
    >
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Intelligent features for <br className="hidden md:block" />
            <span className="text-cyan-400">critical moments.</span>
          </h2>
          <p className="text-lg text-white/60 font-medium max-w-2xl">
            A comprehensive suite of tools designed specifically for the
            high-stakes environment of the emergency department.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(220px,auto)] relative">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className={`group relative overflow-hidden bg-white/[0.02] rounded-2xl border border-white/10 p-6 shadow-lg hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-end min-h-[220px] ${feature.colSpan} ${feature.rowSpan}`}
            >
              {/* 1) Soft moving scanline overlay */}
              <motion.div 
                animate={{ top: ["-100%", "200%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent pointer-events-none z-0"
              />

              {/* 2) Faint cyan edge glow that gently breathes */}
              <motion.div 
                animate={{ opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(34,211,238,0.2)] pointer-events-none z-0 group-hover:shadow-[inset_0_0_30px_rgba(34,211,238,0.4)] transition-shadow duration-300"
              />

              {/* 3) Background grid parallax shift on hover */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIj48L2NpcmNsZT4KPC9zdmc+')] opacity-50 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 pointer-events-none z-0" />

              {/* Content Rendering */}
              {feature.customLayout ? (
                <div className="relative z-20 flex flex-col h-full w-full">
                  {feature.visual}
                </div>
              ) : (
                <>
                  {/* Visual Component */}
                  <div className="z-10">
                    {feature.visual}
                  </div>

                  {/* Content */}
                  <div className="relative z-20 mt-auto pt-20">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-white/5 border border-white/10 shadow-inner ${feature.color}`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/50 font-medium leading-relaxed max-w-[90%]">
                      {feature.description}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
