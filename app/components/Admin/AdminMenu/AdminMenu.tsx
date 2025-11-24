"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaTachometerAlt,
  FaUsers,
  FaCalendarAlt,
  FaClipboardList,
  FaCogs,
  FaAngleDown,
  FaAngleUp,
  FaFileAlt,
  FaBriefcase,
  FaPlusCircle,
  FaUser,
} from "react-icons/fa";

export default function AdminMenu() {
  type SectionKey =
    | "employees"
    | "patients"
    | "appointments"
    | "services"
    | "reports";

  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>(
    {
      employees: false,
      patients: false,
      appointments: false,
      services: false,
      reports: false,
    }
  );

  const toggleSection = (section: SectionKey) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-full md:w-64 bg-white text-black p-4 h-screen shadow rounded-lg">
      <h2 className="text-xl font-bold mb-6 border-b pb-2">Admin Menu</h2>

      <div className="space-y-1">
        {/* Dashboard */}
        <Link
          href="/route/admin"
          className="flex items-center p-3 rounded hover:bg-gray-100 transition"
        >
          <FaTachometerAlt className="mr-3 text-gray-600" /> Dashboard
        </Link>

        {/* Employees */}
        <div
          onClick={() => toggleSection("employees")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaUsers className="mr-3 text-gray-600" /> Employees
          </div>
          {openSections.employees ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections.employees && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/admin/employee"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaBriefcase className="mr-2 text-gray-500" /> View Employees
            </Link>
            <Link
              href="/route/admin/employee/add"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaPlusCircle className="mr-2 text-gray-500" /> Add Employee
            </Link>
          </div>
        )}

        {/* Patients */}
        <div
          onClick={() => toggleSection("patients")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaUsers className="mr-3 text-gray-600" /> Patients
          </div>
          {openSections.patients ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections.patients && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/admin/patient"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaUser className="mr-2 text-gray-500" /> View Patients
            </Link>
            <Link
              href="/route/admin/patient/add"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaPlusCircle className="mr-2 text-gray-500" /> Add Patient
            </Link>
          </div>
        )}

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
              href="/route/admin/appointment"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaClipboardList className="mr-2 text-gray-500" /> View
              Appointments
            </Link>

            <Link
              href="/route/admin/appointment/add"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaClipboardList className="mr-2 text-gray-500" /> Add
              Appointments
            </Link>
          </div>
        )}

        {/* Services */}
        <div
          onClick={() => toggleSection("services")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaCogs className="mr-3 text-gray-600" /> Services
          </div>
          {openSections.services ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections.services && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/admin/admin-service"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaFileAlt className="mr-2 text-gray-500" /> View Services
            </Link>
            <Link
              href="/route/admin/admin-service/add"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaPlusCircle className="mr-2 text-gray-500" /> Add Service
            </Link>
          </div>
        )}

        {/* Reports */}
        <div
          onClick={() => toggleSection("reports")}
          className="flex items-center justify-between p-3 rounded hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="flex items-center">
            <FaFileAlt className="mr-3 text-gray-600" /> Reports
          </div>
          {openSections.reports ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {openSections.reports && (
          <div className="ml-6 space-y-1">
            <Link
              href="/route/admin/report"
              className="flex items-center p-2 rounded hover:bg-gray-100 transition"
            >
              <FaFileAlt className="mr-2 text-gray-500" /> View Reports
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
