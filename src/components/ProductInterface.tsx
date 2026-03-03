import React from "react";
import { motion } from "motion/react";
import {
  Activity,
  AlertTriangle,
  Bot,
  Clock,
  FileText,
  HeartPulse,
  Search,
  User,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

const CLINICIAN_NAME = "Dr Ishan";

export default function ProductInterface() {
  return (
    <section
      id="platform"
      className="py-24 md:py-32 bg-deep-navy overflow-hidden relative"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-medical-blue/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-bright-white tracking-tight leading-[1.1] mb-6"
        >
          See the unseen. <br />
          <span className="text-medical-blue-light">Act with certainty.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-slate-gray font-medium max-w-2xl mx-auto"
        >
          A unified, intelligent interface designed to surface critical insights
          without adding cognitive load.
        </motion.p>
      </div>

      {/* Edge-to-edge Mockup Container */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden border border-border-gray/20 shadow-2xl bg-soft-gray flex flex-col h-[800px] md:h-[900px]"
        >
          {/* Mockup Header */}
          <div className="h-14 bg-bright-white border-b border-border-gray flex items-center justify-between px-6 shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-medical-blue/10 flex items-center justify-center">
                <Activity size={18} className="text-medical-blue" />
              </div>
              <span className="font-bold text-deep-navy tracking-tight">
                DIAGNUVO ED
              </span>
              <div className="h-4 w-px bg-border-gray mx-2"></div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-gray bg-soft-gray px-3 py-1.5 rounded-md">
                <Search size={14} />
                <span>Search patient, MRN, or room...</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-gray">
                <Clock size={14} />
                <span>14:32:05</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-deep-navy text-bright-white flex items-center justify-center text-xs font-bold">
                DR
              </div>
            </div>
          </div>

          {/* Mockup Body */}
          <div className="flex flex-1 overflow-hidden">
            {/* Left Sidebar - Patient List */}
            <div className="w-64 bg-bright-white border-r border-border-gray flex flex-col shrink-0 hidden lg:flex">
              <div className="p-4 border-b border-border-gray">
                <h3 className="text-xs font-bold text-slate-gray uppercase tracking-wider mb-4">
                  Active Patients (12)
                </h3>
                <div className="flex gap-2">
                  <button className="flex-1 bg-medical-blue/10 text-medical-blue text-xs font-bold py-1.5 rounded">
                    All
                  </button>
                  <button className="flex-1 bg-soft-gray text-slate-gray hover:text-deep-navy text-xs font-bold py-1.5 rounded">
                    Critical
                  </button>
                  <button className="flex-1 bg-soft-gray text-slate-gray hover:text-deep-navy text-xs font-bold py-1.5 rounded">
                    New
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {/* Patient Item - Active */}
                <div className="p-3 bg-medical-blue/5 border border-medical-blue/20 rounded-lg cursor-pointer">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-bold text-deep-navy">
                      Smith, J.
                    </span>
                    <span className="text-xs font-bold text-muted-red bg-muted-red/10 px-1.5 py-0.5 rounded">
                      ESI 2
                    </span>
                  </div>
                  <div className="text-xs text-slate-gray font-medium mb-2">
                    Room 4 • 58M • Chest Pain
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-medical-blue uppercase tracking-wider">
                    <Activity size={10} />
                    <span>AI Risk: High (STEMI)</span>
                  </div>
                </div>
                {/* Patient Item - Inactive */}
                <div className="p-3 hover:bg-soft-gray rounded-lg cursor-pointer border border-transparent transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-bold text-deep-navy">
                      Jenkins, S.
                    </span>
                    <span className="text-xs font-bold text-yellow-600 bg-yellow-100 px-1.5 py-0.5 rounded">
                      ESI 3
                    </span>
                  </div>
                  <div className="text-xs text-slate-gray font-medium">
                    Room 12 • 34F • Abd Pain
                  </div>
                </div>
                {/* Patient Item - Inactive */}
                <div className="p-3 hover:bg-soft-gray rounded-lg cursor-pointer border border-transparent transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-bold text-deep-navy">
                      Chen, M.
                    </span>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded">
                      ESI 4
                    </span>
                  </div>
                  <div className="text-xs text-slate-gray font-medium">
                    Waiting • 22M • Laceration
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area - Patient Dashboard */}
            <div className="flex-1 flex flex-col bg-soft-gray overflow-y-auto p-6 gap-6">
              {/* Patient Header */}
              <div className="bg-bright-white p-6 rounded-xl border border-border-gray shadow-sm flex items-start justify-between">
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-full bg-soft-gray border-2 border-border-gray flex items-center justify-center shrink-0">
                    <User size={32} className="text-slate-gray" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h1 className="text-2xl font-bold text-deep-navy">
                        John Smith
                      </h1>
                      <span className="text-xs font-bold text-muted-red bg-muted-red/10 px-2 py-1 rounded border border-muted-red/20">
                        ESI 2
                      </span>
                      <span className="text-xs font-bold text-deep-navy bg-soft-gray px-2 py-1 rounded border border-border-gray">
                        Room 4
                      </span>
                    </div>
                    <div className="text-sm font-medium text-slate-gray flex items-center gap-4">
                      <span>DOB: 05/12/1965 (58y)</span>
                      <span>MRN: 987654321</span>
                      <span>CC: Chest Pain, SOB</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 text-slate-gray hover:text-deep-navy bg-soft-gray rounded-lg transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>

              {/* Grid Layout for Widgets */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Left Column (Vitals & Risk) */}
                <div className="xl:col-span-2 flex flex-col gap-6">
                  {/* AI Risk Panel - Controlled Red Accent */}
                  <div className="bg-bright-white p-6 rounded-xl border border-muted-red/30 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-muted-red"></div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-muted-red">
                        <AlertTriangle size={20} />
                        <h3 className="text-sm font-bold uppercase tracking-wider">
                          AI Risk Detection
                        </h3>
                      </div>
                      <span className="text-xs font-bold text-slate-gray">
                        Updated 2m ago
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full border-4 border-muted-red/20 flex items-center justify-center shrink-0 relative">
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="text-muted-red"
                            strokeDasharray="175"
                            strokeDashoffset="20"
                          />
                        </svg>
                        <span className="text-xl font-bold text-muted-red">
                          89%
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-deep-navy mb-1">
                          High Probability: STEMI
                        </h4>
                        <p className="text-sm text-slate-gray font-medium mb-3">
                          ECG pattern and rising troponin levels strongly
                          indicate acute myocardial infarction. Immediate cath
                          lab activation recommended.
                        </p>
                        <div className="flex gap-2">
                          <button className="bg-muted-red text-bright-white text-xs font-bold px-4 py-2 rounded shadow-sm hover:bg-muted-red/90 transition-colors">
                            Activate Cath Lab
                          </button>
                          <button className="bg-soft-gray text-deep-navy text-xs font-bold px-4 py-2 rounded border border-border-gray hover:bg-border-gray transition-colors">
                            Review ECG
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vitals & Labs */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-bright-white p-5 rounded-xl border border-border-gray shadow-sm">
                      <h3 className="text-xs font-bold text-slate-gray uppercase tracking-wider mb-4">
                        Current Vitals
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-slate-gray font-medium mb-1">
                            HR
                          </div>
                          <div className="text-2xl font-bold text-muted-red flex items-baseline gap-1">
                            112{" "}
                            <span className="text-xs text-slate-gray font-medium">
                              bpm
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-gray font-medium mb-1">
                            BP
                          </div>
                          <div className="text-2xl font-bold text-deep-navy flex items-baseline gap-1">
                            145/90{" "}
                            <span className="text-xs text-slate-gray font-medium">
                              mmHg
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-gray font-medium mb-1">
                            SpO2
                          </div>
                          <div className="text-2xl font-bold text-deep-navy flex items-baseline gap-1">
                            94%{" "}
                            <span className="text-xs text-slate-gray font-medium">
                              RA
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-gray font-medium mb-1">
                            Temp
                          </div>
                          <div className="text-2xl font-bold text-deep-navy flex items-baseline gap-1">
                            37.2{" "}
                            <span className="text-xs text-slate-gray font-medium">
                              °C
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-bright-white p-5 rounded-xl border border-border-gray shadow-sm">
                      <h3 className="text-xs font-bold text-slate-gray uppercase tracking-wider mb-4">
                        Critical Labs
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-soft-gray">
                          <span className="text-sm font-bold text-deep-navy">
                            Troponin I
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-muted-red">
                              0.45 ng/mL
                            </span>
                            <AlertTriangle
                              size={14}
                              className="text-muted-red"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-soft-gray">
                          <span className="text-sm font-bold text-deep-navy">
                            D-Dimer
                          </span>
                          <span className="text-sm font-bold text-slate-gray">
                            0.32 mg/L FEU
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-deep-navy">
                            Creatinine
                          </span>
                          <span className="text-sm font-bold text-slate-gray">
                            1.1 mg/dL
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clinical Timeline */}
                  <div className="bg-bright-white p-6 rounded-xl border border-border-gray shadow-sm">
                    <h3 className="text-xs font-bold text-slate-gray uppercase tracking-wider mb-6">
                      Clinical Timeline
                    </h3>
                    <div className="relative pl-6 space-y-6">
                      <div className="absolute left-2.5 top-2 bottom-2 w-px bg-border-gray"></div>

                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-medical-blue border-2 border-bright-white"></div>
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-sm font-bold text-deep-navy">
                            ECG Completed
                          </span>
                          <span className="text-xs font-medium text-slate-gray">
                            14:28
                          </span>
                        </div>
                        <p className="text-xs text-slate-gray font-medium">
                          Sinus tachycardia with ST elevation in leads II, III,
                          aVF.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-soft-gray border-2 border-border-gray"></div>
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-sm font-bold text-deep-navy">
                            Labs Drawn
                          </span>
                          <span className="text-xs font-medium text-slate-gray">
                            14:15
                          </span>
                        </div>
                        <p className="text-xs text-slate-gray font-medium">
                          CBC, CMP, Troponin, Coags sent to lab.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-soft-gray border-2 border-border-gray"></div>
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-sm font-bold text-deep-navy">
                            Patient Arrived
                          </span>
                          <span className="text-xs font-medium text-slate-gray">
                            14:02
                          </span>
                        </div>
                        <p className="text-xs text-slate-gray font-medium">
                          Arrived via EMS. C/o crushing chest pain radiating to
                          jaw.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (AI Assistant) */}
                <div className="bg-bright-white rounded-xl border border-border-gray shadow-sm flex flex-col h-[600px] xl:h-auto">
                  <div className="p-4 border-b border-border-gray bg-soft-gray/50 rounded-t-xl flex items-center gap-2">
                    <Bot size={18} className="text-medical-blue" />
                    <h3 className="text-sm font-bold text-deep-navy">
                      Diagnuvo AI Assistant
                    </h3>
                  </div>

                  <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-medical-blue/10 flex items-center justify-center shrink-0">
                        <Bot size={14} className="text-medical-blue" />
                      </div>
                      <div className="bg-soft-gray p-3 rounded-2xl rounded-tl-none text-sm text-deep-navy font-medium">
                        I've analyzed the recent ECG and lab results. The
                        patient shows strong indicators for an inferior STEMI.
                        Would you like me to draft the cardiology consult note
                        or initiate the STEMI pathway?
                      </div>
                    </div>

                    <div className="flex gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-deep-navy flex items-center justify-center shrink-0 text-bright-white text-xs font-bold">
                        DR
                      </div>
                      <div className="bg-medical-blue text-bright-white p-3 rounded-2xl rounded-tr-none text-sm font-medium">
                        Initiate STEMI pathway and page cardiology on call.
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-medical-blue/10 flex items-center justify-center shrink-0">
                        <Bot size={14} className="text-medical-blue" />
                      </div>
                      <div className="bg-soft-gray p-3 rounded-2xl rounded-tl-none text-sm text-deep-navy font-medium space-y-2">
                        <p>STEMI pathway initiated.</p>
                        <ul className="list-disc pl-4 text-xs space-y-1 text-slate-gray">
                          <li>Cardiology paged ({CLINICIAN_NAME})</li>
                          <li>Cath lab notified</li>
                          <li>Aspirin 324mg ordered</li>
                          <li>Heparin bolus ordered</li>
                        </ul>
                        <button className="mt-2 text-xs font-bold text-medical-blue flex items-center gap-1">
                          Review Orders <ChevronRight size={12} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t border-border-gray">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Ask Diagnuvo AI..."
                        className="w-full bg-soft-gray border border-border-gray rounded-lg pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-medical-blue focus:ring-1 focus:ring-medical-blue transition-all"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-medical-blue hover:bg-medical-blue/10 rounded-md transition-colors">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
