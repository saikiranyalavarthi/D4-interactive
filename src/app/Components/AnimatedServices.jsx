"use client";
import { motion } from "framer-motion";

const services = [
  "Content Marketing",
  "Branding & Design",
  "Email Marketing",
  "Performance Tracking",
  "Search Engine Optimization (SEO)",
  "Pay-Per-Click Advertising",
  "Social Media Management",
  "Web Development",
  "Mobile App Development",
  "E-commerce Solutions",
  "UI/UX Design",
  "Cloud Solutions",
  "Custom Software Development",
];

export default function AnimatedServices() {
  const repeatedServices = [...services, ...services, ...services]; // for continuous scroll

  return (
    <section className="w-full overflow-hidden py-10 bg-gradient-to-br from-blue-900 via-purple-700 to-indigo-900">
      <div className="relative w-full">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 70,
            ease: "linear",
          }}
        >
          {repeatedServices.map((service, index) => (
            <div
              key={index}
              className="min-w-max text-white text-sm sm:text-base font-medium bg-white/10 backdrop-blur-md px-6 py-3 rounded-full shadow hover:bg-white/20 transition-all whitespace-nowrap"
            >
              {service}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
