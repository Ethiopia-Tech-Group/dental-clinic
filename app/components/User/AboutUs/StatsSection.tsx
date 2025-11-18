// components/StatsSection.tsx
"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  const stats = [
    {
      number: 10,
      suffix: " YEARS",
      description:
        "Delivering trusted dental care backed by years of skill and dedication.",
    },
    {
      number: 20,
      suffix: " DENTISTS",
      description:
        "A team of qualified and experienced dentists committed to your smile.",
    },
    {
      number: 4000,
      suffix: "K CLIENTS",
      description:
        "Proudly serving thousands of patients with quality, compassionate care.",
    },
  ];

  return (
    <>
      {/* --------------------- VIDEO MODAL (SAME AS HERO) ---------------------- */}
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
      <section className="bg-[#f7f9fc] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* ------------------ VIDEO PREVIEW (MATCHES HERO) ------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-16 relative"
          >
            <img
              src="/img/10001 (1).webp"
              alt="Dental Clinic"
              className="w-full h-64 lg:h-80 rounded-3xl object-cover"
            />

            {/* Play Button */}
            <button
              onClick={() => setVideoOpen(true)}
              className="absolute inset-0 flex justify-center items-center"
            >
              <div className="w-16 h-16 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center text-3xl">
                ▶
              </div>
            </button>
          </motion.div>

          {/* ----------------------------- STATS ------------------------------ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="text-xl md:text-2xl font-extrabold text-blue-900 mb-3">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-[#355587]  leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
