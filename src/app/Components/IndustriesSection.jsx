"use client";
import React from "react";
import {
  Briefcase,
  ShoppingBag,
  Home,
  Hospital,
  GraduationCap,
  Code2,
  Gavel,
} from "lucide-react";

const industries = [
  {
    icon: <ShoppingBag size={28} />,
    title: "eCommerce",
    description:
      "Drive traffic, reduce cart abandonment, and boost sales with product-focused campaigns.",
    color: "from-pink-500 via-red-400 to-yellow-300",
  },
  {
    icon: <Home size={28} />,
    title: "Real Estate",
    description:
      "Get high-quality leads with local SEO, targeted ads, and virtual property tours.",
    color: "from-purple-500 via-indigo-500 to-blue-400",
  },
  {
    icon: <Hospital size={28} />,
    title: "Healthcare",
    description:
      "Boost online visibility and book appointments while staying compliant.",
    color: "from-green-400 via-teal-400 to-blue-300",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Education",
    description:
      "Increase enrollment and build trust through multichannel outreach.",
    color: "from-yellow-400 via-orange-400 to-pink-500",
  },
  {
    icon: <Code2 size={28} />,
    title: "SaaS & Tech",
    description:
      "Launch products, capture leads, and nurture users with data-backed strategies.",
    color: "from-blue-500 via-sky-400 to-cyan-300",
  },
  {
    icon: <Gavel size={28} />,
    title: "Legal & Consulting",
    description:
      "Establish authority and capture leads through SEO and content strategy.",
    color: "from-rose-500 via-pink-400 to-purple-400",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          We provide tailored digital marketing solutions for every industry —
          helping you grow, connect, and convert better than ever.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-tr ${item.color} text-white rounded-2xl p-6 shadow-lg transition-transform hover:scale-105`}
            >
              <div className="flex justify-center items-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-sm opacity-90 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
