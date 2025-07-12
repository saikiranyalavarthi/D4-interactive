"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import AnimatedServices from "./Components/AnimatedServices";
import ServicesSection from "./Components/ServicesSection";
import ExperienceSection from "./Components/ExperienceSection";
import ServiceCategories from "./Components/ServiceCategories";
import WeDiffer from "./Components/WeDiffer";
import StatsSection from "./Components/StatsSection";
import ScrollingText from "./Components/ScrollingText";

export default function Home() {
  const services = [
    {
      title: "Digital Marketing",
      textClass: "text-indigo-700",
      shadowClass: "hover:shadow-indigo-300",
      img: "/assets/image1.jpg",
      desc: "Boost your visibility with SEO, Google Ads, and social media strategies to reach the right audience.",
    },
    {
      title: "App Development",
      textClass: "text-purple-700",
      shadowClass: "hover:shadow-purple-300",
      img: "/assets/image2.jpg",
      desc: "We build fast, secure iOS and Android apps using modern technologies.",
    },
    {
      title: "Website Development",
      textClass: "text-blue-700",
      shadowClass: "hover:shadow-blue-300",
      img: "/assets/image3.jpg",
      desc: "SEO-optimized websites built with Next.js and Tailwind CSS for speed and UX.",
    },
    {
      title: "WordPress Development",
      textClass: "text-indigo-700",
      shadowClass: "hover:shadow-indigo-300",
      img: "/assets/image4.jpg",
      desc: "Custom themes and plugins for powerful, manageable WordPress websites.",
    },
  ];

  const projects = [
    {
      title: "Vet & Meet Pet Consultation App",
      image: "/assets/image6.jpg",
      description:
        "A modern pet consultation app where pet owners can book online vet consultations via WhatsApp, integrated with a booking calendar and payment gateway.",
    },
    {
      title: "Pet Shop Ecommerce Website",
      image: "/assets/image7.jpg",
      description:
        "A fast-loading eCommerce site for pet food, accessories, and medicine using WooCommerce and custom WordPress themes.",
    },
    {
      title: "News Website",
      image: "/assets/image10.jpg",
      description:
        "A dynamic Telugu-language news website built with ReactJS and WordPress REST API, featuring category navigation, sliders, and ticker components.",
    },
    {
      title: "IT Solutions Company Site",
      image: "/assets/image8.jpg",
      description:
        "A sleek website for a tech company showcasing IT Infrastructure, SAP Services, Staffing, and Immigration Solutions using Next.js and Tailwind CSS.",
    },
    {
      title: "Coworking Space Booking App",
      image: "/assets/image9.jpg",
      description:
        "Mobile-first app and website for hourly/daily coworking space booking. Includes seat selection, map view, and testimonials.",
    },
    {
      title: "Portfolio Website",
      image: "/assets/image11.jpg",
      description:
        "A personal portfolio showcasing a developer's skills, past projects, blog, and contact information. Built with Next.js, Tailwind CSS, and Framer Motion animations.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-black via-[#AA2428] to-black text-white font-sans min-h-screen">
      <Head>
        <title>
          D4 Interactive | Digital Marketing & Web Development Company India
        </title>
        <meta
          name="description"
          content="D4 Interactive offers expert digital marketing, app & web development, and WordPress solutions. Grow your business online with a trusted technology partner."
        />
        <meta
          name="keywords"
          content="Digital Marketing, SEO, Web Development, App Development, WordPress Development, India, D4 Interactive"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://d4interactive.com/" />
        <meta
          property="og:title"
          content="D4 Interactive | Digital Growth Partner"
        />
        <meta
          property="og:description"
          content="We provide high-quality digital marketing and web solutions including SEO, app development, and website design."
        />
        <meta property="og:image" content="/assets/image1.jpg" />
        <meta property="og:url" content="https://d4interactive.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section (Dark) */}
      <header className="py-20 px-6 md:px-20 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-pulse">
              Your Partner in Digital Success
            </h1>
            <p className="text-xl sm:text-2xl mb-6 max-w-xl">
              Grow your business with our expert digital marketing, web and app
              development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/contact"
                className="bg-red-700 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition"
              >
                Contact Us
              </a>
              <a
                href="/services/D4Interactive"
                className="bg-red-700 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/assets/side1.jpg"
              alt="Image 1"
              width={500}
              height={400}
              className="rounded-xl w-full shadow-lg relative z-10"
            />
            <Image
              src="/assets/side2.jpg"
              alt="Image 2"
              width={500}
              height={400}
              className="rounded-xl w-4/5 absolute top-10 left-10 z-0 opacity-80 shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Light Section: Services */}
      <section className="py-16 px-6 md:px-20bg-gradient-to-r from-black via-[#AA2428] to-black text-white ">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className={`bg-gradient-to-r from-black via-[#AA2428] to-black text-white rounded-2xl shadow-lg ${item.shadowClass} transition-shadow duration-300 p-4 text-center`}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3
                className={`text-xl text-blue-900 font-semibold ${item.textClass} mb-2`}
              >
                {item.title}
              </h3>
              <p className="text-white text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceCategories />
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 items-center gap-12bg-gradient-to-r from-black via-[#AA2428] to-black text-white ">
        <div>
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">About</h2>
          <p className="text-white mb-4">
            D4 Interactive is a leading digital agency passionate about helping
            businesses thrive online. We provide top-tier services in digital
            marketing, web development, app development, and WordPress
            solutions.
          </p>
          <p className="text-white">
            Founded with a mission to deliver result-oriented strategies, we
            blend creativity and technology to drive measurable results and
            customer satisfaction. Our team is dedicated to building long-term
            client relationships based on trust and performance.
          </p>
        </div>
        <Image
          src="/assets/image5.jpg"
          alt="About D4 Interactive"
          width={600}
          height={700}
          className="rounded-2xl shadow-lg"
        />
      </section>

      <main>
        <ExperienceSection />
      </main>

      {/* Projects Section */}
      <section className="py-20 px-6 md:px-20bg-gradient-to-r from-black via-[#AA2428] to-black text-white text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          Our Work & Projects
        </h1>
        <p className="text-white max-w-3xl mx-auto">
          We craft digital experiences across industries...
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 pb-20 bg-gradient-to-r from-black via-[#AA2428] to-black text-white">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-black via-[#AA2428] to-black text-white p-6 rounded-xl shadow-md"
          >
            <Image
              src={proj.image}
              alt={proj.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">
              {proj.title}
            </h3>
            <p className="text-white text-sm">{proj.description}</p>
          </div>
        ))}
      </section>

      <WeDiffer />
      <StatsSection />
      <AnimatedServices />
      <ServicesSection />
      <ScrollingText />

      {/* Contact CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-black via-[#AA2428] to-black text-white  text-center">
        <h2 className="text-3xl font-semibold text-red-600 mb-6">
          Get in Touch
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-8">
          Let’s connect and build something amazing together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
