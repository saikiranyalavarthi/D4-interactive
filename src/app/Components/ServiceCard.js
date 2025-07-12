"use client";
import { motion } from "framer-motion";
import {
  Rocket,
  PieChart,
  Megaphone,
  MapPin,
  Lightbulb,
  Target,
  BarChart2,
  Users,
  Filter,
  Search,
  Link as LinkIcon,
  Monitor,
  Mail,
  PenTool,
  Settings,
} from "lucide-react";

const iconsMap = {
  "SEO Ranking": Rocket,
  PPC: PieChart,
  "Social Media": Megaphone,
  "Local SEO": MapPin,
  "Smart Ads": Lightbulb,
  Retargeting: Target,
  "Technical SEO": BarChart2,
  "Lead generation": Users,
  Funneling: Filter,
  "Search Marketing": Search,
  "Link Building": LinkIcon,
  Branding: Monitor,
  "Email Marketing": Mail,
  "Graphic Designing": PenTool,
  "Marketing & sales automation": Settings,
};

export default function ServiceCard({ title }) {
  const Icon = iconsMap[title];
  if (!Icon) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-xl w-28 h-28 flex flex-col items-center justify-center 
                 bg-gradient-to-br from-black via-[#AA2428] to-black text-white 
                 shadow-lg p-3"
    >
      <Icon size={30} className="mb-2 text-white" />
      <p className="text-center text-sm font-semibold text-white">{title}</p>
    </motion.div>
  );
}
