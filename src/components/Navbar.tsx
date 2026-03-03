import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, ShieldPlus, Activity } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);

  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-xl border-b border-white/10 ${
        isScrolled ? "py-0.5" : "py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-10">
        {/* Logo Area */}
        <a href="/" className="flex items-center gap-2 z-50 relative group ">
          <img
            src="/diagnuvo.png"
            alt="D I A G N U V O Logo"
            style={{
              height: "28px",
              width: "auto",
              objectFit: "contain",
              display: "block",
              filter: "brightness(1.2) contrast(1.1)",
              
            }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#platform"
            className={`text-sm font-bold transition-colors ${isScrolled ? 'text-slate-gray hover:text-deep-navy' : 'text-bright-white hover:text-bright-white/80'}`}
          >
            Platform
          </a>
          <a
            href="#features"
            className={`text-sm font-bold transition-colors ${isScrolled ? 'text-slate-gray hover:text-deep-navy' : 'text-bright-white hover:text-bright-white/80'}`}
          >
            Features
          </a>
          <a
            href="#security"
            className={`text-sm font-bold transition-colors ${isScrolled ? 'text-slate-gray hover:text-deep-navy' : 'text-bright-white hover:text-bright-white/80'}`}
          >
            Security
          </a>
          <a
            href="#about"
            className={`text-sm font-bold transition-colors ${isScrolled ? 'text-slate-gray hover:text-deep-navy' : 'text-bright-white hover:text-bright-white/80'}`}
          >
            About
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all ${isScrolled ? 'bg-medical-blue/10 border border-medical-blue/20 text-medical-blue' : 'bg-bright-white/10 border border-bright-white/20 text-bright-white backdrop-blur-md'}`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${isScrolled ? 'bg-medical-blue' : 'bg-medical-blue-light'}`}></span>
            Next-Gen ED Intelligence
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-deep-navy' : 'text-bright-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-transparent backdrop-blur-xl border-b border-white/10 shadow-lg py-4 px-6 flex flex-col gap-4"
        >
          <a
            href="#platform"
            className={`text-base font-bold py-2 border-b ${isScrolled ? 'text-deep-navy border-soft-gray' : 'text-bright-white border-white/10'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Platform
          </a>
          <a
            href="#features"
            className={`text-base font-bold py-2 border-b ${isScrolled ? 'text-deep-navy border-soft-gray' : 'text-bright-white border-white/10'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#security"
            className={`text-base font-bold py-2 border-b ${isScrolled ? 'text-deep-navy border-soft-gray' : 'text-bright-white border-white/10'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Security
          </a>
          <a
            href="#about"
            className={`text-base font-bold py-2 border-b ${isScrolled ? 'text-deep-navy border-soft-gray' : 'text-bright-white border-white/10'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <div className="flex flex-col gap-3 mt-2">
            <div className={`inline-flex items-center justify-center gap-2 px-3 py-3 rounded-lg text-sm font-semibold tracking-wide uppercase ${isScrolled ? 'bg-medical-blue/10 border border-medical-blue/20 text-medical-blue' : 'bg-bright-white/10 border border-bright-white/20 text-bright-white backdrop-blur-md'}`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${isScrolled ? 'bg-medical-blue' : 'bg-medical-blue-light'}`}></span>
              Next-Gen ED Intelligence
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
