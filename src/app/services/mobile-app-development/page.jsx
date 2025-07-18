"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MobileDevelopmentPage() {
  const title = "Mobile App Development Company in Hyderabad | D4 Interactive";
  const description =
    "Build scalable Android & iOS apps with D4 Interactive, Hyderabad’s trusted mobile app development company. Custom app design, development, and deployment services.";
  const keywords = [
    "Mobile App Development Hyderabad",
    "Android App Company",
    "iOS App Developers",
    "React Native Development",
    "Flutter App Services",
    "Custom Mobile App Solutions",
    "App UI/UX Design Hyderabad",
    "Top Mobile App Agency India",
  ];

  return (
    <div className="font-sans min-h-screen text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* 🔥 Hero Section */}
      <div className="bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Mobile App Development Services
        </h1>
        <nav className="text-sm font-semibold text-white/90">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="mx-1">›</span> Mobile Development
        </nav>
      </div>

      {/* ✅ Main Content */}
      <main className="bg-white text-black px-4 md:px-16 py-12 max-w-7xl mx-auto rounded-xl shadow-lg -mt-10 relative z-10">
        {/* Animated Intro + Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse md:flex-row gap-10 items-center"
        >
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
              Custom Android & iOS App Development
            </h2>
            <p className="text-lg mb-4">
              D4 Interactive designs and builds modern mobile apps that are
              fast, scalable, and user-friendly. From startups to enterprises,
              we craft mobile experiences that deliver performance and
              engagement.
            </p>
            <Link
              href="/contact"
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
            >
              Book Free App Consultation
            </Link>
          </div>

          {/* Embedded Video */}
          <div className="flex-1">
            <div className="w-full aspect-video rounded-lg shadow-md overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/P6rtgTdddhQ"
                title="Mobile App Development"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* 📱 Mobile Services Section */}
        <section className="mt-12 space-y-5 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold text-blue-700">
            Our Mobile App Services Include
          </h2>
          <ul className="list-disc pl-6">
            <li>Custom iOS & Android App Development</li>
            <li>Cross-Platform Development (React Native / Flutter)</li>
            <li>Mobile UI/UX Design</li>
            <li>App Maintenance & Support</li>
            <li>API Integration & Backend Development</li>
            <li>Play Store & App Store Deployment</li>
          </ul>

          <p>
            Whether you’re launching a new product or upgrading your existing
            app, our team of expert developers, designers, and testers ensure
            quality code, modern UI, and secure architecture that scales.
          </p>

          <p>
            As one of the leading{" "}
            <strong>mobile app development companies in Hyderabad</strong>, D4
            Interactive helps you turn your idea into a functional and
            user-centered application — faster, better, and smarter.
          </p>

          <p>
            From MVPs for startups to enterprise-level systems, our agile
            approach means faster delivery and lower costs without compromising
            performance.
          </p>
        </section>

        {/* 🚀 Call to Action */}
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-block bg-indigo-600 text-white font-semibold px-8 py-4 rounded hover:bg-indigo-700 transition"
          >
            Start Your App Project Today
          </Link>
        </div>
      </main>
    </div>
  );
}
