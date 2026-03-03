import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldPlus } from "lucide-react";

export default function FooterCTA() {
  return (
    <footer className="bg-deep-navy text-bright-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8"
        >
          Ready to transform your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-medical-blue-light">
            Emergency Department?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-gray font-medium mb-12 max-w-2xl mx-auto"
        >
          Join leading hospitals in reducing cognitive load, accelerating
          triage, and improving patient outcomes with Diagnuvo ED™.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-medical-blue text-bright-white rounded-xl font-bold text-base hover:bg-medical-blue-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
            Request Demo
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-bright-white border border-slate-gray/50 rounded-xl font-bold text-base hover:bg-slate-gray/10 transition-all flex items-center justify-center gap-2">
            Contact Sales
          </button>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 border-t border-slate-gray/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-medical-blue to-medical-blue-light text-bright-white shadow-sm">
            <ShieldPlus size={18} strokeWidth={2} />
          </div>
          <span className="font-bold text-lg tracking-tight leading-none">
            DIAGNUVO <span className="text-medical-blue">ED</span>
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-gray">
          <a href="#" className="hover:text-bright-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-bright-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-bright-white transition-colors">
            Security
          </a>
        </div>

        <div className="text-sm font-medium text-slate-gray">
          &copy; {new Date().getFullYear()} Diagnuvo Health, Inc. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
