"use client";

import Link from "next/link";
import Head from "next/head";
import {
  FaConciergeBell,
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
  FaHotel,
} from "react-icons/fa";

export default function HospitalityMarketing() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <Head>
        <title>AI-Powered Hospitality Growth Agency | Miraki Digital</title>
        <meta
          name="description"
          content="Boost guest engagement and bookings with AI-enhanced hospitality marketing. Create memorable guest experiences at scale."
        />
        <meta
          name="keywords"
          content="AI hospitality strategy, hotel branding, guest engagement, Miraki Digital, SEO for hotels"
        />
      </Head>

      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-tr from-yellow-100 via-yellow-200 to-white animate-fade-in-up">
        <h5 className="text-xs tracking-widest uppercase text-yellow-600 mb-3">
          Elevate Guest Experience
        </h5>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Transform
          </span>{" "}
          Your Hospitality Brand with
          <br />
          <span className="bg-gradient-to-r from-yellow-600 to-orange-400 bg-clip-text text-transparent">
            AI Marketing Power
          </span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Use smart insights and emotional storytelling to increase guest
          satisfaction, loyalty, and repeat bookings.
        </p>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 bg-yellow-50 text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 animate-fade-in-left">
            <h2 className="text-4xl font-bold">
              10x Guest Retention with
              <span className="text-yellow-700"> Hospitality Storytelling</span>
            </h2>
            <p className="text-gray-700">
              Craft emotional connections with your guests through strategic
              content and personalized experiences powered by AI.
            </p>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in-right">
            <FaConciergeBell className="text-yellow-700 text-[200px] md:text-[250px]" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-tr from-yellow-100 to-yellow-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            "180% Booking Growth",
            "240% Brand Recall",
            "95% Guest Satisfaction",
          ].map((stat, idx) => (
            <div key={idx} className="animate-zoom-in">
              <p className="text-5xl font-bold text-yellow-700">
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
            { icon: <FaFacebookF />, name: "Social Media Campaigns" },
            { icon: <FaSearch />, name: "Hotel SEO Optimization" },
            { icon: <FaGoogle />, name: "Google Ads for Hospitality" },
            { icon: <FaInstagram />, name: "Visual Brand Curation" },
            { icon: <FaStar />, name: "Guest Review Strategy" },
            { icon: <FaEnvelope />, name: "Email Guest Journeys" },
            { icon: <FaWhatsapp />, name: "WhatsApp Booking Reminders" },
            { icon: <FaVideo />, name: "Video Tours & Reels" },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-yellow-50 text-yellow-900 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 animate-fade-in-up"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <p className="font-semibold text-sm">{service.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-20 px-6 bg-yellow-100 text-black text-center">
        <h2 className="text-3xl font-bold mb-8">
          Trusted by Leading Hospitality Brands
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["Serenity Resorts", "Vista Hotels", "Oasis Wellness Retreat"].map(
            (brand, idx) => (
              <div
                key={idx}
                className="bg-white text-yellow-800 p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 animate-fade-in"
              >
                <h3 className="text-xl font-semibold mb-2">{brand}</h3>
                <p className="text-sm">
                  {idx === 0 && "Luxury stays with memorable guest journeys."}
                  {idx === 1 && "Bringing tech to timeless hospitality."}
                  {idx === 2 &&
                    "Holistic retreats powered by digital serenity."}
                </p>
              </div>
            )
          )}
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
              q: "How does AI support hospitality marketing?",
              a: "AI enhances personalization, forecasts guest behavior, and automates engagement across multiple channels.",
            },
            {
              q: "Do you help increase direct bookings?",
              a: "Yes, we focus on SEO, PPC, and retention strategies to reduce OTA dependence.",
            },
            {
              q: "What platforms do you integrate with?",
              a: "We support integrations with hotel PMS, booking engines, and CRM tools.",
            },
            {
              q: "When will we see results?",
              a: "Initial improvements are visible in 30 days, with scalable growth in 60–90 days.",
            },
          ].map((faq, i) => (
            <div key={i} className="animate-fade-in-up">
              <h3 className="font-semibold text-lg text-yellow-700">{faq.q}</h3>
              <p className="text-sm text-gray-700 mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-400 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Redefine Guest Loyalty with Smart Marketing
          </h2>
          <Link href="/contact">
            <button className="flex items-center gap-2 border border-white rounded-full px-6 py-3 text-white hover:bg-white hover:text-yellow-700 transition font-semibold">
              <span className="text-xl">→</span> Contact Our Team
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
