"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-12 py-16">
      {/* Left Section */}
      <motion.div
        className="md:w-2/5 lg:w-1/2 space-y-6 px-12 md:pr-16"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.95, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold text-[#1A3A79]">
          Your Smile, Our Priority
        </h2>
        <p className="text-[#355587]">
          If you are in need of high-quality, professional and friendly dental
          care, look no further than our clinic.
        </p>
        <Link href="/booking">
          <button className="px-6 py-3 bg-[#24417A]   text-white font-semibold rounded-full hover:bg-blue-900 transition-all">
            BOOK APPOINTMENT
          </button>
        </Link>
        <div className="flex items-center space-x-4 mt-4">
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
          <span className="text-[#355587] text-sm">
            TRUSTED BY 150K+ PEOPLE AROUND ETHIOPIA
          </span>
        </div>
        <div className="flex items-center space-x-4 mt-2 text-[#355587]">
          <span>📍 Bisreat gebreal behind adot bldg</span>
          <span>📞 +251-93-030-8130</span>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="md:w-3/5 lg:w-1/2 mt-5 md:mt-5 flex flex-col items-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.95, ease: "easeOut" }}
      >
        <Image
          src="/img/10005.jpg"
          width={500}
          height={600}
          className="rounded"
          alt="Dr. Munira Ejab"
        />
        <h3 className="text-blue-900 text-xl font-bold mt-4">
          Dr. Munira Ejab
        </h3>
      </motion.div>
    </section>
  );
}
