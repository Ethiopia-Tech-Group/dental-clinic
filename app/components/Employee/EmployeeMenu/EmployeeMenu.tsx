"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaUser,
  FaCalendarAlt,
  FaFileMedical,
  FaTooth,
  FaProcedures,
  FaStar,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";

export default function EmployeeMenu() {
  type SectionKey =
    | "appointments"
    | "records"
    | "treatments"
    | "procedures"
    | "reviews"
    | "info";

  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>(
    {
      appointments: false,
      records: false,
      treatments: false,
      procedures: false,
      reviews: false,
      info: false,
    }
  );

  const toggle = (key: SectionKey) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full md:w-64 bg-white text-black p-4 h-screen shadow rounded-lg">
      <h2 className="text-xl font-bold mb-6 border-b pb-2">Employee Menu</h2>

      <div className="space-y-1">
        {/* My Information */}
        <div
          onClick={() => toggle("info")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaUser className="mr-3 text-gray-600" /> My Information
          </div>
          {openSections.info ? <FaAngleUp /> : <FaAngleDown />}
        </div>

        {openSections.info && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/employee/profile"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaUser className="mr-2 text-gray-500" /> View My Info
            </Link>
          </div>
        )}

        {/* Appointments */}
        <div
          onClick={() => toggle("appointments")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaCalendarAlt className="mr-3 text-gray-600" /> Upcoming
            Appointments
          </div>
          {openSections.appointments ? <FaAngleUp /> : <FaAngleDown />}
        </div>

        {openSections.appointments && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/employee/up-coming-appointment"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaCalendarAlt className="mr-2 text-gray-500" /> View Appointments
            </Link>
          </div>
        )}

        {/* Medical Records */}
        <div
          onClick={() => toggle("records")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaFileMedical className="mr-3 text-gray-600" /> Patient Medical
            Records
          </div>
          {openSections.records ? <FaAngleUp /> : <FaAngleDown />}
        </div>

        {openSections.records && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/employee/record"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaFileMedical className="mr-2 text-gray-500" /> View Records
            </Link>
          </div>
        )}

        {/* Patient Treatments */}
        <div
          onClick={() => toggle("treatments")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaTooth className="mr-3 text-gray-600" /> Patient Treatments
          </div>
          {openSections.treatments ? <FaAngleUp /> : <FaAngleDown />}
        </div>

        {openSections.treatments && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/employee/treatment"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaTooth className="mr-2 text-gray-500" /> View Treatments
            </Link>

            <Link
              href="/route/employee/treatment/add-treatment"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaTooth className="mr-2 text-gray-500" /> Add Treatment
            </Link>
          </div>
        )}

        {/* Appointment Procedures */}
        <div
          onClick={() => toggle("procedures")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaProcedures className="mr-3 text-gray-600" /> Appointment
            Procedures
          </div>
          {openSections.procedures ? <FaAngleUp /> : <FaAngleDown />}
        </div>

        {openSections.procedures && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/employee/appointment-procedures"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaProcedures className="mr-2 text-gray-500" /> View Procedures
            </Link>

            <Link
              href="/route/employee/appointment-procedures/add-appointment-procedure"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaProcedures className="mr-2 text-gray-500" /> Add Procedure
            </Link>
          </div>
        )}

        {/* Reviews */}
        <div
          onClick={() => toggle("reviews")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaStar className="mr-3 text-gray-600" /> Reviews
          </div>
          {openSections.reviews ? <FaAngleUp /> : <FaAngleDown />}
        </div>

        {openSections.reviews && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/employee/review"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaStar className="mr-2 text-gray-500" /> View Reviews
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
