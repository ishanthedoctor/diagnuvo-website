import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1c34] text-gray-400 py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
            +
          </div>

          <div className="text-white font-semibold tracking-wide">
            DIAGNUVO <span className="text-blue-400">ED</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8 text-sm">

          <a
            href="/privacy-policy"
            className="hover:text-white transition"
          >
            Privacy Policy
          </a>

          <a
            href="/terms"
            className="hover:text-white transition whitespace-nowrap"
          >
            Terms of Service
          </a>

          <a
            href="/security"
            className="hover:text-white transition"
          >
            Security
          </a>

        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 text-center md:text-right">
          © 2026 Diagnuvo Health. All rights reserved. •
          <br className="md:hidden"/>

          Website developed by{" "}
          <a
            href="https://www.linkedin.com/in/dr-ishanjit-singh-sandhu-md-7950aa53"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Dr. Ishanjit Singh Sandhu
          </a>
        </div>

      </div>
    </footer>
  );
}
