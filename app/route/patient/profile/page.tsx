// app/patient/page.tsx (PatientDash)
"use client";

import PatientMenu from "@/app/components/Patient/PatientMenu/PatientMenu";
import PatientProfile from "@/app/components/Patient/Profile/ViewProfile";

export default function PatientProfiles() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Left Side Menu */}
        <div className="w-full md:w-64 lg:w-72">
          <PatientMenu />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 p-4 sm:p-6">
          <PatientProfile />
        </div>
      </div>
    </div>
  );
}
