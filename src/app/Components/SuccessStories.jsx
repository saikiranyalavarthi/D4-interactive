"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const successData = [
  {
    title: "E-commerce Fashion Store",
    industry: "Fashion & Lifestyle",
    services: ["SEO", "Google Ads", "Social Media"],
    duration: "6 months",
    challenge:
      "Low online visibility, poor website performance, minimal social presence",
    solution:
      "Complete digital transformation with mobile-first website, comprehensive SEO strategy, and data-driven advertising campaigns",
    results: [
      "+320% Organic Traffic",
      "+280% Revenue Growth",
      "+45% Conversion Rate",
      "+150K Social Followers",
    ],
  },
  {
    title: "Healthcare Clinic Chain",
    industry: "Healthcare",
    services: ["Local SEO", "Content Marketing", "PPC"],
    duration: "8 months",
    challenge: "Limited local visibility, low patient trust, high competition",
    solution:
      "Local SEO optimization, medical content creation, patient testimonial campaigns, and geo-targeted advertising",
    results: [
      "+400% Local Searches",
      "+250% Appointment Bookings",
      "+180% Brand Awareness",
      "-60% Cost per Lead",
    ],
  },
  {
    title: "Tech Startup SaaS Platform",
    industry: "Technology",
    services: ["Content Marketing", "LinkedIn Ads", "SEO"],
    duration: "12 months",
    challenge:
      "New market entry, complex product explanation, competitive landscape",
    solution:
      "Thought leadership content, product demonstration videos, LinkedIn advertising, and technical SEO optimization",
    results: [
      "+500% Lead Generation",
      "+350% Demo Requests",
      "Top 3 Organic Rankings",
      "+420% Marketing ROI",
    ],
  },
  {
    title: "Travel & Tourism Agency",
    industry: "Travel & Leisure",
    services: ["Social Media", "SEO", "Visual Ads"],
    duration: "7 months",
    challenge:
      "Low booking rates, inconsistent brand voice, limited reach beyond local audience",
    solution:
      "Built an adventure-focused brand, optimized blog content for SEO, and launched visual-first social ads on Instagram & Facebook",
    results: [
      "+500% Website Visitors",
      "+320% Booking Conversions",
      "+180% Instagram Reach",
      "+75% Email Subscribers",
    ],
  },
];

export default function SuccessStories() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Our Success Stories
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real Results from Real Businesses. Here's how we've helped companies
          across India achieve extraordinary digital growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {successData.map((story, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl border border-transparent bg-white shadow-lg hover:scale-[1.02] transition-transform duration-300 relative group"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl " />

            <h3 className="text-2xl font-bold text-blue-700 mb-2">
              {story.title}
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              <strong>Industry:</strong> {story.industry}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <strong>Services:</strong> {story.services.join(", ")}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Duration:</strong> {story.duration}
            </p>

            <p className="text-gray-700 mb-2">
              <strong>Challenge:</strong> {story.challenge}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Solution:</strong> {story.solution}
            </p>

            <ul className="grid grid-cols-2 gap-2 mb-4">
              {story.results.map((point, i) => (
                <li
                  key={i}
                  className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full text-center"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
