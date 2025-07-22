"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    image: "/assets/image14.jpg",
    stats: "✓ Average 300% increase in organic traffic within 6 months",
    description:
      "Stop being invisible online. Our proven SEO strategies get your business found by customers actively searching for your services. We've helped 150+ businesses increase their organic traffic by an average of 300% within 6 months.",
    points: [
      "Complete keyword research & competitor analysis",
      "On-page optimization that Google loves",
      "Local SEO to dominate your area",
      "High-quality content that converts visitors",
    ],
    link: "/services/SEOPage",
  },
  {
    title: "Google Business Profile Optimization",
    image: "/assets/image25.png",
    stats: "✓ Average 400% increase in local search visibility",
    description:
      "Dominate local search results and get found by nearby customers. We optimize your Google Business Profile to appear when customers search for businesses like yours.",
    points: [
      "Complete Google Business Profile setup & optimization",
      "Professional business photos & virtual tours",
      "Review management & reputation building",
      "Local SEO integration for maximum visibility",
    ],
    link: "/services/D4Interactive",
  },
  {
    title: "Google Ads & Pay-Per-Click (PPC)",
    image: "/assets/image13.jpg",
    stats: "✓ Average 400% return on ad spend across all clients",
    description:
      "Get customers today, not in 6 months. Our Google Ads experts create campaigns that bring qualified leads straight to your door. We manage over $2M in annual ad spend with an average ROI of 400%.",
    points: [
      "Professional Google Ads setup & management",
      "Facebook & Instagram advertising",
      "Compelling ad copy that converts",
      "Advanced conversion tracking & optimization",
    ],
    link: "/services/ppc",
  },
  {
    title: "Social Media Marketing",
    image: "/assets/image15.jpg",
    stats: "✓ Average 250% increase in social engagement & followers",
    description:
      "Turn social media into a customer magnet. We help businesses build authentic relationships with their audience, creating content that engages and converts.",
    points: [
      "Custom content creation for all platforms",
      "Community management & customer engagement",
      "Strategic social media planning",
      "Influencer partnerships & collaborations",
    ],
    link: "/services/social-media",
  },
  {
    title: "Content Marketing That Converts",
    image: "/assets/image27.jpg",
    stats: "✓ Over 50M content views generated for clients",
    description:
      "Content that actually sells. Our content marketing strategies position you as the go-to expert in your industry while driving real business results.",
    points: [
      "Professional blog writing & SEO articles",
      "Engaging video content production",
      "Email marketing campaigns that convert",
      "Brand storytelling that resonates",
    ],
    link: "/services/D4Interactive",
  },
  {
    title: "Analytics & Performance Tracking",
    image: "/assets/image28.jpg",
    stats: "✓ Clear, actionable insights delivered monthly",
    description:
      "Know exactly what's working and what's wasting your money. Our detailed reporting shows real business impact, not vanity metrics.",
    points: [
      "Comprehensive performance tracking",
      "ROI analysis for every marketing dollar",
      "Easy-to-understand monthly reports",
      "Data-driven optimization recommendations",
    ],
    link: "/services/D4Interactive",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function MarketingServices() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={sectionVariants}
      className="py-16 px-4 md:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Digital Marketing Services That Actually Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white relative p-[2px] rounded-2xl overflow-hidden group transition-transform duration-300 shadow-lg min-h-full"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-20 group-hover:opacity-50"></div>

            {/* Card Content */}
            <div className="relative z-10 bg-white rounded-2xl flex flex-col h-full">
              <div className="relative w-full h-48 sm:h-56 md:h-52">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-3">{service.description}</p>
                  <p className="text-green-600 font-medium mb-3">
                    {service.stats}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={service.link}
                  className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
