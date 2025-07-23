"use client";
import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 text-white py-20 px-6 md:px-24 min-h-screen flex flex-col justify-center items-center text-center">
      {/* Location Tag */}
      <div className="mb-6">
        <span className="inline-block border border-white/20 rounded-full px-4 py-1 text-sm bg-white/10 backdrop-blur-md text-white/80">
          Based in Digital Marketing Agency in{" "}
          <span className="text-blue-300 font-semibold">Hyderabad</span>.
          Perform{" "}
          <span className="text-purple-300 font-semibold">Globally</span>
        </span>
      </div>

      {/* Headings */}
      <h1 className="text-4xl md:text-8xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-red-600 via-red-300 to-white">
        D4 INTERACTIVE
      </h1>

      <h1 className="text-4xl md:text-8xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-pink-400 via-yellow-300 via-blue-300 to-blue-800">
        BUILDING WEBSITES
      </h1>
      <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-[linear-gradient(to_right,#ff8008,#ffc837)]">
        GENERATING LEADS!
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-4xl text-base md:text-lg text-white/90 leading-relaxed">
        We’re a creative team that turns ideas into eye-catching designs. From
        websites to logos, we create solutions that look great and deliver
        results for all kinds of businesses. As a top digital marketing agency,
        we design strategies that help brands thrive in the digital world.
        Whether you’re searching for a digital marketing agency website or a
        trusted digital marketing company, we have the expertise to make it
        happen. Join us, and let’s create something that’ll make people say{" "}
        <span className="text-blue-200 font-semibold">“Wow!”</span>
      </p>

      {/* Dual CTA Button with Animations */}
      <div className="mt-12 relative flex items-stretch justify-center w-full max-w-md rounded-full overflow-hidden shadow-xl mx-auto group">
        {/* Left Button */}
        <Link
          href="/contact"
          className="w-1/2 bg-white text-black font-semibold px-6 py-4 text-sm md:text-base text-center z-10 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-400 hover:to-yellow-400 hover:text-white hover:scale-105"
        >
          REQUEST A <br className="hidden sm:block" /> CALLBACK
        </Link>

        {/* Right Button */}
        <Link
          href="/contact"
          className="w-1/2 bg-[#ffb000] text-black font-semibold px-6 py-4 text-sm md:text-base text-center z-10 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-500 hover:text-white hover:scale-105"
        >
          SCHEDULE FREE <br className="hidden sm:block" /> CONSULTATION
        </Link>

        {/* OR Divider Circle */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#001d2f] text-white rounded-full flex items-center justify-center text-xs font-semibold border-4 border-white shadow-md z-20 group-hover:scale-110 transition-transform duration-300">
          OR
        </div>
      </div>
    </section>
  );
}
