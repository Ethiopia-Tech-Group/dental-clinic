"use client";

import { motion } from "framer-motion";

export default function ContactMapSection() {
  return (
    <section className="w-full bg-white py-29 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-3xl font-extrabold text-[#24417C] mb-2"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-lg text-[#24417C] mb-12"
        >
          Book your appointment today.
        </motion.p>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, ease: "easeOut" }}
          className="bg-[#F3F8FE] p-10 rounded-[40px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393.3303038644371!2d38.751013554905376!3d9.00177269189916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f7f2ad37bd%3A0xe8b085468f4e6a2a!2sDr.munira%20speciality%20clinic!5e0!3m2!1sen!2set!4v1709987664490!5m2!1sen!2set"
            className="w-full h-[520px] rounded-[30px] border-none"
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
