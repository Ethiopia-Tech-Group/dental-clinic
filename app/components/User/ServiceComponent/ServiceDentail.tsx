"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceDentail() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-12 py-16 bg-gray-50">
      {/* Left Section */}
      <motion.div
        className="md:w-3/5 lg:w-1/2 mt-8 md:mt-5 flex flex-col items-center"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/img/service/10001.webp"
          width={500}
          height={600}
          className="rounded"
          alt="Dr. Munira Ejab"
        />
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="md:w-2/5 lg:w-1/2 space-y-6 px-12 md:pr-16"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4 className=" font-extrabold text-[#355587]">priority</h4>
        <h4 className="text-2xl font-extrabold text-[#355587]">
          Our clients are our priority
        </h4>
        <p className="text-[#355587]">
          We are committed to delivering care that puts your needs first,
          ensuring every visit is comfortable, safe, and tailored to you.
        </p>
        <Link href="/booking">
          <button className="px-6 py-3 bg-[#24417C]   text-white font-semibold rounded-full hover:bg-blue-900 transition-all">
            BOOK APPOINTMENT
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
