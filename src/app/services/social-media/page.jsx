"use client";

import Head from "next/head";
import Link from "next/link";

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
