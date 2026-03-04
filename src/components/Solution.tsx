import React from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowUp, ShieldCheck } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#071625] via-[#0d2743] to-[#08121f]">
      
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-140px] left-[15%] w-[520px] h-[520px] bg-cyan-500/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-160px] right-[10%] w-[520px] h-[520px] bg-blue-600/20 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#08121f_70%)] opacity-70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Shield icon */}
        <div className="flex justify-center mb-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <img
              src="/diagnuvo.png"
              alt="Diagnuvo Shield"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white tracking-tight">
          The Smart Emergency Care Platform
        </h2>

        {/* Description */}
        <p className="text-lg text-blue-100/90 text-center max-w-3xl mx-auto mt-6 leading-relaxed">
          Diagnuvo ED™ transforms the chaos of the emergency department into a streamlined,
          predictable environment. By combining intelligent workflow automation with AI-assisted
          patient analysis, we empower clinicians to make faster, safer, and more accurate decisions
          when every second matters.
        </p>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-10 mt-16 text-center">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md hover:border-cyan-400/30 transition"
          >
            <div className="flex items-center justify-center gap-4">
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: [0.8, 1.15, 1], opacity: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.7 }}
                className="text-cyan-300"
              >
                <ArrowDown size={44} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.55 }}
                className="text-6xl font-bold text-cyan-300"
              >
                40%
              </motion.div>
            </div>

            <h3 className="mt-5 text-xl font-semibold text-white">
              Cognitive Load
            </h3>

            <p className="mt-2 text-blue-100/80">
              Reduced mental burden for clinicians
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md hover:border-cyan-400/30 transition"
          >
            <div className="flex items-center justify-center gap-4">
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: [0.8, 1.15, 1], opacity: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.7 }}
                className="text-cyan-300"
              >
                <ArrowUp size={44} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.55 }}
                className="text-6xl font-bold text-cyan-300"
              >
                65%
              </motion.div>
            </div>

            <h3 className="mt-5 text-xl font-semibold text-white">
              Speed to Decision
            </h3>

            <p className="mt-2 text-blue-100/80">
              Faster clinical escalation and action
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md hover:border-cyan-400/30 transition"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55 }}
              className="flex justify-center"
            >
              <ShieldCheck className="text-cyan-300" size={46} />
            </motion.div>

            <div className="mt-4 text-3xl font-bold text-cyan-200">
              Audit-Ready
            </div>

            <div className="mt-1 text-white/90 font-semibold">
              by Design
            </div>

            <p className="mt-2 text-blue-100/80">
              Immutable clinical audit trails
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
