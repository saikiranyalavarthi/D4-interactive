"use client";

import {
  FaMobileAlt,
  FaAndroid,
  FaApple,
  FaWordpress,
  FaShopify,
  FaSearch,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPencilAlt,
  FaMailBulk,
  FaBullhorn,
  FaGlobe,
  FaPalette,
} from "react-icons/fa";
import { MdWeb, MdDesignServices } from "react-icons/md";
import {
  SiFlutter,
  SiMagento,
  SiWix,
  SiJoomla,
  SiContentful,
  SiAdobeillustrator,
  SiGoogleads,
  SiMinutemailer,
} from "react-icons/si";

const services = [
  {
    icon: <FaApple className="text-white text-3xl" />,
    title: "iOS App Development",
    desc: "We create seamless, high-performance iOS applications.",
  },
  {
    icon: <FaAndroid className="text-white text-3xl" />,
    title: "Android App Development",
    desc: "Comprehensive Android app development services.",
  },
  {
    icon: <SiFlutter className="text-white text-3xl" />,
    title: "Flutter App Development",
    desc: "Cross-platform Flutter app development solutions.",
  },
  {
    icon: <FaWordpress className="text-white text-3xl" />,
    title: "WordPress Design",
    desc: "Top-tier WordPress website design services.",
  },
  {
    icon: <SiWix className="text-white text-3xl" />,
    title: "Wix Website Design",
    desc: "Professional Wix website design services.",
  },
  {
    icon: <FaShopify className="text-white text-3xl" />,
    title: "Shopify Website Design",
    desc: "Top-notch Shopify design and development.",
  },

  {
    icon: <MdWeb className="text-white text-3xl" />,
    title: "Business Website",
    desc: "Exceptional business website development services.",
  },
  {
    icon: <FaGlobe className="text-white text-3xl" />,
    title: "Web App Development",
    desc: "Modern web applications and CRM systems.",
  },
  {
    icon: <MdDesignServices className="text-white text-3xl" />,
    title: "Website Redesigning",
    desc: "Revamp your site with a fresh, modern look.",
  },
  {
    icon: <SiContentful className="text-white text-3xl" />,
    title: "CMS Development",
    desc: "Manage and update your website with ease.",
  },
  {
    icon: <FaSearch className="text-white text-3xl" />,
    title: "SEO Services",
    desc: "Get found online with our expert SEO services.",
  },
  {
    icon: <FaInstagram className="text-white text-3xl" />,
    title: "Instagram Marketing",
    desc: "Professional Instagram growth and strategy.",
  },
  {
    icon: <FaFacebook className="text-white text-3xl" />,
    title: "Facebook Marketing",
    desc: "Reach new customers with Facebook campaigns.",
  },
  {
    icon: <FaLinkedin className="text-white text-3xl" />,
    title: "LinkedIn Marketing",
    desc: "B2B marketing through optimized LinkedIn campaigns.",
  },
  {
    icon: <FaYoutube className="text-white text-3xl" />,
    title: "YouTube Marketing",
    desc: "Engaging YouTube video marketing services.",
  },
  {
    icon: <SiGoogleads className="text-white text-3xl" />,
    title: "Google Ads",
    desc: "PPC and Google Ads that deliver ROI.",
  },
  {
    icon: <FaMailBulk className="text-white text-3xl" />,
    title: "Email Marketing",
    desc: "Automated, personalized email campaigns.",
  },
  {
    icon: <SiMinutemailer className="text-white text-3xl" />,
    title: "WhatsApp & SMS Marketing",
    desc: "Direct marketing via WhatsApp and SMS.",
  },
  {
    icon: <FaBullhorn className="text-white text-3xl" />,
    title: "Influencer & Affiliate",
    desc: "Promotions with influencers and affiliate programs.",
  },
  {
    icon: <FaPalette className="text-white text-3xl" />,
    title: "Creative Design",
    desc: "Logo, branding, packaging and digital designs.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-blue-400 via-white to-indigo-400 text-black">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white drop-shadow">
          What We Offer
        </h2>
        <p className="text-white/80 mt-2 max-w-xl mx-auto">
          Explore our wide range of development, marketing, creative and media
          services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-white"
          >
            <div className="flex justify-center items-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-white/80">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
