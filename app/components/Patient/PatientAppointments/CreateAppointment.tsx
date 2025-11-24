"use client";

import { motion } from "framer-motion";

export default function AppointmentSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-extrabold text-[#24417C] mb-4 text-center">
            Book Your Visit at Our Clinic
          </h2>

          <p className="text-[#24417C] mb-10 text-lg text-center">
            Fast, easy, and convenient — choose your service, pick your time,
            and reserve your slot instantly.
          </p>

          <form className="space-y-6">
            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold text-[#24417C]">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-xl p-3 mt-2"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="font-semibold text-[#24417C]">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-xl p-3 mt-2"
                  placeholder="+251-9XXXXXXXX"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold text-[#24417C]">
                  Choose Dentist <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-xl p-3 mt-2"
                  value="Dr. Daniel"
                  readOnly
                />
              </div>

              <div>
                <label className="font-semibold text-[#24417C]">
                  Appointment Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-xl p-3 mt-2"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="font-semibold text-[#24417C]">
                Your Message
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-xl p-3 mt-2 h-40"
                placeholder="Any special requests or notes..."
              ></textarea>
            </div>

            {/* BUTTON */}
            <button className="bg-[#24417A] text-white font-semibold px-12 py-4 rounded-full text-sm tracking-wide hover:bg-[#0F2554] transition-all mx-auto block">
              BOOK APPOINTMENT
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
