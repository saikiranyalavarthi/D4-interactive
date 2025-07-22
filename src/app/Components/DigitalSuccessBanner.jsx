"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaRocket, FaClock, FaUsers } from "react-icons/fa";

export default function DigitalSuccessBanner() {
  return (
    <section className="bg-[#062a6e] text-white py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Animated Gradient Circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-30 blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-gradient-to-br from-pink-500 via-indigo-500 to-blue-500 rounded-full opacity-30 blur-3xl animate-pulse z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="w-full">
          <Image
            src="/assets/image29.jpg"
            alt="Digital Success"
            width={500}
            height={500}
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side - Text and Stats */}
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Drive Digital Success Today
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            Accelerate your digital success by initiating contact with our team
            today.
          </p>

          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <StatCircle
              value="2,200+"
              label="Projects Launched"
              icon={<FaRocket className="text-white text-2xl mb-1" />}
            />
            <StatCircle
              value="10+"
              label="Years Experience"
              icon={<FaClock className="text-white text-2xl mb-1" />}
            />
            <StatCircle
              value="1500+"
              label="Satisfied Customers"
              icon={<FaUsers className="text-white text-2xl mb-1" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCircle({ value, label, icon }) {
  return (
    <div className="relative w-36 h-36 p-[2px] rounded-full bg-gradient-to-tr from-pink-500 via-indigo-500 to-blue-500 animate-spin-slow hover:scale-105 transition-transform duration-300">
      <div className="w-full h-full rounded-full bg-[#062a6e] flex flex-col items-center justify-center text-center">
        {icon}
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        <p className="text-sm text-gray-300">{label}</p>
      </div>
    </div>
  );
}
