"use client";

import { useState } from "react";

export default function Youtubevideo() {
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
    alert("Form submitted: " + JSON.stringify(formData));
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white p-6 md:p-12 rounded-2xl shadow-xl">
        {/* Left: YouTube Video */}
        <div className="w-full aspect-video">
          <iframe
            className="rounded-xl w-full h-full"
            src="https://www.youtube.com/embed/HW_du_1NqAk"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="grid gap-6">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-2">
            Get in Touch
          </h2>

          <div>
            <label className="block mb-1 font-medium text-indigo-800">
              Your Name
            </label>
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
            <label className="block mb-1 font-medium text-indigo-800">
              Email
            </label>
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
            <label className="block mb-1 font-medium text-indigo-800">
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

          <div></div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Send via WhatsApp Message
          </button>
        </form>
      </div>
    </section>
  );
}
