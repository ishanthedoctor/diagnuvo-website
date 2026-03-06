import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <p className="mb-6">
        At Diagnuvo, we take privacy and data protection extremely seriously.
        This policy explains how information is collected, used, and protected
        when using the Diagnuvo platform or visiting our website.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Information We Collect</h2>
      <p className="mb-6">
        We may collect basic usage information such as device type, browser
        version, and anonymous interaction data to improve system performance
        and reliability.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Clinical Data</h2>
      <p className="mb-6">
        Diagnuvo is designed for clinical decision support. Any clinical data
        processed within healthcare environments remains the responsibility of
        the healthcare institution and follows local data governance policies.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Security</h2>
      <p className="mb-6">
        We implement strict security practices including encryption,
        authentication controls, and audit logging to ensure data integrity and
        protection.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Medical Disclaimer</h2>
      <p className="mb-6">
        Diagnuvo provides clinical decision-support tools and does not replace
        professional medical judgement. Healthcare professionals must always
        rely on their own clinical expertise and institutional protocols.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
      <p>
        For any questions regarding privacy or data protection, please contact
        the Diagnuvo team.
      </p>
    </div>
  );
}
