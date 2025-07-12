"use client";
import { motion } from "framer-motion";

export default function AnimatedD4Interactive() {
  const repeatedText = Array(20).fill("D4 INTERACTIVE");

  return (
    <section className="w-full overflow-hidden py-4 bg-gradient-to-br from-blue-900 via-purple-700 to-indigo-900">
      <div className="relative w-full">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {repeatedText.map((text, index) => (
            <div
              key={index}
              className="text-[30px] sm:text-[40px] md:text-[60px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-100 to-indigo-300 whitespace-nowrap px-6"
            >
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
