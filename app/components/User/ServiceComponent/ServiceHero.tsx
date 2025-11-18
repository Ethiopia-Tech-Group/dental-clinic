"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceHeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-24  ">
      {/* Left Section */}
      <motion.div
        className="md:w-2/5 lg:w-1/2 space-y-6 px-12 md:pr-16"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.95, ease: "easeOut" }}
      >
        <div className="text-sm text-gray-500 mb-4">HOME &gt; SERVICE</div>

        <h2 className="text-5xl font-extrabold text-[#24417C]">Our Services</h2>
        <p className="text-[#355587]">
          Professional Care. Comfortable Experience.
        </p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="md:w-3/5 lg:w-1/2 mt-8 md:mt-5 flex flex-col items-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.95, ease: "easeOut" }}
      >
        <Image
          src="/img/10005.jpg"
          width={400}
          height={400}
          className="rounded"
          alt="Dr. Munira Ejab"
        />
      </motion.div>
    </section>
  );
}
