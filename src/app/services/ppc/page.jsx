"use client";

import Head from "next/head";
import Image from "next/image";
import {
  FaSearch,
  FaRegImage,
  FaFacebookF,
  FaRetweet,
  FaShoppingCart,
  FaVideo,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Initial Consultation",
    description:
      "We begin with a detailed discussion to understand your business, goals, and target audience. Our team at Gravitas collaborates with you to define PPC objectives. We explore industry type, competitor presence, and best ad formats. Every client’s journey begins with clarity and alignment. This ensures the strategy is tailored to your industry and budget.",
  },
  {
    id: 2,
    title: "Keyword Research and Analysis",
    description:
      "Using Google Keyword Planner and advanced tools, we identify high-performing, industry-relevant keywords. We categorize by volume, competition, and relevance. Negative keywords are added to prevent waste. Our focus is always on attracting qualified leads. Keyword intent is matched to campaign goals for high ROI.",
  },
  {
    id: 3,
    title: "Competitor Analysis",
    description:
      "Gravitas analyzes top competitors in your space to uncover successful trends and gaps. This helps us discover unique value propositions. We benchmark your ads against competitors. Our goal is to give your campaign a competitive edge. Differentiation is key in saturated markets.",
  },
  {
    id: 4,
    title: "Campaign Strategy Development",
    description:
      "A customized PPC blueprint is created, outlining platforms (Search, Display, YouTube), targeting, and ad formats. Structured snippets, callout extensions, and lead forms are included. We allocate budget for performance and goal alignment. A strategic structure ensures scalable success.",
  },
  {
    id: 5,
    title: "Bidding Strategy",
    description:
      "We define smart bidding strategies based on goals — be it conversions, traffic, or impressions. Keyword competitiveness and CPC are analyzed. Manual or automated bidding is used based on performance. Every penny is optimized for results. Continuous bid optimization is part of the process.",
  },
  {
    id: 6,
    title: "Ad Creation and Design",
    description:
      "Our creative team builds engaging ad copy and visuals that resonate with your audience. From text ads to display banners and video ads, each asset is crafted with purpose. Visual appeal is paired with persuasive messaging. We design for clicks, conversions, and brand recall.",
  },
  {
    id: 7,
    title: "Landing Page Optimization",
    description:
      "We audit and enhance landing pages for faster load times, mobile responsiveness, and conversion UX. Messaging is aligned with the ad for continuity. Call-to-actions are placed strategically. Our landing pages guide users from interest to action smoothly. Optimization boosts Quality Score.",
  },
  {
    id: 8,
    title: "A/B Testing Implementation",
    description:
      "We run A/B tests to identify the highest-performing creatives, headlines, and CTA placements. Every element is tested for data-backed improvements. Winning versions are scaled for better ROI. Testing is continuous for evolving audience behavior. It’s a core pillar of campaign growth.",
  },
  {
    id: 9,
    title: "Campaign Implementation",
    description:
      "The campaign goes live across platforms like Google Ads, Bing, Meta, and YouTube. Our team ensures tracking setup, targeting, and bidding are precisely configured. Launch is only the beginning — we monitor closely. Implementation includes conversion tracking setup.",
  },
  {
    id: 10,
    title: "Continuous Monitoring and Optimization",
    description:
      "Real-time dashboards track impressions, clicks, CTR, conversions, and ROAS. We optimize based on performance data and audience signals. Ad copy, budget allocation, and placements are regularly refined. No campaign is left on autopilot — performance is actively managed.",
  },
  {
    id: 11,
    title: "Reporting and Analysis",
    description:
      "Clients receive weekly/monthly reports with KPIs, insights, and trend analysis. Transparent reporting ensures you always know what’s working. Our team highlights wins and suggests changes. Data is explained in simple terms. Strategy pivots are driven by metrics, not guesses.",
  },
  {
    id: 12,
    title: "Feedback and Strategy Refinement",
    description:
      "Regular client meetings allow us to align with evolving business goals. We gather feedback and update targeting, creatives, and platforms accordingly. PPC isn’t static — we refine and reallocate budget as needed. Your feedback guides next steps toward consistent growth.",
  },
];

