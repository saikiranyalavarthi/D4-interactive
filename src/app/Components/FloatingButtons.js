"use client";
import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-3 z-50">
      {/* Call Button */}
      <a
        href="tel:+917675921117" // 🔁 Replace with your phone number
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        aria-label="Call us"
      >
        <FaPhone size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917675921117?text=Hello%2C%20I%20am%20interested%20in%20your%20services" // 🔁 Replace number & message
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
