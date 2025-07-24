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
            Mobile app development requires expertise in native and
            cross-platform technologies to create applications that deliver
            exceptional performance and user experiences across iOS and Android
            devices. Our development team specializes in Swift, Kotlin, React
            Native, and Flutter to build apps that leverage device-specific
            features while maintaining code efficiency and development speed. We
            follow user-centered design principles, conducting thorough market
            research and user testing to ensure our apps meet real user needs
            and preferences. Our development process includes wireframing,
            prototyping, iterative development, and comprehensive testing across
            multiple devices and operating system versions. We integrate
            advanced functionalities such as push notifications, offline
            capabilities, social media integration, and analytics tracking to
            enhance user engagement and retention. Our post-launch services
            include app store optimization, performance monitoring, user
            feedback analysis, and regular updates to ensure continued success
            in competitive app marketplaces.
          </p>
          <p>
            Mobile application development encompasses the complete lifecycle of
            creating innovative mobile solutions that solve business challenges
            and enhance user productivity through intuitive design and robust
            functionality. Our experienced team manages projects from initial
            concept validation through app store deployment, ensuring alignment
            with business objectives and user expectations throughout the
            development process. We utilize agile methodologies, continuous
            integration practices, and automated testing frameworks to maintain
            high code quality while meeting aggressive timeline requirements.
            Our applications incorporate modern UI/UX design patterns,
            accessibility features, and performance optimization techniques to
            create inclusive experiences that work seamlessly across diverse
            user demographics and device capabilities. We provide comprehensive
            documentation, training materials, and ongoing technical support to
            ensure successful app adoption and long-term maintenance. Our
            strategic approach includes competitive analysis, monetization
            planning, and marketing integration to maximize app visibility and
            revenue potential.
          </p>
          <p>
            From MVPs for startups to enterprise-level systems, our agile
            approach means faster delivery and lower costs without compromising
            performance.
          </p>

          <p>
            Application development requires a comprehensive understanding of
            user needs, business processes, and technical architecture to create
            software solutions that drive efficiency and innovation. Our
            development approach begins with thorough requirements analysis,
            stakeholder interviews, and technical feasibility studies to ensure
            project success from the outset. We specialize in web applications,
            mobile apps, desktop software, and enterprise systems using modern
            development frameworks and cloud-native architectures. Our agile
            development methodology emphasizes iterative delivery, regular
            client feedback, and continuous improvement to ensure the final
            product exceeds expectations and delivers measurable business value.
            We implement robust testing strategies, security protocols, and
            performance optimization techniques to create applications that
            scale effectively and maintain high availability under demanding
            usage conditions. Our comprehensive project management approach
            includes risk assessment, timeline planning, and resource allocation
            to deliver projects on schedule and within budget constraints.
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
