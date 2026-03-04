import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavLink = { name: string; href: string };

const navLinks: NavLink[] = [
  { name: "Platform", href: "#platform" },
  { name: "Features", href: "#features" },
  { name: "Security", href: "#security" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Optional: close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${isScrolled ? "fixed" : "absolute"} top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${
  isScrolled ? "py-0.5" : "py-1"
}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 z-50 relative">
          <img
            src="/diagnuvo.png"
            alt="Diagnuvo Logo"
            className="h-16 md:h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-full transition-colors"
          >
            NEXT-GEN ED INTELLIGENCE
          </a>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg bg-white/10 border border-white/15 text-white/90 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-black/30 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 pb-5 pt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-3 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-full transition-colors"
              >
                NEXT-GEN ED INTELLIGENCE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
