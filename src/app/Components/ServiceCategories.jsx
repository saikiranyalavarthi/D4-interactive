"use client";

import {
  Code2,
  Globe,
  Briefcase,
  MonitorSmartphone,
  Search,
  Megaphone,
  Network,
} from "lucide-react";

const categories = [
  { name: "Technology", icon: Code2 },
  { name: "Marketing", icon: Megaphone },
  { name: "Design", icon: MonitorSmartphone },
  { name: "Business", icon: Briefcase },
  { name: "Web Design", icon: Globe },
  { name: "App Development", icon: MonitorSmartphone },
  { name: "Content Creation", icon: Globe },
  { name: "SEO", icon: Search },
  { name: "Web Development", icon: Globe },
  { name: "Social Media", icon: Network },
];

export default function ServiceCategories() {
  return (
    <div className="py-16 px-6 bg-white text-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-indigo-600">
        Explore Our{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent">
          Service Categories
        </span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="w-36 h-36 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center
              bg-gradient-to-br from-blue-900 via-purple-700 to-indigo-900 border border-white/10
              transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
          >
            <cat.icon className="w-10 h-10 text-white mb-4 group-hover:text-gray-300 transition-colors" />
            <h3 className="text-base font-semibold text-center text-white group-hover:text-gray-100">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
