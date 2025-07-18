"use client";

import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | D4 Interactive</title>
        <meta
          name="description"
          content="Review the terms and conditions for using D4 Interactive's website and digital services."
        />
      </Head>
      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">
          Terms and Conditions
        </h1>
        <p className="mb-4">
          Welcome to D4 Interactive ("we", "our", or "us"). These Terms and
          Conditions ("Terms") govern your use of our website{" "}
          <a
            href="https://www.d4interactive.in"
            className="text-blue-600 underline"
          >
            https://www.d4interactive.in
          </a>{" "}
          (the "Site") and the services offered by D4 Interactive.
        </p>
        <p className="mb-6 font-medium text-red-600">
          By accessing or using our Site and services, you agree to be bound by
          these Terms. If you do not agree with any part of these Terms, you
          must not use our services or access the Site.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Services</h2>
        <p className="mb-4">
          D4 Interactive offers digital services including but not limited to:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Website and app development</li>
          <li>Digital marketing and SEO</li>
          <li>AI and automation solutions</li>
          <li>Branding and creative design</li>
          <li>E-commerce and IT consulting</li>
        </ul>
        <p className="mb-6">
          All services are subject to individual contracts, proposals, or
          service level agreements (SLAs) mutually agreed upon between the
          client and D4 Interactive.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Use of the Site</h2>
        <p className="mb-2">
          You agree to use our website for lawful purposes only. You must not:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Violate any applicable law</li>
          <li>Attempt unauthorized access to any part of the site</li>
          <li>Introduce malware or harmful code</li>
          <li>Use the site for fraudulent or malicious activities</li>
        </ul>
        <p className="mb-6">
          We reserve the right to restrict or terminate access if we detect
          misuse or violation.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          3. Intellectual Property
        </h2>
        <p className="mb-6">
          All website content, including logos, designs, text, and code, is
          owned by D4 Interactive or its licensors and protected by intellectual
          property laws. Reuse or distribution is not permitted without written
          permission.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          4. Payments and Refunds
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Payments must follow agreed-upon invoices or milestones.</li>
          <li>Late payments may result in paused or terminated service.</li>
          <li>
            Refunds, if applicable, are subject to service agreements. Most
            custom digital work is non-refundable after delivery starts.
          </li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          5. Project Timelines and Revisions
        </h2>
        <p className="mb-6">
          Timelines depend on client cooperation. Delays due to missing content
          or approvals are not our responsibility. Reasonable revisions are
          included—additional changes may incur extra charges.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          6. Limitation of Liability
        </h2>
        <p className="mb-6">
          We are not liable for any direct, indirect, incidental, or
          consequential damages arising from use of the website or our services,
          including bugs, errors, or unauthorized access to your data.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Confidentiality</h2>
        <p className="mb-6">
          Any confidential information shared with us will be kept secure and
          will not be disclosed to third parties without consent.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          8. Third-Party Tools and Services
        </h2>
        <p className="mb-6">
          We may integrate or use third-party tools. We are not liable for the
          terms or privacy practices of these external services.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">9. Termination</h2>
        <p className="mb-6">
          We reserve the right to suspend or terminate access to services for
          any breach of these Terms. Terms like confidentiality and limitations
          of liability will survive termination.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">10. Governing Law</h2>
        <p className="mb-6">
          These Terms are governed by the laws of India. Any disputes will fall
          under the exclusive jurisdiction of the courts in Hyderabad,
          Telangana.
        </p>

        {/* Section 11 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          11. Changes to Terms
        </h2>
        <p className="mb-6">
          We may update these Terms without notice. Continued use of the site
          implies acceptance of the revised Terms.
        </p>

        {/* Section 12 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">12. Contact Us</h2>
        <p className="mb-2">D4 Interactive</p>
        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:contact@d4interactive.in"
            className="text-blue-600 underline"
          >
            contact@d4interactive.in
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            href="https://www.d4interactive.in"
            className="text-blue-600 underline"
          >
            https://www.d4interactive.in
          </a>
        </p>
      </div>
    </>
  );
}
