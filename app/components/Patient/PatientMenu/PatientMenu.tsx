"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaFileMedical,
  FaPrescriptionBottleAlt,
  FaCreditCard,
  FaUser,
  FaCog,
  FaPlusCircle,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";

export default function PatientMenu() {
  type SectionKey = "appointments" | "records" | "payments" | "profile";

  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>(
    {
      appointments: false,
      records: false,
      payments: false,
      profile: false,
    }
  );

  const toggleSection = (section: SectionKey) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-full md:w-64 bg-white text-black p-4 h-screen shadow rounded-lg">
      <h2 className="text-xl font-bold mb-6 border-b pb-2">Patient Menu</h2>

      <div className="space-y-1">
        <Link
          href="/route/patient"
          className="flex items-center p-3 rounded hover:bg-gray-100 transition"
        >
          <FaTachometerAlt className="mr-3 text-gray-600" /> Dashboard
        </Link>

        {/* Appointments */}
        <div
          onClick={() => toggleSection("appointments")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaCalendarAlt className="mr-3 text-gray-600" /> Appointments
          </div>
          {openSections.appointments ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections.appointments && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/patient/appointment"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaFileMedical className="mr-2 text-gray-500" /> View Appointments
            </Link>
            <Link
              href="/route/patient/appointment/create"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaPlusCircle className="mr-2 text-gray-500" /> Book Appointment
            </Link>
          </div>
        )}

        {/* Medical Records */}
        <div
          onClick={() => toggleSection("records")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaFileMedical className="mr-3 text-gray-600" /> Medical Records
          </div>
          {openSections.records ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections.records && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/patient/medical-record"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaFileMedical className="mr-2 text-gray-500" /> View Records
            </Link>
            {/* <Link
              href="/route/patient/records/upload"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaPlusCircle className="mr-2 text-gray-500" /> Upload Record
            </Link> */}
          </div>
        )}

        {/* Prescriptions */}
        <Link
          href="/route/patient/prescriptions"
          className="flex items-center p-3 rounded hover:bg-gray-100 transition"
        >
          <FaPrescriptionBottleAlt className="mr-3 text-gray-600" />{" "}
          Prescriptions
        </Link>

        <Link
          href="/route/patient/treatments"
          className="flex items-center p-3 rounded hover:bg-gray-100 transition"
        >
          <FaPrescriptionBottleAlt className="mr-3 text-gray-600" /> Treatments
        </Link>

        {/* Payments */}
        <div
          onClick={() => toggleSection("payments")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaCreditCard className="mr-3 text-gray-600" /> Payments
          </div>
          {openSections.payments ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections.payments && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/patient/payment"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaCreditCard className="mr-2 text-gray-500" /> View Payments
            </Link>
            <Link
              href="/route/patient/payment/billing"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaCreditCard className="mr-2 text-gray-500" />
              Patient Billing
            </Link>
          </div>
        )}

        {/* Profile */}
        <div
          onClick={() => toggleSection("profile")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaUser className="mr-3 text-gray-600" /> My Profile
          </div>
          {openSections.profile ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections.profile && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/patient/profile"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaUser className="mr-2 text-gray-500" /> View Profile
            </Link>
            <Link
              href="/route/patient/profile/password-setting"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaCog className="mr-2 text-gray-500" /> Change Password
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
