// pages/index.js
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="w-full">
      {/* ----------------------------- VIDEO MODAL ----------------------------- */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[999]"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="bg-white p-4 rounded-xl max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/img/10001 (1).webp"
                controls
                autoPlay
                className="w-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --------------------------------------------------------------------- */}
      {/* ------------------------- SECTION 1 (HERO) --------------------------- */}
      {/* --------------------------------------------------------------------- */}

      <section className="w-full py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              A Dental Clinic That You Can Trust
            </h3>

            <p className="text-[#355587] leading-relaxed mb-6">
              Dr. Munira Specialty Dental Clinic is one of the leading dental
              clinics in the city, known for its exceptional service and
              commitment to patient care. We provide a wide range of
              professional dental treatments using modern technology and highly
              skilled specialists.
            </p>

            <p className="text-[#355587] leading-relaxed">
              Our goal is to ensure every patient receives personalized care in
              a comfortable and welcoming environment. From routine check-ups to
              advanced dental procedures, we are dedicated to creating healthy,
              beautiful smiles for all our patients.
            </p>
          </motion.div>

          {/* IMAGE WITH PLAY BUTTON */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/img/10001 (1).webp"
              alt="Dental Clinic"
              className="w-full rounded-3xl object-cover"
            />

            <button
              onClick={() => setVideoOpen(true)}
              className="absolute inset-0 flex justify-center items-center"
            >
              <div className="w-16 h-16 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center text-3xl">
                ▶
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* ----------------------- SECTION 2 (ONLINE PRESENCE) ------------------ */}
      {/* --------------------------------------------------------------------- */}

      <section className="w-full py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/img/10002.jpg"
              alt="Clinic Technology"
              className="w-full rounded-3xl object-cover"
            />
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Transform Your Clinic’s Online Presence
            </h3>

            <p className="text-[#355587] leading-relaxed mb-6">
              A modern, fast, and trustworthy website built to help patients
              find you easily, book appointments, and access your services with
              confidence.
            </p>

            <h3 className="font-bold text-xl text-[#355587] mb-4">
              What Your Website Includes:
            </h3>

            {/* INLINE LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-[#355587]">
              <div>✔ Book appointments online quickly</div>
              <div>✔ Online doctor visits</div>
              <div>✔ Find your clinic easily on Google</div>
              <div>✔ Appointment reminders</div>
              <div>✔ Chat or email for consultations</div>
              <div>✔ Social media integration</div>
              <div>✔ Easy and safe online payments</div>
              <div>✔ AI tools to solve common patient problems</div>
            </div>
          </motion.div>
        </div>

        {/* BUTTON UNDER SECTION */}
        <div className="flex justify-center mt-14">
          <motion.button
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-10 py-4 bg-[#24417C]  text-white rounded-full font-semibold shadow-md hover:bg-[#24417A]   transition"
          >
            GET STARTED TODAY
          </motion.button>
        </div>
      </section>
    </div>
  );
}
