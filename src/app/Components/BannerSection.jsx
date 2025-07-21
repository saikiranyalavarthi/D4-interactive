"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BannerSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 overflow-hidden">
      {/* Left - Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2"
      >
        <Image
          src="/assets/hero1.png"
          alt="SEO and Digital Marketing Illustration"
          width={600}
          height={400}
          className="rounded-xl drop-shadow-xl mx-auto"
          priority
        />
      </motion.div>

      {/* Right - Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-1/2"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Best Digital Marketing Agency in Hyderabad 🚀
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          <strong>D4 Interactive</strong> helps you grow with SEO, Google Ads,
          and Social Media Marketing. Our Hyderabad-based team focuses on ROI,
          conversions, and audience targeting with performance-driven
          strategies.
        </p>
        <p className="text-md text-gray-600 mb-6">
          We turn website visitors into loyal customers using keyword
          optimization, PPC, link building, and smart analytics to grow your
          online presence.
        </p>

        {/* Services Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {[
            "SEO",
            "GOOGLE ADS",
            "CONVERSION",
            "ECOMMERCE",
            "ANALYTICS",
            "LINK BUILDING",
            "SOCIAL MEDIA",
            "STRATEGY",
          ].map((item, i) => (
            <span
              key={i}
              className="px-4 py-1 border border-purple-600 rounded-full text-purple-700 text-sm font-medium hover:bg-purple-50 transition"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
