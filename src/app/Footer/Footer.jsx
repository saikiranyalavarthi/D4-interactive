"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

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
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: About with Logo */}
        <div>
          <Image
            src="/assets/logo1.png"
            alt="D4 Interactive Logo"
            width={100}
            height={40}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed mb-4">
            Digital Marketing & Development Agency based in Hyderabad. We help
            your business grow with SEO, Ads, Websites, and Mobile Applications
            designed for visibility and scale.
          </p>
          <div className="flex gap-4 text-xl mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/d4interactive.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/d4-interactive-it-web-services-pvt-ltd/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services/D4Interactive" },
              { label: "Projects", href: "/projects" },
              { label: "Blogs", href: "/blogs" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/Policy/PrivacyPolicy" },
              {
                label: "Terms and Conditions",
                href: "/Policy/TermsAndConditions",
              },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-gray-300 hover:underline transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="hover:text-gray-300 hover:underline transition"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1" />
              <a
                href="mailto:info@d4interactive.com"
                className="underline hover:text-white"
              >
                info@d4interactive.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1" />
              <a
                href="tel:+917675921117"
                className="underline hover:text-white"
              >
                +91 76759 21117
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FaWhatsapp className="mt-1" />
              <a
                href="https://wa.me/917675921117"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                Room Number 301, CC44+525, 301, Hyderabad, Telangana 500089
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-6 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-300">
          <p>
            © {year}{" "}
            <span className="text-red-400 font-semibold">D4 Interactive</span>.
            All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/services/web-design" className="hover:underline">
              Web Designing
            </Link>
            <Link href="/services/web-development" className="hover:underline">
              Web Development
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
