import React from "react";
import { motion } from "motion/react";
import { Shield, Lock, FileCheck, Server } from "lucide-react";

const trustFeatures = [
  {
    icon: <Shield size={32} className="text-medical-blue" />,
    title: "Clinical Validation",
    description:
      "Algorithms rigorously tested against peer-reviewed medical literature and historical patient data.",
  },
  {
    icon: <Lock size={32} className="text-deep-navy" />,
    title: "Enterprise Security",
    description:
      "End-to-end encryption, role-based access control, and zero-trust architecture.",
  },
  {
    icon: <FileCheck size={32} className="text-medical-blue" />,
    title: "Comprehensive Audit Trail",
    description:
      "Every action, AI recommendation, and clinician decision is immutably logged.",
  },
  {
    icon: <Server size={32} className="text-deep-navy" />,
    title: "Compliance-Ready",
    description:
      "Built to meet and exceed HIPAA, GDPR, and SOC2 Type II regulatory requirements.",
  },
];

export default function TrustSecurity() {
  return (
    <section
      id="security"
      className="py-24 bg-soft-gray border-t border-border-gray"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-deep-navy tracking-tight mb-4"
          >
            Hospital-grade safety and security.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-gray font-medium max-w-2xl mx-auto"
          >
            We understand that in healthcare, trust is non-negotiable. Diagnuvo
            ED™ is built on a foundation of rigorous clinical validation and
            enterprise-grade security.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bright-white p-8 rounded-2xl border border-border-gray shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-soft-gray flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-deep-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-gray font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Badges / Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-border-gray flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale"
        >
          {/* Placeholders for compliance logos (HIPAA, SOC2, etc.) */}
          <div className="text-xl font-bold text-slate-gray tracking-widest uppercase">
            HIPAA Compliant
          </div>
          <div className="text-xl font-bold text-slate-gray tracking-widest uppercase">
            SOC 2 Type II
          </div>
          <div className="text-xl font-bold text-slate-gray tracking-widest uppercase">
            ISO 27001
          </div>
          <div className="text-xl font-bold text-slate-gray tracking-widest uppercase">
            GDPR Ready
          </div>
        </motion.div>
      </div>
    </section>
  );
}
