import React from "react";

export default function Security() {
  return (
    <div className="min-h-screen bg-[#08162b] text-white px-6 md:px-12 py-28">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Security</h1>

        <p className="text-gray-400 mb-12">
          Last Updated: March 2026
        </p>

        <div className="space-y-10 text-gray-300 leading-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Security Commitment
            </h2>
            <p>
              Diagnuvo ED™ is designed with a strong focus on security,
              privacy, resilience, and clinical accountability. We recognize
              that digital systems operating in emergency care environments
              must be built with safeguards that help protect data,
              support reliable access, and maintain trust.
            </p>

            <p className="mt-4">
              Our security approach is intended to support responsible use of
              clinical decision-support technology and reduce risk across user
              access, data handling, workflow integrity, and system oversight.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. Access Control
            </h2>
            <p>
              Access to Diagnuvo ED™ should be restricted to authorized users
              with appropriate clinical, operational, or administrative roles.
              Role-based access principles are used to help ensure that users
              only see the information and functions necessary for their duties.
            </p>

            <p className="mt-4">
              We encourage the use of strong passwords, secure authentication
              practices, and controlled account management procedures to reduce
              unauthorized access risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Session Protection
            </h2>
            <p>
              Diagnuvo ED™ is designed to support secure session management in
              order to reduce the risk of unauthorized access in busy clinical
              environments. Security controls may include inactivity timeouts,
              controlled session handling, and activity monitoring to support
              safe workstation use.
            </p>

            <p className="mt-4">
              In shared or high-pressure environments such as emergency
              departments, users remain responsible for logging out, protecting
              their credentials, and ensuring devices are not left accessible
              to unauthorized individuals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Auditability and Accountability
            </h2>
            <p>
              Diagnuvo ED™ is built with an emphasis on auditability.
              Clinically relevant platform actions may be recorded to support
              traceability, operational review, safety monitoring, and
              governance requirements.
            </p>

            <p className="mt-4">
              Audit records may include actions such as updates to patient
              context, workflow changes, order-related interactions, notes,
              overrides, alerts, acknowledgements, and other system events.
              Audit information is intended to support accountability and
              should not be altered or removed by end users where immutable
              logging is enabled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Data Protection
            </h2>
            <p>
              Diagnuvo ED™ is developed with attention to confidentiality,
              integrity, and appropriate handling of sensitive information.
              We aim to minimize unnecessary exposure of data and support safe
              processing practices consistent with healthcare privacy
              expectations.
            </p>

            <p className="mt-4">
              Users and partner organizations are responsible for ensuring that
              their implementation and use of the platform comply with
              applicable legal, regulatory, and institutional requirements,
              including data protection and information governance obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Encryption and Secure Handling
            </h2>
            <p>
              Diagnuvo ED™ is designed to support secure handling of data in
              transit and, where applicable, at rest. Additional safeguards may
              be used for locally stored or session-related information in order
              to reduce exposure risk on client devices and browsers.
            </p>

            <p className="mt-4">
              No internet-connected system can be guaranteed to be completely
              secure. For that reason, security must be treated as a continuous
              process involving technical controls, user discipline, system
              monitoring, and governance review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. Clinical Safety and AI Safeguards
            </h2>
            <p>
              Diagnuvo ED™ may include AI-supported functionality intended to
              assist with emergency workflows, triage support, summarization,
              prioritization, or risk monitoring. These functions are designed
              to support clinicians, not replace them.
            </p>

            <p className="mt-4">
              AI outputs may contain limitations, uncertainty, or error.
              Clinicians must independently review all relevant information and
              retain full responsibility for diagnosis, escalation, treatment,
              and patient management decisions.
            </p>

            <p className="mt-4">
              Security in a clinical AI system is not only technical. It also
              includes clear human oversight, visible alerts, audit trails,
              controlled actions, and governance around how recommendations are
              presented and acted upon.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              8. Monitoring and Incident Response
            </h2>
            <p>
              We take platform reliability and security events seriously.
              Suspicious activity, integrity concerns, system misuse, or
              abnormal behavior may be reviewed to support investigation,
              containment, and remediation.
            </p>

            <p className="mt-4">
              Where appropriate, security issues may lead to temporary access
              restrictions, operational safeguards, internal review, or other
              corrective measures aimed at protecting users, systems, and data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              9. User Responsibilities
            </h2>
            <p>
              Security is shared. Users are expected to maintain the security
              of their credentials, use authorized devices and networks where
              possible, avoid unauthorized data entry or export, and report
              suspected misuse or abnormal platform behavior promptly.
            </p>

            <p className="mt-4">
              Failure to follow safe operational practices can undermine even a
              well-designed platform. The weakest point in most systems is not
              the software. It is careless user behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              10. Continuous Improvement
            </h2>
            <p>
              Diagnuvo ED™ security practices may evolve over time as the
              platform matures, technical architecture develops, and regulatory
              or institutional expectations change. Security is reviewed as an
              ongoing discipline rather than a one-time promise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              11. Contact
            </h2>
            <p>
              For security-related questions or responsible disclosure
              inquiries, please contact:
            </p>

            <p className="mt-4">
              Diagnuvo Health
              <br />
              Email: diagnuvo@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
