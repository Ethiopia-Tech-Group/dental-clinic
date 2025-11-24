"use client";

import ReceptionistMenu from "@/app/components/Receptionist/ReceptionistMenu/ReceptionistMenu";
import ReceptionistPatientInfo from "@/app/components/Receptionist/ReceptionistPatientInfo/ReceptionistPatientInfo";

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
          <ReceptionistPatientInfo />
        </div>
      </div>
    </div>
  );
}
