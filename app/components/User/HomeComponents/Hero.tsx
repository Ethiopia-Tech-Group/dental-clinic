"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16  ">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 space-y-6 px-2 sm:px-6 md:px-0"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.95, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A3A79] leading-snug">
          Your Smile, Our Priority
        </h1>
        <p className="text-[#355587] text-sm sm:text-base md:text-lg">
          If you are in need of high-quality, professional and friendly dental
          care, look no further than our clinic.
        </p>
        <Link href="/booking">
          <button className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#24417A] mt-3 text-white font-semibold rounded-full hover:bg-blue-900 transition-all inline-flex items-center text-sm sm:text-base">
            BOOK APPOINTMENT
            <span className="ml-2 text-white">→</span>
          </button>
        </Link>

        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <div className="flex -space-x-2">
            <Image
              src="/img/10001.webp"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
              alt="avatar"
            />
            <Image
              src="/img/10002.webp"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
              alt="avatar"
            />
            <Image
              src="/img/10003.webp"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
              alt="avatar"
            />
          </div>
          <span className="text-[#355587] text-xs sm:text-sm md:text-base text-center sm:text-left">
            TRUSTED BY 150K+ PEOPLE AROUND ETHIOPIA
          </span>
        </div>

        <div className="flex flex-col space-y-2 text-[#355587] mt-4 text-xs sm:text-sm md:text-base">
          <span className="flex items-center space-x-2">
            <span>📍</span>
            <span>Bisreat Gebreal behind Adot Bldg</span>
          </span>
          <span className="flex items-center space-x-2">
            <span>📞</span>
            <span>+251-93-030-8130</span>
          </span>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.95, ease: "easeOut" }}
      >
        <Image
          src="/img/2df612c4e1992f701036f697b7bf16e2.jpg"
          width={400}
          height={500}
          className="rounded w-72 sm:w-80 md:w-96 lg:w-120"
          alt="Dr. Munira Ejab"
        />
        {/* <h3 className="text-blue-900 text-lg sm:text-xl md:text-2xl font-bold mt-4 text-center lg:text-left">
          Dr. Munira Ejab
        </h3> */}
      </motion.div>
    </section>
  );
}
