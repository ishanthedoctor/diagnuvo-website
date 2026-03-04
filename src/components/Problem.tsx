import React from "react";

export default function Problem() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
      {/* CSS-only animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes softGlow {
          0%, 100% { opacity: .35; }
          50% { opacity: .6; }
        }
        .anim-fadeUp { opacity: 0; animation: fadeUp .65s ease-out forwards; }
        .d-1 { animation-delay: .05s; }
        .d-2 { animation-delay: .15s; }
        .d-3 { animation-delay: .25s; }
        .d-4 { animation-delay: .35s; }
        .card-hover { transition: transform .2s ease, box-shadow .2s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(15, 23, 42, .10); }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* subtle background accent */}
        <div
          className="absolute -top-10 right-10 h-56 w-56 rounded-full blur-3xl"
          style={{ background: "rgba(59,130,246,0.18)", animation: "softGlow 4s ease-in-out infinite" }}
          aria-hidden="true"
        />

        <h2 className="anim-fadeUp d-1 text-4xl md:text-5xl font-bold text-center text-gray-900 tracking-tight">
          Emergency Medicine Operates Under Extreme Pressure
        </h2>

        <p className="anim-fadeUp d-2 text-lg text-gray-600 text-center max-w-3xl mx-auto mt-6">
          Emergency departments are complex environments where clinicians must
          make rapid decisions while managing fragmented information,
          time-critical conditions, and unpredictable patient flows.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          <div className="anim-fadeUp d-2 bg-white p-8 rounded-xl shadow-sm border border-gray-200 card-hover">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Fragmented Clinical Data</h3>
            <p className="text-gray-600 leading-relaxed">
              Vital signs, laboratory results, imaging and clinical notes often
              reside in separate systems, forcing clinicians to mentally
              integrate critical information.
            </p>
          </div>

          <div className="anim-fadeUp d-3 bg-white p-8 rounded-xl shadow-sm border border-gray-200 card-hover">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Delayed Recognition of Deterioration
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Subtle deterioration in patient condition can be difficult to
              detect in real time, especially during busy emergency department
              shifts.
            </p>
          </div>

          <div className="anim-fadeUp d-4 bg-white p-8 rounded-xl shadow-sm border border-gray-200 card-hover">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Cognitive Overload</h3>
            <p className="text-gray-600 leading-relaxed">
              Emergency clinicians must process large volumes of clinical data
              while making rapid decisions in high-stress environments.
            </p>
          </div>
        </div>

        <p className="anim-fadeUp d-4 text-center text-lg text-gray-700 mt-14 max-w-3xl mx-auto">
          Diagnuvo ED™ brings these signals together into a single intelligent
          platform that supports faster and clearer clinical decision-making.
        </p>
      </div>
    </section>
  );
}
