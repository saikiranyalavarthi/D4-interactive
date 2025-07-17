"use client";

import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | D4 Interactive</title>
        <meta
          name="description"
          content="Read the privacy policy of D4 Interactive to understand how we handle your personal information."
        />
      </Head>
      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">
          Privacy Policy
        </h1>
        <p className="mb-4">
          Welcome to D4 Interactive ("we", "our", or "us"). Your privacy is
          important to us. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website{" "}
          <a
            href="https://www.d4interactive.in"
            className="text-blue-600 underline"
          >
            https://www.d4interactive.in
          </a>
          .
        </p>
        <p className="mb-6 font-medium text-red-600">
          Please read this Privacy Policy carefully. If you do not agree with
          the terms of this policy, please do not access the site.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <h3 className="font-medium mb-1">a) Personal Information</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>
            Any other information you voluntarily submit via forms or emails
          </li>
        </ul>
        <h3 className="font-medium mb-1">b) Non-Personal Information</h3>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent on site</li>
          <li>Device type and operating system</li>
          <li>Referral URLs</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>To respond to your inquiries or service requests</li>
          <li>To improve our website functionality and user experience</li>
          <li>
            To provide updates, newsletters, or marketing content (with your
            consent)
          </li>
          <li>
            To analyze usage trends and track the effectiveness of services
          </li>
          <li>To comply with legal obligations</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          3. Sharing Your Information
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Trusted service providers (e.g., hosting, analytics)</li>
          <li>Law enforcement or government, when required</li>
          <li>Partners/subcontractors when needed to fulfill a service</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          4. Cookies and Tracking Technologies
        </h2>
        <p className="mb-4">
          We use cookies and similar technologies to enhance your experience.
          Cookies help us:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Understand user behavior</li>
          <li>Analyze traffic</li>
          <li>Remember preferences</li>
        </ul>
        <p className="mb-6">
          You can control or disable cookies in your browser settings.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Data Security</h2>
        <p className="mb-6">
          We use reasonable security measures to protect your data. However, no
          transmission method is 100% secure.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have rights to:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Access your personal information</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent</li>
          <li>Opt-out of marketing</li>
        </ul>
        <p className="mb-6">
          To exercise your rights, email us at{" "}
          <a
            href="mailto:info@d4interactive.in"
            className="text-blue-600 underline"
          >
            info@d4interactive.in
          </a>
          .
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          7. Third-Party Links
        </h2>
        <p className="mb-6">
          Our website may contain links to third-party sites. We are not
          responsible for their privacy practices. Please review their policies
          before sharing personal data.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          8. Children’s Privacy
        </h2>
        <p className="mb-6">
          Our site is not for children under 13. We do not knowingly collect
          data from children. If found, we will delete it immediately.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          9. Updates to This Privacy Policy
        </h2>
        <p className="mb-6">
          We may update this policy occasionally. Changes will be posted on this
          page with the updated date. Continued use of the site indicates
          acceptance.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">10. Contact Us</h2>
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
