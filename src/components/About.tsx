import React from "react";
import { motion } from "motion/react";
import { HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-bright-white border-t border-border-gray"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-medical-blue/10 flex items-center justify-center mb-8">
              <HeartHandshake size={32} className="text-medical-blue" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy tracking-tight leading-[1.1] mb-8">
              Empowering clinicians to see the{" "}
              <span className="text-medical-blue italic font-serif">
                individual
              </span>
              .
            </h2>

            <div className="space-y-6 text-lg text-slate-gray font-medium leading-relaxed">
              <p>
                At Diagnuvo, we believe that every patient's health journey is
                profoundly unique. Behind every chart, lab result, and vital
                sign is a personal history, an evolving need, and an individual
                resilience that demands to be understood.
              </p>
              <p>
                The modern emergency department is a place of miracles, but it
                is also a place of immense pressure. When seconds dictate
                outcomes, the nuance of the individual can be lost in the noise
                of the system.
              </p>
              <p className="text-deep-navy font-semibold border-l-4 border-medical-blue pl-6 py-2">
                Our technology doesn't replace the physician's intuition; it
                amplifies it. We build tools that cut through the chaos, giving
                doctors the clarity and time they need to treat the multitudes
                within each patient.
              </p>
              <p>
                Because intelligent care isn't just about faster algorithms—it's
                about restoring the human connection at the heart of medicine.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border-gray relative">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200"
                alt="Doctor consulting with patient"
                className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-deep-navy/80 to-medical-blue/20 mix-blend-overlay"></div>

              {/* Subtle UI Overlay to blend tech and humanity */}
              <div className="absolute top-8 right-8 bg-bright-white/90 backdrop-blur-md p-4 rounded-xl border border-border-gray shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-medical-blue animate-pulse"></div>
                  <span className="text-xs font-bold text-deep-navy uppercase tracking-wider">
                    Patient History Analyzed
                  </span>
                </div>
                <div className="mt-2 text-xs text-slate-gray font-medium">
                  3 prior admissions reviewed.
                  <br />
                  No contraindications found.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
