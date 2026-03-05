import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, ArrowDown, ArrowUp } from "lucide-react";

export default function Solution() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#071625] via-[#0d2743] to-[#08121f]">
      {/* background glow (reduced blur) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
          transition={{ duration: 7, ease: "linear", repeat: Infinity }}
        />
        <div className="absolute -top-24 left-[10%] w-[520px] h-[520px] bg-cyan-500/12 rounded-full blur-[85px]" />
        <div className="absolute -bottom-28 right-[8%] w-[620px] h-[620px] bg-blue-600/12 rounded-full blur-[95px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(7,22,37,0.75)_100%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Icon (shield) */}
        <div className="flex justify-center mb-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <ShieldCheck className="text-cyan-200" size={26} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white tracking-tight">
          The Smart Emergency Care Platform
        </h2>

        {/* Description */}
        <p className="text-lg text-blue-100/85 text-center max-w-3xl mx-auto mt-6 leading-relaxed">
          Diagnuvo ED™ transforms the chaos of the emergency department into a streamlined,
          predictable environment. By combining intelligent workflow automation with AI-assisted
          patient analysis, we empower clinicians to make faster, safer, and more accurate
          decisions when every second matters.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <motion.div
  animate={{ y: [0, 6, 0] }}
  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
>
  <ArrowDown className="text-cyan-200" size={32} />
</motion.div>
              </div>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-cyan-200 text-center">
              40%
            </div>
            <div className="mt-3 text-center text-white font-semibold">
              Cognitive Load
            </div>
            <div className="mt-2 text-center text-blue-100/80 text-sm leading-relaxed">
              Reduced mental burden for clinicians
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
  >
    <ArrowUp className="text-cyan-200" size={32} />
  </motion.div>
</div>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-cyan-200 text-center">
              65%
            </div>
            <div className="mt-3 text-center text-white font-semibold">
              Speed to Decision
            </div>
            <div className="mt-2 text-center text-blue-100/80 text-sm leading-relaxed">
              Faster clinical escalation and action
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <ShieldCheck className="text-cyan-200" size={32} />
              </div>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-cyan-200 text-center leading-tight">
              Audit-Ready
            </div>
            <div className="mt-3 text-center text-white font-semibold">
              by Design
            </div>
            <div className="mt-2 text-center text-blue-100/80 text-sm leading-relaxed">
              Immutable clinical audit trails
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
