import Image from "next/image";
import Head from "next/head";

export default function Home() {
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
      title: "Technology scince Website",
      image: "/assets/image11.jpg",
      description:
        "A personal portfolio showcasing a developer's skills, past projects, blog, and contact information. Built with Next.js, Tailwind CSS, and Framer Motion animations.",
    },
  ];

  return (
    <div className="font-sans">
      <Head>
        <title>D4 Interactive - Projects</title>
        <meta
          name="description"
          content="Explore D4 Interactive’s recent digital projects including mobile apps, IT websites, WordPress development, and SEO-ready solutions for businesses."
        />
        <meta
          name="keywords"
          content="D4 Interactive Projects, Web Development India, Mobile App Portfolio, ReactJS Projects, SEO Case Studies, WordPress Website Work"
        />
        <link rel="canonical" href="https://d4interactive.com/projects" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-gradient-to-r from-black via-[#AA2428] to-black text-white">
        <h1 className="text-4xl font-bold mb-4">Our Work &amp; Projects</h1>
        <p className="text-gray-200 max-w-3xl mx-auto">
          From scalable web platforms to mobile-first applications, here’s a
          glimpse into what we’ve built at D4 Interactive.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="bg-white text-indigo-900 py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-indigo-50 border border-indigo-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <Image
                src={proj.image}
                alt={proj.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                {proj.title}
              </h3>
              <p className="text-sm text-gray-700">{proj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO-rich Paragraphs */}
      <section className="bg-white text-indigo-900 px-6 md:px-20 pb-20 space-y-10">
        {[
          {
            title: "App Development Projects",
            content: `At D4 Interactive, we specialize in full-cycle mobile app development. We've delivered medical, booking, educational, and eCommerce apps with features like real-time chat, calendar, UPI payments, and seamless UX. Whether React Native or Flutter, our focus is speed and scale.`,
          },
          {
            title: "News Platforms & Content Sites",
            content: `Our React + WordPress solutions offer blazing-fast news platforms with live tickers, category filters, and mobile optimization. Ideal for publishers and digital news startups targeting Indian or regional languages.`,
          },
          {
            title: "Services Booking site",
            content: `We build smart coworking apps with hourly/daily seat bookings, map view, ratings, testimonials, and real-time availability. Tailored for tech parks, freelancers, and shared office chains.`,
          },
          {
            title: "SEO & Digital Marketing Projects",
            content: `D4 Interactive’s SEO services are deeply analytical and tailored. We’ve helped businesses grow with keyword research, backlink strategies, and high-converting SEO landing pages backed by analytics and CRO.`,
          },
          {
            title: "Real Estate Websites & Lead Funnels",
            content: `We create property listing and lead gen platforms for agents in Marbella, Dubai, and Hyderabad. Our real estate sites include location filters, WhatsApp buttons, photo/video sliders, and multilingual support.`,
          },
          {
            title: "Industrial & Mechanical Sites",
            content: `For B2B industrial clients, we deliver performance-focused websites to showcase machinery, tools, product catalogs, PDFs, and RFQ forms — optimized for conversion and lead tracking.`,
          },
          {
            title: "IT Consulting & SAP Services Websites",
            content: `D4 Interactive partners with IT and SAP firms for digital-first business sites. Services include staffing, cloud, infrastructure, immigration, and support — built with clean UX and responsive performance.`,
          },
          {
            title: "Personal Portfolio Sites",
            content: `We build modern personal portfolios using Framer Motion, Tailwind CSS, and Next.js. Ideal for developers, UI/UX designers, marketers, and freelancers wanting an interactive personal brand site.`,
          },
          {
            title: "Digital Growth India for Local Businesses",
            content: `Our 'Digital Growth India' initiative helps local businesses (doctors, studios, startups) go online in under 7 days. WhatsApp booking, SEO, Google Maps, and mobile-first design — ready to grow fast.`,
          },
        ].map((section, i) => (
          <div key={i}>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
              {section.title}
            </h2>
            <p className="text-gray-800 text-sm leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
