"use client";

import Link from "next/link";
import Head from "next/head";
import {
  FaServer,
  FaNetworkWired,
  FaCloud,
  FaLock,
  FaTools,
  FaShieldAlt,
  FaDatabase,
  FaMicrochip,
  FaLaptopCode,
} from "react-icons/fa";

export default function ITSolutionsPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Head>
        <title>AI-Driven IT Solutions | D4 interactive</title>
        <meta
          name="description"
          content="Empower your IT strategy with AI-powered infrastructure, security, and optimization services from D4 interactive."
        />
        <meta
          name="keywords"
          content="IT services, AI in IT, server infrastructure, cybersecurity, cloud solutions, DevOps, managed IT"
        />
      </Head>

      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-tr from-blue-100 via-blue-200 to-white animate-fade-in-up">
        <h5 className="text-xs tracking-widest uppercase text-blue-600 mb-3">
          Smart IT Solutions
        </h5>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 bg-clip-text text-transparent">
            Revolutionize
          </span>{" "}
          Your Infrastructure with
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            AI-Powered IT Services
          </span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          From intelligent network management to predictive security and agile
          cloud deployment — we modernize your entire tech stack.
        </p>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 bg-blue-50 text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 animate-fade-in-left">
            <h2 className="text-4xl font-bold">
              Predictive Optimization for
              <span className="text-blue-600"> IT Infrastructure</span>
            </h2>
            <p className="text-gray-600">
              Leverage machine learning to optimize workloads, monitor systems
              in real-time, and automate recovery — reducing costs and downtime.
            </p>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in-right">
            <FaMicrochip className="text-blue-600 text-[200px] md:text-[250px]" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-tr from-blue-100 to-blue-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {["99.9% Uptime", "45% Reduced IT Cost", "3X Faster Deployments"].map(
            (stat, idx) => (
              <div key={idx} className="animate-zoom-in">
                <p className="text-5xl font-bold text-blue-600">
                  {stat.split(" ")[0]}
                </p>
                <p className="text-sm mt-2 text-gray-700">
                  {stat.split(" ").slice(1).join(" ")}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          AI-Enhanced IT Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaServer />, name: "Server Infrastructure" },
            { icon: <FaNetworkWired />, name: "Network Management" },
            { icon: <FaCloud />, name: "Cloud Migration" },
            { icon: <FaLock />, name: "AI Cybersecurity" },
            { icon: <FaTools />, name: "Managed IT Services" },
            { icon: <FaShieldAlt />, name: "Compliance & Risk" },
            { icon: <FaDatabase />, name: "Data Backup & Recovery" },
            { icon: <FaLaptopCode />, name: "DevOps Automation" },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-blue-50 text-blue-900 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 animate-fade-in-up"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <p className="font-semibold text-sm">{service.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-6 bg-blue-100 text-black text-center">
        <h2 className="text-3xl font-bold mb-8">
          Trusted by Growing Tech Teams
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["TechNova Solutions", "ByteGrid Systems", "NimbusWorks Inc."].map(
            (brand, idx) => (
              <div
                key={idx}
                className="bg-white text-blue-800 p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 animate-fade-in"
              >
                <h3 className="text-xl font-semibold mb-2">{brand}</h3>
                <p className="text-sm">
                  {idx === 0 && "Next-gen IT transformations."}
                  {idx === 1 && "Secure. Scalable. Smart."}
                  {idx === 2 && "Cloud-first innovation leaders."}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Reinvent Your IT Infrastructure
          </h2>
          <Link href="/contact">
            <button className="flex items-center gap-2 border border-white rounded-full px-6 py-3 text-white hover:bg-white hover:text-blue-600 transition font-semibold">
              <span className="text-xl">→</span> Book a Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
