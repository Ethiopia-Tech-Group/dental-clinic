"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceVedio() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      {/* --------------------- VIDEO MODAL ---------------------- */}
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

      {/* ----------------------------- MAIN SECTION ---------------------------- */}
      <section className="bg-[#F3F8FE] py-28 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* SAFETY TITLE */}
          <div className="text-sm tracking-widest text-[#355587] font-semibold mb-3">
            SAFETY
          </div>

          {/* HEADLINE */}
          <h2 className="text-4xl font-extrabold text-[#355587] mb-4">
            We put the safety first
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#355587] text-lg max-w-2xl mx-auto mb-12">
            From sterilized equipment to professional procedures, your safety is
            always our top priority.
          </p>

          {/* IMAGE + PLAY BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative max-w-3xl mx-auto rounded-[40px] overflow-hidden shadow-sm"
          >
            <img
              src="/img/service/10002.webp"
              alt="Dental Clinic"
              className="w-full rounded-[40px] object-cover"
            />

            <button
              onClick={() => setVideoOpen(true)}
              className="absolute inset-0 flex justify-center items-center"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl text-black">
                ▶
              </div>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
