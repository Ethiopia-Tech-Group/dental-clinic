// components/ServicesSection.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaTooth,
  FaSmile,
  FaTeeth,
  FaRegGrinBeam,
  FaRegHandPeace,
} from "react-icons/fa";

export default function ServiceType() {
  const services = [
    {
      title: "Teeth Whitening",
      description:
        "Brighten your smile with safe and effective whitening treatment designed to remove stains and restore natural shine.",
      icon: <FaSmile className="text-blue-900 w-10 h-10 mb-4" />,
    },
    {
      title: "Dental Crown",
      description:
        "A dental crown is a custom-made cap placed over a damaged or weakened tooth to restore its shape, strength, and appearance. It protects the tooth and improves your smile.",
      icon: <FaTooth className="text-blue-900 w-10 h-10 mb-4" />,
    },
    {
      title: "Tooth Extraction",
      description:
        "A quick and comfortable procedure to remove damaged or infected teeth, ensuring your long-term oral health.",
      icon: <FaTooth className="text-blue-900 w-10 h-10 mb-4" />,
    },
    {
      title: "Dental Filling",
      description:
        "A dental filling is used to repair a tooth affected by cavities or minor damage. The decayed part is removed, and the tooth is restored with a durable, natural-looking material.",
      icon: <FaTeeth className="text-blue-900 w-10 h-10 mb-4" />,
    },
    {
      title: "Dental Implants",
      description:
        "A permanent tooth replacement solution that looks and functions like a natural tooth, restoring your smile and bite strength.",
      icon: <FaRegGrinBeam className="text-blue-900 w-10 h-10 mb-4" />,
    },
    {
      title: "Teeth Braces",
      description:
        "Teeth braces are orthodontic devices that straighten teeth, correct bite issues, and align your jaw for a healthier and more attractive smile. Treatment is customized for each patient.",
      icon: <FaRegHandPeace className="text-blue-900 w-10 h-10 mb-4" />,
    },
  ];

  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-14">
          Our Dental Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#f7f9fc] text-[#355587] rounded-3xl p-16 cursor-pointer transition-all duration-300 hover:bg-[#24417C] hover:text-white flex flex-col items-center text-center h-full"
            >
              {/* Service Icon */}
              {service.icon}

              {/* Service Title */}
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>

              {/* Service Description */}
              <p className="mb-6 leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Book Now Button */}
              <Link
                href="/booking"
                className="inline-flex items-center px-5 py-3 bg-[#24417A]  text-white border border-blue-900 font-semibold rounded-full transition-all duration-300 mt-auto hover:bg-white hover:text-blue-900 hover:border-blue-900"
              >
                BOOK NOW
                <span className="ml-2">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
