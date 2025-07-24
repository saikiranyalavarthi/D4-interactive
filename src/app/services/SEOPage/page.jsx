"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SEOPage() {
  const title = "Best SEO Services in Hyderabad | D4 Interactive";
  const description =
    "Rank higher on Google with D4 Interactive, Hyderabad's top SEO agency. We offer on-page, off-page, local SEO, technical audits, and white-hat strategies for business growth.";
  const keywords = [
    "SEO Services Hyderabad",
    "Best SEO Company in Hyderabad",
    "D4 Interactive SEO Agency",
    "Digital Marketing Hyderabad",
    "On-Page SEO Services",
    "Local SEO Experts Hyderabad",
    "Top SEO Company India",
    "SEO Optimization Services",
  ];

  return (
    <div className="font-sans min-h-screen text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* 🔥 Gradient Hero Section */}
      <div className="bg-gradient-to-br from-pink-600 via-red-600 to-orange-500 text-white text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Search Engine Optimization (SEO) Services
        </h1>
        <nav className="text-sm font-semibold text-white/90">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="mx-1">›</span> SEO Services
        </nav>
      </div>

      {/* ✅ White Background Main Section */}
      <main className="bg-white text-black px-4 md:px-16 py-12 max-w-7xl mx-auto rounded-xl shadow-lg -mt-10 relative z-10">
        {/* Hero Inner Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse md:flex-row gap-10 items-center"
        >
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
              Best SEO Services in Hyderabad
            </h2>
            <p className="text-lg mb-4">
              At <strong>D4 Interactive</strong>, we elevate your digital
              presence through SEO strategies tailored to drive traffic,
              increase visibility, and boost revenue. Our transparent, white-hat
              approach delivers long-term results across on-page, off-page, and
              local SEO.
            </p>
            <Link
              href="/contact"
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
            >
              Get SEO Consultation
            </Link>
          </div>

          {/* ✅ YouTube Video Instead of Image */}
          <div className="flex-1">
            <div className="w-full aspect-video rounded-lg shadow-md overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/K-s1JrrhR0E?si=aPGQkAyA8yQNakIO"
                title="SEO Services Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* SEO Services List */}
        <section className="mt-12 space-y-5 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold text-blue-700">
            Our SEO Services Include
          </h2>
          <ul className="list-disc pl-6">
            <li>Comprehensive Keyword Research & Competitor Analysis</li>
            <li>On-Page Optimization & Content Structuring</li>
            <li>Technical SEO and Site Audit</li>
            <li>Link Building and Authority Growth</li>
            <li>Local SEO with Google My Business Optimization</li>
            <li>Monthly Analytics & Reporting</li>
          </ul>

          <p>
            As a leading <strong>SEO company in Hyderabad</strong>, we craft
            search strategies that align with your business goals and help you
            dominate Google rankings ethically and effectively. With D4
            Interactive's advanced SEO techniques, your website doesn’t just get
            traffic — it gets the right audience at the right time.
          </p>

          <p>
            At <strong>D4 Interactive</strong>, we don't just boost rankings —
            we deliver measurable results through conversion-focused SEO. Our
            strategy blends keyword science, performance audits, and content
            excellence to ensure your business stands out. From technical health
            to link authority, we handle every SEO factor with precision. As
            Hyderabad’s trusted digital growth partner, we help you gain
            visibility, attract qualified traffic, and turn visitors into loyal
            customers. We follow only ethical, white-hat practices backed by
            data and Google guidelines.
          </p>

          <p>
            Search engine optimization is the cornerstone of digital marketing
            success, helping businesses improve their online visibility and
            attract targeted organic traffic to their websites. Our
            comprehensive SEO strategies focus on in-depth keyword research,
            strategic on-page optimization, technical SEO audits, and
            high-quality content marketing to ensure your website ranks higher
            in search engine results pages. We meticulously analyze competitor
            strategies, optimize meta titles and descriptions, improve site
            loading speed, and build authoritative backlinks to enhance your
            overall search engine presence and domain authority. Our data-driven
            SEO approach includes regular performance monitoring, detailed
            keyword ranking tracking, conversion rate optimization, and
            comprehensive analytics reporting to maximize your return on
            investment and demonstrate measurable results. Through proven
            white-hat SEO techniques and ethical optimization practices, we help
            businesses establish long-term search authority in their industry
            while driving sustainable organic growth and qualified lead
            generation. Our experienced SEO team stays continuously updated with
            the latest Google algorithm changes, search engine guidelines, and
            industry best practices to ensure your website maintains its
            competitive edge in search rankings. We implement advanced SEO
            strategies including schema markup implementation, local SEO
            optimization, mobile-first indexing preparation, and voice search
            optimization to future-proof your digital presence. Our
            comprehensive SEO services encompass technical website audits,
            content gap analysis, internal linking optimization, and penalty
            recovery assistance to address all aspects of search engine
            visibility. We focus on improving user experience signals, reducing
            bounce rates, increasing dwell time, and enhancing overall website
            performance metrics that directly impact search engine rankings. Our
            SEO methodology includes thorough competitor research, market
            analysis, and industry trend identification to develop customized
            optimization strategies that outperform your competition. We provide
            detailed monthly SEO reports, ranking updates, traffic analysis, and
            strategic recommendations to ensure transparency and continuous
            improvement in your search engine optimization efforts. Our team
            specializes in both national and local SEO campaigns, helping
            businesses dominate search results in their target geographic
            markets and industry niches. Through systematic SEO implementation,
            ongoing optimization refinements, and adaptive strategy development,
            we deliver measurable improvements in organic search visibility,
            website traffic quality, and lead generation performance. We
            integrate SEO best practices with broader digital marketing
            initiatives, ensuring cohesive strategies that amplify your online
            presence across multiple channels and touchpoints. Our commitment to
            SEO excellence includes staying ahead of emerging search trends,
            algorithm updates, and industry developments to maintain your
            competitive advantage in the ever-evolving digital landscape.
          </p>
          <p></p>
        </section>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-block bg-indigo-600 text-white font-semibold px-8 py-4 rounded hover:bg-indigo-700 transition"
          >
            Request a Free SEO Audit
          </Link>
        </div>
      </main>
    </div>
  );
}
