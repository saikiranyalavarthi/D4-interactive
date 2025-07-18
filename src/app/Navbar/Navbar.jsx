"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const serviceLinks = [
  { name: "Pay Per Click Advertising", href: "/services/ppc" },
  { name: "Search Engine Optimization", href: "/services/SEOPage" },
  { name: "Social Media Marketing", href: "/services/social-media" },
  { name: "Web Designing", href: "/services/web-design" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Web Hosting", href: "/services/web-hosting" },

  { name: "Mobile App Development", href: "/services/mobile-app-development" },
  { name: "AI Development", href: "/services/Ai" },
  { name: "Web Crawling", href: "/services/web-crawling" },
  { name: "D4 Interactive", href: "/services/D4Interactive" },
];

// ✅ Fixed href to match actual folder casing
const policyLinks = [
  { name: "Privacy Policy", href: "/Policy/PrivacyPolicy" },
  { name: "Terms and Conditions", href: "/Policy/TermsAndConditions" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg px-6 py-4 text-black z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/logo.png"
            alt="D4 Interactive Logo"
            width={80}
            height={28}
            className="object-contain"
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-base relative">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center hover:underline">
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white rounded-md shadow-lg opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 z-40">
              {serviceLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="block px-4 py-2 hover:bg-gray-300 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Policy Dropdown */}
          <div className="relative group">
            <button className="flex items-center hover:underline">
              Policy <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white rounded-md shadow-lg opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-300 z-40">
              {policyLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="block px-4 py-2 hover:bg-gray-300 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/blogs" className="hover:underline">
            Blogs
          </Link>
          <Link
            href="/contact"
            className="bg-white text-red-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 px-2">
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            About
          </Link>

          <details className="group cursor-pointer">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span>Services</span> <ChevronDown size={16} />
            </summary>
            <div className="pl-4 mt-2 flex flex-col space-y-2">
              {serviceLinks.map((link, i) => (
                <Link key={i} href={link.href} onClick={toggleMenu}>
                  {link.name}
                </Link>
              ))}
            </div>
          </details>

          <details className="group cursor-pointer">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span>Policy</span> <ChevronDown size={16} />
            </summary>
            <div className="pl-4 mt-2 flex flex-col space-y-2">
              {policyLinks.map((link, i) => (
                <Link key={i} href={link.href} onClick={toggleMenu}>
                  {link.name}
                </Link>
              ))}
            </div>
          </details>

          <Link href="/projects" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="/blogs" onClick={toggleMenu}>
            Blogs
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="bg-white text-red-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition text-center"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
