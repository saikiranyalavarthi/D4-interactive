"use client";
import { useState } from "react";

export default function HeroWithContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Website Development",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`, "_blank");
  };

  return (
    <header className="relative py-20 px-6 md:px-20 text-white overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700">
      <div className="absolute inset-0 backdrop-blur-sm opacity-60 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 z-0" />
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        {/* Left Text */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold animate-pulse">
            Your Partner in Digital Success
          </h1>
          <p className="text-xl sm:text-2xl max-w-2xl text-indigo-100 mx-auto lg:mx-0">
            Grow your business with our expert digital marketing, web, and app
            development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/contact"
              className="bg-white text-blue-700 hover:bg-indigo-100 px-6 py-3 rounded-lg text-lg transition"
            >
              Contact Us
            </a>
            <a
              href="/services/D4Interactive"
              className="bg-white text-blue-700 hover:bg-indigo-100 px-6 py-3 rounded-lg text-lg font-semibold transition"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="flex-1 w-full max-w-lg bg-white bg-opacity-90 p-8 rounded-xl shadow-xl text-indigo-900 backdrop-blur-md">
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
                <option value="Website Development">Website Development</option>
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
    </header>
  );
}
