import ServicesSection from "@/app/Components/ServicesSection";
import Image from "next/image";
// Adjust path if needed

// ✅ Server-only metadata export
export const metadata = {
  title: "Services | D4 Interactive - SEO, Web & App Development Agency",
  description:
    "Discover tailored digital services from D4 Interactive including SEO, digital marketing, app development, website design, and WordPress solutions to grow your business.",
  keywords: [
    "Digital Marketing Services",
    "SEO Company India",
    "App Development Agency",
    "Web Development Company",
    "WordPress Services",
    "Next.js Development",
    "React Development",
    "best digital marketing agency",
    "seo services in india",
    "wordpress customization agency",
    "website design company in hyderabad",
    "app developers near me",
  ],
  openGraph: {
    title: "D4 Interactive Services",
    description:
      "Explore our digital marketing, app, web, and WordPress development services. Let us help you grow online.",
    url: "https://d4interactive.com/services",
    siteName: "D4 Interactive",
    images: [
      {
        url: "https://d4interactive.com/assets/image1.jpg",
        width: 800,
        height: 600,
        alt: "D4 Interactive Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D4 Interactive Services",
    description:
      "Custom SEO, Web, and App Development Services for Businesses.",
    images: ["https://d4interactive.com/assets/image1.jpg"],
  },
  alternates: {
    canonical: "https://d4interactive.com/services",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Digital Marketing",
      color: "text-indigo-700",
      hoverShadow: "hover:shadow-indigo-300",
      img: "/assets/image1.jpg",
      desc: "SEO, Google Ads, social media strategies that drive visibility and results.",
    },
    {
      title: "App Development",
      color: "text-purple-700",
      hoverShadow: "hover:shadow-purple-300",
      img: "/assets/image2.jpg",
      desc: "Scalable, high-performance Android & iOS apps using modern frameworks.",
    },
    {
      title: "Website Development",
      color: "text-blue-700",
      hoverShadow: "hover:shadow-blue-300",
      img: "/assets/image3.jpg",
      desc: "Fast, SEO-friendly websites built with Next.js, React, and Tailwind CSS.",
    },
    {
      title: "WordPress Development",
      color: "text-indigo-700",
      hoverShadow: "hover:shadow-indigo-300",
      img: "/assets/image4.jpg",
      desc: "Flexible themes, plugin development, and easy CMS solutions for all businesses.",
    },
  ];

  return (
    <>
      <div className="font-sans">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white py-28 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Digital solutions tailored to your business needs — SEO, marketing,
            development, and more.
          </p>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-6 md:px-20 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl shadow-lg ${service.hoverShadow} transition p-4 text-center`}
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className={`text-xl font-semibold ${service.color} mb-2`}>
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6 text-center">
            Why Choose D4 Interactive for Your Digital Journey?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-base leading-relaxed">
            <p>
              <strong>D4 Interactive</strong> is a trusted{" "}
              <em>digital marketing agency in India</em> offering end-to-end
              services to elevate your online brand. Our expertise includes SEO
              optimization, pay-per-click advertising, website design, and
              mobile app development tailored for startups and enterprises.
            </p>
            <p>
              We use modern tools like Next.js, WordPress, React, and Tailwind
              CSS to build <strong>high-performance websites</strong> and
              applications. Whether you&apos;re searching for the{" "}
              <em>best digital marketing company near you</em> or a{" "}
              <strong>custom web development firm</strong>, our team delivers
              results.
            </p>
            <p>
              If you&apos;re a small business looking to rank on Google, we
              provide <strong>local SEO services</strong> that target your
              region and audience. For larger organizations, we deliver scalable
              enterprise solutions backed by analytics, behavior tracking, and
              automation.
            </p>
            <p>
              Our <strong>SEO services in India</strong> include keyword
              research, content marketing, backlinks, and technical audits —
              everything to help you rank and grow organically. We also
              specialize in <strong>WordPress customization</strong> with SEO
              and hosting support.
            </p>
            <p>
              From lead generation to conversion, our digital services are built
              for ROI. We&apos;re not just developers or marketers — we&apos;re
              your long-term growth partners.
            </p>
          </div>
        </section>
      </div>

      {/* Additional Dynamic Section */}
      <main className="bg-white text-black">
        <ServicesSection />
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "D4 Interactive Digital Services",
            provider: {
              "@type": "Organization",
              name: "D4 Interactive",
              url: "https://d4interactive.com",
            },
            serviceType:
              "Digital Marketing, App Development, Web Development, WordPress Development",
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            description:
              "We offer expert digital services including SEO, app & website development, and WordPress customization to grow your online presence.",
          }),
        }}
      />
    </>
  );
}
