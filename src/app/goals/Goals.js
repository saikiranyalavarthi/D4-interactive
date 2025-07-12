"use client";
import { TrendingUp, BarChart4, Hourglass, ShoppingBag } from "lucide-react";

export default function Goals() {
  const goals = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-white" />,
      title: "Turn your website into a high-converting sales tool",
      color: "bg-rose-500/80",
    },
    {
      icon: <Hourglass className="w-8 h-8 text-white" />,
      title: "Enhance and scale your marketing capabilities",
      color: "bg-teal-400/80",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Drive sustainable growth through quality leads",
      color: "bg-purple-500/80",
    },
    {
      icon: <BarChart4 className="w-8 h-8 text-white" />,
      title: "Achieve measurable ROI with proven strategies",
      color: "bg-sky-500/80",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-black via-[#AA2428] to-black text-white py-20 px-6 md:px-20 text-center relative">
      <h2 className="text-4xl font-bold mb-4">
        Our Goals at <span className="text-pink-400">D4 Interactive</span>
      </h2>
      <p className="text-gray-300 max-w-xl mx-auto mb-12">
        Your business results reflect your digital ambitions — we align strategy
        with success.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">
        {goals.map((goal, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full ${goal.color} shadow-xl backdrop-blur-md`}
            >
              {goal.icon}
            </div>
            <p className="text-sm text-gray-100 mt-4 max-w-[12rem]">
              {goal.title}
            </p>
          </div>
        ))}
      </div>

      {/* Optional SVG path placeholder */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {/* You can insert animated SVG path here */}
      </div>
    </section>
  );
}
