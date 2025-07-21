"use client";

import Head from "next/head";
import Link from "next/link";
import {
  FaSeedling,
  FaTractor,
  FaIndustry,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaSearch,
  FaBullhorn,
  FaStar,
  FaShoppingCart,
  FaChartLine,
  FaUsers,
  FaVideo,
  FaRobot,
} from "react-icons/fa";

export default function AgricultureMarketingPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Head>
        <title>
          AI + Digital Agriculture Marketing Agency | D4 Interactive
        </title>
        <meta
          name="description"
          content="Drive agricultural growth with D4 Interactive's digital marketing and AI-powered solutions for farming, equipment, and AgriTech sectors."
        />
        <meta
          name="keywords"
          content="Agriculture Marketing India, AgriTech SEO, Organic Farming Ads, Farm Equipment Promotion, Digital Agriculture Branding"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 via-lime-600 to-green-400 text-white p-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
            AI-Powered Marketing for Smart Agriculture
          </h1>
          <p className="text-lg mb-6">
            Scale your agribusiness, connect with farmers and global buyers
            using SEO, content, video ads, WhatsApp marketing & AI tools.
          </p>
          <div className="flex justify-center flex-wrap gap-4"></div>
        </div>
      </section>

      {/* Why Agriculture Needs Digital */}
      <section className="py-16 px-6 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            The Future of Farming is Digital
          </h2>
          <p className="mb-4">
            Whether you grow organic produce, run a fertilizer company, or
            innovate with AgriTech, marketing is key. Digital tools help build
            awareness, generate leads, and tell stories that inspire trust.
          </p>
          <p className="mb-4">
            From SEO for local visibility to Google Ads and Instagram Reels for
            modern engagement, we help your agricultural brand grow online and
            connect globally.
          </p>
        </div>
      </section>
      <section className="py-20 px-6 bg-green-50 text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 animate-fade-in-left">
            <h2 className="text-4xl font-bold">
              10x Your Farmer & Buyer Loyalty with
              <span className="text-green-700"> Story-driven Marketing</span>
            </h2>
            <p className="text-gray-700">
              Build trust in your agriculture brand by connecting with the
              emotions of farmers, distributors, and eco-conscious consumers.
              Through storytelling and audience behavior analysis, we deliver
              campaigns that resonate and convert.
            </p>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in-right">
            <FaSeedling className="text-green-700 text-[200px] md:text-[250px]" />
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 px-6 bg-white text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services for Agribusinesses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaSeedling />,
              title: "Organic Farming SEO",
              desc: "Improve search rankings for your organic produce and increase visibility among eco-conscious consumers.",
            },
            {
              icon: <FaTractor />,
              title: "Machinery Ads & SEO",
              desc: "Run high-converting ads and boost search engine traffic for tractors, irrigation, and agri-equipment.",
            },
            {
              icon: <FaIndustry />,
              title: "AgriTech Growth Campaigns",
              desc: "From app installs to B2B awareness, we craft strategies for AgriTech startups with measurable ROI.",
            },
            {
              icon: <FaSearch />,
              title: "Search Engine Optimization",
              desc: "Be found by buyers and distributors with powerful on-page and off-page SEO strategies.",
            },
            {
              icon: <FaVideo />,
              title: "Video & Storytelling",
              desc: "Promote your farm journey or product process through reels, YouTube shorts, and documentaries.",
            },
            {
              icon: <FaWhatsapp />,
              title: "WhatsApp Marketing",
              desc: "Send updates, catalogs, and product queries directly to farmers and clients using WhatsApp automation.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-green-50 text-green-900 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 animate-fade-in-up"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-700 via-lime-600 to-green-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Cultivate Digital Growth?
        </h2>
        <p className="mb-6">
          Get a free consultation with our agri-marketing experts today.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-green-800 px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Let's Connect
        </Link>
      </section>
    </div>
  );
}
