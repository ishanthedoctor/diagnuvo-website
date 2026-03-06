import React from "react";
import { ArrowRight, ShieldPlus } from "lucide-react";

export default function FooterCTA() {
  return (
    <footer className="bg-deep-navy text-bright-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top CTA */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Ready to transform
            <br />
            emergency decision-making?
          </h2>

          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Diagnuvo ED brings clarity, escalation intelligence, and real-time
            clinical support into every critical moment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-medical-blue hover:bg-medical-blue-light text-bright-white font-semibold transition-all duration-300 shadow-lg"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <a
              href="mailto:diagnuvo@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-white/15 hover:border-white/30 text-bright-white font-semibold transition-all duration-300"
            >
              Contact Sales
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 border-t border-slate-gray/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-medical-blue to-medical-blue-light text-bright-white shadow-sm">
              <ShieldPlus size={18} strokeWidth={2} />
            </div>
            <span className="font-bold text-xl tracking-tight leading-none">
              DIAGNUVO <span className="text-medical-blue">ED</span>
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm font-medium text-slate-gray">
            <a
              href="/privacy-policy"
              className="hover:text-bright-white transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="hover:text-bright-white transition-colors"
            >
              Terms of Service
            </a>

            <a
              href="/security"
              className="hover:text-bright-white transition-colors"
            >
              Security
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm font-medium text-slate-gray flex flex-wrap items-center gap-2">
            <span>
              &copy; {new Date().getFullYear()} Diagnuvo Health. All rights
              reserved.
            </span>

            <span className="opacity-60">•</span>

            <span className="opacity-70">
              Website developed by
              <a
                href="https://www.linkedin.com/in/dr-ishanjit-singh-sandhu-md-7950aa53"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-slate-400 hover:text-white transition-colors underline underline-offset-4"
              >
                Dr. Ishanjit Singh Sandhu
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
