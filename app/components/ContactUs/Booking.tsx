"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function AppointmentSection() {
  return (
    <section className="w-full bg-white py-28 px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* LEFT CONTACT BOX */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, ease: "easeOut" }}
          className="bg-[#F2F3F4] p-10 rounded-[40px] space-y-10"
        >
          {/* Phone */}
          <div className="space-y-2">
            <div className="text-[#24417C] font-semibold text-xl flex items-center gap-3">
              <FaPhoneAlt className="text-[#24417C] w-6 h-6" />
            </div>
            <div className="text-[#24417C] font-semibold text-xl flex">
              Call Us Today
            </div>
            <div className="text-[#24417C]">+251-93-030-8130</div>
            <div className="text-[#24417C]">+251-96-701-1760</div>
          </div>

          <hr className="border-gray-300" />

          {/* Email */}
          <div className="space-y-2">
            <div className="text-[#24417C] font-semibold text-xl flex items-center gap-3">
              <FaEnvelope className="text-[#24417C] w-6 h-6" />
            </div>
            <div className="text-[#24417C] font-semibold text-xl flex">
              Send a message
            </div>
            <div className="text-[#24417C]">drmunira@mail.com</div>
          </div>

          <hr className="border-gray-300" />

          {/* Location */}
          <div className="space-y-2">
            <div className="text-[#24417C] font-semibold text-xl flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#24417C] w-6 h-6" />
            </div>
            <div className="text-[#24417C] font-semibold text-xl flex">
              Our Clinics
            </div>
            <div className="text-[#24417C]">
              Bisreat gebreal behind adot building
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-extrabold text-[#24417C] mb-4">
            Book your visit at our clinic
          </h2>

          <p className="text-[#24417C] mb-10 text-lg">
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
                />
              </div>

              <div>
                <label className="font-semibold text-[#24417C]">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-xl p-3 mt-2"
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
              <textarea className="w-full border border-gray-300 rounded-xl p-3 mt-2 h-40"></textarea>
            </div>

            {/* Button */}
            <button className="bg-[#24417A] text-white font-semibold px-12 py-4 rounded-full text-sm tracking-wide hover:bg-[#0F2554] transition-all mx-auto block">
              BOOK APPOINTMENT
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
