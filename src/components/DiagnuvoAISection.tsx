import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronRight, ShieldAlert, Activity, Clock, Shield } from "lucide-react";
import { DiagnuvoLogo } from "./DiagnuvoLogo";

export default function DiagnuvoAISection() {
  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullText = "Activate Stroke Protocol and page neurology.";

  useEffect(() => {
    let isMounted = true;
    const runLoop = async () => {
      while (isMounted) {
        // Step 0: Reset
        setStep(0);
        setTypedText("");
        await new Promise((r) => setTimeout(r, 1000));
        if (!isMounted) break;

        // Step 1: Typing
        setStep(1);
        for (let i = 1; i <= fullText.length; i++) {
          if (!isMounted) break;
          setTypedText(fullText.slice(0, i));
          await new Promise((r) => setTimeout(r, 30)); // Typing speed
        }
        await new Promise((r) => setTimeout(r, 500));
        if (!isMounted) break;

        // Step 2: AI Response
        setStep(2);
        await new Promise((r) => setTimeout(r, 1500));
        if (!isMounted) break;

        // Step 3: Button Press
        setStep(3);
        await new Promise((r) => setTimeout(r, 300));
        if (!isMounted) break;

        // Step 4: Toast & Audit
        setStep(4);
        await new Promise((r) => setTimeout(r, 4000));
        if (!isMounted) break;

        // Step 5: Fade out
        setStep(5);
        await new Promise((r) => setTimeout(r, 1000));
      }
    };
    runLoop();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[#020817] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Copy */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold tracking-wide mb-6">
                <DiagnuvoLogo className="w-4 h-4" />
                DIAGNUVO AI COPILOT
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Diagnuvo AI: Orders, escalation, and documentation — in seconds.
              </h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed">
                A clinician-facing AI copilot embedded inside the patient dashboard. It accelerates decisions without replacing clinical judgment.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Action buttons that trigger workflow-ready forms (Call IR, Initiate Transfer, Prepare Intubation, Start Monitoring, Call Neurology)",
                "Expandable guideline CitationCards (AHA/ASA) with evidence level badges (Class I–III)",
                "Context-aware, patient-specific responses with timestamps",
                "Encrypted localStorage chat history for an extra privacy layer",
                "Persistent AI safety disclaimer: does not replace clinical judgment or guidelines"
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <CheckCircle2 size={12} className="text-cyan-400" />
                  </div>
                  <span className="text-slate-300 text-sm md:text-base leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN: Animated Demo */}
          <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
            <div className="bg-[#0b132b]/80 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] relative">
              
              {/* Top Bar */}
              <div className="h-14 border-b border-slate-800 bg-[#060d1e] flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <DiagnuvoLogo className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-200 tracking-tight">Diagnuvo AI</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <Clock size={14} />
                  <span>14:32</span>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-6 relative">
                
                {/* Toast Notification */}
                <AnimatePresence>
                  {step >= 4 && step < 5 && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute top-4 right-4 bg-slate-800 border border-slate-700 shadow-lg rounded-lg p-3 flex items-center gap-3 z-50"
                    >
                      <CheckCircle2 className="text-cyan-400 w-4 h-4" />
                      <span className="text-xs font-bold text-slate-200">Neurology paged • 14:32</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* User Bubble */}
                <AnimatePresence>
                  {step >= 1 && step < 5 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex gap-3 flex-row-reverse"
                    >
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0 text-white text-xs font-bold">
                        DR
                      </div>
                      <div className="bg-slate-800 text-slate-200 p-3 rounded-2xl rounded-tr-none text-sm font-medium border border-slate-700 max-w-[80%]">
                        {typedText}
                        {step === 1 && typedText.length < fullText.length && (
                          <span className="inline-block w-1.5 h-4 bg-cyan-400 ml-1 animate-pulse align-middle"></span>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* AI Response */}
                <AnimatePresence>
                  {step >= 2 && step < 5 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                        <DiagnuvoLogo className="w-4 h-4" />
                      </div>
                      <div className="bg-[#060d1e] p-4 rounded-2xl rounded-tl-none text-sm border border-slate-800 w-full max-w-[85%] shadow-sm">
                        <div className="text-slate-300 font-medium mb-4">
                          Stroke protocol initiated. What would you like to do next?
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Suggested actions</div>
                          
                          {/* Action Button 1 */}
                          <motion.button
                            animate={
                              step === 3 ? { scale: 0.97, backgroundColor: "rgba(34,211,238,0.2)", borderColor: "rgba(34,211,238,0.5)" } :
                              step >= 4 ? { backgroundColor: "rgba(34,211,238,0.1)", borderColor: "rgba(34,211,238,0.3)", color: "#94a3b8" } :
                              { backgroundColor: "rgba(30,41,59,0.5)", borderColor: "rgba(51,65,85,1)" }
                            }
                            className="w-full text-left px-4 py-2.5 rounded-lg border text-sm font-medium text-slate-200 transition-colors flex items-center justify-between group relative overflow-hidden"
                          >
                            <span className="relative z-10">Call Neurology</span>
                            <ChevronRight size={14} className="text-slate-500 relative z-10" />
                            {step === 3 && (
                              <motion.div 
                                initial={{ scale: 0, opacity: 0.5 }}
                                animate={{ scale: 4, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 bg-cyan-400/30 rounded-full origin-center"
                              />
                            )}
                          </motion.button>

                          {/* Action Button 2 */}
                          <button className="w-full text-left px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800/50 text-sm font-medium text-slate-200 hover:bg-slate-800 transition-colors flex items-center justify-between">
                            <span>Initiate Transfer</span>
                            <ChevronRight size={14} className="text-slate-500" />
                          </button>

                          {/* Action Button 3 */}
                          <button className="w-full text-left px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800/50 text-sm font-medium text-slate-200 hover:bg-slate-800 transition-colors flex items-center justify-between">
                            <span>Prepare Intubation</span>
                            <ChevronRight size={14} className="text-slate-500" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Audit Log Mini-Panel */}
                <AnimatePresence>
                  {step >= 2 && step < 5 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-auto bg-[#060d1e] border border-slate-800 rounded-xl p-3"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Shield size={12} className="text-slate-500" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Audit Log</span>
                      </div>
                      <div className="space-y-2">
                        <AnimatePresence>
                          {step >= 4 && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0, backgroundColor: "rgba(34,211,238,0.2)" }}
                              animate={{ opacity: 1, height: "auto", backgroundColor: "rgba(0,0,0,0)" }}
                              transition={{ duration: 0.5 }}
                              className="flex justify-between items-center text-xs rounded px-1 py-0.5 overflow-hidden"
                            >
                              <span className="text-slate-300">Neurology called</span>
                              <span className="text-slate-500">14:32:10</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <div className="flex justify-between items-center text-xs px-1 py-0.5">
                          <span className="text-slate-300">Stroke protocol activated</span>
                          <span className="text-slate-500">14:32:05</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Persistent Disclaimer */}
              <div className="p-3 bg-[#060d1e] border-t border-slate-800 shrink-0">
                <div className="flex items-start gap-2 text-[10px] text-slate-500 leading-tight">
                  <ShieldAlert size={12} className="text-amber-500/70 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-slate-400">⚠️ Important Notice - Interaction with Artificial Intelligence.</strong> Diagnuvo uses artificial intelligence systems to support emergency medical professionals. These systems DO NOT replace clinical judgment, official guidelines (ERC, ILCOR, SIAARTI) or medical supervision.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
