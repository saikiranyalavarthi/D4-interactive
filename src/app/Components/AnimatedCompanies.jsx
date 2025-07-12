"use client";

import { motion } from "framer-motion";

// 🏷️ Company names by category
const companies = [
  "Suvira Facilities Pvt Ltd",
  "manaenadu",
  "Digo IT Solutions",
  "Mallela Telugu Tejam",
  "Rozogar",
  "Bharat sanchar",
  "feble Decor",
  "coworking space",
  "3 estate",
  "vet and meet",
  "arya nuero care hospital",
  "fortunate Properties",
  "D4 Interactive",
];

// 🎨 Assign category background colors
const getColorByCategory = (name) => {
  name = name.toLowerCase();
  if (name.includes("hospital") || name.includes("care"))
    return "bg-red-500/20";
  if (name.includes("estate") || name.includes("properties"))
    return "bg-yellow-500/20";
  if (name.includes("pet") || name.includes("vet")) return "bg-green-500/20";
  if (name.includes("mana") || name.includes("tej")) return "bg-indigo-500/20";
  if (
    name.includes("it") ||
    name.includes("tech") ||
    name.includes("interactive")
  )
    return "bg-blue-500/20";
  if (name.includes("cowork")) return "bg-purple-500/20";
  return "bg-white/10"; // Default style
};

export default function AnimatedCompanies() {
  const repeatedCompanies = [...companies, ...companies, ...companies]; // Repeat for smooth infinite scroll

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
          {repeatedCompanies.map((company, index) => (
            <div
              key={index}
              className={`min-w-max text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-xl shadow backdrop-blur-md ${getColorByCategory(
                company
              )} hover:bg-white/20 transition-all whitespace-nowrap`}
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
