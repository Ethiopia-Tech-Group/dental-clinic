"use client";

import ReceptionistAppointments from "@/app/components/Receptionist/ReceptionistAppointments/ReceptionistAppointments";
import ReceptionistMenu from "@/app/components/Receptionist/ReceptionistMenu/ReceptionistMenu";

export default function ReceptionistAppointment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Left Side Menu */}
        <div className="w-full md:w-64 lg:w-72">
          <ReceptionistMenu />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 p-4 sm:p-6">
          <ReceptionistAppointments />
        </div>
      </div>
    </div>
  );
}
