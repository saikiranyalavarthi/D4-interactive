"use client";

import { useEffect, useState } from "react";
import { Users, Briefcase, FolderCheck, Star } from "lucide-react";

const stats = [
  {
    title: "Years Experience",
    value: 5,
    icon: Briefcase,
    color: "from-purple-100 to-indigo-200",
  },
  {
    title: "Clients",
    value: 100,
    icon: Users,
    color: "from-blue-100 to-purple-200",
  },
  {
    title: "Projects Executed",
    value: 100,
    icon: FolderCheck,
    color: "from-green-100 to-blue-100",
  },
  {
    title: "Client Satisfaction",
    value: 100,
    icon: Star,
    suffix: "%",
    color: "from-yellow-100 to-red-100",
  },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => (count < stats[i].value ? count + 1 : count))
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white text-indigo-900">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Proven Digital Impact
        </h2>
        <p className="text-indigo-700 max-w-2xl mx-auto text-base md:text-lg">
          With a wealth of experience and a portfolio of satisfied clients,{" "}
          <strong className="text-blue-600">D4 Interactive</strong> consistently
          delivers top-tier digital solutions backed by measurable success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`rounded-xl p-6 text-center shadow-md bg-gradient-to-tr ${stat.color} transition-transform transform hover:scale-105`}
          >
            <div className="flex justify-center mb-4">
              <stat.icon className="w-10 h-10 text-indigo-800" />
            </div>
            <h3 className="text-4xl font-bold text-indigo-900">
              {counts[i]}
              {stat.suffix || "+"}
            </h3>
            <p className="text-indigo-800 mt-2 text-sm font-medium">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
