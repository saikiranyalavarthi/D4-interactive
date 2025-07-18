"use client";

import Image from "next/image";

export default function WebCrawlingPage() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-black">
      <div className="grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">
            Web Crawling & Data Scraping
          </h2>

          <p className="text-gray-700 mb-4">
            Unlock valuable insights from the web with our powerful web crawling
            and data scraping services. At D4 Interactive, we build customized
            solutions to extract structured data from websites, marketplaces,
            directories, and social media platforms.
          </p>

          <p className="text-gray-700 mb-4">
            Whether you need product pricing, real estate listings, competitor
            analysis, job listings, or public data extraction — our bots can
            collect, clean, and deliver the data in your preferred format (JSON,
            Excel, CSV, or API).
          </p>

          <p className="text-gray-700 mb-4">
            We understand that every business has unique data requirements.
            That’s why we design scrapers tailored to your target sites,
            pagination logic, filters, and content structure — ensuring high
            accuracy and minimal maintenance.
          </p>

          <p className="text-gray-700 mb-4">
            Our infrastructure is built to scale — whether it's crawling
            thousands of pages a day or setting up cloud-based job scheduling
            and auto-retries to ensure data continuity and uptime.
          </p>

          <p className="text-gray-700 mb-4">
            All data is delivered in real-time or scheduled intervals via cloud
            storage, APIs, or direct integration with your database or CRM
            system.
          </p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-4">
            <li>Custom Python Scrapers (BeautifulSoup, Scrapy, Puppeteer)</li>
            <li>Headless browser automation (Playwright, Selenium)</li>
            <li>Captcha bypass & anti-bot protection</li>
            <li>Scheduled scraping and data delivery pipelines</li>
            <li>Proxy rotation, IP spoofing & stealth scraping techniques</li>
            <li>Compliance checks for robots.txt and data policies</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <Image
            src="/assets/web.png"
            alt="Web Crawling and Scraping"
            className="rounded-2xl shadow-xl"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
