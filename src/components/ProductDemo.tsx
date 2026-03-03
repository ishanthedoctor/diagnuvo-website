import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, AlertCircle, Clock, Info, User, HeartPulse, MousePointer2, CheckCircle2 } from "lucide-react";

export default function ProductDemo() {
  const [hr, setHr] = useState(98);
  const [demoStep, setDemoStep] = useState(0);
  const [showToast, setShowToast] = useState(false);

  // HR Fluctuation
  useEffect(() => {
    const sequence = [97, 98, 99, 98];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % sequence.length;
      setHr(sequence[i]);
    }, 1250); // 5 seconds total for 4 steps
    return () => clearInterval(interval);
  }, []);

  // Stroke Protocol Demo Sequence
  useEffect(() => {
    let isMounted = true;
    const runSequence = async () => {
      while (isMounted) {
        await new Promise(r => setTimeout(r, 10000)); // Every 10 seconds
        if (!isMounted) break;
        
        setDemoStep(1); // Cursor moves
        await new Promise(r => setTimeout(r, 1000));
        if (!isMounted) break;
        
        setDemoStep(2); // Hover highlight
        await new Promise(r => setTimeout(r, 500));
        if (!isMounted) break;
        
        setDemoStep(3); // Click
        await new Promise(r => setTimeout(r, 200));
        if (!isMounted) break;
        
        setDemoStep(4); // Activated
        setShowToast(true);
        await new Promise(r => setTimeout(r, 3000));
        if (!isMounted) break;
        
        setShowToast(false);
        await new Promise(r => setTimeout(r, 500));
        if (!isMounted) break;
        
        setDemoStep(0); // Reset
      }
    };
    runSequence();
    return () => { isMounted = false; };
  }, []);

  return (
    <section className="py-24 md:py-32 bg-bright-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-deep-navy tracking-tight mb-6">
            Designed for Real Emergency Departments
          </h2>
          <p className="text-lg md:text-xl text-slate-gray leading-relaxed font-medium">
            Diagnuvo ED™ provides real-time clinical intelligence, risk detection, and actionable recommendations inside a single unified dashboard.
          </p>
        </div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200 overflow-hidden flex flex-col md:flex-row h-auto md:h-[600px] relative"
        >
          {/* Toast Notification */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute top-4 right-4 bg-white border border-gray-200 shadow-lg rounded-lg p-3 flex items-center gap-3 z-50"
              >
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="text-sm font-bold text-gray-800">Stroke Call Activated</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Left Panel: Patient List */}
          <div className="w-full md:w-1/4 bg-gray-50 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200 bg-white">
              <h3 className="font-semibold text-gray-800">Active Patients</h3>
              <p className="text-xs text-gray-500">Triage Queue (12)</p>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-2">
              {/* Patient 1 (Selected) */}
              <motion.div 
                animate={{ boxShadow: ['0px 0px 0px rgba(239,68,68,0)', '0px 0px 12px rgba(239,68,68,0.25)', '0px 0px 0px rgba(239,68,68,0)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="p-3 bg-white rounded-lg border border-medical-blue shadow-sm cursor-pointer relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-gray-900">John Smith</span>
                  <span className="text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">HIGH</span>
                </div>
                <div className="text-xs text-gray-600">68y • Suspected Stroke</div>
                <div className="text-xs text-gray-400 mt-2 flex items-center gap-1"><Clock size={12}/> 14m waiting</div>
              </motion.div>
              {/* Patient 2 */}
              <div className="p-3 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 cursor-pointer transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-gray-700">Sarah Jenkins</span>
                  <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">MED</span>
                </div>
                <div className="text-xs text-gray-500">42y • Chest Pain</div>
              </div>
              {/* Patient 3 */}
              <div className="p-3 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 cursor-pointer transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-gray-700">Michael Chen</span>
                  <span className="text-[10px] font-bold text-gray-600 bg-gray-200 px-2 py-0.5 rounded">LOW</span>
                </div>
                <div className="text-xs text-gray-500">29y • Laceration</div>
              </div>
              {/* Patient 4 */}
              <div className="p-3 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 cursor-pointer transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-gray-700">Emily Davis</span>
                  <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">MED</span>
                </div>
                <div className="text-xs text-gray-500">55y • Shortness of Breath</div>
              </div>
              {/* Patient 5 */}
              <div className="p-3 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 cursor-pointer transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-gray-700">Robert Taylor</span>
                  <span className="text-[10px] font-bold text-gray-600 bg-gray-200 px-2 py-0.5 rounded">LOW</span>
                </div>
                <div className="text-xs text-gray-500">34y • Sprained Ankle</div>
              </div>
            </div>
          </div>

          {/* Center Panel: Main Patient View */}
          <div className="w-full md:w-2/4 bg-white flex flex-col border-r border-gray-200">
            {/* Patient Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <User size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">John Smith</h2>
                  <p className="text-sm text-gray-500">Male • 68 Years • MRN: 8472910</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-red-600">Condition</div>
                <div className="text-lg font-bold text-gray-800">Suspected Stroke</div>
              </div>
            </div>

            <div className="p-6 flex-1 bg-gray-50/50">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Current Vitals</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                  <div className="text-gray-500 text-xs font-semibold mb-1 flex items-center gap-1"><HeartPulse size={14}/> HR</div>
                  <div className="text-2xl font-bold text-gray-900">{hr} <span className="text-sm font-normal text-gray-400">bpm</span></div>
                  {/* ECG Line */}
                  <div className="absolute bottom-0 left-0 w-full h-6 opacity-20 overflow-hidden">
                    <motion.svg 
                      animate={{ x: [0, -100] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-[200%] h-full" 
                      viewBox="0 0 200 30" 
                      preserveAspectRatio="none"
                    >
                      <polyline points="0,15 20,15 25,5 30,25 35,15 50,15 70,15 75,5 80,25 85,15 100,15 120,15 125,5 130,25 135,15 150,15 170,15 175,5 180,25 185,15 200,15" fill="none" stroke="#E53935" strokeWidth="2" strokeLinejoin="round" />
                    </motion.svg>
                  </div>
                </div>
                <motion.div 
                  animate={{ boxShadow: ['0px 0px 0px rgba(220,38,38,0)', '0px 0px 12px rgba(220,38,38,0.2)', '0px 0px 0px rgba(220,38,38,0)'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"
                >
                  <div className="text-gray-500 text-xs font-semibold mb-1 flex items-center gap-1"><Activity size={14}/> BP</div>
                  <div className="text-2xl font-bold text-red-600">168/95 <span className="text-sm font-normal text-gray-400">mmHg</span></div>
                </motion.div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-gray-500 text-xs font-semibold mb-1 flex items-center justify-between">
                    <div className="flex items-center gap-1"><Activity size={14}/> SpO2</div>
                    <motion.div 
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="w-1.5 h-1.5 rounded-full bg-blue-500"
                    />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">94 <span className="text-sm font-normal text-gray-400">%</span></div>
                </div>
              </div>

              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">AI Risk Assessment</h3>
              <motion.div
                initial={{ backgroundColor: "rgba(255,255,255,1)" }}
                whileInView={{ backgroundColor: ["rgba(255,255,255,1)", "rgba(254,226,226,0.6)", "rgba(255,255,255,1)"] }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1.5, ease: "easeInOut" }}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <AlertCircle size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">Stroke Risk</div>
                      <div className="text-xl font-bold text-red-600">HIGH</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 font-medium">Confidence</div>
                    <div className="text-xl font-bold text-gray-900">92%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                      <Activity size={20} />
                    </div>
                    <div className="flex-1 min-w-[200px]">
                      <div className="text-sm text-gray-500 font-medium">ICU Probability</div>
                      <div className="text-xl font-bold text-orange-600 mb-1">72%</div>
                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '72%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full bg-orange-500 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Panel: Suggested Actions */}
          <div className="w-full md:w-1/4 bg-gray-50 flex flex-col">
            <div className="p-4 border-b border-gray-200 bg-white">
              <h3 className="font-semibold text-gray-800">Suggested Actions</h3>
            </div>
            <div className="p-4 flex-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                className="space-y-3"
              >
                {/* Action 1 */}
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
                  <div className="mt-0.5 text-blue-500"><Info size={16} /></div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Reassess GCS</div>
                    <div className="text-xs text-gray-500 mt-1">Baseline was 14. Check for deterioration.</div>
                  </div>
                </div>
                {/* Action 2 */}
                <div className="bg-red-50 p-3 rounded-lg border border-red-100 shadow-sm flex items-start gap-3">
                  <div className="mt-0.5 text-red-500"><AlertCircle size={16} /></div>
                  <div>
                    <div className="text-sm font-bold text-red-700">Prepare CT Scan</div>
                    <div className="text-xs text-red-600/80 mt-1">Non-contrast head CT recommended immediately.</div>
                  </div>
                </div>
                {/* Action 3 (Animated Demo) */}
                <div className="bg-red-50 p-3 rounded-lg border border-red-100 shadow-sm flex flex-col gap-2 relative overflow-hidden">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-red-500"><AlertCircle size={16} /></div>
                    <div>
                      <div className="text-sm font-bold text-red-700">Notify Stroke Team</div>
                      <div className="text-xs text-red-600/80 mt-1">Time last known well: 45 mins ago.</div>
                    </div>
                  </div>
                  <motion.button
                    animate={
                      demoStep === 2 ? { backgroundColor: '#ef4444', color: '#ffffff' } : // hover
                      demoStep === 3 ? { scale: 0.95, backgroundColor: '#dc2626', color: '#ffffff' } : // click
                      demoStep >= 4 ? { backgroundColor: '#22c55e', color: '#ffffff', borderColor: '#22c55e' } : // activated
                      { backgroundColor: '#ffffff', color: '#ef4444' } // idle
                    }
                    className="w-full mt-1 py-1.5 text-xs font-bold border border-red-200 rounded shadow-sm flex items-center justify-center gap-1 transition-colors"
                  >
                    {demoStep >= 4 ? <><CheckCircle2 size={14}/> Activated</> : 'Activate Stroke Protocol'}
                  </motion.button>

                  {/* Invisible Cursor */}
                  <motion.div
                    initial={{ opacity: 0, top: '150%', left: '150%' }}
                    animate={
                      demoStep === 0 ? { opacity: 0, top: '150%', left: '150%' } :
                      demoStep === 1 ? { opacity: 1, top: '70%', left: '50%' } :
                      demoStep === 2 ? { opacity: 1, top: '70%', left: '50%' } :
                      demoStep === 3 ? { opacity: 1, top: '70%', left: '50%', scale: 0.9 } :
                      { opacity: 0, top: '70%', left: '50%' }
                    }
                    transition={{ duration: demoStep === 1 ? 1 : 0.2, ease: "easeInOut" }}
                    className="absolute z-50 pointer-events-none -ml-2 -mt-2"
                  >
                    <MousePointer2 className="w-5 h-5 text-gray-800 fill-white drop-shadow-md" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
