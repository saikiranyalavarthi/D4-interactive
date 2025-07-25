"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const pointsLeft = [
  "Web Design & Development",
  "SEO",
  "Google Map Optimization",
  "Google Adwords",
];

const pointsRight = [
  "Social Media Marketing",
  "Expert Team",
  "Online Reputation Management",
  "Increased Visibility",
];

export default function ExperienceSection() {
  return (
    <div className="bg-white text-blue-700 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* LEFT SIDE TEXT */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            With 10+ years of experience,
            <br />
            you get service at the{" "}
            <span className="text-indigo-600">advanced level</span>.
          </h2>

          <p className="text-base md:text-lg text-black/90">
            <strong>D4 Interactive</strong> is a top-tier Digital Marketing
            Agency offering tailored services like SEO, Google Ads, Social Media
            Marketing, Reputation Management, and Web Development – trusted by
            businesses across India.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[...pointsLeft, ...pointsRight].map((point, i) => (
              <div key={i} className="flex items-center gap-2 text-black/90">
                <CheckCircle className="text-indigo-400" size={18} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2">
          <Image
            src="/assets/image12.jpg"
            alt="Marketing Strategy with Laptop"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
