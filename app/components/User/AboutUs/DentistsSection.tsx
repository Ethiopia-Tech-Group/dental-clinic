// components/DentistsSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function DentistsSection() {
  const dentists = [
    {
      name: "Dr. Daniel",
      role: "Professional Dentist",
      img: "/img/about/10003.webp",
    },
    {
      name: "Dr. Barbara",
      role: "Professional Dentist",
      img: "/img/about/10004.webp",
    },
    {
      name: "Dr. Samantha",
      role: "Professional Dentist",
      img: "/img/about/10006.webp",
    },
  ];

  return (
    <section className="bg-[#f7f9fc] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-900 text-center mb-14"
        >
          Meet Our Professional Dentists
        </motion.h2>

        {/* Dentist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {dentists.map((dentist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              {/* Dentist Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="w-62 h-62 rounded-full overflow-hidden mx-auto mb-5 shadow-md"
              >
                <Image
                  src={dentist.img}
                  alt={dentist.name}
                  width={210}
                  height={210}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-blue-900 mb-1">
                {dentist.name}
              </h3>

              {/* Role */}
              <p className="text-[#355587] mb-4">{dentist.role}</p>

              {/* Social Icons */}
              <div className="flex items-center justify-center space-x-4 mt-3">
                <div className="w-10 h-10 rounded-full bg-[#24417C] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <FaFacebookF className="text-white text-lg" />
                </div>

                <div className="w-10 h-10 rounded-full bg-[#24417C]  flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <FaInstagram className="text-white text-lg" />
                </div>

                <div className="w-10 h-10 rounded-full bg-[#24417C]  flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <FaTwitter className="text-white text-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Promotion Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#24417C] rounded-3xl p-10 md:p-14 text-white my-20"
        >
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
            {/* Left Side Text */}
            <div className="text-left max-w-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Get 20% off Your First Visit
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Enjoy a warm welcome to our clinic with a special 20% discount
                on your first appointment. Your perfect smile begins now.
              </p>
            </div>

            {/* Right Side Button */}
            <Link
              href="/appointment"
              className="px-10 py-4 text-lg font-semibold bg-white text-blue-900 rounded-full shadow-md hover:bg-blue-50 transition-all duration-200 whitespace-nowrap"
            >
              BOOK APPOINTMENT
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
