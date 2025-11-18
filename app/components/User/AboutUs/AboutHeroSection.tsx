"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHeroSection() {
  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[450px]">
          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full min-h-[600px]"
          >
            <Image
              src="/img/about/10002.webp"
              alt="Dental Clinic"
              fill
              className="object-cover object-center rounded-xl shadow-lg"
            />
          </motion.div>

          {/* RIGHT — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-4xl font-extrabold text-blue-900 mb-6 leading-tight">
              Beautiful smiles that last a lifetime
            </h2>

            <p className="text-lg text-[#355587] mb-8 leading-relaxed">
              Our team of experienced and compassionate dentists is committed to
              delivering personalized treatment plans to meet your unique needs.
              From routine cleanings and fillings to advanced cosmetic and
              restorative procedures, we offer a comprehensive range of services
              to ensure your oral health is at its best.
            </p>

            <div className="space-y-4">
              {[
                "Professional Dentists",
                "Quality Assurance",
                "Painless Procedure",
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <span className="text-[#355587] text-xl font-bold mr-3">
                    ✓
                  </span>
                  <span className="text-[#355587] font-medium text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
