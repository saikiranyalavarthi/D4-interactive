"use client";
import ServiceCard from "./ServiceCard";

const services = [
  "SEO Ranking",
  "PPC",
  "Social Media",
  "Local SEO",
  "Smart Ads",
  "Retargeting",
  "Technical SEO",
  "Lead generation",
  "Funneling",
  "Search Marketing",
  "Link Building",
  "Branding",
  "Email Marketing",
  "Graphic Designing",
  "Marketing & sales automation",
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-black via-[#AA2428] to-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent">
          Digital Marketing Services
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
        {services.map((title, index) => (
          <ServiceCard key={index} title={title} index={index} />
        ))}
      </div>
    </section>
  );
}
