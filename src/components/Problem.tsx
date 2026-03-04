import React from "react";

export default function Problem() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Emergency Medicine Operates Under Extreme Pressure
        </h2>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Emergency departments are complex environments where clinicians must
          make rapid decisions while managing fragmented information,
          time-critical conditions, and unpredictable patient flows.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Fragmented Clinical Data
            </h3>
            <p className="text-gray-600">
              Vital signs, laboratory results, imaging and clinical notes often
              reside in separate systems, forcing clinicians to mentally
              integrate critical information.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Delayed Recognition of Deterioration
            </h3>
            <p className="text-gray-600">
              Subtle deterioration in patient condition can be difficult to
              detect in real time, especially during busy emergency department
              shifts.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Cognitive Overload
            </h3>
            <p className="text-gray-600">
              Emergency clinicians must process large volumes of clinical data
              while making rapid decisions in high-stress environments.
            </p>
          </div>

        </div>

        <p className="text-center text-lg text-gray-700 mt-16 max-w-3xl mx-auto">
          Diagnuvo ED™ brings these signals together into a single intelligent
          platform that supports faster and clearer clinical decision-making.
        </p>

      </div>
    </section>
  );
}
