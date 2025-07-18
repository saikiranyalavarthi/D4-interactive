"use client";

import Head from "next/head";
import Image from "next/image";

export default function AIPage() {
  return (
    <div className="font-sans min-h-screen text-black">
      {/* SEO Meta Tags */}
      <Head>
        <title>
          AI Automachine Solutions & Machine Learning Services | D4 Interactive
          Hyderabad
        </title>
        <meta
          name="description"
          content="Unlock the power of AI with D4 Interactive. From predictive analytics to NLP and automation, we provide custom AI solutions in Hyderabad. Contact us today."
        />
        <meta
          name="keywords"
          content="AI Company Hyderabad, Machine Learning Services India, AI Development, Artificial Intelligence Consulting, NLP Solutions, Predictive Analytics, Automation with AI, D4 Interactive AI Services"
        />
        <link rel="canonical" href="https://d4interactive.com/services/ai" />
      </Head>

      {/* Hero Section */}
      <section className="py-16 text-center px-4 bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white">
        <h1 className="text-4xl font-bold mb-4">
          AI Automachine Solutions & Machine Learning Solutions
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Leverage the latest in artificial intelligence to automate, optimize,
          and grow your business. Smart AI solutions built for your vision.
        </p>
      </section>

      {/* Main Content Section */}
      <main className="bg-white text-black px-6 md:px-20 py-16 max-w-6xl mx-auto rounded-xl shadow-lg -mt-10 relative z-10">
        {/* Image & Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="md:w-1/2">
            <Image
              src="/assets/ai.png" // Replace with your image path
              alt="AI Services Hyderabad"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">Why AI Matters</h2>
            <p>
              AI is reshaping industries — from finance and healthcare to retail
              and marketing. With machine learning models, NLP engines, and data
              intelligence, businesses can automate decisions, analyze behavior,
              and stay ahead of the curve.
            </p>
            <p>
              At{" "}
              <strong className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-rose-500">
                D4 Interactive
              </strong>
              , we build custom AI solutions tailored to your specific business
              challenges and goals.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <section className="space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold">Our AI Capabilities</h2>
          <ul className="list-disc pl-6">
            <li>Custom Machine Learning Models</li>
            <li>Natural Language Processing (NLP)</li>
            <li>AI Chatbot Development</li>
            <li>Predictive Analytics & Forecasting</li>
            <li>Computer Vision & Image Recognition</li>
            <li>Automation & AI Workflows</li>
            <li>Recommendation Systems</li>
          </ul>

          <h3 className="text-xl font-semibold pt-6">Industries We Serve</h3>
          <ul className="list-disc pl-6">
            <li>Healthcare & Diagnostics</li>
            <li>eCommerce & Retail</li>
            <li>Finance & Banking</li>
            <li>Logistics & Supply Chain</li>
            <li>Education & EdTech</li>
            <li>Travel & Hospitality</li>
          </ul>

          <h3 className="text-xl font-semibold pt-6">
            Our Approach to AI Development
          </h3>
          <ul className="list-disc pl-6">
            <li>Business Needs Analysis</li>
            <li>Data Collection & Preprocessing</li>
            <li>Model Selection & Training</li>
            <li>Validation, Testing, and Tuning</li>
            <li>Deployment & Monitoring</li>
            <li>Iterative Improvements</li>
          </ul>

          <p className="mt-6">
            Whether you're exploring AI for the first time or ready to scale
            with advanced models, D4 Interactive provides technical excellence
            and business insight — making innovation seamless and practical.
          </p>
        </section>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded hover:bg-indigo-700 transition"
          >
            Get a Free AI Strategy Session
          </a>
        </div>
      </main>
    </div>
  );
}
