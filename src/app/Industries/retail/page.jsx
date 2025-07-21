"use client";

import Head from "next/head";
import Link from "next/link";
import {
  FaShoppingCart,
  FaTags,
  FaUsers,
  FaStoreAlt,
  FaBullhorn,
  FaMobileAlt,
} from "react-icons/fa";

export default function RetailMarketingPage() {
  return (
    <>
      <Head>
        <title>Retail Marketing Solutions | Grow Your Storefront Sales</title>
        <meta
          name="description"
          content="Drive more foot traffic, boost brand loyalty, and increase retail sales with our advanced retail marketing strategies."
        />
      </Head>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-100 via-red-100 to-orange-50 text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 animate-fade-in-left">
            <h2 className="text-4xl font-bold">
              Transform Your Retail Sales with
              <span className="text-pink-600"> AI-Driven Engagement</span>
            </h2>
            <p className="text-gray-700">
              Maximize your store's potential with behavior-based insights. We
              help retail brands launch hyper-personalized campaigns that drive
              footfall and customer loyalty.
            </p>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in-right">
            <FaStoreAlt className="text-pink-600 text-[200px] md:text-[250px]" />
          </div>
        </div>
      </section>

      {/* Why Retail Marketing Section */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h3 className="text-3xl font-semibold text-pink-600">
            Why Choose Smart Retail Marketing?
          </h3>
          <p className="max-w-3xl mx-auto text-gray-600">
            From in-store displays to personalized mobile promotions, we use
            modern AI tools and local SEO techniques to help your brand stay
            competitive, relevant, and visible to your ideal shoppers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            <div className="flex flex-col items-center text-center">
              <FaTags className="text-pink-500 text-5xl mb-4" />
              <h4 className="text-xl font-bold">Targeted Promotions</h4>
              <p className="text-gray-600">
                Reach your ideal customers with limited-time offers and
                event-based notifications.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaUsers className="text-orange-500 text-5xl mb-4" />
              <h4 className="text-xl font-bold">Customer Loyalty Programs</h4>
              <p className="text-gray-600">
                Encourage repeat purchases with reward-based systems, discounts,
                and membership perks.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaBullhorn className="text-red-500 text-5xl mb-4" />
              <h4 className="text-xl font-bold">Local & Digital Reach</h4>
              <p className="text-gray-600">
                Optimize your local presence and digital ads to boost in-store
                and online visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Engagement */}
      <section className="py-20 px-6 bg-orange-50 text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 animate-fade-in-left">
            <h2 className="text-3xl font-bold">
              Connect with Shoppers On-the-Go
            </h2>
            <p className="text-gray-700">
              Use SMS, WhatsApp, and app notifications to drive urgency, share
              flash sales, and retain engagement even after they leave the
              store.
            </p>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in-right">
            <FaMobileAlt className="text-orange-500 text-[180px] md:text-[220px]" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-200 to-orange-100 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-3xl font-bold text-red-700">
            Ready to Boost Your Retail Growth?
          </h3>
          <p className="text-gray-700">
            Let our experts craft a custom strategy that turns window shoppers
            into loyal buyers.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white text-lg rounded-full transition"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
