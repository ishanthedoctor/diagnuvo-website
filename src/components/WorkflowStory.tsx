import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  animate,
  AnimatePresence
} from "motion/react";
import { ShieldCheck, CheckCircle2, Lock, AlertCircle, Activity, User } from "lucide-react";

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function usePrefersReducedMotion(): boolean {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setPrefers(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return prefers;
}

function AnimatedCounter({ to, isActive }: { to: number; isActive: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!nodeRef.current) return;

    if (!isActive) {
      nodeRef.current.textContent = "0";
      return;
    }

    if (prefersReducedMotion) {
      nodeRef.current.textContent = to.toString();
      return;
    }

    const controls = animate(0, to, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate(value) {
        if (nodeRef.current) nodeRef.current.textContent = Math.round(value).toString();
      },
    });

    return () => controls.stop();
  }, [isActive, prefersReducedMotion, to]);

  return <span ref={nodeRef}>0</span>;
}

function StepBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-cyan-200/90">
      {text}
    </span>
  );
}

/** --- Visual Modules --- **/

function PatientListMini({ active }: { active: boolean }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [demoState, setDemoState] = useState<"idle" | "arrived" | "scanning" | "triaged" | "sorted">("idle");

  useEffect(() => {
    if (!active) {
      setDemoState("idle");
      return;
    }
    if (prefersReducedMotion) {
      setDemoState("sorted");
      return;
    }

    let isMounted = true;
    const runDemo = async () => {
      while (isMounted && active) {
        setDemoState("idle");
        await new Promise(r => setTimeout(r, 800));
        if (!isMounted || !active) break;

        setDemoState("arrived");
        await new Promise(r => setTimeout(r, 800));
        if (!isMounted || !active) break;

        setDemoState("scanning");
        await new Promise(r => setTimeout(r, 1500));
        if (!isMounted || !active) break;

        setDemoState("triaged");
        await new Promise(r => setTimeout(r, 1000));
        if (!isMounted || !active) break;

        setDemoState("sorted");
        await new Promise(r => setTimeout(r, 4000));
      }
    };
    runDemo();
    return () => { isMounted = false; };
  }, [active, prefersReducedMotion]);

  const patients = [
    { id: "sarah", name: "Sarah Jenkins", risk: "MEDIUM", colorClass: "bg-amber-500/15 text-amber-200", icon: <Activity className="w-3.5 h-3.5 text-amber-400" /> },
    { id: "michael", name: "Michael Chen", risk: "LOW", colorClass: "bg-cyan-500/15 text-cyan-200", icon: <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> },
  ];

  const john = { id: "john", name: "John Smith", risk: "HIGH", colorClass: "bg-red-500/15 text-red-200", icon: <AlertCircle className="w-3.5 h-3.5 text-red-400" /> };

  let displayList = [...patients];
  if (demoState !== "idle") {
    if (demoState === "sorted") {
      displayList = [john, ...patients];
    } else {
      displayList = [...patients, john];
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] overflow-hidden">
      <div className="text-[11px] tracking-wider text-white/60">TRIAGE QUEUE</div>
      <div className="mt-3 relative h-[132px]">
        <AnimatePresence>
          {displayList.map((p, index) => {
            const isJohn = p.id === "john";
            
            let badgeText = p.risk;
            let badgeColor = p.colorClass;
            let rowClass = "border-transparent bg-white/5";
            let showScanner = false;
            let currentIcon = p.icon;

            if (isJohn) {
              if (demoState === "arrived" || demoState === "scanning") {
                badgeText = "ANALYZING";
                badgeColor = "bg-white/10 text-white/50";
                currentIcon = <User className="w-3.5 h-3.5 text-white/50" />;
                if (demoState === "scanning") {
                  showScanner = true;
                  rowClass = "border-cyan-500/50 bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.15)]";
                }
              } else if (demoState === "triaged" || demoState === "sorted") {
                rowClass = "border-red-500/50 bg-red-500/10 shadow-[0_0_15px_rgba(239,68,68,0.15)]";
              }
            }

            return (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`absolute w-full flex items-center justify-between rounded-lg px-3 py-2 border transition-colors duration-300 overflow-hidden ${rowClass}`}
                style={{ top: index * 44 }}
              >
                <div className="flex items-center gap-2">
                  {currentIcon}
                  <span className={isJohn && demoState >= "triaged" ? "text-white font-medium" : "text-white/80"}>
                    {p.name}
                  </span>
                </div>
                <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wider transition-colors duration-300 ${badgeColor}`}>
                  {badgeText}
                </span>

                {showScanner && (
                  <motion.div
                    className="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.8)] z-10"
                    animate={{ left: ["0%", "100%", "0%"] }}
                    transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-2 flex items-center gap-2 text-[12px] text-white/60">
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
        </span>
        Live signal detection
      </div>
    </div>
  );
}

function ICURiskCard({ active }: { active: boolean }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center justify-between">
        <div className="text-[11px] tracking-wider text-white/60">ICU PROBABILITY</div>
        <div className="h-2 w-16 rounded-full bg-white/5">
          <motion.div
            className="h-2 rounded-full bg-cyan-300/70"
            initial={{ width: "0%" }}
            animate={{ width: active ? "72%" : "0%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="mt-3 text-5xl font-extrabold tracking-tight text-cyan-200">
        <AnimatedCounter to={72} isActive={active} />%
      </div>

      {/* Mini sparkline (SVG) */}
      <svg viewBox="0 0 240 60" className="mt-3 h-10 w-full">
        <path
          d="M0 40 C 40 38, 60 10, 90 18 C 120 26, 130 50, 160 40 C 190 30, 205 12, 240 16"
          fill="none"
          stroke="rgba(34,211,238,0.65)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="240" cy="16" r="4" fill="rgba(34,211,238,0.9)" />
      </svg>

      <div className="mt-2 text-[12px] text-white/55">
        Trend increasing — escalate sooner if deterioration signals persist.
      </div>
    </div>
  );
}

function ReassessAlert({ active }: { active: boolean }) {
  return (
    <motion.div
      className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4"
      animate={{
        boxShadow: active
          ? "0 0 0 1px rgba(248,113,113,0.25), 0 0 28px rgba(248,113,113,0.18)"
          : "0 0 0 1px rgba(248,113,113,0.12), 0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-red-100">
        <span className="inline-flex h-2 w-2 rounded-full bg-red-300" />
        REASSESS NOW
      </div>
      <div className="mt-1 text-[12px] tracking-wide text-red-100/70">
        ESCALATION STATUS: <span className="font-semibold text-red-100">ACTIVE</span>
      </div>

      <motion.div
        className="mt-3 h-1 w-full rounded-full bg-red-300/10"
        initial={false}
        animate={{ opacity: active ? 1 : 0.5 }}
      >
        <motion.div
          className="h-1 rounded-full bg-red-300/60"
          initial={{ width: "0%" }}
          animate={{ width: active ? "100%" : "0%" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

function ActionButtons({ active }: { active: boolean }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [demoState, setDemoState] = useState<"idle" | "moving" | "clicking" | "activated" | "toast1" | "toast2">("idle");
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLButtonElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    if (!active) {
      setDemoState("idle");
      setCursorVisible(false);
      return;
    }

    if (prefersReducedMotion) {
      setDemoState("toast2");
      return;
    }

    let isMounted = true;

    const runDemo = async () => {
      while (isMounted && active) {
        // Reset
        setDemoState("idle");
        setCursorVisible(false);
        await new Promise((r) => setTimeout(r, 500));
        if (!isMounted || !active) break;

        // Calculate target position
        if (containerRef.current && targetRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const targetRect = targetRef.current.getBoundingClientRect();
          
          // Start cursor somewhere below and right
          setCursorPos({
            x: targetRect.left - containerRect.left + targetRect.width / 2 + 40,
            y: targetRect.bottom - containerRect.top + 60,
          });
          setCursorVisible(true);
          
          await new Promise((r) => setTimeout(r, 100));
          if (!isMounted || !active) break;

          setDemoState("moving");
          setCursorPos({
            x: targetRect.left - containerRect.left + targetRect.width / 2,
            y: targetRect.top - containerRect.top + targetRect.height / 2,
          });

          await new Promise((r) => setTimeout(r, 600)); // wait for move
          if (!isMounted || !active) break;

          setDemoState("clicking");
          await new Promise((r) => setTimeout(r, 200)); // wait for click ripple
          if (!isMounted || !active) break;

          setDemoState("activated");
          await new Promise((r) => setTimeout(r, 400));
          if (!isMounted || !active) break;

          setDemoState("toast1");
          await new Promise((r) => setTimeout(r, 700));
          if (!isMounted || !active) break;

          setDemoState("toast2");
          await new Promise((r) => setTimeout(r, 3000)); // hold final state
          if (!isMounted || !active) break;
        } else {
          await new Promise((r) => setTimeout(r, 1000));
        }
      }
    };

    runDemo();

    return () => {
      isMounted = false;
    };
  }, [active, prefersReducedMotion]);

  const items = ["Reassess Now", "Notify ICU", "Activate Stroke Protocol"];
  const isActivated = ["activated", "toast1", "toast2"].includes(demoState);

  return (
    <div ref={containerRef} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 overflow-hidden">
      <div className="text-[11px] tracking-wider text-white/60">SUGGESTED ACTIONS</div>
      <div className="mt-3 space-y-2">
        {items.map((t, i) => {
          const isTarget = t === "Activate Stroke Protocol";
          const itemActivated = isTarget && isActivated;
          
          return (
            <motion.button
              key={t}
              ref={isTarget ? targetRef : null}
              className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-colors relative overflow-hidden ${
                itemActivated
                  ? "border-cyan-400/50 bg-cyan-900/30 text-white shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                  : "border-white/10 bg-white/5 text-white/85 hover:bg-white/10"
              }`}
              initial={false}
              animate={{
                opacity: active ? 1 : 0.4,
                y: active ? 0 : 6,
                scale: isTarget && demoState === "clicking" ? 0.98 : 1,
              }}
              transition={{ duration: 0.35, delay: active ? i * 0.08 : 0 }}
              type="button"
            >
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center">
                  <span
                    className={`mr-2 inline-block h-2 w-2 rounded-full transition-colors ${
                      itemActivated ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "bg-white/30"
                    }`}
                  />
                  {t}
                </div>
                {itemActivated && (
                  <motion.span 
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs font-semibold text-cyan-300 uppercase tracking-wider"
                  >
                    Activated
                  </motion.span>
                )}
              </div>
              
              {/* Ripple effect */}
              {isTarget && demoState === "clicking" && (
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0, opacity: 0.5, borderRadius: "100%" }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ originX: 0.5, originY: 0.5 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Toasts */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2 items-end pointer-events-none z-20">
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ 
            opacity: ["toast1", "toast2"].includes(demoState) ? 1 : 0,
            y: ["toast1", "toast2"].includes(demoState) ? 0 : 10,
            scale: ["toast1", "toast2"].includes(demoState) ? 1 : 0.95
          }}
          className="rounded-lg bg-cyan-950/90 border border-cyan-500/30 px-3 py-2 text-xs text-cyan-100 shadow-lg backdrop-blur-md flex items-center gap-2"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          Stroke call activated
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ 
            opacity: demoState === "toast2" ? 1 : 0,
            y: demoState === "toast2" ? 0 : 10,
            scale: demoState === "toast2" ? 1 : 0.95
          }}
          className="rounded-lg bg-cyan-950/90 border border-cyan-500/30 px-3 py-2 text-xs text-cyan-100 shadow-lg backdrop-blur-md flex items-center gap-2"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          CT team notified
        </motion.div>
      </div>

      {/* Cursor */}
      {!prefersReducedMotion && cursorVisible && (
        <motion.div
          className="absolute z-50 pointer-events-none flex items-center justify-center opacity-70"
          initial={false}
          animate={{
            x: cursorPos.x,
            y: cursorPos.y,
            scale: demoState === "clicking" ? 0.8 : 1,
          }}
          transition={{
            x: { type: "spring", stiffness: 150, damping: 20, mass: 0.5 },
            y: { type: "spring", stiffness: 150, damping: 20, mass: 0.5 },
            scale: { duration: 0.1 }
          }}
          style={{
            width: 20,
            height: 20,
            marginLeft: -10,
            marginTop: -10,
          }}
        >
          <div className="w-4 h-4 rounded-full bg-white/90 shadow-[0_2px_10px_rgba(0,0,0,0.3)] border border-white/40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
          </div>
        </motion.div>
      )}
    </div>
  );
}

