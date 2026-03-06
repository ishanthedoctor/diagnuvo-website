import React from "react";
import { ShieldCheck, Lock, Database, FileText, Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_35%)] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Diagnuvo ED
        </Link>

        {/* Hero */}
        <div className="mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-200 text-sm mb-6">
            <ShieldCheck size={16} />
            Privacy & Data Protection
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Privacy Policy
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-8">
            Diagnuvo is committed to protecting privacy, maintaining trust, and
            handling data responsibly. This Privacy Policy explains what
            information may be collected when you interact with the Diagnuvo
            website or platform, how that information may be used, how it is
            protected, and the principles that guide our approach to clinical
            data governance.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.25)] hover:border-blue-400/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                <Database size={20} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-slate-300 leading-8 mb-4">
                  We may collect limited operational and technical information
                  when users visit the Diagnuvo website or interact with digital
                  services. This may include browser type, device type, IP
                  address, pages visited, session timing, referral sources, and
                  general usage patterns. Such information is typically used for
                  analytics, system stability, troubleshooting, performance
                  monitoring, and service improvement.
                </p>
                <p className="text-slate-300 leading-8">
                  Where forms, enquiries, demos, or contact requests are
                  submitted, we may also collect details voluntarily provided by
                  the user, such as name, email address, professional role,
                  institution name, and other information necessary to respond
                  appropriately.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.25)] hover:border-cyan-400/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                <FileText size={20} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">2. Clinical Data</h2>
                <p className="text-slate-300 leading-8 mb-4">
                  Diagnuvo is designed as a clinical decision-support platform
                  for emergency care environments. Where the platform is used in
                  healthcare settings, any patient-related or clinical data is
                  expected to remain governed by the relevant healthcare
                  institution, its legal basis for processing, and its local
                  information governance framework.
                </p>
                <p className="text-slate-300 leading-8">
                  Diagnuvo does not seek to override institutional policies,
                  statutory obligations, or professional duties. Healthcare
                  organisations remain responsible for ensuring lawful data
                  processing, appropriate access control, secure handling of
                  patient information, and compliance with applicable regulations
                  such as UK GDPR, the Data Protection Act 2018, NHS information
                  governance requirements, and any local organisational policies
                  that apply.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.25)] hover:border-emerald-400/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                <Lock size={20} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">3. How We Use Information</h2>
                <p className="text-slate-300 leading-8 mb-4">
                  Information collected may be used to operate, maintain, secure,
                  and improve Diagnuvo’s website, products, and services. This
                  includes diagnosing technical problems, understanding user
                  needs, evaluating performance, responding to enquiries,
                  reviewing product interest, supporting demonstrations, and
                  enhancing usability and system resilience.
                </p>
                <p className="text-slate-300 leading-8">
                  We may also use information to monitor for security threats,
                  maintain auditability, support compliance activities, and
                  ensure appropriate service administration. We do not sell
                  personal data to third parties.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.25)] hover:border-violet-400/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">4. Security Measures</h2>
                <p className="text-slate-300 leading-8 mb-4">
                  Diagnuvo takes security seriously and aims to apply robust
                  technical and organisational safeguards proportionate to the
                  context in which the platform is used. These may include
                  authentication controls, role-based access restrictions,
                  encryption, session controls, audit logging, monitoring,
                  secure development practices, and infrastructure protections
                  designed to reduce the risk of unauthorised access, loss,
                  misuse, or disclosure.
                </p>
                <p className="text-slate-300 leading-8">
                  However, no digital platform or internet transmission can be
                  guaranteed to be completely secure. Users and institutions are
                  expected to maintain their own appropriate safeguards,
                  including secure devices, access management, and internal
                  governance controls.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.25)] hover:border-amber-400/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-300">
                <FileText size={20} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">5. Medical Disclaimer</h2>
                <p className="text-slate-300 leading-8 mb-4">
                  Diagnuvo provides clinical support tools intended to assist
                  qualified professionals in emergency care workflows. Diagnuvo
                  does not replace professional medical judgment, institutional
                  policy, specialist advice, or legal/regulatory requirements.
                </p>
                <p className="text-slate-300 leading-8">
                  Clinical decisions must always be made by appropriately
                  qualified healthcare professionals who consider the full
                  patient context, relevant guidelines, local pathways, and
                  current standards of care. Use of the platform does not remove
                  the user’s obligation to exercise independent clinical
                  judgment.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.25)] hover:border-rose-400/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-300">
                <Mail size={20} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">6. Contact</h2>
                <p className="text-slate-300 leading-8 mb-4">
                  For any questions regarding privacy, data handling, security,
                  or this Privacy Policy, please contact the Diagnuvo team.
                </p>
                <a
                  href="mailto:diagnuvo@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-blue-200 hover:bg-blue-500/20 hover:text-white transition-all duration-300"
                >
                  <Mail size={18} />
                  diagnuvo@gmail.com
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer note */}
        <div className="mt-12 text-sm text-slate-400">
          Last updated: {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
