"use client";

import Link from "next/link";
import Head from "next/head";
import {
  FaBook,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaEnvelope,
  FaWhatsapp,
  FaVideo,
  FaFacebookF,
  FaInstagram,
  FaGraduationCap,
  FaSearch,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";

export default function EducationMarketing() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <Head>
        <title>
          AI-Driven Growth for Educational Institutions | D4 interactive Digital
        </title>
        <meta
          name="description"
          content="Enhance your education brand with AI-powered marketing strategies. Increase enrollments, engagement, and institutional reputation."
        />
        <meta
          name="keywords"
          content="education marketing, AI for education, student engagement, digital strategy for schools, D4 interactive Digital"
        />
      </Head>

      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-tr from-blue-100 via-blue-200 to-white animate-fade-in-up">
        <h5 className="text-xs tracking-widest uppercase text-blue-500 mb-3">
          Smarter Learning
        </h5>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
            Empower
          </span>{" "}
          Your Institution with
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            AI-Driven Education Marketing
          </span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Connect smarter with students and parents. Boost enrollments, build
          trust, and showcase your institution’s excellence.
        </p>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 bg-blue-50 text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 animate-fade-in-left">
            <h2 className="text-4xl font-bold">
              Increase Admissions with
              <span className="text-blue-600"> Targeted Messaging</span>
            </h2>
            <p className="text-gray-600">
              Use AI to understand student preferences and academic interests.
              Launch personalized campaigns that drive engagement and
              enrollment.
            </p>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in-right">
            <FaGraduationCap className="text-blue-600 text-[200px] md:text-[250px]" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-tr from-blue-100 to-blue-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            "180% Inquiry Growth",
            "230% Engagement Rate",
            "95% Retention Increase",
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
          Solutions We Provide
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaFacebookF />, name: "Social Media Campaigns" },
            { icon: <FaSearch />, name: "SEO for Institutes" },
            { icon: <FaInstagram />, name: "Instagram Outreach" },
            { icon: <FaEnvelope />, name: "Email Campaigns" },
            { icon: <FaWhatsapp />, name: "WhatsApp Communication" },
            { icon: <FaVideo />, name: "Video-Based Promotions" },
            { icon: <FaLaptopCode />, name: "Landing Pages for Admissions" },
            { icon: <FaCertificate />, name: "Online Course Promotion" },
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
          Trusted by Leading Educational Brands
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["EduRise Academy", "NextGen School", "ScholarsHub"].map(
            (brand, idx) => (
              <div
                key={idx}
                className="bg-white text-blue-800 p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 animate-fade-in"
              >
                <h3 className="text-xl font-semibold mb-2">{brand}</h3>
                <p className="text-sm">
                  {idx === 0 &&
                    "Advanced learning with digital transformation."}
                  {idx === 1 && "Smart classrooms and targeted outreach."}
                  {idx === 2 && "Building student success online."}
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
              q: "How does AI help in education marketing?",
              a: "AI helps segment student audiences, deliver personalized content, and optimize communication across platforms.",
            },
            {
              q: "Can you help increase admissions?",
              a: "Absolutely. We use targeted digital campaigns and landing pages to drive more qualified student leads.",
            },
            {
              q: "What platforms do you support?",
              a: "We integrate with popular LMS, CRM, and CMS platforms used by schools and colleges.",
            },
            {
              q: "When can we see results?",
              a: "Most clients start seeing engagement within weeks and measurable growth in under 90 days.",
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
            Let’s Grow Your Educational Impact Today
          </h2>
          <Link href="/contact">
            <button className="flex items-center gap-2 border border-white rounded-full px-6 py-3 text-white hover:bg-white hover:text-blue-600 transition font-semibold">
              <span className="text-xl">→</span> Contact Our Experts
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
