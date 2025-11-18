"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ExpertCareSection() {
  return (
    <section className="w-full bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ---------------- LEFT CONTENT ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#355587] leading-tight">
            Expert care guided with precision and comfort.
          </h2>

          <p className="text-lg text-[#355587] max-w-lg">
            Professional dental care designed for comfort and confidence.
          </p>

          <Link href="/booking">
            <button className="px-6 py-3 bg-[#24417C]   text-white font-semibold rounded-full hover:bg-[#24417A]   transition-all">
              BOOK APPOINTMENT
            </button>
          </Link>
        </motion.div>

        {/* ---------------- RIGHT IMAGES ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex gap-8 justify-center"
        >
          {/* Image 1 */}
          <img
            src="/img/service/10003.webp"
            alt="Dental procedure"
            className="w-64 md:w-80 h-[420px] object-cover rounded-[40px]"
          />

          {/* Image 2 */}
          <img
            src="/img/service/10004.webp"
            alt="Happy patient"
            className="w-64 md:w-80 h-[420px] object-cover rounded-[40px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-300 bg-[#24417C] rounded-3xl py-14 text-white my-5 flex justify-center"
        >
          <div className="text-center max-w-xl px-6">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Have any questions?
            </h3>
            <p className=" leading-relaxed text-xl font-bold">
              Feel free to contact us anytime - +251-93-030-8130
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
