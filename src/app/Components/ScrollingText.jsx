"use client";
import { motion } from "framer-motion";

export default function AnimatedD4Interactive() {
  const repeatedText = Array(20).fill("D4 INTERACTIVE");

  return (
    <section className="w-full overflow-hidden py-4 bg-gradient-to-r from-black via-[#AA2428] to-black">
      <div className="relative w-full">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {repeatedText.map((text, index) => (
            <div
              key={index}
              className="text-[60px] sm:text-[80px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-white to-red-300 whitespace-nowrap px-4"
            >
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
