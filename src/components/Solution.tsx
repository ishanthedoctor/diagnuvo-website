import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "motion/react";
import { ShieldCheck, Activity, Brain, ArrowDown, ArrowUp } from "lucide-react";

function AnimatedCounter({ from = 0, to, duration = 2, suffix = "%" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (isInView && nodeRef.current) {
      if (prefersReducedMotion) {
        nodeRef.current.textContent = `${to}${suffix}`;
        return;
      }
      
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = `${Math.round(value)}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export default function Solution() {
  return (
    <section className="py-24 md:py-32 bg-soft-gray border-t border-border-gray relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-medical-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-deep-navy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-bright-white shadow-sm border border-border-gray mb-8">
            <ShieldCheck size={32} className="text-medical-blue" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy tracking-tight leading-[1.1] mb-8">
            The Smart Emergency Care Platform
          </h2>

          <p className="text-xl md:text-2xl text-slate-gray leading-relaxed font-medium mb-16">
            Diagnuvo ED™ transforms the chaos of the emergency department into a
            streamlined, predictable environment. By combining intelligent
            workflow automation with AI-assisted patient analysis, we empower
            clinicians to make faster, safer, and more accurate decisions when
            every second matters.
          </p>
        </motion.div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-24">
          {/* Metric 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-center text-center w-full"
          >
            <div className="flex items-center justify-center gap-2 text-5xl md:text-6xl font-extrabold text-medical-blue mb-4 tracking-tight h-[60px] md:h-[72px]">
              <ArrowDown size={36} strokeWidth={3} className="text-medical-blue" />
              <AnimatedCounter to={40} duration={2} />
            </div>
            <div className="flex flex-col items-center justify-start flex-1 w-full">
              <h4 className="text-lg font-bold text-deep-navy mb-2 leading-tight max-w-[200px]">Cognitive Load</h4>
              <p className="text-sm text-slate-gray font-medium max-w-[240px]">Reduced mental burden for clinicians</p>
            </div>
          </motion.div>

          {/* Metric 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center text-center w-full"
          >
            <div className="flex items-center justify-center gap-2 text-5xl md:text-6xl font-extrabold text-medical-blue mb-4 tracking-tight h-[60px] md:h-[72px]">
              <ArrowUp size={36} strokeWidth={3} className="text-medical-blue" />
              <AnimatedCounter to={65} duration={2} />
            </div>
            <div className="flex flex-col items-center justify-start flex-1 w-full">
              <h4 className="text-lg font-bold text-deep-navy mb-2 leading-tight max-w-[200px]">Speed to Decision</h4>
              <p className="text-sm text-slate-gray font-medium max-w-[240px]">Faster clinical escalation and action</p>
            </div>
          </motion.div>

          {/* Metric 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center text-center w-full"
          >
            <div className="flex items-center justify-center text-2xl md:text-3xl font-extrabold text-medical-blue mb-4 leading-[1.1] tracking-tight h-[60px] md:h-[72px]">
              Audit-Ready<br />by Design
            </div>
            <div className="flex flex-col items-center justify-start flex-1 w-full">
              <h4 className="text-lg font-bold text-deep-navy mb-2 leading-tight max-w-[200px] sr-only">Audit-Ready by Design</h4>
              <p className="text-sm text-slate-gray font-medium max-w-[240px]">Immutable clinical audit trails</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-bright-white rounded-2xl border border-border-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-medical-blue/10 flex items-center justify-center mb-4 mx-auto">
              <Activity size={20} className="text-medical-blue" />
            </div>
            <h3 className="text-lg font-bold text-deep-navy mb-2">
              Workflow Automation
            </h3>
            <p className="text-sm text-slate-gray font-medium">
              Automate routine tasks and triage protocols to focus on patient
              care.
            </p>
          </div>

          <div className="p-6 bg-bright-white rounded-2xl border border-border-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-deep-navy/10 flex items-center justify-center mb-4 mx-auto">
              <Brain size={20} className="text-deep-navy" />
            </div>
            <h3 className="text-lg font-bold text-deep-navy mb-2">
              AI-Assisted Analysis
            </h3>
            <p className="text-sm text-slate-gray font-medium">
              Predictive algorithms analyze patient data in real-time to flag
              risks early.
            </p>
          </div>

          <div className="p-6 bg-bright-white rounded-2xl border border-border-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-medical-blue/10 flex items-center justify-center mb-4 mx-auto">
              <ShieldCheck size={20} className="text-medical-blue" />
            </div>
            <h3 className="text-lg font-bold text-deep-navy mb-2">
              Clinical Safety
            </h3>
            <p className="text-sm text-slate-gray font-medium">
              Built-in safeguards and audit trails ensure compliance and
              reduce errors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
