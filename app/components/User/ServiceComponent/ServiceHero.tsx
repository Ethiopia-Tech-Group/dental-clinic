"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceHeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 ">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 space-y-4 sm:space-y-6 px-2 sm:px-6 md:px-0"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.95, ease: "easeOut" }}
      >
        <div className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-4">
          HOME &gt; SERVICE
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#24417C] leading-snug">
          Our Services
        </h2>

        <p className="text-[#355587] text-sm sm:text-base md:text-lg">
          Professional Care. Comfortable Experience.
        </p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/2 mt-2 lg:mt-0 flex flex-col items-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.95, ease: "easeOut" }}
      >
        <Image
          src="/img/10005.jpg"
          width={400}
          height={400}
          className="rounded w-72 sm:w-80 md:w-96 "
          alt="Dr. Munira Ejab"
        />
      </motion.div>
    </section>
  );
}
