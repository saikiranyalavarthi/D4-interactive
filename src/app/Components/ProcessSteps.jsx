"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Web Inspection",
    description:
      "Our Web Inspection Specialist to Generate Your Website's Rankings",
  },
  {
    number: "2",
    title: "Deep Optimization",
    description:
      "Enhance Your Website's Performance with Our Deep Optimization Strategies.",
  },
  {
    number: "3",
    title: "Analyze Growth",
    description:
      "We optimize strategies using data to maximize ROI and drive long-term growth.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-white px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 mb-4">
              {step.number}
            </span>
            <h3 className="text-lg md:text-xl font-semibold text-black mb-2">
              {step.title}
            </h3>
            <p className="text-gray-700 max-w-xs leading-relaxed">
              “{step.description}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
