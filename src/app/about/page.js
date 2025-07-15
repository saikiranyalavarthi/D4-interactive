// pages/about.jsx

import Head from "next/head";
import Image from "next/image";
import React from "react";
import ExperienceSection from "../Components/ExperienceSection";

export default function About() {
  const whyChooseUs = [
    {
      title: "Expert Team",
      desc1: "Experienced professionals in SEO, development, and marketing.",
      desc2:
        "We stay up to date with the latest tools to give your brand a competitive edge.",
      color: "indigo",
    },
    {
      title: "Client-Centric",
      desc1: "We focus on your business goals and long-term success.",
      desc2:
        "Every project is personalized. We listen, plan, and execute precisely.",
      color: "purple",
    },
    {
      title: "SEO-Optimized",
      desc1: "Every solution we build is optimized for search visibility.",
      desc2:
        "From keyword research to technical SEO, we ensure your brand ranks.",
      color: "blue",
    },
    {
      title: "Reliable Delivery",
      desc1: "We adhere to deadlines and deliver quality work — no surprises.",
      desc2:
        "Our process is transparent and timely to keep your project on track.",
      color: "pink",
    },
    {
      title: "Innovation Driven",
      desc1: "We push boundaries with creative and functional solutions.",
      desc2: "Your digital presence is powered by design, tech, and usability.",
      color: "green",
    },
    {
      title: "24/7 Support",
      desc1: "We're here for you — before, during, and after your project.",
      desc2: "Get fast support and improvements whenever needed.",
      color: "yellow",
    },
  ];

  const colorMap = {
    indigo: { text: "text-indigo-600", shadow: "hover:shadow-indigo-300" },
    purple: { text: "text-purple-600", shadow: "hover:shadow-purple-300" },
    blue: { text: "text-blue-600", shadow: "hover:shadow-blue-300" },
    pink: { text: "text-pink-600", shadow: "hover:shadow-pink-300" },
    green: { text: "text-green-600", shadow: "hover:shadow-green-300" },
    yellow: { text: "text-yellow-600", shadow: "hover:shadow-yellow-300" },
  };

  return (
    <div className="font-sans bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white">
      <Head>
        <title>
          About D4 Interactive | Digital Marketing & Web Development Experts
        </title>
        <meta
          name="description"
          content="D4 Interactive is a leading digital marketing company in Hyderabad, India. We offer expert SEO, PPC, Web Development, App Development, and Marketing solutions customized to your business goals."
        />
        <meta
          name="keywords"
          content="About D4 Interactive, Digital Marketing Agency, SEO Company Hyderabad, Web Design India, App Developers Hyderabad, Best SEO Experts, WordPress Development, Digital Agency Hyderabad, PPC Advertising, Google Marketing Experts"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://d4interactive.com/about" />
        <meta
          property="og:title"
          content="About D4 Interactive | Digital Experts"
        />
        <meta
          property="og:description"
          content="Discover D4 Interactive – India's trusted SEO & digital marketing agency, specializing in web design, app development, and ROI-driven digital solutions."
        />
        <meta
          property="og:image"
          content="https://d4interactive.com/assets/image5.jpg"
        />
        <meta property="og:url" content="https://d4interactive.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About D4 Interactive | SEO & Web Dev Agency"
        />
        <meta
          name="twitter:description"
          content="We help startups and brands grow online with SEO, websites, apps, and digital strategies."
        />
        <meta
          name="twitter:image"
          content="https://d4interactive.com/assets/image5.jpg"
        />
      </Head>

      {/* Hero Section */}
      <section className="py-28 text-center px-4 bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          At D4 Interactive, we create powerful digital solutions that help
          businesses grow and compete with confidence. From SEO to Web & App
          Development, our strategies are tailored to your growth.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 items-center gap-12 bg-white ">
        <div>
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">About</h2>
          <p className="mb-4 text-indigo-500">
            D4 Interactive is a full-service digital marketing company in India,
            committed to helping businesses thrive in the online world. From SEO
            and PPC to website development and branding — we build digital
            ecosystems that drive measurable results.
          </p>
          <p className="mb-4 text-indigo-600">
            We understand that the digital landscape is constantly evolving, and
            what worked yesterday may not work today. That’s why we stay ahead
            of the curve by adapting our strategies to the latest trends and
            technologies.
          </p>
          <p className="mb-4 text-indigo-600">
            In the digital world, data is king. We use advanced analytics and
            real-time insights to optimize every campaign, ensuring alignment
            with your business objectives.
          </p>
          <p className="mb-4 text-indigo-600">
            We craft customized digital strategies based on your industry,
            target audience, and business goals — delivering maximum ROI.
          </p>
          <p className="text-indigo-600">
            Whether it’s increasing brand awareness, driving traffic, or
            generating leads, our ultimate goal is to deliver results that move
            your business forward.
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

      {/* Stats + Experience */}
      <ExperienceSection />

      {/* Mission */}
      <section className="py-16 px-6 md:px-20 bg-white text-black text-center ">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">
          Our Mission
        </h2>
        <p className="max-w-3xl mx-auto mb-4">
          To empower businesses of all sizes with tailored digital solutions
          that drive growth and visibility.
        </p>
        <p className="max-w-3xl mx-auto">
          We believe technology should unlock opportunities. Our mission is to
          simplify digital transformation through strategy, creativity, and
          results-driven execution.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20 text-center bg-white">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, i) => {
            const { text, shadow } = colorMap[item.color];
            return (
              <div
                key={i}
                className={`bg-white p-6 rounded-xl shadow-md text-black transition ${shadow}`}
              >
                <h3 className={`text-xl font-bold mb-2 ${text}`}>
                  {item.title}
                </h3>
                <p className="text-sm mb-2">{item.desc1}</p>
                <p className="text-sm">{item.desc2}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
