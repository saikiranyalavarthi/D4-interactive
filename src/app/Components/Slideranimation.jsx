"use client";

import React from "react";
import Link from "next/link";

export default function Slideranimation() {
  return (
    <section className="relative w-full">
      {/* Wrapper with gradient border */}
      <div className="relative w-full overflow-hidden rounded-none md:rounded-3xl shadow-xl border-4 border-transparent bg-white bg-clip-padding">
        {/* Gradient Border Effect */}
        <div className="absolute -inset-1 z-0 rounded-none md:rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 blur-sm opacity-70 pointer-events-none" />

        {/* Gradient Background + Text */}
        <div className="relative z-10 w-full h-[300px] md:h-[500px] bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 flex flex-col items-center justify-center text-center px-4 rounded-none md:rounded-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 text-transparent bg-clip-text drop-shadow-lg">
            D4 Interactive Digital Marketing Agency
          </h1>
          <p className="mt-3 text-sm md:text-lg text-white/90 max-w-xl drop-shadow">
            Boost your business with powerful digital strategies tailored for
            growth.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md px-6 py-2 text-white font-semibold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 border border-transparent hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
