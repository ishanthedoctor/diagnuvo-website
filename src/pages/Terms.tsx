import React from "react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#08162b] text-white px-6 md:px-12 py-28">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Terms of Service
        </h1>

        <p className="text-gray-400 mb-12">
          Last Updated: March 2026
        </p>

        <div className="space-y-10 text-gray-300 leading-8">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. About Diagnuvo ED™
            </h2>
            <p>
              Diagnuvo ED™ is a clinical decision-support platform designed to assist
              healthcare professionals in emergency care environments. The platform
              provides structured clinical insights, workflow support, and tools
              intended to improve situational awareness and clinical coordination.
            </p>

            <p className="mt-4">
              Diagnuvo ED™ is intended solely as a support tool for trained medical
              professionals and does not replace clinical expertise, institutional
              protocols, or professional medical judgment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. Medical Disclaimer
            </h2>
            <p>
              Diagnuvo ED™ does not provide medical advice, diagnosis, or treatment.
              The platform is designed to support healthcare professionals but cannot
              independently evaluate patients or determine clinical outcomes.
            </p>

            <p className="mt-4">
              All medical decisions must be made by licensed healthcare professionals
              who independently verify clinical information and follow official
              medical guidelines and institutional policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Artificial Intelligence and Decision Support
            </h2>

            <p>
              Certain features of Diagnuvo ED™ may incorporate artificial intelligence
              or machine learning technologies to assist clinicians by analysing
              available information and presenting structured insights.
            </p>

            <p className="mt-4">
              AI-generated outputs may contain inaccuracies or limitations and must
              always be interpreted and verified by qualified healthcare professionals.
              Users must not rely solely on AI-generated insights when making
              clinical decisions.
            </p>

            <p className="mt-4">
              Diagnuvo Health does not guarantee the accuracy, completeness, or
              reliability of AI-supported outputs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Eligibility
            </h2>

            <p>
              By using Diagnuvo ED™, you confirm that you are at least 18 years of
              age and legally permitted to access the Service in your jurisdiction.
            </p>

            <p className="mt-4">
              Healthcare institutions using the platform are responsible for ensuring
              that their personnel are appropriately trained and authorized to use
              digital clinical decision-support systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Acceptable Use
            </h2>

            <p>
              Users agree not to misuse the platform or attempt to interfere with
              its operation. Prohibited actions include but are not limited to:
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Attempting to gain unauthorized access to platform infrastructure</li>
              <li>Uploading malicious software or harmful code</li>
              <li>Attempting to reverse engineer or copy system architecture</li>
              <li>Using the platform in violation of healthcare or privacy laws</li>
              <li>Using the platform for unlawful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Data Protection and Privacy
            </h2>

            <p>
              Diagnuvo Health is committed to protecting user privacy and maintaining
              appropriate data security standards. Use of the platform is also
              governed by the Diagnuvo ED™ Privacy Policy.
            </p>

            <p className="mt-4">
              Users are responsible for ensuring compliance with applicable data
              protection laws including the General Data Protection Regulation (GDPR)
              and other relevant healthcare data protection frameworks.
            </p>

            <p className="mt-4">
              Users should avoid entering identifiable patient information unless the
              system environment complies with institutional and regulatory
              requirements for healthcare data security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. Intellectual Property
            </h2>

            <p>
              All content and intellectual property associated with Diagnuvo ED™,
              including software architecture, algorithms, interface design,
              branding, documentation, and platform features remain the property
              of Diagnuvo Health unless otherwise stated.
            </p>

            <p className="mt-4">
              Unauthorized reproduction, modification, distribution, or commercial
              use of platform content is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              8. Service Availability
            </h2>

            <p>
              Diagnuvo ED™ strives to maintain reliable service availability.
              However, uninterrupted access cannot be guaranteed. Temporary
              service disruptions may occur due to system updates, maintenance,
              infrastructure changes, or unforeseen technical issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              9. Limitation of Liability
            </h2>

            <p>
              To the fullest extent permitted by law, Diagnuvo Health and its
              creators, affiliates, and contributors shall not be liable for
              any direct or indirect damages arising from:
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Clinical decisions made by healthcare professionals</li>
              <li>Patient outcomes or treatment results</li>
              <li>Reliance on AI-generated insights</li>
              <li>Temporary service interruptions</li>
              <li>Software errors or technical limitations</li>
            </ul>

            <p className="mt-4">
              Healthcare professionals remain solely responsible for all
              medical decisions and patient care.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              10. Governing Law
            </h2>

            <p>
              These Terms of Service shall be governed by and interpreted in
              accordance with the laws of the United Kingdom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              11. Contact
            </h2>

            <p>
              For questions regarding these Terms of Service please contact:
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
