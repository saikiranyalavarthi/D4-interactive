"use client";

import React from "react";
import {
  FaHandshake,
  FaSearch,
  FaDesktop,
  FaFileAlt,
  FaUserTie,
  FaRegHandshake,
} from "react-icons/fa";

const steps = [
  {
    step: "Step 01",
    title: "Make Contact & Build Rapport",
    icon: <FaHandshake size={40} />,
  },
  {
    step: "Step 02",
    title: "Analyse prospect's needs",
    icon: <FaSearch size={40} />,
  },
  {
    step: "Step 03",
    title: "Pitch Your Product",
    icon: <FaDesktop size={40} />,
  },
  {
    step: "Step 04",
    title: "Get proposal",
    icon: <FaFileAlt size={40} />,
  },
  {
    step: "Step 05",
    title: "Make a Contract work with the client",
    icon: <FaUserTie size={40} />,
  },
  {
    step: "Step 06",
    title: "Close The Sale",
    icon: <FaRegHandshake size={40} />,
  },
];

export default function SalesProcess() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h3 className="text-pink-600 text-sm uppercase mb-2 tracking-wide">
        How We Work
      </h3>
      <h2 className="text-4xl font-bold text-gray-900 mb-12">
        Our Client Process
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative group bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-6 rounded-3xl shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-gradient"
          >
            {/* Gradient badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-white text-indigo-600 font-semibold px-4 py-1 rounded-full text-sm shadow transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500 group-hover:text-white">
                {step.step}
              </span>
            </div>

            {/* Icon wrapper */}
            <div className="bg-white text-indigo-600 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4 shadow-md transition-colors duration-300 group-hover:text-purple-700">
              {step.icon}
            </div>

            {/* Title */}
            <h4 className="text-lg font-semibold mt-2">{step.title}</h4>

            {/* Arrow to next step */}
            {index < steps.length - 1 && (
              <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 hidden md:block">
                <span className="text-indigo-200 text-3xl group-hover:text-white transition-colors duration-300">
                  →
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
