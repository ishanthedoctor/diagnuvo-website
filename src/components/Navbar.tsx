import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

useEffect(() => {
const handleScroll = () => {
setIsScrolled(window.scrollY > 20);
};

```
window.addEventListener("scroll", handleScroll);

return () => window.removeEventListener("scroll", handleScroll);
```

}, []);

return (
<motion.header
initial={{ y: -100 }}
animate={{ y: 0 }}
transition={{ duration: 0.5, ease: "easeOut" }}
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-xl border-b border-white/10 ${
        isScrolled ? "py-0.5" : "py-2"
      }`}
> <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-18">

```
    {/* Logo */}
    <a href="/" className="flex items-center gap-2 relative z-50">
      <img
        src="/diagnuvo.png"
        alt="Diagnuvo Logo"
        className="h-10 w-auto md:h-12 object-contain"
        style={{ filter: "brightness(1.2) contrast(1.1)" }}
      />
    </a>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
      <a href="#platform" className="text-white/80 hover:text-white transition">
        Platform
      </a>
      <a href="#features" className="text-white/80 hover:text-white transition">
        Features
      </a>
      <a href="#security" className="text-white/80 hover:text-white transition">
        Security
      </a>
      <a href="#about" className="text-white/80 hover:text-white transition">
        About
      </a>
    </nav>

    {/* Right Section */}
    <div className="flex items-center gap-3">

      {/* Desktop CTA */}
      <a
        href="#"
        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm hover:bg-white/15 transition"
      >
        NEXT-GEN ED INTELLIGENCE
      </a>

      {/* Mobile Toggle */}
      <button
        className="md:hidden inline-flex items-center justify-center p-2 rounded-lg bg-white/10 border border-white/15 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="md:hidden px-6 pb-4"
    >
      <div className="flex flex-col gap-3 pt-3 border-t border-white/10">

        <a
          href="#platform"
          className="text-white/80 hover:text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Platform
        </a>

        <a
          href="#features"
          className="text-white/80 hover:text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Features
        </a>

        <a
          href="#security"
          className="text-white/80 hover:text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Security
        </a>

        <a
          href="#about"
          className="text-white/80 hover:text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About
        </a>

      </div>
    </motion.div>
  )}
</motion.header>
```

);
}
