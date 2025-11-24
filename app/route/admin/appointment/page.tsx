"use client";

import AdminMenu from "@/app/components/Admin/AdminMenu/AdminMenu";
import AdminAppointments from "@/app/components/Admin/Appointment/ViewAppointments";

export default function AdminAppointment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Left Side Menu */}
        <div className="w-full md:w-64 lg:w-72">
          <AdminMenu />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 p-4 sm:p-6">
          <AdminAppointments />
        </div>
      </div>
    </div>
  );
}
