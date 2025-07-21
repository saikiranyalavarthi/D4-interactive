"use client";

import Link from "next/link";
import Head from "next/head";
import {
  FaRobot,
  FaChartLine,
  FaUsers,
  FaEnvelope,
  FaWhatsapp,
  FaVideo,
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaSearch,
  FaBullhorn,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

export default function EcommerceMarketing() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <Head>
        <title>AI-Driven E-commerce Growth Agency | Miraki Digital</title>
        <meta
          name="description"
          content="Accelerate your e-commerce success with AI-enhanced marketing. Drive visibility, engagement, and sales at scale."
        />
        <meta
          name="keywords"
          content="AI e-commerce strategy, digital branding, marketing automation, Miraki Digital, SEO for e-commerce"
        />
      </Head>

      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-tr from-blue-100 via-blue-200 to-white animate-fade-in-up">
        <h5 className="text-xs tracking-widest uppercase text-blue-500 mb-3">
          Smarter Selling
        </h5>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
            Accelerate
          </span>{" "}
          Your E-commerce with
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            AI Marketing Power
          </span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Harness cutting-edge marketing to create brand trust, drive
          visibility, and scale up your conversions.
        </p>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 bg-blue-50 text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 animate-fade-in-left">
            <h2 className="text-4xl font-bold">
              10x Your Customer Loyalty with
              <span className="text-blue-600"> Emotional Targeting</span>
            </h2>
            <p className="text-gray-600">
              Connect with your audience on a deeper level. Our AI analyzes
              behavior, interests, and triggers to deliver campaigns that feel
              personal and perform exceptionally.
            </p>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in-right">
            <FaShoppingCart className="text-blue-600 text-[200px] md:text-[250px]" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-tr from-blue-100 to-blue-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            "210% Engagement Boost",
            "280% Trust Uplift",
            "85% Conversion Rise",
          ].map((stat, idx) => (
            <div key={idx} className="animate-zoom-in">
              <p className="text-5xl font-bold text-blue-600">
                {stat.split(" ")[0]}
              </p>
              <p className="text-sm mt-2 text-gray-700">
                {stat.split(" ").slice(1).join(" ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaFacebookF />, name: "Social Media Optimisation" },
            { icon: <FaSearch />, name: "SEO & Keyword Ranking" },
            { icon: <FaGoogle />, name: "Google Ads Management" },
            { icon: <FaInstagram />, name: "Insta Growth Campaigns" },
            { icon: <FaStar />, name: "Online Reputation Building" },
            { icon: <FaEnvelope />, name: "Email Automation" },
            { icon: <FaWhatsapp />, name: "WhatsApp Funnels" },
            { icon: <FaVideo />, name: "Short-form Video Ads" },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-blue-50 text-blue-900 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 animate-fade-in-up"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <p className="font-semibold text-sm">{service.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-20 px-6 bg-blue-100 text-black text-center">
        <h2 className="text-3xl font-bold mb-8">
          Trusted by E-commerce Brands
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["Fabpik", "Monarch Furniture", "Centro Shoes"].map((brand, idx) => (
            <div
              key={idx}
              className="bg-white text-blue-800 p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 animate-fade-in"
            >
              <h3 className="text-xl font-semibold mb-2">{brand}</h3>
              <p className="text-sm">
                {idx === 0 && "Joyful shopping experience at scale."}
                {idx === 1 && "Innovating workspaces with stylish furniture."}
                {idx === 2 && "Walking ahead in the fashion industry."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-6 py-20 text-black">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              q: "How does AI help in e-commerce marketing?",
              a: "It enables personalization, predictive analytics, dynamic pricing, and automated responses for seamless customer experiences.",
            },
            {
              q: "Do you handle ad campaigns across platforms?",
              a: "Yes, we manage ads on Google, Meta, Instagram, YouTube, and more with targeted reach and smart bidding.",
            },
            {
              q: "Are your services platform-specific?",
              a: "Our services integrate with Shopify, WooCommerce, Magento, and even custom sites.",
            },
            {
              q: "How soon can I see results?",
              a: "You can expect measurable insights within 30 days and scalable outcomes in 90 days.",
            },
          ].map((faq, i) => (
            <div key={i} className="animate-fade-in-up">
              <h3 className="font-semibold text-lg text-blue-600">{faq.q}</h3>
              <p className="text-sm text-gray-700 mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Turn Your Traffic Into Loyal Customers
          </h2>
          <Link href="/contact">
            <button className="flex items-center gap-2 border border-white rounded-full px-6 py-3 text-white hover:bg-white hover:text-blue-600 transition font-semibold">
              <span className="text-xl">→</span> Contact Our Team
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
