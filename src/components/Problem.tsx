import React from "react";
import { motion } from "motion/react";
import { AlertCircle, Clock, BrainCircuit } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-24 md:py-32 bg-bright-white border-t border-border-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-deep-navy tracking-tight leading-[1.1] mb-6">
                The modern ED is overwhelmed. <br />
                <span className="text-slate-gray font-medium">
                  We're changing that.
                </span>
              </h2>
              <p className="text-lg text-slate-gray leading-relaxed font-medium">
                Emergency departments face unprecedented chaos, critical delays,
                and unsustainable cognitive load. Every second counts, yet
                clinicians are bogged down by fragmented data and manual triage.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted-red/10 flex items-center justify-center shrink-0">
                  <AlertCircle size={24} className="text-muted-red" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-deep-navy mb-2">
                    Critical Delays
                  </h3>
                  <p className="text-slate-gray font-medium leading-relaxed">
                    Overcrowding and inefficient workflows lead to delayed
                    interventions for high-risk patients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-medical-blue/10 flex items-center justify-center shrink-0">
                  <BrainCircuit size={24} className="text-medical-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-deep-navy mb-2">
                    Cognitive Overload
                  </h3>
                  <p className="text-slate-gray font-medium leading-relaxed">
                    Physicians process thousands of data points per shift,
                    increasing the risk of diagnostic error and burnout.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-border-gray"
          >
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600"
              alt="Busy Emergency Department"
              className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-deep-navy/90 to-medical-blue/40 mix-blend-overlay"></div>

            {/* Overlay UI Elements to show "chaos" being analyzed */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-bright-white/90 backdrop-blur-md rounded-xl border border-border-gray shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-deep-navy uppercase tracking-wider">
                  System Status
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-muted-red bg-muted-red/10 px-2 py-1 rounded-md">
                  <span className="w-2 h-2 rounded-full bg-muted-red animate-pulse"></span>
                  High Capacity
                </span>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-soft-gray rounded-full overflow-hidden">
                  <div className="h-full bg-muted-red w-[92%]"></div>
                </div>
                <div className="flex justify-between text-xs font-medium text-slate-gray">
                  <span>ED Occupancy</span>
                  <span className="text-deep-navy font-bold">92%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
