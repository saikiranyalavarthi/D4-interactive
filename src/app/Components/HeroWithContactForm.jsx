"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Website Development",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle WhatsApp or backend logic here
    alert("Form submitted successfully!");
    setShowModal(false);
  };

  return (
    <>
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
        <h1 className="text-4xl md:text-8xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-300 via-blue-300 to-white">
          D4 INTERACTIVE
        </h1>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-white">
          AI Digital Marketing Solutions
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-[linear-gradient(to_right,#ff8008,#ffc837)]">
          Automate Your Digital Success
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-4xl text-base md:text-lg text-white/90 leading-relaxed">
          We’re a creative team that turns ideas into eye-catching designs. From
          websites to logos, we create solutions that look great and deliver
          results for all kinds of businesses...
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 relative flex items-stretch justify-center w-full max-w-md rounded-full overflow-hidden shadow-xl mx-auto group">
          {/* Request Callback Button */}
          <button
            onClick={() => setShowModal(true)}
            className="w-1/2 bg-white text-black font-semibold px-6 py-4 text-sm md:text-base text-center z-10 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-400 hover:to-yellow-400 hover:text-white hover:scale-105"
          >
            REQUEST A <br className="hidden sm:block" /> CALLBACK
          </button>

          {/* Free Consultation Button */}
          <Link
            href="/contact"
            className="w-1/2 bg-[#ffb000] text-black font-semibold px-6 py-4 text-sm md:text-base text-center z-10 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-500 hover:text-white hover:scale-105"
          >
            SCHEDULE FREE <br className="hidden sm:block" /> CONSULTATION
          </Link>

          {/* OR */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#001d2f] text-white rounded-full flex items-center justify-center text-xs font-semibold border-4 border-white shadow-md z-20 group-hover:scale-110 transition-transform duration-300">
            OR
          </div>
        </div>
      </section>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl text-indigo-900 max-w-lg w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>

            <form onSubmit={handleSubmit} className="grid gap-6">
              <h2 className="text-2xl font-bold text-center text-indigo-800 mb-2">
                Get in Touch
              </h2>

              <div>
                <label className="block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-indigo-300 bg-white text-indigo-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-indigo-300 bg-white text-indigo-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  What Service Do You Need?
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-indigo-300 bg-white text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="Website Development">
                    Website Development
                  </option>
                  <option value="App Development">App Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="WordPress Development">
                    WordPress Development
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 rounded border border-indigo-300 bg-white text-indigo-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition font-semibold"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
