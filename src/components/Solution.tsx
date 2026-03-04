import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, ShieldCheck } from "lucide-react";

export default function Solution() {
  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.12 * i, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#071625] via-[#0d2743] to-[#08121f] text-white">
      {/* Subtle grid + glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        {/* glows */}
        <div className="absolute top-[-140px] left-[18%] w-[520px] h-[520px] bg-cyan-500/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-160px] right-[10%] w-[560px] h-[560px] bg-blue-500/18 rounded-full blur-[140px]" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#071625_78%)] opacity-80" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        {/* Top shield icon */}
        <div className="flex justify-center mb-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <ShieldCheck size={28} className="text-cyan-300" />
          </div>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center tracking-tight"
        >
          The Smart Emergency Care Platform
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          className="text-lg text-blue-100/90 text-center max-w-3xl mx-auto mt-6 leading-relaxed"
        >
          Diagnuvo ED™ transforms the chaos of the emergency department into a streamlined,
          predictable environment. By combining intelligent workflow automation with AI-assisted
          patient analysis, we empower clinicians to make faster, safer, and more accurate decisions
          when every second matters.
        </motion.p>

        {/* Stat cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Card 1 */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="bg-white/6 border border-white/10 rounded-2xl p-10 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
          >
            <div className="flex items-center justify-center gap-4">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="text-cyan-300"
              >
                <ArrowDown size={42} />
              </motion.div>

              <div className="text-6xl font-extrabold tracking-tight text-cyan-300">40%</div>
            </div>

            <div className="text-center mt-6">
              <div className="text-xl font-semibold">Cognitive Load</div>
              <div className="mt-2 text-blue-100/80">
                Reduced mental burden for clinicians
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="bg-white/6 border border-white/10 rounded-2xl p-10 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
          >
            <div className="flex items-center justify-center gap-4">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="text-cyan-300"
              >
                <ArrowUp size={42} />
              </motion.div>

              <div className="text-6xl font-extrabold tracking-tight text-cyan-300">65%</div>
            </div>

            <div className="text-center mt-6">
              <div className="text-xl font-semibold">Speed to Decision</div>
              <div className="mt-2 text-blue-100/80">
                Faster clinical escalation and action
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="bg-white/6 border border-white/10 rounded-2xl p-10 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
          >
            <div className="flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="text-cyan-300"
              >
                <ShieldCheck size={44} />
              </motion.div>
            </div>

            <div className="text-center mt-6">
              <div className="text-3xl font-extrabold tracking-tight text-cyan-300">
                Audit-Ready
              </div>
              <div className="mt-2 text-lg font-semibold">by Design</div>
              <div className="mt-2 text-blue-100/80">
                Immutable clinical audit trails
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
