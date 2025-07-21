"use client";

import Link from "next/link";
import Head from "next/head";
import {
  FaRobot,
  FaChartLine,
  FaUsers,
  FaEnvelope,
  FaWhatsapp,
  FaVideo,
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaSearch,
  FaBullhorn,
  FaMapMarkedAlt,
  FaPlane,
  FaHotel,
  FaCameraRetro,
  FaMobileAlt,
  FaGlobeEurope,
  FaChartPie,
} from "react-icons/fa";

export default function TravelMarketingPage() {
  return (
    <div className="bg-gradient-to-br from-purple-800 via-indigo-800 to-blue-800 text-white min-h-screen p-4 md:p-12 font-sans">
      <Head>
        <title>AI-Powered Travel Marketing | D4 interactive</title>
        <meta
          name="description"
          content="Boost your travel business with AI-driven marketing strategies. Enhance visibility, customer engagement, and bookings with D4 interactive."
        />
      </Head>

      {/* Separate Heading Section */}
      <section className="w-full py-12 bg-indigo-700 text-black text-center rounded-xl shadow-md mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          AI-Powered Travel Marketing
        </h1>
      </section>

      {/* Description Section */}
      <section className="text-center mb-16">
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100">
          Transform the way your travel business connects with customers using
          the power of AI and digital marketing. Reach more travelers, increase
          bookings, and enhance your brand presence online.
        </p>
      </section>

      {/* Key Service Cards */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <FaMapMarkedAlt className="text-4xl text-yellow-300 mb-4" />,
            title: "Location Targeting",
            desc: "Reach travelers searching for destinations you serve. Hyperlocal campaigns ensure your services are visible at the right place and right time.",
          },
          {
            icon: <FaPlane className="text-4xl text-green-300 mb-4" />,
            title: "AI-Based Travel Trends",
            desc: "Predict and act on the latest travel trends using AI. Offer dynamic packages, personalized itineraries, and tailored experiences that travelers crave.",
          },
          {
            icon: <FaHotel className="text-4xl text-blue-300 mb-4" />,
            title: "Hotel & Flight Marketing",
            desc: "Use smart algorithms to advertise the best stay and travel options. Increase direct bookings by targeting the right audience across platforms.",
          },
          {
            icon: <FaCameraRetro className="text-4xl text-pink-300 mb-4" />,
            title: "Visual Storytelling",
            desc: "Showcase breathtaking visuals and client experiences to build trust and excitement. Let images and videos do the selling for you.",
          },
          {
            icon: <FaSearch className="text-4xl text-red-300 mb-4" />,
            title: "SEO for Travel",
            desc: "Rank your travel packages, destinations, and blogs on Google. We optimize content, keywords, and backlinks to bring organic traffic.",
          },
          {
            icon: <FaWhatsapp className="text-4xl text-green-500 mb-4" />,
            title: "WhatsApp & Email Automation",
            desc: "Engage with potential travelers instantly via WhatsApp and automated emails. Follow-ups, reminders, and trip details—automated and efficient.",
          },
          {
            icon: <FaMobileAlt className="text-4xl text-purple-300 mb-4" />,
            title: "Mobile-First Experiences",
            desc: "Ensure seamless booking and exploration on mobile devices. We design responsive, conversion-focused landing pages and booking funnels.",
          },
          {
            icon: <FaGlobeEurope className="text-4xl text-teal-300 mb-4" />,
            title: "Global Audience Reach",
            desc: "Expand beyond local boundaries with multilingual ads, global SEO, and international travel campaign strategies tailored to your offerings.",
          },
          {
            icon: <FaChartPie className="text-4xl text-orange-300 mb-4" />,
            title: "Real-Time Campaign Analytics",
            desc: "Track performance and ROI with intelligent dashboards. Make data-backed decisions to optimize your campaign spend and strategy.",
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-white/10 p-6 rounded-2xl shadow-lg">
            {item.icon}
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Client Trust Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted by Leading Travel Agencies
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          We collaborate with top travel brands and agents, delivering
          measurable growth through intelligent campaigns and consistent
          branding.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose D4 interactive for Travel Marketing?
          </h2>
          <p className="text-lg mb-6">
            With our deep understanding of the travel industry and expertise in
            AI-powered tools, we create marketing campaigns that resonate,
            convert, and scale. Our solutions are data-driven and
            traveler-focused.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <FaRobot className="text-4xl text-yellow-200 mb-3 mx-auto" />
            <h3 className="font-bold text-xl mb-2">AI Personalization</h3>
            <p>
              Customized marketing messages that match user behavior and
              preferences in real-time.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <FaChartLine className="text-4xl text-green-200 mb-3 mx-auto" />
            <h3 className="font-bold text-xl mb-2">Performance-Driven</h3>
            <p>
              Track every click, view, and booking with detailed reporting and
              campaign analysis.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <FaUsers className="text-4xl text-blue-200 mb-3 mx-auto" />
            <h3 className="font-bold text-xl mb-2">Industry Experts</h3>
            <p>
              Years of hands-on experience with travel brands means better
              strategies and faster growth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Take Your Travel Business to the Next Destination
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Whether you're offering guided tours, adventure holidays, or luxurious
          getaways—our marketing strategies will help you reach global travelers
          and boost conversions.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition duration-300"
        >
          Book a Free Consultation
        </Link>
      </section>
    </div>
  );
}
