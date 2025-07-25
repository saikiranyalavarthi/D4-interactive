"use client";

import Head from "next/head";
import Link from "next/link";
import {
  FaWordpress,
  FaSearch,
  FaShoppingCart,
  FaPuzzlePiece,
  FaMobileAlt,
  FaPenNib,
  FaTools,
  FaChartLine,
} from "react-icons/fa";

export default function WebDevelopmentPage() {
  const title = "Web Development Company in Hyderabad | D4 Interactive";
  const description =
    "Get custom web development services in Hyderabad from D4 Interactive. From static sites to complex web apps, we deliver fast, scalable, and SEO-friendly web solutions.";
  const keywords = [
    "Web Development Hyderabad",
    "Website Development Services",
    "Full Stack Web Development",
    "Frontend Backend Developer Hyderabad",
    "D4 Interactive Web Design",
    "Custom Web App Development",
    "SEO Friendly Websites",
  ];
  const services = [
    {
      title: "Custom WordPress Website Development",
      icon: <FaWordpress className="text-4xl text-blue-600" />,
      description: [
        "We build tailor-made WordPress websites that reflect your brand.",
        "Visually engaging, user-friendly and scalable designs.",
        "Custom-coded for flexibility, speed, and performance.",
        "SEO-ready, mobile-responsive and easy to manage.",
        "Optimized for lead generation and conversions.",
        "From planning to launch, seamless WordPress experience.",
      ],
    },
    {
      title: "Website Analysis",
      icon: <FaSearch className="text-4xl text-purple-600" />,
      description: [
        "We audit your website structure, content, and SEO.",
        "Identify usability issues and speed bottlenecks.",
        "Provide actionable insights to improve ROI.",
        "Focus on technical SEO and performance.",
        "Aligned with your business objectives.",
        "Smarter digital decisions with expert analysis.",
      ],
    },
    {
      title: "E-commerce with WooCommerce",
      icon: <FaShoppingCart className="text-4xl text-green-600" />,
      description: [
        "Build powerful WooCommerce-based online stores.",
        "Custom product pages and secure checkout.",
        "Integrate payment gateways and shipping.",
        "Mobile-friendly and SEO-optimized platforms.",
        "Scalable stores tailored to your niche.",
        "Grow your sales with confidence.",
      ],
    },
    {
      title: "Plugin Installation",
      icon: <FaPuzzlePiece className="text-4xl text-pink-600" />,
      description: [
        "Secure and reliable plugin installations.",
        "Configure tools like SEO, booking, security.",
        "Avoid plugin conflicts and performance issues.",
        "Extend features without coding.",
        "Custom plugin solutions if required.",
        "Boost functionality safely and easily.",
      ],
    },
    {
      title: "Responsive Website Design",
      icon: <FaMobileAlt className="text-4xl text-indigo-600" />,
      description: [
        "Perfect layout across mobile, tablet, desktop.",
        "Mobile-first approach to modern design.",
        "Fluid responsive layout structure.",
        "Fast loading, smooth interactions.",
        "Improve UX and reduce bounce rates.",
        "Stay ahead in mobile world.",
      ],
    },
    {
      title: "Content Writing",
      icon: <FaPenNib className="text-4xl text-yellow-600" />,
      description: [
        "SEO-rich, engaging website content.",
        "Covers service pages, blogs, product info.",
        "Tailored to your tone and audience.",
        "Improve search visibility and trust.",
        "Drive conversions with persuasive writing.",
        "Boost your brand voice online.",
      ],
    },
    {
      title: "Maintenance & Support",
      icon: <FaTools className="text-4xl text-red-600" />,
      description: [
        "Regular updates and uptime monitoring.",
        "Fix issues and manage plugins/themes.",
        "Speed, security, and backup support.",
        "Urgent fixes with expert help.",
        "Focus on business, we manage tech.",
        "Your site stays secure and healthy.",
      ],
    },
    {
      title: "SEO Optimization",
      icon: <FaChartLine className="text-4xl text-teal-600" />,
      description: [
        "Technical SEO and site structure fixes.",
        "Faster page loads and better UX.",
        "On-page optimization and meta tags.",
        "Keyword research and analytics setup.",
        "Boost Google ranking and traffic.",
        "Achieve business growth through SEO.",
      ],
    },
  ];
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
      </Head>

      {/* 🔥 Hero Section - Gradient Background */}
      <div className="bg-gradient-to-b from-cyan-400 to-blue-900 text-white text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Web Development Services
        </h1>
        <nav className="text-sm font-semibold text-white/90">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="mx-1">›</span> Web Development Services
        </nav>
      </div>

      {/* ✅ Main Content - White Background */}
      <main className="bg-white text-black py-12 px-4 md:px-16 lg:px-24 max-w-7xl mx-auto -mt-10 rounded-xl shadow-lg relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-700">
          Web Development
        </h2>

        <p className="text-lg mb-6 leading-relaxed">
          Web development, also known as website development, refers to the
          creation and maintenance of websites. It usually focuses on coding and
          functionality rather than design. Whether you&apos;re launching a
          simple static website or a full-scale web application, web development
          ensures everything works smoothly under the hood.
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          It encompasses essential tasks such as content management, responsive
          front-end design, backend APIs, security, and performance tuning — all
          crucial for a successful online presence.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
          Web Development Company in Hyderabad
        </h3>

        <p className="mb-4">
          Web development involves several steps and phases:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Project definition &amp; scope</li>
          <li>Visual design &amp; UI planning</li>
          <li>Frontend &amp; backend development</li>
          <li>Testing and QA</li>
          <li>Deployment &amp; security configuration</li>
          <li>Ongoing maintenance &amp; optimization</li>
        </ul>

        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-10">
          <div className="md:w-1/2">
            <p className="mb-4">
              <strong>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500">
                  D4 Interactive
                </span>
              </strong>{" "}
              — one of the best digital marketing and development agencies in
              Hyderabad — builds everything from e-commerce stores and CMS
              platforms to SaaS tools and custom portals. Whether you need a
              dynamic business site or a complex web app, we deliver it.
            </p>
            <p>
              As a leading website development company, we specialize in
              creating custom web solutions that transform your digital presence
              and accelerate business growth. Our comprehensive services include
              e-commerce platforms, content management systems, web
              applications, and enterprise-level solutions built with scalable
              architectures. We pride ourselves on delivering projects on time
              and within budget while maintaining the highest standards of
              quality and security.
            </p>
            <p>
              Our team of skilled developers integrates cutting-edge
              technologies, frameworks, and tools to ensure your website is
              secure, fast, mobile-friendly, and easy to scale.
            </p>
          </div>

          {/* ✅ Embedded YouTube Video - UPDATED */}
          <div className="md:w-1/2">
            <div className="w-full aspect-video rounded-lg shadow-md overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/6mjzeEsPc4E?si=2cAEUfMzexf63Ozm"
                title="Web Development Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Themed Paragraph */}
        <div className="mb-10 text-lg leading-relaxed">
          <p>
            A good website isn&apos;t just code — it&apos;s a business asset. At{" "}
            <strong>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500">
                D4 Interactive
              </span>
            </strong>
            , we combine strategy, design, and development to create web
            experiences that not only look good but perform exceptionally. From
            optimizing site speed and SEO to ensuring user-friendly interfaces
            and backend efficiency, we cover it all. Whether you&apos;re a
            startup or an enterprise, we offer end-to-end solutions tailored to
            your goals. We prioritize responsiveness, clean-code architecture,
            and cross-browser compatibility to help your brand scale fast. Our
            solutions are future-proof and built with your growth in mind.
          </p>
        </div>
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
              Our{" "}
              <span className="text-indigo-600"> Web Developmnet Services</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300"
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                    {item.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
          >
            Request a Web Development Proposal
          </Link>
        </div>
      </main>
    </div>
  );
}
