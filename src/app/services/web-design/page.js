"use client";

import Head from "next/head";
import Link from "next/link";

export default function WebDesigningPage() {
  const title = "Web Designing Company in Hyderabad | D4 Interactive";
  const description =
    "D4 Interactive offers modern, responsive, and interactive web design services in Hyderabad to make your brand stand out. Get stunning websites designed with UX and SEO in mind.";
  const keywords = [
    "Web Designing Hyderabad",
    "Website Design Company Hyderabad",
    "Responsive Web Design",
    "UI UX Designers Hyderabad",
    "D4 Interactive Website Design",
    "Custom Web Design Services",
  ];

  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
      </Head>

      {/* 🔥 Hero Section - Gradient Background */}
      <div className="bg-gradient-to-b from-rose-500 to-purple-800 text-white text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Web Designing Services
        </h1>
        <nav className="text-sm font-semibold text-white/90">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="mx-1">›</span> Web Designing Services
        </nav>
      </div>

      {/* ✅ Main Content - White Background */}
      <main className="bg-white text-black px-4 md:px-16 lg:px-24 py-10 max-w-7xl mx-auto rounded-xl shadow-lg -mt-10 relative z-10">
        <section className="mt-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-700">
            Web Designing
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            What you need is not just a beautiful website with commendable
            design, you need a website that establishes interactions with the
            viewer. Your website is the first impression for all the reputation
            you wish to hold for your brand. If your website cannot hold your
            viewer for more than 4 seconds, then you&apos;ve failed to convince
            that your products are best in class.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
            Web Designing Company in Hyderabad
          </h3>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* ✅ Embedded YouTube Video */}
            <div className="md:w-1/2">
              <div className="w-full aspect-video rounded-lg shadow-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/twWMv8fF15k?si=65ML9kjNFOH3YHBh"
                  title="Web Designing Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* ✅ Supporting Text */}
            <div className="md:w-1/2">
              <p className="mb-4">
                <strong>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500">
                    D4 Interactive
                  </span>
                </strong>{" "}
                understands the core vision of your business and ensures your
                website speaks to your users in both design and message.
              </p>
              <p className="mb-4">
                Your brand needs a holistic output — from hosting to lead
                generation. That&apos;s where we bring stunning, fast, and
                secure websites that are tailored for performance, trust, and
                modern business standards.
              </p>
            </div>
          </div>

          <p className="mb-4">
            Users enjoy visiting websites that are visually appealing and
            intuitive to navigate. At{" "}
            <strong>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500">
                D4 Interactive
              </span>
            </strong>
            , our creative developers deliver clean layouts and smart structure,
            helping your visitors engage, explore, and act.
          </p>

          <p className="mb-4">
            Because it&apos;s not always about technical edge — it&apos;s about
            emotional touch, visual storytelling, and experience that make your
            brand unforgettable in the digital crowd.
          </p>
          <p>
            Website design is the art of creating visually appealing,
            user-friendly interfaces that effectively communicate your brand
            message and drive conversions. Our design philosophy centers on
            creating responsive, mobile-first websites that provide exceptional
            user experiences across all devices and screen sizes. We employ
            modern design principles, including clean layouts, intuitive
            navigation, strategic color schemes, and compelling typography to
            create websites that captivate visitors and encourage engagement.
            Our design process involves thorough research of your target
            audience, competitor analysis, and brand positioning to ensure your
            website stands out in the digital landscape. We prioritize
            accessibility standards and loading speed optimization to create
            inclusive designs that perform well in search engines. Every design
            element is strategically placed to guide users through your
            conversion funnel and achieve your business goals.
          </p>

          <p>
            Web design combines aesthetic appeal with functional usability to
            create digital experiences that resonate with your target audience
            and drive business results. Our creative team specializes in custom
            web design solutions that reflect your brand identity while
            prioritizing user experience and conversion optimization. We create
            wireframes, mockups, and interactive prototypes to visualize your
            website before development begins, ensuring alignment with your
            vision and objectives. Our design approach incorporates modern
            trends, accessibility guidelines, and mobile-responsive principles
            to create websites that perform excellently across all platforms. We
            pay meticulous attention to visual hierarchy, content organization,
            and call-to-action placement to maximize user engagement and
            conversion rates. Our collaborative design process involves regular
            client feedback and iterative improvements to deliver websites that
            exceed expectations and drive measurable business growth.
          </p>
          <p>
            Web design websites showcase our creative capabilities and technical
            expertise through visually stunning portfolios that demonstrate our
            ability to create engaging digital experiences. Our portfolio
            features diverse projects across various industries, highlighting
            our versatility in adapting design styles to match different brand
            personalities and target audiences. Each showcase includes detailed
            case studies explaining our design process, challenges overcome, and
            measurable results achieved for our clients. We present our work
            through interactive galleries, before-and-after comparisons, and
            client testimonials that provide credibility and insight into our
            collaborative approach. Our design websites incorporate the latest
            web technologies, animation effects, and user interface trends to
            demonstrate our commitment to staying at the forefront of digital
            design innovation. These platforms serve as powerful marketing tools
            that attract potential clients and establish our reputation as
            industry leaders in web design excellence.
          </p>
          <p className="mb-6">
            The secret to{" "}
            <strong>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500">
                D4 Interactive
              </span>
            </strong>
            &apos;s success is our ability to deliver agile, scalable, and
            responsive web design that gives your business a competitive
            advantage.
          </p>

          {/* CTA Section */}
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
            >
              Get a Free Website Design Quote
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
