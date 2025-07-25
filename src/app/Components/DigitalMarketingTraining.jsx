"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function DigitalMarketingTraining() {
  const modules = [
    "SEO (Search Engine Optimization)",
    "Google Ads (PPC)",
    "Social Media Marketing",
    "Email Marketing",
    "Content Marketing",
    "Affiliate Marketing",
    "Website Analytics",
    "Marketing Automation",
  ];

  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Digital Marketing Training Program
          </h1>
          <p className="text-lg">
            Learn in-demand digital marketing skills to boost your career or
            business. Practical, hands-on training from industry experts.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow hover:bg-gray-100 transition">
            Enroll Now
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Join Our Training?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              "100% Practical & Job-Oriented Training",
              "Industry-Recognized Certification",
              "Live Projects & Case Studies",
              "Experienced Trainers with 8+ Years of Expertise",
              "One-on-One Mentoring & Doubt Clearing",
              "Affordable Fees & Flexible Timings",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Training Modules</h2>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {modules.map((mod, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center gap-3"
              >
                <FaCheckCircle className="text-indigo-500" />
                <span>{mod}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Master Digital Marketing?
          </h2>
          <p className="mb-6 text-lg">
            Join our next batch and get hands-on experience with real tools and
            strategies.
          </p>
          <a
            href="https://wa.me/917675921117?text=I%20want%20to%20enroll%20in%20the%20Digital%20Marketing%20Training "
            className="inline-block bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact via WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
