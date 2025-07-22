"use client";
import Script from "next/script";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedServices from "./Components/AnimatedServices";
import ServicesSection from "./Components/ServicesSection";
import ExperienceSection from "./Components/ExperienceSection";
import ServiceCategories from "./Components/ServiceCategories";
import WeDiffer from "./Components/WeDiffer";
import StatsSection from "./Components/StatsSection";
import ScrollingText from "./Components/ScrollingText";
import Youtubevideo from "./Components/Youtubevideo";
import HeroWithContactForm from "./Components/HeroWithContactForm";
import BannerSection from "./Components/BannerSection";
import ProcessSteps from "./Components/ProcessSteps";
import SalesProcess from "./Components/SalesProcess";

import { motion } from "framer-motion";
import MarketingServices from "./Components/MarketingServices";
import SuccessStories from "./Components/SuccessStories";

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
      title: "Services Booking site",
      image: "/assets/image9.jpg",
      description:
        "Mobile-first app and website for hourly/daily coworking space booking. Includes seat selection, map view, and testimonials.",
    },
    {
      title: "Technology scince  Website",
      image: "/assets/image11.jpg",
      description:
        "A personal portfolio showcasing a developer's skills, past projects, blog, and contact information. Built with Next.js, Tailwind CSS, and Framer Motion animations.",
    },
  ];

  return (
    <div className="bg-white text-black font-sans min-h-screen">
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
        <meta
          name="google-site-verification"
          content="lg0Dv0msTjtBoja6UwTnhLRaoT0_JEtd82Apsee2oFw"
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
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17264742053"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17264742053');
        `}
      </Script>
      {/* Hero Section */}
      <HeroWithContactForm />
      {/* <header className="py-20 px-6 md:px-20 bg-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-pulse text-indigo-700">
              Your Partner in Digital Success
            </h1>
            <p className="text-xl sm:text-2xl mb-6 max-w-xl text-gray-700">
              Grow your business with our expert digital marketing, web and app
              development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/contact"
                className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition"
              >
                Contact Us
              </a>
              <a
                href="/services/D4Interactive"
                className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
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
      </header> */}
      <main>{/* <Youtubevideo /> */}</main>
      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 bg-white text-black">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className={`bg-white text-black rounded-2xl shadow-lg ${item.shadowClass} transition-shadow duration-300 p-4 text-center`}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className={`text-xl font-semibold ${item.textClass} mb-2`}>
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <ServiceCategories />
      {/* About Section */}
      {/* <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 items-center gap-12 bg-white text-black">
        <div>
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">About</h2>
          <p className="text-gray-700 mb-4">
            D4 Interactive is a leading digital agency passionate about helping
            businesses thrive online. We provide top-tier services in digital
            marketing, web development, app development, and WordPress
            solutions.
          </p>
          <p className="text-gray-700">
            Founded with a mission to deliver result-oriented strategies, we
            blend creativity and technology to drive measurable results and
            customer satisfaction. Our team is dedicated to building long-term
            client relationships based on trust and performance.
          </p>
        </div>

        {/* Embed YouTube video */}
      {/* <div className="w-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/yDt2ivKK_JI"
            title="D4 Interactive Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full min-h-[300px]"
          ></iframe>
        </div>
      </section> */}{" "}
      */
      <main>
        <ExperienceSection />
      </main>
      <BannerSection />
      <SalesProcess />
      <WeDiffer />
      <StatsSection />
      <AnimatedServices />
      <ServicesSection />
      {/* <ScrollingText /> */}
      {/* Contact CTA */}
      <ProcessSteps />
      {/* Blinking animation with hover pause */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-center text-black relative overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-4"
        >
          Ready to Grow Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 max-w-2xl mx-auto mb-6 text-lg"
        >
          Whether you&apos;re just starting or scaling up, we&apos;re here to
          craft tailored digital solutions that deliver real results.
          Let&rsquo;s connect and build something amazing together.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 max-w-xl mx-auto mb-10 text-base"
        >
          We specialize in website development, digital marketing, SEO, app
          development, and complete branding — everything you need to succeed
          online.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Contact Us (Blinking) */}
          <a
            href="/contact"
            className="blink-button inline-block bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Blink animation styles */}
        <style jsx>{`
          @keyframes blinker {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }

          .blink-button {
            animation: blinker 1s linear infinite;
          }

          .blink-button:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
      <MarketingServices />
      <SuccessStories />
      {/* Projects Section */}
      <section className="py-20 px-6 md:px-20 bg-white text-center text-black">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          Our Work & Projects
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We craft digital experiences across industries...
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 pb-20 bg-white text-black">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-xl shadow-md"
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
            <p className="text-gray-700 text-sm">{proj.description}</p>
          </div>
        ))}
      </section>
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-[16px] leading-relaxed">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
            Expert Digital Marketing Services to Grow Your Business
          </h2>

          <p>
            At <strong>D4 INTERACTIVE</strong>, we are a top-rated digital
            marketing agency based in Hyderabad, delivering powerful online
            marketing strategies to clients across India. Whether you&apos;re a
            small business, e-commerce brand, doctor, or real estate agent, we
            provide tailored solutions to help you rank higher on Google,
            generate qualified leads, and grow revenue with the best digital
            marketing services near you.
          </p>

          <p>
            Our expert team specializes in{" "}
            <strong>SEO (Search Engine Optimization)</strong>, Google Ads,
            social media marketing, PPC advertising, and content marketing. As
            one of the <em>best digital marketing companies in Hyderabad</em>,
            we use performance-driven strategies backed by data to bring you
            real results. If you&apos;re searching for a reliable{" "}
            <strong>digital marketing agency near me</strong>, D4 INTERACTIVE is
            your trusted partner.
          </p>

          <p>
            We&apos;ve successfully delivered 250+ digital marketing projects
            for industries like healthcare, technology, real estate, and
            eCommerce. Whether it&apos;s a full-fledged{" "}
            <strong>digital advertising campaign</strong>,{" "}
            <strong>lead generation strategy</strong>, or{" "}
            <strong>local SEO</strong> services, we ensure that every marketing
            campaign delivers a high return on investment.
          </p>

          <h3 className="text-2xl font-semibold text-purple-700 mt-8">
            Why Choose Our Digital Marketing Company?
          </h3>

          <ul className="list-disc pl-6 space-y-3">
            <li>Google Certified Digital Marketers and SEO Experts</li>
            <li>Customized Digital Marketing Plans for Your Business Goals</li>
            <li>Affordable SEO Packages & Transparent Reporting</li>
            <li>
              High-converting Landing Pages & Conversion-focused Campaigns
            </li>
            <li>
              Proven Results in Real Estate, Healthcare, Education, eCommerce,
              and SaaS
            </li>
          </ul>

          <p>
            As a leading{" "}
            <strong>SEO and Digital Marketing company in Hyderabad</strong>, we
            focus on the long-term success of your brand. Our content strategies
            include advanced keyword research, optimized blog writing, backlinks
            building, technical SEO audits, and video marketing.
          </p>

          <h3 className="text-2xl font-semibold text-purple-700 mt-8">
            All-in-One Digital Growth Services
          </h3>

          <p>
            We offer a full spectrum of online marketing services including:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>SEO Services:</strong> On-page, Off-page, Technical SEO,
              Local SEO
            </li>
            <li>
              <strong>Google Ads (PPC):</strong> Pay-per-click, remarketing, and
              conversion optimization
            </li>
            <li>
              <strong>Social Media Marketing:</strong> Facebook, Instagram,
              LinkedIn & YouTube campaigns
            </li>
            <li>
              <strong>Content Marketing:</strong> Blogs, email campaigns,
              copywriting
            </li>
            <li>
              <strong>Lead Generation:</strong> Real estate, dental, eCommerce,
              and B2B
            </li>
            <li>
              <strong>Digital Strategy:</strong> Analytics setup, CRM,
              automation & funnel building
            </li>
          </ul>

          <p>
            Looking for <em>freelance digital marketing experts</em>,{" "}
            <em>marketing agencies near me</em>, or a{" "}
            <strong>creative digital marketing company</strong> to scale your
            brand online? You&apos;ve come to the right place.
          </p>

          <h3 className="text-2xl font-semibold text-purple-700 mt-8">
            Industries We Serve
          </h3>
          <p>
            From B2B startups to D2C brands, we&apos;ve helped businesses
            across:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>Real Estate Lead Generation</li>
            <li>Healthcare & Doctor Booking Apps</li>
            <li>Education & Coaching Institutes</li>
            <li>eCommerce and Shopify Stores</li>
            <li>Automobile & Mechanical Parts</li>
            <li>IT Solutions & SaaS Products</li>
          </ul>

          <h3 className="text-2xl font-semibold text-purple-700 mt-8">
            Let&apos;s Build Your Digital Future
          </h3>
          <p>
            At D4 INTERACTIVE, we go beyond just ranking on Google. We create
            end-to-end <strong>digital marketing strategies</strong> that
            convert visitors into loyal customers. If you&apos;re looking for a{" "}
            <strong>digital marketing consultant</strong> or a full-service{" "}
            <strong>digital agency in Hyderabad</strong>, let&apos;s talk!
          </p>

          <p className="mt-6 text-center">
            <a
              href="/contact"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Get Free Consultation →
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
