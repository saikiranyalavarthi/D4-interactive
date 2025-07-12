"use client";

import Head from "next/head";
import Image from "next/image";

export default function PPCPage() {
  return (
    <div className="font-sans min-h-screen text-black">
      {/* Meta tags for SEO */}
      <Head>
        <title>
          Pay Per Click (PPC) Advertising Services | D4 Interactive Hyderabad
        </title>
        <meta
          name="description"
          content="Boost your brand with Google Ads & PPC Campaigns from D4 Interactive, a trusted PPC company in Hyderabad. Certified Google Ads experts. Contact now!"
        />
        <meta
          name="keywords"
          content="PPC Company Hyderabad, Google Ads Services Hyderabad, Pay Per Click Advertising, Top Digital Marketing Agency in Hyderabad, PPC Campaign Experts India, D4 Interactive SEO PPC, Digital Advertising Hyderabad, Google Ads Agency Hyderabad"
        />
        <link rel="canonical" href="https://d4interactive.com/services/ppc" />
      </Head>

      {/* Hero Section */}
      <section className="py-16 text-center px-4 bg-gradient-to-r from-black via-[#AA2428] to-black text-white">
        <h1 className="text-4xl font-bold mb-4">
          Pay Per Click (PPC) Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Increase your traffic, leads, and conversions with targeted PPC
          campaigns by D4 Interactive — a top-rated Google Ads agency in
          Hyderabad.
        </p>
      </section>

      {/* Main Content with White Background */}
      <main className="bg-white text-black px-6 md:px-20 py-16 max-w-6xl mx-auto rounded-xl shadow-lg -mt-10 relative z-10">
        {/* Image & Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="md:w-1/2">
            <Image
              src="/assets/image13.jpg"
              alt="Google Ads Hyderabad"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">What is PPC?</h2>
            <p>
              PPC (Pay-Per-Click) is one of the most effective digital marketing
              strategies to put your business in front of ready-to-buy users.
              You only pay when someone clicks your ad — giving you control over
              your marketing budget and results.
            </p>
            <p>
              As a <strong>Google-certified PPC company in Hyderabad</strong>,
              D4 Interactive helps you build high-converting Google Ads
              campaigns across Search, YouTube, Display, and more.
            </p>
          </div>
        </div>

        {/* Why Choose D4 Interactive Section */}
        <section className="space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold">Why Choose D4 Interactive?</h2>
          <p>
            Our PPC experts go beyond clicks. We focus on conversions. From
            local stores to national brands, we’ve helped clients across India
            scale their sales and leads using data-backed strategies.
          </p>
          <ul className="list-disc pl-6">
            <li>Certified Google Ads Professionals</li>
            <li>Dedicated PPC Managers</li>
            <li>Transparent Weekly Reports</li>
            <li>Landing Page Optimization for Better ROI</li>
            <li>WhatsApp Lead Integration</li>
          </ul>

          <h3 className="text-xl font-semibold pt-6">What We Offer:</h3>
          <ul className="list-disc pl-6">
            <li>Google Search Ads & Shopping Ads</li>
            <li>Remarketing & Retargeting Campaigns</li>
            <li>YouTube Video Ads</li>
            <li>Display Ads on Google Partner Sites</li>
            <li>Social Media Paid Ads (Meta, Instagram)</li>
          </ul>

          <h3 className="text-xl font-semibold pt-6">Our PPC Workflow</h3>
          <ul className="list-disc pl-6">
            <li>Audience & Keyword Research</li>
            <li>Campaign Planning & Setup</li>
            <li>Ad Design & A/B Testing</li>
            <li>Landing Page Optimization</li>
            <li>Performance Tracking & Continuous Improvement</li>
          </ul>

          <p className="mt-6">
            Ready to scale your business with proven PPC ad strategies? Whether
            you're a startup or an enterprise, D4 Interactive will help you grow
            with confidence and performance marketing.
          </p>
        </section>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded hover:bg-indigo-700 transition"
          >
            Request a Free PPC Consultation
          </a>
        </div>
      </main>
    </div>
  );
}
