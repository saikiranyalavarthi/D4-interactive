// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaWhatsapp,
//   FaYoutube,
// } from "react-icons/fa";
// export default function HeroSection() {
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     service: "Website Development",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const whatsappMessage = `Hi, I'm ${formData.name}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
//     const whatsappUrl = `https://wa.me/917675921117?text=${encodeURIComponent(
//       whatsappMessage
//     )}`;

//     window.open(whatsappUrl, "_blank");

//     setShowModal(false);
//     setFormData({
//       name: "",
//       email: "",
//       service: "Website Development",
//       message: "",
//     });
//   };

//   const handleRequestCallback = () => {
//     setShowModal(true); // Show popup on all devices
//   };

//   return (
//     <>
//       <section className="bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 text-white py-20 px-6 md:px-24 min-h-screen flex flex-col justify-center items-center text-center">
//         {/* Location Tag */}
//         <div className="mb-6">
//           <span className="inline-block border border-white/20 rounded-full px-4 py-1 text-sm bg-white/10 backdrop-blur-md text-white/80">
//             Based in Digital Marketing Agency in{" "}
//             <span className="text-blue-300 font-semibold">Hyderabad</span>.
//             Perform{" "}
//             <span className="text-purple-300 font-semibold">Globally</span>
//           </span>
//         </div>

//         {/* Headings */}
//         <h1 className="text-4xl md:text-8xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-300 via-blue-300 to-white">
//           D4 INTERACTIVE
//         </h1>
//         <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-white">
//           AI Digital Marketing Solutions
//         </h1>
//         <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-[linear-gradient(to_right,#ff8008,#ffc837)]">
//           Automate Your Digital Success
//         </h2>

//         {/* Description */}
//         <p className="mt-6 max-w-4xl text-base md:text-lg text-white/90 leading-relaxed">
//           We’re a creative team that turns ideas into eye-catching designs. From
//           websites to logos, we create solutions that look great and deliver
//           results for all kinds of businesses. As a top digital marketing
//           agency, we design strategies that help brands thrive in the digital
//           world. Whether you’re searching for a digital marketing agency website
//           or a trusted digital marketing company, we have the expertise to make
//           it happen. Join us, and let’s create something that’ll make people say{" "}
//           <span className="text-blue-200 font-semibold">“Wow!”</span>
//         </p>

//         {/* CTA Buttons */}
//         <div className="mt-12 relative flex items-stretch justify-center w-full max-w-md rounded-full overflow-hidden shadow-xl mx-auto group">
//           {/* Left Button: Opens modal */}
//           <button
//             onClick={handleRequestCallback}
//             className="w-1/2 bg-white text-black font-semibold px-6 py-4 text-sm md:text-base text-center z-10 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-400 hover:to-yellow-400 hover:text-white hover:scale-105"
//           >
//             REQUEST A <br className="hidden sm:block" /> CALLBACK
//           </button>

//           {/* Right Button: Goes to /contact */}
//           <Link
//             href="/contact"
//             className="w-1/2 bg-[#ffb000] text-black font-semibold px-6 py-4 text-sm md:text-base text-center z-10 flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-500 hover:text-white hover:scale-105"
//           >
//             SCHEDULE FREE <br className="hidden sm:block" /> CONSULTATION
//           </Link>

//           {/* OR Divider */}
//           <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#001d2f] text-white rounded-full flex items-center justify-center text-xs font-semibold border-4 border-white shadow-md z-20 group-hover:scale-110 transition-transform duration-300">
//             OR
//           </div>
//         </div>

//         <div className="flex gap-4 text-xl mt-4">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Facebook"
//             className="text-[#1877F2] transition-opacity duration-300 hover:opacity-70"
//           >
//             <FaFacebookF />
//           </a>
//           <a
//             href="https://www.instagram.com/d4interactive.in/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Instagram"
//             className="text-[#E4405F] transition-opacity duration-300 hover:opacity-70"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://www.linkedin.com/company/d4-interactive-it-web-services-pvt-ltd/?originalSubdomain=in"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//             className="text-[#0A66C2] transition-opacity duration-300 hover:opacity-70"
//           >
//             <FaLinkedinIn />
//           </a>
//           <a
//             href="https://www.youtube.com/@d4interactive"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="YouTube"
//             className="text-[#FF0000] transition-opacity duration-300 hover:opacity-70"
//           >
//             <FaYoutube />
//           </a>
//         </div>
//       </section>

