"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, BarChart2, Smile } from "lucide-react";

const features = [
  {
    title: "Innovative Strategies",
    description:
      "Our Unique Approach: We break boundaries through innovative marketing strategies tailored to your brand’s voice and goals. We don’t just follow trends — we create them to generate real, trackable business results.",
    icon: Lightbulb,
  },
  {
    title: "Expert Team",
    description:
      "Our Digital Wizards: A passionate team of SEO experts, content creators, designers, and growth marketers collaborating with a single goal — to make your brand digitally unforgettable and performance-driven.",
    icon: Users,
  },
  {
    title: "Data-Driven Insights",
    description:
      "Numbers that Speak: We believe in measurable impact. From audience behavior to conversion rates, every campaign is backed by real-time data, allowing us to refine and scale what works — faster.",
    icon: BarChart2,
  },
  {
    title: "Customer-Centric",
    description:
      "Your Success Is Our Focus: We listen, adapt, and strategize around your business needs. Our campaigns are personalized to speak directly to your audience and convert interest into action and loyalty.",
    icon: Smile,
  },
];

export default function WeDiffer() {
  return (
    <div className="bg-white text-indigo-900 py-20 px-6">
      <div className="text-center max-w-5xl mx-auto mb-16">
        <p className="text-blue-500 uppercase text-sm font-semibold mb-2 tracking-wide">
          Why we differ
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Makes Us the Best Digital Marketing Company in Hyderabad
        </h2>
        <p className="text-indigo-700 text-base md:text-lg leading-relaxed">
          In today’s digital jungle, it’s not enough to be heard — you need to
          be remembered. At{" "}
          <strong className="text-blue-700">D4 Interactive</strong>, our digital
          strategies are designed to rise above the noise. We build digital
          presence that’s louder, smarter, and rooted in what drives your
          customers to act.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-blue-50 hover:bg-blue-100 rounded-2xl p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-blue-200/50 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
              <feature.icon className="w-10 h-10 text-blue-700" />
            </div>
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-indigo-800 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
