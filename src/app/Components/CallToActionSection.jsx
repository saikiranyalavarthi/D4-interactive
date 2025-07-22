"use client";
import Link from "next/link";
import React from "react";

export default function CallToActionSection() {
  return (
    <section className="bg-[#062a6e] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Redefine Your Online Presence
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            Experience next-level digital marketing and transformation services
            to unleash your online potential.
          </p>

          <Link href="/contact">
            <button className="bg-transparent border border-white text-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-[#062a6e] transition">
              Book A Call
            </button>
          </Link>
        </div>

        {/* Right Stats */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          <StatCircle value="2,200+" label="Projects Launched" />
          <StatCircle value="10+" label="Years Experience" />
          <StatCircle value="1500+" label="Satisfied Customers" />
        </div>
      </div>
    </section>
  );
}

function StatCircle({ value, label }) {
  return (
    <div className="relative w-44 h-44 rounded-full p-[2px] animate-pulse bg-gradient-to-tr from-pink-500 via-indigo-500 to-blue-500">
      <div className="w-full h-full rounded-full flex flex-col items-center justify-center text-center bg-[#062a6e]">
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        <p className="text-sm text-gray-300">{label}</p>
      </div>
    </div>
  );
}
