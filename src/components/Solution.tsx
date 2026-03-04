import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowUp, ShieldCheck } from "lucide-react";

/** Simple “in view” hook (no extra deps) */
function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      // trigger once and stay true
      if (entry.isIntersecting) setIsInView(true);
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}

/** Count-up animation (0 -> target) when `start` becomes true */
function useCountUp(target: number, start: boolean, durationMs = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    const startTs = performance.now();
    const from = 0;
    const to = target;

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTs) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const next = Math.round(from + (to - from) * eased);
      setValue(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, durationMs]);

  return value;
}

export default function Solution() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.25 });

  const v40 = useCountUp(40, isInView, 900);
  const v65 = useCountUp(65, isInView, 900);

  const cards = useMemo(
    () => [
      {
        key: "cog",
        value: `${v40}%`,
        label: "Cognitive Load",
        sub: "Reduced mental burden for clinicians",
        accent: "text-cyan-300",
        icon: ArrowDown,
        iconAnim: { y: [0, 6, 0] },
      },
      {
        key: "speed",
        value: `${v65}%`,
        label: "Speed to Decision",
        sub: "Faster clinical escalation and action",
        accent: "text-cyan-300",
        icon: ArrowUp,
        iconAnim: { y: [0, -6, 0] },
      },
      {
        key: "audit",
        value: "Audit-Ready",
        label: "by Design",
        sub: "Immutable clinical audit trails",
        accent: "text-cyan-200",
        // IMPORTANT: use the shield icon (not emoji, not logo image)
        icon: ShieldCheck,
        iconAnim: { scale: [1, 1.06, 1] },
      },
    ],
    [v40, v65]
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-28 bg-gradient-to-b from-[#071625] via-[#0d2743] to-[#08121f]"
    >
      {/* Animated grid + glow background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* moving grid */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "42px 42px"],
          }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
        />

        {/* soft cyan glow */}
        <div className="absolute -top-40 left-[10%] w-[520px] h-[520px] bg-cyan-400/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 right-[8%] w-[620px] h-[620px] bg-blue-500/15 rounded-full blur-[160px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#071625_78%)] opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Shield icon (NOT emoji, NOT logo) */}
        <div className="flex justify-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <ShieldCheck className="w-7 h-7 text-cyan-200" />
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-center text-white tracking-tight"
        >
          The Smart Emergency Care Platform
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-blue-100/90 text-center max-w-4xl mx-auto leading-relaxed"
        >
          Diagnuvo ED™ transforms the chaos of the emergency department into a streamlined,
          predictable environment. By combining intelligent workflow automation with AI-assisted
          patient analysis, we empower clinicians to make faster, safer, and more accurate decisions
          when every second matters.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.key}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.08 + idx * 0.06, ease: "easeOut" }}
                className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-center justify-center mb-5">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                    animate={isInView ? c.iconAnim : {}}
                    transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
                  >
                    <Icon className={`w-6 h-6 ${c.accent}`} />
                  </motion.div>
                </div>

                <div className={`text-5xl md:text-6xl font-bold text-center ${c.accent}`}>
                  {c.value}
                </div>

                <div className="mt-4 text-center">
                  <div className="text-white font-semibold text-lg">{c.label}</div>
                  <div className="text-white/80 font-medium">{c.key === "audit" ? c.label === "Audit-Ready" ? c.label : c.label : ""}</div>
                  {c.key === "audit" && (
                    <div className="text-white/85 font-semibold">{c.label === "Audit-Ready" ? "by Design" : "by Design"}</div>
                  )}
                  {c.key !== "audit" && <div className="text-white/85 font-semibold">&nbsp;</div>}
                  <div className="mt-2 text-blue-100/85 text-sm md:text-base">{c.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
