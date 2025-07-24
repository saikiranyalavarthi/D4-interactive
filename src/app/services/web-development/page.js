"use client";

import Head from "next/head";
import Link from "next/link";

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
              quality and security. Our team of certified developers, designers,
              and project managers work collaboratively to ensure seamless
              communication and successful project outcomes. We utilize agile
              development methodologies, conduct regular quality assurance
              testing, and provide detailed documentation for all deliverables.
              Our post-launch support includes hosting solutions, security
              monitoring, performance optimization, and ongoing technical
              maintenance to ensure your website continues to perform optimally
              and support your business objectives.
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
          <p>
            Our web development company delivers comprehensive digital solutions
            that combine technical expertise with creative innovation to help
            businesses thrive online. We specialize in custom web applications,
            e-commerce platforms, content management systems, and enterprise
            software solutions designed to streamline operations and enhance
            user experiences. Our development process emphasizes security,
            scalability, and performance optimization to ensure your web
            applications can grow alongside your business. We maintain
            transparent communication throughout the development lifecycle,
            providing regular updates, milestone reports, and opportunities for
            feedback and revision. Our quality assurance team conducts extensive
            testing across multiple browsers, devices, and operating systems to
            guarantee flawless functionality and user experience. We offer
            flexible engagement models, competitive pricing, and ongoing support
            services to accommodate businesses of all sizes and budgets.
          </p>
          <p>
            As a full-service website development agency, we deliver
            comprehensive digital solutions that transform business operations
            and enhance customer experiences through innovative web technologies
            and strategic implementation. Our agency maintains specialized teams
            for frontend development, backend engineering, database design, and
            system integration to handle projects of any complexity and scale.
            We utilize project management methodologies, quality assurance
            protocols, and client communication systems that ensure transparent,
            efficient, and successful project delivery. Our development services
            include custom web applications, e-commerce platforms, content
            management systems, and enterprise software solutions built with
            scalable, secure architectures. We provide strategic consulting,
            technology roadmap planning, and digital transformation guidance to
            help businesses leverage web technologies for competitive advantage.
            Our agency maintains partnerships with leading technology vendors,
            cloud providers, and digital marketing platforms to offer integrated
            solutions that maximize your technology investment and business
            outcomes.
          </p>
        </div>

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
