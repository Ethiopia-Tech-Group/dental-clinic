"use client";

import ReceptionistBilling from "@/app/components/Receptionist/ReceptionistBilling/ReceptionistBilling";
import ReceptionistMenu from "@/app/components/Receptionist/ReceptionistMenu/ReceptionistMenu";

export default function ReceptionistDash() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Left Side Menu */}
        <div className="w-full md:w-64 lg:w-72">
          <ReceptionistMenu />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 p-4 sm:p-6">
          <ReceptionistBilling />
        </div>
      </div>
    </div>
  );
}
