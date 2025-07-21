"use client";

import Link from "next/link";
import Head from "next/head";
import {
  FaBuilding,
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
  FaMapMarkedAlt,
} from "react-icons/fa";

export default function RealEstateMarketing() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Head>
        <title>AI-Powered Real Estate Marketing | D4 interactive Digital</title>
        <meta
          name="description"
          content="Maximize property sales with AI-driven real estate marketing. Capture leads, build trust, and grow your presence."
        />
        <meta
          name="keywords"
          content="real estate marketing, property lead generation, AI real estate strategy, branding, D4 interactive Digital"
        />
      </Head>

      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-tr from-green-100 via-green-200 to-white animate-fade-in-up">
        <h5 className="text-xs tracking-widest uppercase text-green-600 mb-3">
          Smart Real Estate
        </h5>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-green-700 via-green-600 to-green-400 bg-clip-text text-transparent">
            Revolutionize
          </span>{" "}
          Your Property Sales with
          <br />
          <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            AI-Powered Campaigns
          </span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Discover how AI helps real estate businesses convert more leads,
          reduce marketing waste, and drive measurable sales.
        </p>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 bg-green-50 text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 animate-fade-in-left">
            <h2 className="text-4xl font-bold">
              Capture More Leads with
              <span className="text-green-600">
                {" "}
                Predictive Buyer Targeting
              </span>
            </h2>
            <p className="text-gray-600">
              Use intelligent data to focus on serious buyers. Our AI identifies
              high-intent property seekers, helping you close faster and
              smarter.
            </p>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in-right">
            <FaMapMarkedAlt className="text-green-600 text-[200px] md:text-[250px]" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-tr from-green-100 to-green-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            "300% Qualified Leads",
            "220% Engagement Rate",
            "70% Sales Boost",
          ].map((stat, idx) => (
            <div key={idx} className="animate-zoom-in">
              <p className="text-5xl font-bold text-green-600">
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
          Services for Real Estate Pros
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaFacebookF />, name: "Social Media Ads" },
            { icon: <FaSearch />, name: "SEO for Property Listings" },
            { icon: <FaGoogle />, name: "Google Ads Campaigns" },
            { icon: <FaInstagram />, name: "Instagram Property Reels" },
            { icon: <FaStar />, name: "Reputation Management" },
            { icon: <FaEnvelope />, name: "Lead Nurture Emails" },
            { icon: <FaWhatsapp />, name: "WhatsApp Engagement" },
            { icon: <FaVideo />, name: "Video Walkthrough Campaigns" },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-green-50 text-green-900 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 animate-fade-in-up"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <p className="font-semibold text-sm">{service.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-20 px-6 bg-green-100 text-black text-center">
        <h2 className="text-3xl font-bold mb-8">
          Trusted by Real Estate Developers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["UrbanNest Homes", "Skyline Builders", "Horizon Realty"].map(
            (brand, idx) => (
              <div
                key={idx}
                className="bg-white text-green-800 p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 animate-fade-in"
              >
                <h3 className="text-xl font-semibold mb-2">{brand}</h3>
                <p className="text-sm">
                  {idx === 0 && "Modern living redefined."}
                  {idx === 1 && "Building high-rise trust."}
                  {idx === 2 && "Where vision meets value."}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Turn Inquiries into Property Closings
          </h2>
          <Link href="/contact">
            <button className="flex items-center gap-2 border border-white rounded-full px-6 py-3 text-white hover:bg-white hover:text-green-600 transition font-semibold">
              <span className="text-xl">→</span> Contact Our Experts
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
