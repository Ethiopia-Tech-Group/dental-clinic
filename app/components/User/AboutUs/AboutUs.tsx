"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="bg-gray py-16 px-4 sm:px-6 lg:px-18 mt-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE – TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-4">HOME &gt; ABOUT US</div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-blue-900 mb-6">About Us</h1>

            {/* Paragraph */}
            <p className="text-lg text-[#355587] mb-8 leading-relaxed">
              If you are in need of high-quality, professional and friendly
              dental care, look no further than our clinic.
            </p>

            {/* Button */}
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-full text-white bg-[#24417C]   hover:bg-[#24417A]   font-semibold transition"
            >
              LEARN MORE
            </Link>
          </motion.div>

          {/* RIGHT SIDE – IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-80 lg:h-96 w-full"
          >
            <Image
              src="/img/about/10001.webp"
              alt="Dental Clinic"
              fill
              //   className="object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