const ppcServices = [
  {
    title: "Search Ads",
    icon: <FaSearch size={32} className="text-indigo-600" />,
    description:
      "Gravitas makes your business easy to find online. Think of it like leaving breadcrumbs on the internet trail. We craft targeted search ads so your business appears prominently when users search relevant keywords. It's like turning curiosity into clicks, leading users to choose your business.",
  },
  {
    title: "Display Ads",
    icon: <FaRegImage size={32} className="text-indigo-600" />,
    description:
      "Imagine your brand as art, and Gravitas as the curator of a digital gallery. With strategic placements and eye-catching graphics, we make a lasting impression. As people scroll, they see your brand story unfold. It's like turning your business into a visual masterpiece that stays memorable.",
  },
  {
    title: "Social Media Ads",
    icon: <FaFacebookF size={32} className="text-indigo-600" />,
    description:
      "Gravitas turns your brand into a social butterfly. We create PPC campaigns for Facebook, Instagram, and LinkedIn. By understanding your audience, we make engaging ads that spark shares and interactions, building brand loyalty and growing a digital community around your business.",
  },
  {
    title: "Remarketing",
    icon: <FaRetweet size={32} className="text-indigo-600" />,
    description:
      "Reconnect with users who already showed interest. Gravitas builds personalized remarketing campaigns with strategic messaging. It's cheaper and highly targeted, increasing conversion rates while reinforcing your brand in the minds of interested prospects.",
  },
  {
    title: "Shopping Ads",
    icon: <FaShoppingCart size={32} className="text-indigo-600" />,
    description:
      "Boost your e-commerce with Gravitas shopping ads. We highlight your products in search results with compelling visual placements. Your store becomes a digital marketplace that stands out, turning curious browsers into loyal shoppers through visibility and charm.",
  },
  {
    title: "Instream Ads",
    icon: <FaVideo size={32} className="text-indigo-600" />,
    description:
      "Be the star of the screen with Instream Ads. Gravitas embeds your video ads inside popular YouTube content. Like a mini-commercial, it grabs attention and makes your brand part of the viewer's experience—making your story not just seen but remembered.",
  },
];

export default function PPCPage() {
  return (
    <div className="font-sans min-h-screen text-black">
      <Head>
        <title>
          Pay Per Click (PPC) Advertising Services | D4 Interactive Hyderabad
        </title>
        <meta
          name="description"
          content="Boost your brand with Google Ads & PPC Campaigns from D4 Interactive, a trusted PPC company in Hyderabad. Certified Google Ads experts. Contact now!"
        />
        <meta
          name="keywords"
          content="PPC Company Hyderabad, Google Ads Services Hyderabad, Pay Per Click Advertising, Top Digital Marketing Agency in Hyderabad, PPC Campaign Experts India, D4 Interactive SEO PPC, Digital Advertising Hyderabad, Google Ads Agency Hyderabad"
        />
        <link rel="canonical" href="https://d4interactive.com/services/ppc" />
      </Head>

      {/* Hero Section */}
      <section className="py-16 text-center px-4 bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white">
        <h1 className="text-4xl font-bold mb-4">
          Pay Per Click (PPC) Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Increase your traffic, leads, and conversions with targeted PPC
          campaigns by D4 Interactive — a top-rated Google Ads agency in
          Hyderabad.
        </p>
      </section>

      {/* Main Content */}
      <main className="bg-white text-black px-6 md:px-20 py-16 max-w-6xl mx-auto rounded-xl shadow-lg -mt-10 relative z-10">
        {/* Intro Image Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="md:w-1/2">
            <Image
              src="/assets/image13.jpg"
              alt="Google Ads Hyderabad"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">What is PPC?</h2>
            <p>
              PPC (Pay-Per-Click) is one of the most effective digital marketing
              strategies to put your business in front of ready-to-buy users.
              You only pay when someone clicks your ad — giving you control over
              your marketing budget and results.
            </p>
            <p>
              As a <strong>Google-certified PPC company in Hyderabad</strong>,
              D4 Interactive helps you build high-converting Google Ads
              campaigns across Search, YouTube, Display, and more.
            </p>
          </div>
        </div>

        {/* PPC Services with Icons */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {ppcServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
                >
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2 text-center text-indigo-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our PPC Campaign Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="bg-gray-50 rounded-2xl shadow p-6 transition hover:shadow-xl"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-full text-lg font-bold mb-4">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold">Why Choose D4 Interactive?</h2>
          <p>
            Our PPC experts go beyond clicks. We focus on conversions. From
            local stores to national brands, we’ve helped clients across India
            scale their sales and leads using data-backed strategies.
          </p>
          <ul className="list-disc pl-6">
            <li>Certified Google Ads Professionals</li>
            <li>Dedicated PPC Managers</li>
            <li>Transparent Weekly Reports</li>
            <li>Landing Page Optimization for Better ROI</li>
            <li>WhatsApp Lead Integration</li>
          </ul>

          <h3 className="text-xl font-semibold pt-6">What We Offer:</h3>
          <ul className="list-disc pl-6">
            <li>Google Search Ads & Shopping Ads</li>
            <li>Remarketing & Retargeting Campaigns</li>
            <li>YouTube Video Ads</li>
            <li>Display Ads on Google Partner Sites</li>
            <li>Social Media Paid Ads (Meta, Instagram)</li>
          </ul>

          <h3 className="text-xl font-semibold pt-6">Our PPC Workflow</h3>
          <ul className="list-disc pl-6">
            <li>Audience & Keyword Research</li>
            <li>Campaign Planning & Setup</li>
            <li>Ad Design & A/B Testing</li>
            <li>Landing Page Optimization</li>
            <li>Performance Tracking & Continuous Improvement</li>
          </ul>

          <p className="mt-6">
            Ready to scale your business with proven PPC ad strategies? Whether
            you're a startup or an enterprise, D4 Interactive will help you grow
            with confidence and performance marketing.
          </p>
        </section>
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded hover:bg-indigo-700 transition"
          >
            Request a Free PPC Consultation
          </a>
        </div>
      </main>
    </div>
  );
}
