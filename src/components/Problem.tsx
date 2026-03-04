import React from "react";
import { motion } from "motion/react"; // you already used this earlier

const container = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const cards = [
  {
    title: "Fragmented Clinical Data",
    body:
      "Vital signs, laboratory results, imaging and clinical notes often reside in separate systems, forcing clinicians to mentally integrate critical information.",
  },
  {
    title: "Delayed Recognition of Deterioration",
    body:
      "Subtle deterioration in patient condition can be difficult to detect in real time, especially during busy emergency department shifts.",
  },
  {
    title: "Cognitive Overload",
    body:
      "Emergency clinicians must process large volumes of clinical data while making rapid decisions in high-stress environments.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 tracking-tight"
        >
          Emergency Medicine Operates Under Extreme Pressure
        </motion.h2>

        <motion.p
          variants={item}
          className="text-lg text-gray-600 text-center max-w-3xl mx-auto mt-6"
        >
          Emergency departments are complex environments where clinicians must
          make rapid decisions while managing fragmented information,
          time-critical conditions, and unpredictable patient flows.
        </motion.p>

        <motion.div
          variants={item}
          className="grid md:grid-cols-3 gap-10 mt-14"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {c.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={item}
          className="text-center text-lg text-gray-700 mt-14 max-w-3xl mx-auto"
        >
          Diagnuvo ED™ brings these signals together into a single intelligent
          platform that supports faster and clearer clinical decision-making.
        </motion.p>
      </motion.div>
    </section>
  );
}
