import React from "react";

export default function Solution() {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#071625] via-[#0d2743] to-[#08121f]">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[20%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[10%] w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        {/* shield icon */}
        <div className="flex justify-center mb-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <img
              src="/diagnuvo.png"
              alt="Diagnuvo Shield"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white tracking-tight">
          The Smart Emergency Care Platform
        </h2>

        {/* description */}
        <p className="text-lg text-blue-100 text-center max-w-3xl mx-auto mt-6">
          Diagnuvo ED™ transforms the chaos of the emergency department into a
          streamlined, predictable environment. By combining intelligent workflow
          automation with AI-assisted patient analysis, we empower clinicians to
          make faster, safer, and more accurate decisions when every second matters.
        </p>

        {/* metrics */}
        <div className="grid md:grid-cols-3 gap-10 mt-16 text-center">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md hover:border-cyan-400/40 transition">
            <div className="text-5xl font-bold text-cyan-400">↓ 40%</div>
            <p className="mt-4 text-white font-semibold">Cognitive Load</p>
            <p className="text-blue-100 text-sm mt-2">
              Reduced mental burden for clinicians
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md hover:border-cyan-400/40 transition">
            <div className="text-5xl font-bold text-cyan-400">↑ 65%</div>
            <p className="mt-4 text-white font-semibold">Speed to Decision</p>
            <p className="text-blue-100 text-sm mt-2">
              Faster clinical escalation and action
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md hover:border-cyan-400/40 transition">
            <div className="text-3xl font-bold text-cyan-400">Audit-Ready</div>
            <p className="mt-4 text-white font-semibold">by Design</p>
            <p className="text-blue-100 text-sm mt-2">
              Immutable clinical audit trails
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
