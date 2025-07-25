"use client";

import Head from "next/head";
import Link from "next/link";
import {
  FaBullhorn,
  FaPenFancy,
  FaPalette,
  FaUsers,
  FaAd,
  FaChartPie,
  FaUserFriends,
  FaHeadphonesAlt,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function SocialMediaMarketingPage() {
  const title = "Social Media Marketing Company in Hyderabad | D4 Interactive";
  const description =
    "D4 Interactive offers expert Social Media Marketing services in Hyderabad to boost brand visibility, drive engagement, and increase your business growth on Facebook, Instagram, LinkedIn, and more.";
  const keywords = [
    "Social Media Marketing Hyderabad",
    "SMM Company in Hyderabad",
    "Digital Marketing Services",
    "Facebook Marketing",
    "Instagram Marketing",
    "D4 Interactive SMM",
    "LinkedIn Advertising",
    "Social Ads Agency Hyderabad",
  ];
  const smmServices = [
    {
      title: "Social Media Strategy Development",
      description:
        "Gravitas works closely with clients to develop bespoke social media strategies aligned with their business objectives. This involves identifying target audiences, determining key messaging, selecting appropriate social media platforms, and outlining content plans.",
      icon: <FaBullhorn className="text-indigo-500 text-3xl" />,
    },
    {
      title: "Content Writing",
      description:
        "Gravitas assists clients in creating engaging and SEO Friendly content for their social media channels. This includes producing various types of content such as text posts, images, videos, infographics, and interactive polls. We also manage content calendars to ensure consistent posting schedules.",
      icon: <FaPenFancy className="text-indigo-500 text-3xl" />,
    },
    {
      title: "Graphic Designing",
      description:
        "Our graphic design team at Gravitas believes in visual storytelling. Striking visuals not only catch the eye but also convey your brand's narrative. Our team blends creativity with strategy to craft compelling visuals. We ensure consistent design elements, reinforcing brand identity and leaving a lasting impression.",
      icon: <FaPalette className="text-indigo-500 text-3xl" />,
    },
    {
      title: "Community Engagement",
      description:
        "Gravitas focuses on fostering meaningful interactions and building communities around clients' brands on social media. This involves responding to comments and messages, initiating conversations with followers, and actively engaging with relevant communities and influencers.",
      icon: <FaUsers className="text-indigo-500 text-3xl" />,
    },
    {
      title: "Paid Advertising Campaigns",
      description:
        "Gravitas helps clients amplify their reach and engagement through targeted paid advertising campaigns on platforms like Facebook, Instagram, Twitter, LinkedIn, and others. We handle campaign setup, audience targeting, ad creative development, budget optimization, and performance tracking.",
      icon: <FaAd className="text-indigo-500 text-3xl" />,
    },
    {
      title: "Social Media Analytics & Reporting",
      description:
        "Gravitas offers comprehensive analytics to track social media campaign performance, including reach, engagement, click-through rates, conversions, and ROI. We provide data-driven recommendations for optimization",
      icon: <FaChartPie className="text-indigo-500 text-3xl" />,
    },
    {
      title: "Influencer Marketing",
      description:
        "Gravitas leverages influencer partnerships to enhance brand visibility, credibility, and engagement on social media. We identify relevant influencers within clients' industries, negotiate partnerships, coordinate content collaborations, and measure the impact of influencer campaigns..",
      icon: <FaUserFriends className="text-indigo-500 text-3xl" />,
    },
    {
      title: "Social Media Listening & Monitoring",
      description:
        "Gravitas employs social media listening tools to monitor brand mentions, sentiment, and trends across different platforms. This enables them to gain valuable insights into customer perceptions, identify potential issues or crises, and proactively address feedback or concerns.",
      icon: <FaHeadphonesAlt className="text-indigo-500 text-3xl" />,
    },
    {
      title: "Meta Optimization",
      description:
        "Gravitas enhances clients Meta platforms presence with tailored optimization strategies, analyzing performance metrics, refining audience targeting, and optimizing ad campaigns. We boost content engagement to ensure higher visibility and conversion rates.",
      icon: <FaFacebookF className="text-indigo-500 text-3xl" />,
    },
    {
      title: "LinkedIn Marketing",
      description:
        "Gravitas partners with clients to create personalized LinkedIn marketing strategies, targeting industries and professionals, developing compelling profiles, and leveraging LinkedIn's advertising tools. We aim to elevate your LinkedIn presence, foster meaningful connections, and drive business growth.",
      icon: <FaLinkedin className="text-indigo-500 text-3xl" />,
    },
    {
      title: "Twitter Optimization",
      description:
        "Gravitas collaborates with clients to create tailored Twitter optimization strategies that align with their business goals. By analyzing follower demographics, refining messaging, and enhancing tweet visibility, we ensure your Twitter presence achieves maximum reach, engagement, and brand impact.",
      icon: <FaTwitter className="text-indigo-500 text-3xl" />,
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
      </Head>

      {/* 🔥 Gradient Heading Section */}
      <div className="bg-gradient-to-b from-yellow-400 to-orange-700 text-white text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Social Media Marketing Services
        </h1>
        <nav className="text-sm font-semibold text-white/90">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="mx-1">›</span> Social Media Marketing Services
        </nav>
      </div>

      {/* 💡 White Content Wrapper */}
      <main className="bg-white text-black px-4 md:px-16 py-10 max-w-7xl mx-auto rounded-xl shadow-lg -mt-10 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mt-4">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
              Social Media Marketing Company in Hyderabad
            </h2>
            <p className="text-lg mb-4">
              In today’s vibrant Internet era, Social Media has become a vital
              part of everyone’s life. Social Media Marketing is the strategic
              use of platforms like Facebook, Instagram, LinkedIn, and YouTube
              to drive traffic and boost brand awareness. It’s reliable,
              affordable, and essential for businesses aiming for online growth.
            </p>
            <Link
              href="/contact"
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* ✅ Embedded YouTube Video Replacing Image */}
          <div className="flex-1">
            <div className="w-full aspect-video rounded-lg shadow-md overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yDt2ivKK_JI"
                title="Social Media Marketing Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* About Our SMM Services */}
        <section className="mt-16 space-y-5 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold text-blue-600">
            Why Choose Us for Social Media Marketing?
          </h2>
          <p>
            <strong>D4 Interactive</strong>, a widely trusted digital marketing
            agency in Hyderabad, provides expert-level Social Media Marketing
            services. We integrate proven strategies, creative storytelling, and
            cutting-edge tools to amplify your brand voice across platforms.
          </p>
          <p>
            As a forward-thinking company, we help clients establish a powerful
            digital identity through innovative content, modern approaches, and
            engaging campaigns. Our services span content curation, post design,
            page moderation, influencer outreach, and detailed analytics — all
            tailored to your business audience.
          </p>
          <p>
            Whether you want to improve customer engagement, increase brand
            visibility, or drive targeted leads, our social media strategies are
            designed to perform. We specialize in building communities and
            conversations that connect emotionally with your audience and
            reinforce your brand trust. At <strong>D4 Interactive</strong>, we
            don’t just schedule posts — we tell compelling stories, spark real
            interactions, and track every performance metric for ROI-focused
            campaigns.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Our Social Media Services Include:
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Social Media Channel Setup & Branding</li>
            <li>Content Planning & Creative Campaigns</li>
            <li>Post Scheduling and Performance Optimization</li>
            <li>Audience Engagement & Community Moderation</li>
            <li>Paid Ads & Promotions (Meta, LinkedIn, Twitter)</li>
            <li>Influencer Marketing and Outreach</li>
            <li>Brand Awareness & Lead Generation Campaigns</li>
            <li>Weekly Analytics and Strategy Revisions</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            Ready to Elevate Your Social Presence?
          </h2>
          <p className="text-lg mb-6">
            Partner with <strong>D4 Interactive</strong> — the best Social Media
            Marketing company in Hyderabad. Let us transform your brand with
            audience-first strategy and meaningful engagement.
          </p>
          <div className="space-y-6 text-lg leading-relaxed text-gray-800">
            <p>
              <strong>
                Professional Social Media Marketing Services | Digital Marketing
                Agency
              </strong>
            </p>

            <p>
              Our full-service digital marketing agency specializes in
              delivering results-driven social media marketing services that
              amplify your brand presence across all major platforms. We
              understand that effective social media marketing requires
              strategic planning, creative content development, and data-driven
              execution to achieve measurable business outcomes.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-100 min-h-screen py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-center text-indigo-800 mb-6">
                Social Media Marketing Services
              </h1>
              <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
                At Gravitas, we don’t just manage social media—we build brand
                stories, nurture communities, and create data-driven strategies
                that drive growth. From creative content to paid campaigns and
                influencer partnerships, our solutions help brands make a
                meaningful impact across platforms like Meta, LinkedIn, and
                Twitter.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {smmServices.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300"
                  >
                    <div className="flex justify-center items-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
          >
            Get in Touch Today
          </Link>
        </section>
      </main>
    </div>
  );
}