function CTScanTile({ active }: { active: boolean }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-[11px] tracking-wider text-white/60">CT OVERLAY</div>
      <div className="mt-3 grid place-items-center">
        <div className="relative h-48 w-48 rounded-2xl border border-white/10 bg-[#061225] overflow-hidden">
          {/* Brain CT Image */}
          <img
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=400&q=80"
            alt="Brain CT Scan"
            className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen"
            style={{ filter: "grayscale(100%) contrast(1.5) brightness(1.2)" }}
            referrerPolicy="no-referrer"
          />
          
          {/* Animated overlay to simulate scanning depth */}
          <motion.div
            className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay"
            animate={active ? { opacity: [0.1, 0.4, 0.1] } : { opacity: 0.1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Lesion highlight (pulsing red dot) */}
          <motion.div
            className="absolute w-8 h-8 rounded-full border-2 border-red-500/80 bg-red-500/20"
            style={{ top: '45%', left: '65%', transform: 'translate(-50%, -50%)' }}
            animate={active ? { scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] } : { scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div 
            className="absolute w-2 h-2 rounded-full bg-red-500"
            style={{ top: '45%', left: '65%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 12px 3px rgba(239, 68, 68, 0.9)' }}
          />

          {/* Scanning line */}
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10"
            style={{ top: 0 }}
            animate={
              active
                ? { y: [0, 192, 0] }
                : { y: 0 }
            }
            transition={
              active
                ? { duration: 2.5, ease: "linear", repeat: Infinity }
                : { duration: 0.2 }
            }
          />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        </div>
      </div>

      <div className="mt-3 text-[12px] text-white/55">
        AI-augmented imaging signal highlights suspected region.
      </div>
    </div>
  );
}

function GovernanceChips({ active }: { active: boolean }) {
  const items = [
    { icon: ShieldCheck, label: "Privacy by Design", desc: "HIPAA & GDPR Compliant", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-500/20" },
    { icon: CheckCircle2, label: "Clinical Governance", desc: "Audit-ready logging", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-500/20" },
    { icon: Lock, label: "Security Controls", desc: "End-to-end encryption", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-500/20" },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 relative overflow-hidden backdrop-blur-sm">
      {/* Background glow */}
      <motion.div 
        className="absolute -inset-20 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 blur-3xl pointer-events-none"
        animate={{
          opacity: active ? [0.4, 0.7, 0.4] : 0,
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="text-[10px] font-bold tracking-widest text-white/50 uppercase flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
            System Readiness
          </div>
          <motion.div 
            className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
            animate={{ 
              opacity: active ? 1 : 0,
              scale: active ? 1 : 0.8
            }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">Secure</span>
          </motion.div>
        </div>

        <div className="space-y-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.label}
                className={`flex items-center gap-4 rounded-xl border ${active ? it.border : 'border-white/5'} bg-white/5 p-3 relative overflow-hidden`}
                initial={false}
                animate={{
                  opacity: active ? 1 : 0.4,
                  x: active ? 0 : -15,
                  backgroundColor: active ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.02)"
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: active ? i * 0.15 : 0,
                  ease: "easeOut"
                }}
              >
                {/* Scanning highlight effect */}
                {active && (
                  <motion.div
                    className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                )}

                <motion.div 
                  className={`p-2 rounded-lg ${it.bg} shrink-0`}
                  animate={{
                    scale: active ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.5, delay: active ? i * 0.15 + 0.2 : 0 }}
                >
                  <Icon className={`h-4 w-4 ${it.color}`} />
                </motion.div>
                
                <div className="flex-1">
                  <div className="text-sm font-medium text-white/90">{it.label}</div>
                  <motion.div 
                    className="text-[11px] text-white/50"
                    animate={{ opacity: active ? 1 : 0, height: active ? "auto" : 0 }}
                    transition={{ duration: 0.3, delay: active ? i * 0.15 + 0.3 : 0 }}
                  >
                    {it.desc}
                  </motion.div>
                </div>

                {/* Status indicator */}
                <motion.div 
                  className="shrink-0"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: active ? 1 : 0, opacity: active ? 1 : 0 }}
                  transition={{ delay: active ? 0.4 + (i * 0.15) : 0, type: "spring" }}
                >
                  <CheckCircle2 className={`w-4 h-4 ${it.color} opacity-80`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function AuditLogCard({ active }: { active: boolean }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [demoState, setDemoState] = useState<"idle" | "scanning" | "verified">("idle");

  useEffect(() => {
    if (!active) {
      setDemoState("idle");
      return;
    }
    if (prefersReducedMotion) {
      setDemoState("verified");
      return;
    }

    let isMounted = true;
    const runDemo = async () => {
      setDemoState("idle");
      await new Promise(r => setTimeout(r, 600)); // Wait for card to appear
      if (!isMounted || !active) return;
      
      setDemoState("scanning");
      await new Promise(r => setTimeout(r, 1800)); // Scanning duration
      if (!isMounted || !active) return;
      
      setDemoState("verified");
    };
    
    runDemo();
    return () => { isMounted = false; };
  }, [active, prefersReducedMotion]);

  const events = [
    { label: "Stroke Alert Activated", time: "14:02:11", hash: "0x8F...3A2" },
    { label: "CT Ordered", time: "14:04:45", hash: "0x2C...9B1" },
    { label: "Neurology Called", time: "14:12:03", hash: "0x7E...4F8" },
  ];

  return (
    <motion.div 
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] overflow-hidden backdrop-blur-xl relative"
      initial={false}
      animate={{
        opacity: active ? 1 : 0.35,
        y: active ? 0 : 20,
        scale: active ? 1 : 0.98,
        boxShadow: active 
          ? "inset 0 0 30px rgba(34,211,238,0.05), 0 20px 40px -10px rgba(0,0,0,0.6), 0 0 0 1px rgba(34,211,238,0.2)" 
          : "inset 0 0 0 rgba(34,211,238,0), 0 0 0 rgba(0,0,0,0), 0 0 0 1px rgba(255,255,255,0.03)"
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Scanning Laser */}
      {demoState === "scanning" && (
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20"
          initial={{ top: "0%" }}
          animate={{ top: "100%" }}
          transition={{ duration: 1.8, ease: "linear" }}
        />
      )}

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none opacity-50" />

      <div className="relative z-10 flex items-center justify-between pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide">Audit Log</h4>
            <div className="text-[10px] tracking-widest text-cyan-300/70 uppercase mt-0.5 font-mono flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className={`absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 ${demoState === "scanning" ? "animate-ping" : ""}`}></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
              </span>
              Immutable Record
            </div>
          </div>
        </div>
        
        {/* Verified Stamp */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ 
            scale: demoState === "verified" ? 1 : 0.5, 
            opacity: demoState === "verified" ? 1 : 0,
            rotate: demoState === "verified" ? 0 : -10
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1"
        >
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-300">Verified</span>
        </motion.div>
      </div>
      
      <div className="relative pl-0 space-y-4 py-2 z-10">
        
        {events.map((ev, i) => {
          return (
            <motion.div 
              key={i}
              className="relative flex flex-col justify-center rounded-xl bg-white/[0.03] border border-white/5 p-3 overflow-hidden"
              initial={false}
              animate={{
                opacity: active ? 1 : 0,
                x: active ? 0 : 20,
                borderColor: demoState === "verified" ? "rgba(34,211,238,0.15)" : "rgba(255,255,255,0.05)"
              }}
              transition={{
                duration: 0.5,
                delay: active ? (prefersReducedMotion ? 0 : 0.3 + i * 0.15) : 0,
                ease: "easeOut"
              }}
            >
              {/* Highlight flash on scan */}
              <motion.div
                className="absolute inset-0 bg-cyan-400/10"
                initial={{ opacity: 0 }}
                animate={demoState === "scanning" ? {
                  opacity: [0, 1, 0]
                } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (i * 0.4) }}
              />

              {/* Node marker */}
              <motion.div 
                className="absolute -left-[22px] top-1/2 -translate-y-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-[#020617] border-2 border-cyan-500/50"
                initial={false}
                animate={active && !prefersReducedMotion ? {
                  borderColor: demoState === "verified" ? "rgba(34,211,238,0.9)" : "rgba(34,211,238,0.3)",
                  boxShadow: demoState === "verified" ? "0 0 10px rgba(34,211,238,0.5)" : "none"
                } : {}}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: active ? 1 : 0 }}
                  transition={{ delay: active ? 0.5 + i * 0.15 : 0, type: "spring" }}
                />
              </motion.div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/95 font-semibold tracking-wide">{ev.label}</span>
                <span className="text-[10px] text-cyan-200/80 font-mono bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-500/20">{ev.time}</span>
              </div>
              
              <div className="mt-2 flex items-center justify-between border-t border-white/5 pt-2">
                <div className="flex items-center gap-1.5 text-[9px] text-white/40 font-mono">
                  <Lock className="w-2.5 h-2.5" />
                  <span>SHA-256</span>
                </div>
                <motion.span 
                  className="text-[9px] font-mono text-white/30"
                  animate={{
                    color: demoState === "verified" ? "rgba(167, 243, 208, 0.7)" : "rgba(255,255,255,0.3)"
                  }}
                >
                  {demoState === "idle" ? "..." : ev.hash}
                </motion.span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function EmergencyIntelligenceText({ active }: { active: boolean }) {
  return (
    <div className="mt-2 flex flex-col gap-4 text-center md:text-right max-w-lg rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-6 shadow-2xl">
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.2 }}
        className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight"
      >
        Emergency Intelligence, in real time.
      </motion.h3>
      
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="text-base md:text-lg font-medium text-cyan-300"
      >
        From imaging to escalation — without delay.
      </motion.p>
      
      <div className="flex flex-col gap-3 mt-2">
        {[
          "Detect stroke-relevant signals instantly.",
          "Link findings to escalation pathways.",
          "Trigger coordinated team actions."
        ].map((bullet, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 15 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
            transition={{ duration: 0.12, delay: 0.3 + i * 0.12 }}
            className="flex items-center justify-center md:justify-end gap-3"
          >
            <span className="text-white/90 text-sm md:text-base font-medium">{bullet}</span>
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] hidden md:block" />
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] md:hidden order-first" />
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="mt-4 border-t border-white/10 pt-4"
      >
        <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-white/40">
          Supports clinicians — never replaces judgment.
        </p>
      </motion.div>
    </div>
  );
}

/** --- Main Story --- **/

type Step = {
  step: string;
  title?: string;
  desc: React.ReactNode | ((isActive: boolean) => React.ReactNode);
  side: "left" | "right";
};

export default function WorkflowStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = useMemo(
    () => [
      {
        step: "STEP 01",
        title: "Patient Arrival & Smart Triage",
        desc: "Signal detection and priority triage in seconds.",
        side: "right",
      },
      {
        step: "STEP 02",
        title: "Early Risk Detection",
        desc: "AI predicts ICU need and prioritizes high-risk patients.",
        side: "left",
      },
      {
        step: "STEP 03",
        title: "Critical Risk Escalation",
        desc: "Severe cases trigger a visible escalation alert and checklist.",
        side: "right",
      },
      {
        step: "STEP 04",
        title: "Clinical Actions in Seconds",
        desc: "Take immediate action based on AI-derived insights.",
        side: "left",
      },
      {
        step: "STEP 05",
        desc: (isActive) => <EmergencyIntelligenceText active={isActive} />,
        side: "right",
      },
      {
        step: "STEP 06",
        title: "Emergency Decision Making",
        desc: "Secure, compliant, and ready for clinical governance.",
        side: "left",
      },
      {
        step: "STEP 07",
        title: "Audit-Ready Governance",
        desc: "Every clinical action is securely recorded.",
        side: "right",
      },
    ],
    []
  );

  const prefersReducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Determine active step (0..5)
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = clamp(Math.floor(v * steps.length), 0, steps.length - 1);
    setActiveIndex(idx);
  });

  // Progress line height as percent
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#020617] h-[700vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 z-0 bg-[#020617]">
          {/* Cinematic ED Background Image */}
          <img
            src="/ed-bg.PNG"
            alt="Modern Emergency Department"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            style={{
              filter: "brightness(0.6) contrast(1.2) saturate(1.5) hue-rotate(200deg) blur(2px)"
            }}
          />
          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
          {/* grid */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              backgroundPosition: "center",
            }}
          />
          {/* cyan glow blob */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 35%, rgba(34,211,238,0.18), rgba(2,6,23,0) 60%)",
            }}
          />
          {/* vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(2,6,23,0) 30%, rgba(2,6,23,0.95) 100%)",
            }}
          />
          {/* noise */}
          <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
               style={{
                 backgroundImage:
                   "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.55%22/></svg>')",
               }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 mx-auto h-full max-w-6xl px-6 md:px-10">
        
          {/* Steps layout */}
          <div className="relative h-full w-full flex items-center justify-center">
            {steps.map((s, i) => {
              const isActive = i === activeIndex;
              const sideClass =
                s.side === "left"
                  ? "md:pr-24 md:justify-self-start md:text-left"
                  : "md:pl-24 md:justify-self-end md:text-right";

              return (
                <motion.div 
                  key={s.step} 
                  className="absolute w-full flex items-center justify-center"
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : (i < activeIndex ? -40 : 40),
                    pointerEvents: isActive ? "auto" : "none"
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {/* Node */}
                  <div className="absolute left-6  z-30">
                    <motion.div
                      className="h-4 w-4 rounded-full border border-cyan-200/60 bg-[#020617]"
                      animate={{
                        boxShadow: isActive
                          ? "0 0 0 6px rgba(34,211,238,0.12), 0 0 22px rgba(34,211,238,0.45)"
                          : "0 0 0 0 rgba(0,0,0,0)",
                        scale: isActive && !prefersReducedMotion ? [1, 1.08, 1] : 1,
                      }}
                      transition={{ duration: 0.55, ease: "easeOut" }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={[
                      "w-full md:w-[520px] flex",
                      s.side === "left" ? "justify-start md:pr-24" : "justify-end md:pl-24"
                    ].join(" ")}
                  >
                    <div className={`flex flex-col gap-4 w-full max-w-[320px] ${s.side === "left" ? "text-left" : "text-right"}`}>
                      <div>
                        <div className={s.side === "right" ? "flex justify-end" : "flex justify-start"}>
                          <StepBadge text={s.step} />
                        </div>
                        {s.title && (
                          <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                            {s.title}
                          </h3>
                        )}
                        {typeof s.desc === "function" ? (
                          s.desc(isActive)
                        ) : (
                          <div className="mt-2 text-white/70 text-sm leading-relaxed">
                            {s.desc}
                          </div>
                        )}
                      </div>

                      {/* Visual module per step */}
                      <div className="max-w-full">
                        {i === 0 && <PatientListMini active={isActive} />}
                        {i === 1 && <ICURiskCard active={isActive} />}
                        {i === 2 && <ReassessAlert active={isActive} />}
                        {i === 3 && <ActionButtons active={isActive} />}
                        {i === 4 && <CTScanTile active={isActive} />}
                        {i === 5 && <GovernanceChips active={isActive} />}
                        {i === 6 && <AuditLogCard active={isActive} />}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
