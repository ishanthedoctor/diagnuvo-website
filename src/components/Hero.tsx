import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PlayCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>
        {/* Overlays for readability and smooth transition to the next section */}
        {/* Top gradient for Navbar readability */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-deep-navy/80 to-transparent pointer-events-none"></div>
        
        {/* Radial gradient to darken edges but leave the center video text solid white */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(15,23,42,0.7)_100%)] pointer-events-none"></div>
        
        {/* Bottom gradient for transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bright-white via-bright-white/80 to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mt-48 md:mt-64">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        </div>
      </div>
    </section>
  );
}
