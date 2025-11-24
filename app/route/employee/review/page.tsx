// app/patient/page.tsx (PatientDash)
"use client";

import EmployeeMenu from "@/app/components/Employee/EmployeeMenu/EmployeeMenu";
import EmployeeViewReviews from "@/app/components/Employee/Review/EmployeeViewReviews";

export default function EmployeeViewReview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Left Side Menu */}
        <div className="w-full md:w-64 lg:w-72">
          <EmployeeMenu />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 p-4 sm:p-6">
          <EmployeeViewReviews />
        </div>
      </div>
    </div>
  );
}
