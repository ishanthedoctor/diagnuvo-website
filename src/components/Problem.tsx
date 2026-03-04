import React from "react";

export default function Problem() {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#0b1a2b] via-[#0f2742] to-[#091321]">

      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-120px] left-[10%] w-[500px] h-[500px] 
        bg-blue-500/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-100px] right-[10%] w-[450px] h-[450px] 
        bg-cyan-400/20 rounded-full blur-[120px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white tracking-tight">
          Emergency Medicine Operates Under Extreme Pressure
        </h2>

        <p className="text-lg text-blue-100 text-center max-w-3xl mx-auto mt-6">
          Emergency departments are complex environments where clinicians must
          make rapid decisions while managing fragmented information,
          time-critical conditions, and unpredictable patient flows.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-cyan-400/40 transition-all hover:-translate-y-1">

            <h3 className="text-xl font-semibold mb-3 text-white">
              Fragmented Clinical Data
            </h3>

            <p className="text-blue-100 leading-relaxed">
              Vital signs, laboratory results, imaging and clinical notes often
              reside in separate systems, forcing clinicians to mentally
              integrate critical information.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-cyan-400/40 transition-all hover:-translate-y-1">

            <h3 className="text-xl font-semibold mb-3 text-white">
              Delayed Recognition of Deterioration
            </h3>

            <p className="text-blue-100 leading-relaxed">
              Subtle deterioration in patient condition can be difficult to
              detect in real time, especially during busy emergency department
              shifts.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-cyan-400/40 transition-all hover:-translate-y-1">

            <h3 className="text-xl font-semibold mb-3 text-white">
              Cognitive Overload
            </h3>

            <p className="text-blue-100 leading-relaxed">
              Emergency clinicians must process large volumes of clinical data
              while making rapid decisions in high-stress environments.
            </p>

          </div>

        </div>

        {/* Bottom text */}
        <p className="text-center text-lg text-blue-100 mt-16 max-w-3xl mx-auto">
          Diagnuvo ED™ brings these signals together into a single intelligent
          platform that supports faster and clearer clinical decision-making.
        </p>

      </div>
    </section>
  );
}
