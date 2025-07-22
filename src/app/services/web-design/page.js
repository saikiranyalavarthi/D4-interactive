"use client";

import Head from "next/head";
import Link from "next/link";

export default function WebDesigningPage() {
  const title = "Web Designing Company in Hyderabad | D4 Interactive";
  const description =
    "D4 Interactive offers modern, responsive, and interactive web design services in Hyderabad to make your brand stand out. Get stunning websites designed with UX and SEO in mind.";
  const keywords = [
    "Web Designing Hyderabad",
    "Website Design Company Hyderabad",
    "Responsive Web Design",
    "UI UX Designers Hyderabad",
    "D4 Interactive Website Design",
    "Custom Web Design Services",
  ];

  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
      </Head>

      {/* 🔥 Hero Section - Gradient Background */}
      <div className="bg-gradient-to-b from-rose-500 to-purple-800 text-white text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Web Designing Services
        </h1>
        <nav className="text-sm font-semibold text-white/90">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="mx-1">›</span> Web Designing Services
        </nav>
      </div>

      {/* ✅ Main Content - White Background */}
      <main className="bg-white text-black px-4 md:px-16 lg:px-24 py-10 max-w-7xl mx-auto rounded-xl shadow-lg -mt-10 relative z-10">
        <section className="mt-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-700">
            Web Designing
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            What you need is not just a beautiful website with commendable
            design, you need a website that establishes interactions with the
            viewer. Your website is the first impression for all the reputation
            you wish to hold for your brand. If your website cannot hold your
            viewer for more than 4 seconds, then you&apos;ve failed to convince
            that your products are best in class.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
            Web Designing Company in Hyderabad
          </h3>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* ✅ Embedded YouTube Video */}
            <div className="md:w-1/2">
              <div className="w-full aspect-video rounded-lg shadow-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/twWMv8fF15k?si=65ML9kjNFOH3YHBh"
                  title="Web Designing Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* ✅ Supporting Text */}
            <div className="md:w-1/2">
              <p className="mb-4">
                <strong>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500">
                    D4 Interactive
                  </span>
                </strong>{" "}
                understands the core vision of your business and ensures your
                website speaks to your users in both design and message.
              </p>
              <p className="mb-4">
                Your brand needs a holistic output — from hosting to lead
                generation. That&apos;s where we bring stunning, fast, and
                secure websites that are tailored for performance, trust, and
                modern business standards.
              </p>
            </div>
          </div>

          <p className="mb-4">
            Users enjoy visiting websites that are visually appealing and
            intuitive to navigate. At{" "}
            <strong>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500">
                D4 Interactive
              </span>
            </strong>
            , our creative developers deliver clean layouts and smart structure,
            helping your visitors engage, explore, and act.
          </p>

          <p className="mb-4">
            Because it&apos;s not always about technical edge — it&apos;s about
            emotional touch, visual storytelling, and experience that make your
            brand unforgettable in the digital crowd.
          </p>

          <p className="mb-6">
            The secret to{" "}
            <strong>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500">
                D4 Interactive
              </span>
            </strong>
            &apos;s success is our ability to deliver agile, scalable, and
            responsive web design that gives your business a competitive
            advantage.
          </p>

          {/* CTA Section */}
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
            >
              Get a Free Website Design Quote
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
