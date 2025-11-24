"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaFileMedical,
  FaCreditCard,
  FaUser,
  FaAngleDown,
  FaAngleUp,
  FaPlusCircle,
} from "react-icons/fa";

export default function ReceptionistMenu() {
  type SectionKey = "appointments" | "billing" | "patients";

  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>(
    {
      appointments: false,
      billing: false,
      patients: false,
    }
  );

  const toggleSection = (section: SectionKey) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-full md:w-64 bg-white text-black p-4 h-screen shadow rounded-lg">
      <h2 className="text-xl font-bold mb-6 border-b pb-2">
        Receptionist Menu
      </h2>

      <div className="space-y-1">
        {/* Dashboard / My Info */}
        <Link
          href="/route/receptionist"
          className="flex items-center p-3 rounded hover:bg-gray-100 transition"
        >
          <FaTachometerAlt className="mr-3 text-gray-600" /> Dashboard
        </Link>

        {/* Manage Appointments */}
        <div
          onClick={() => toggleSection("appointments")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaCalendarAlt className="mr-3 text-gray-600" /> Manage Appointments
          </div>
          {openSections.appointments ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections.appointments && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/receptionist/appointment"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaFileMedical className="mr-2 text-gray-500" /> View Appointments
            </Link>
          </div>
        )}

        {/* Billing / Payments */}
        <div
          onClick={() => toggleSection("billing")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaCreditCard className="mr-3 text-gray-600" /> Patient Billing
          </div>
          {openSections.billing ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections.billing && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/receptionist/patient-billing"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaCreditCard className="mr-2 text-gray-500" /> View Billing
            </Link>
          </div>
        )}

        {/* Patient Information */}
        <div
          onClick={() => toggleSection("patients")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaUser className="mr-3 text-gray-600" /> Patient Information
          </div>
          {openSections.patients ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections.patients && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/receptionist/patient-info"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaUser className="mr-2 text-gray-500" /> View Patients
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
