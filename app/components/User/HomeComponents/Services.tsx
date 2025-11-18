"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Teeth Whitening",
    desc: "Brighten your smile with safe and effective whitening treatment designed to remove stains and restore natural shine.",
    icon: "/icon/10006.svg",
  },
  {
    title: "Tooth Extraction",
    desc: "A quick and comfortable procedure to remove damaged or infected teeth, ensuring your long-term oral health.",
    icon: "/icon/10006.svg",
  },
  {
    title: "Dental Implants",
    desc: "A permanent tooth replacement solution that looks and functions like a natural tooth, restoring your smile and bite strength.",
    icon: "/icon/10006.svg",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-8 py-16 bg-white">
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-900">
          Our Services
        </h2>
        <p className="text-center text-[#355587] mt-2">
          Advanced Treatments for a Brighter, Healthier Smile
        </p>
      </motion.div>

      {/* Services Cards Animation */}
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="p-6 border border-gray-100 rounded-2xl text-center hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={service.icon}
              width={50}
              height={50}
              alt={service.title}
              className="mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold text-blue-900">
              {service.title}
            </h3>
            <p className="text-[#355587] mt-2">{service.desc}</p>

            <button className="mt-4 text-[#355587] font-semibold flex items-center justify-center mx-auto">
              LEARN MORE <span className="ml-1">↗</span>
            </button>
          </motion.div>
        ))}
      </div>

      {/* View All Button Animation */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <Link href="/service-page">
          <button className="px-6 py-3 bg-[#24417C]   text-white font-semibold rounded-full hover:bg-[#24417A]  ">
            VIEW ALL
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