//       {/* Popup Modal for All Devices */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl text-indigo-900 max-w-lg w-full relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-black"
//             >
//               &times;
//             </button>

//             {/* Contact Form */}
//             <form onSubmit={handleSubmit} className="grid gap-6">
//               <h2 className="text-2xl font-bold text-center text-indigo-800 mb-2">
//                 Get in Touch
//               </h2>

//               <div>
//                 <label className="block mb-1 font-medium">Your Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded border border-indigo-300 bg-white text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded border border-indigo-300 bg-white text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">
//                   What Service Do You Need?
//                 </label>
//                 <select
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded border border-indigo-300 bg-white text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 >
//                   <option value="Website Development">
//                     Website Development
//                   </option>
//                   <option value="App Development">App Development</option>
//                   <option value="Digital Marketing">Digital Marketing</option>
//                   <option value="WordPress Development">
//                     WordPress Development
//                   </option>
//                   <option value="AI Services">AI Services</option>
//                   <option value="Data Mining">Data Mining</option>
//                   <option value="Video Production">Video Production</option>
//                   <option value="AI Automation">AI Automation</option>
//                   <option value="App/Web Data Crawling">
//                     App/Web Data Crawling
//                   </option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block mb-1 font-medium">Message</label>
//                 <textarea
//                   name="message"
//                   rows="3"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded border border-indigo-300 bg-white text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition font-semibold"
//               >
//                 Send via WhatsApp
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Website Development",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm ${formData.name}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/917675921117?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
    setShowModal(false);
    setFormData({
      name: "",
      email: "",
      service: "Website Development",
      message: "",
    });
  };

  const handleRequestCallback = () => {
    setShowModal(true);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 text-white px-6 md:px-24 py-20 min-h-screen flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          <div className="mb-4">
            <span className="inline-block border border-white/20 rounded-full px-4 py-1 text-sm bg-white/10 backdrop-blur-md text-white/80">
              Based in Digital Marketing Agency in{" "}
              <span className="text-blue-300 font-semibold">Hyderabad</span>.
              Perform{" "}
              <span className="text-purple-300 font-semibold">Globally</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 via-blue-300 to-white mb-2">
            D4 INTERACTIVE
          </h1>
          <h2 className="text-3xl md:text-3xl font-bold text-white mb-2">
            AI Digital Marketing Solutions
          </h2>
          <h3 className="text-4xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
            Automate Your Digital Success
          </h3>

          <p className="mt-4 text-white/90 leading-relaxed text-base md:text-lg">
            We’re a creative team that turns ideas into eye-catching designs.
            From websites to logos, we create solutions that look great and
            deliver results. As a top digital marketing agency, we design
            strategies that help brands thrive. Let’s build something that makes
            people say{" "}
            <span className="text-blue-200 font-semibold">“Wow!”</span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
            <button
              onClick={handleRequestCallback}
              className="w-full sm:w-1/2 bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gradient-to-br hover:from-orange-400 hover:to-yellow-400 hover:text-white transition-transform transform hover:scale-105"
            >
              REQUEST CALLBACK
            </button>

            <Link
              href="/contact"
              className="w-full sm:w-1/2 bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-500 hover:text-white transition-transform transform hover:scale-105 text-center"
            >
              FREE CONSULTATION
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl mt-6 justify-center md:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:opacity-70"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/d4interactive.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4405F] hover:opacity-70"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/d4-interactive-it-web-services-pvt-ltd/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:opacity-70"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@d4interactive"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:opacity-70"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right Animation */}
        <div className="w-full md:w-1/2 max-w-md">
          <Lottie
            animationData={undefined}
            path="/assets/Robot-Bot 3D.json"
            loop={true}
            autoplay={true}
            className="w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] mx-auto"
          />
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl text-indigo-900 max-w-lg w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <h2 className="text-2xl font-bold text-center text-indigo-800 mb-2">
                Get in Touch
              </h2>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded border border-indigo-300 bg-white text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 rounded border border-indigo-300 bg-white text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-indigo-300 bg-white text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option>Website Development</option>
                <option>App Development</option>
                <option>Digital Marketing</option>
                <option>WordPress Development</option>
                <option>AI Services</option>
                <option>Data Mining</option>
                <option>Video Production</option>
                <option>AI Automation</option>
                <option>App/Web Data Crawling</option>
                <option>Other</option>
              </select>

              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="w-full px-4 py-2 rounded border border-indigo-300 bg-white text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition font-semibold"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
