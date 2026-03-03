import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, BrainCircuit, ImageIcon, Stethoscope, Lock } from 'lucide-react';

const pipelineSteps = [
  { id: 'arrival', label: 'Patient Arrival', icon: Activity },
  { id: 'ai', label: 'AI Risk Detection', icon: BrainCircuit },
  { id: 'imaging', label: 'Imaging Integration', icon: ImageIcon },
  { id: 'actions', label: 'Clinical Actions', icon: Stethoscope },
  { id: 'audit', label: 'Audit Log', icon: Lock },
];

const floatingCards = [
  { text: "Stroke Risk: HIGH", top: "22%", left: "50%", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/30" },
  { text: "ICU Probability: 72%", top: "42%", left: "55%", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  { text: "CT Ordered", top: "62%", left: "50%", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
  { text: "Neurology Called", top: "82%", left: "55%", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
];

export default function PlatformPipeline() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
    }, 1200); // 1.2s per step * 5 steps = 6 seconds loop

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-[#020617] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle animated grid */}
        <motion.div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: "linear-gradient(rgba(34,211,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)", 
            backgroundSize: "40px 40px" 
          }}
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        />
        
        {/* Cyan glow gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
        
        {/* Vignette edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Diagnuvo ED™ intelligence
              </span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium text-white/90 mb-6">
              Real-time intelligence for emergency care.
            </h3>
            <p className="text-white/60 text-lg leading-relaxed max-w-lg">
              Diagnuvo connects triage, imaging, AI risk prediction and clinical workflows into one unified emergency system.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-[600px] flex items-center justify-center">
          
          {/* Vertical Pipeline */}
          <div className="relative w-full max-w-md">
            
            {/* Glowing vertical line background */}
            <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-white/10" />
            
            {/* Animated glowing vertical line progress */}
            <motion.div 
              className="absolute left-[27px] top-6 w-0.5 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
              animate={{ height: `${(activeStep / (pipelineSteps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="flex flex-col justify-between h-[500px] relative z-10">
              {pipelineSteps.map((step, index) => {
                const isActive = index === activeStep;
                const isPast = index <= activeStep;
                
                return (
                  <div key={step.id} className="relative flex items-center gap-6">
                    {/* Icon / Dot */}
                    <div className={`relative flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-500 bg-[#020617] ${
                      isActive 
                        ? 'border-cyan-400 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] scale-110' 
                        : isPast 
                          ? 'border-cyan-400/50 text-cyan-400/50' 
                          : 'border-white/10 text-white/30'
                    }`}>
                      <step.icon size={24} />
                      {isActive && (
                        <motion.div 
                          className="absolute inset-0 rounded-full border border-cyan-400"
                          animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </div>
                    
                    {/* Label */}
                    <div className={`text-xl font-semibold transition-all duration-500 ${
                      isActive ? 'text-white translate-x-2' : isPast ? 'text-white/70' : 'text-white/30'
                    }`}>
                      {step.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating UI Cards */}
            <AnimatePresence>
              {floatingCards.map((card, index) => {
                // Show card when activeStep is at or past its delay index
                const isVisible = activeStep === index + 1 || activeStep === index + 2;
                
                if (!isVisible) return null;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 10, y: -10 }}
                    transition={{ duration: 0.8 }}
                    className={`absolute z-20 px-4 py-2 rounded-lg border backdrop-blur-md shadow-xl ${card.bg} ${card.border}`}
                    style={{ top: card.top, left: card.left }}
                  >
                    <span className={`text-sm font-bold tracking-wide ${card.color}`}>
                      {card.text}
                    </span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
