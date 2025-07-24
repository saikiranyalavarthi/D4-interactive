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

            <p>
              <strong>Expert Social Media Strategy Development</strong>
              <br />
              Our experienced social media marketing team develops customized
              strategies tailored to your specific business objectives and
              target audience demographics. We conduct thorough market research
              and competitive analysis to position your brand effectively in the
              digital landscape, ensuring maximum engagement and conversion
              rates.
            </p>

            <p>
              <strong>Multi-Platform Social Media Management Services</strong>
              <br />
              We provide comprehensive social media management across Facebook,
              Instagram, Twitter, LinkedIn, TikTok, and YouTube platforms. Our
              digital marketing specialists create platform-specific content
              that resonates with your audience while maintaining consistent
              brand messaging and visual identity throughout all social
              channels.
            </p>

            <p>
              <strong>Content Creation and Curation Excellence</strong>
              <br />
              Our creative team produces high-quality, engaging content
              including graphics, videos, carousel posts, stories, and
              interactive media that drives user engagement and shares. We focus
              on creating viral-worthy content that not only entertains but also
              educates your audience about your products and services.
            </p>

            <p>
              <strong>Paid Social Media Advertising Campaigns</strong>
              <br />
              Maximize your ROI with our targeted social media advertising
              services featuring Facebook Ads, Instagram Ads, LinkedIn Ads, and
              Twitter Ads management. Our certified advertising specialists
              optimize campaigns for lead generation, brand awareness, website
              traffic, and sales conversions while maintaining cost-effective
              budget allocation.
            </p>

            <p>
              <strong>Social Media Analytics and Performance Reporting</strong>
              <br />
              Track your social media success with our comprehensive analytics
              and reporting services. We provide detailed insights into audience
              behavior, engagement metrics, reach statistics, and conversion
              tracking to continuously optimize your social media marketing
              performance and demonstrate clear return on investment.
            </p>

            <p>
              <strong>Influencer Marketing and Partnership Development</strong>
              <br />
              Expand your brand reach through strategic influencer
              collaborations and partnership campaigns. Our team identifies and
              connects your brand with relevant influencers and content creators
              who align with your target market, ensuring authentic promotional
              content that drives genuine engagement and conversions.
            </p>

            <p>
              <strong>Community Management and Customer Engagement</strong>
              <br />
              Build lasting relationships with your audience through
              professional community management services. Our dedicated social
              media managers respond to comments, messages, and reviews promptly
              while fostering positive brand conversations and addressing
              customer inquiries with professionalism and brand consistency.
            </p>

            <p>
              <strong>Social Media Crisis Management Solutions</strong>
              <br />
              Protect your brand reputation with our proactive crisis management
              strategies. We monitor brand mentions, address negative feedback
              constructively, and implement damage control measures to maintain
              your positive online presence during challenging situations.
            </p>

            <p>
              <strong>Local Social Media Marketing for Small Businesses</strong>
              <br />
              Boost your local business visibility with geo-targeted social
              media campaigns designed to attract customers in your service
              area. We optimize your social profiles for local search, create
              location-based content, and implement local hashtag strategies to
              increase foot traffic and local brand awareness.
            </p>

            <p>
              <strong>E-commerce Social Media Integration</strong>
              <br />
              Drive online sales through seamless social commerce integration
              featuring Instagram Shopping, Facebook Shop, and Pinterest Product
              Catalogs. We optimize your product listings, create shoppable
              posts, and implement conversion tracking to transform social media
              followers into paying customers.
            </p>

            <p>
              <strong>Brand Awareness and Reputation Management</strong>
              <br />
              Establish your brand as an industry authority through consistent,
              valuable content sharing and thought leadership positioning. Our
              reputation management strategies ensure positive brand perception
              while addressing any negative mentions or reviews professionally
              and effectively.
            </p>

            <p>
              <strong>Social Media Audit and Optimization Services</strong>
              <br />
              Improve your existing social media performance with our
              comprehensive audit services. We analyze your current social media
              presence, identify optimization opportunities, and provide
              actionable recommendations to enhance your overall digital
              marketing effectiveness.
            </p>

            <p>
              <strong>Custom Social Media Training and Consulting</strong>
              <br />
              Empower your internal team with our social media training programs
              and consulting services. We provide hands-on training sessions,
              best practices workshops, and ongoing consultation to help your
              staff manage social media marketing initiatives effectively and
              efficiently.
            </p>

            <p>
              <strong>Measurable Results and ROI-Focused Approach</strong>
              <br />
              Our data-driven approach ensures every social media marketing
              campaign delivers measurable results aligned with your business
              goals. We focus on key performance indicators including engagement
              rates, lead generation, website traffic, and sales conversions to
              maximize your marketing investment and drive sustainable business
              growth.
            </p>

            <p>
              <em>
                Partner with our award-winning digital marketing agency to
                transform your social media presence into a powerful business
                growth engine. Contact us today for a free social media
                marketing consultation and discover how our expert services can
                elevate your brand in the competitive digital marketplace.
              </em>
            </p>
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
