"use client";

export default function EmployeeInfo() {
  const employee = {
    id: 3,
    name: "Céline Wan",
    sin: "158453648",
    location: "123 Postgres Street, Ottawa, ON, Canada",
    salary: "75,000.50",
    branchCity: "Ottawa",
    manager: "Kien Do",
    branchId: 1,
    role: "Dentist",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">My Information</h1>
        <p className="mt-1 text-gray-200">Employee Profile Overview</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Personal & Work Details</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 text-sm">Employee ID</p>
            <p className="font-medium text-gray-900">{employee.id}</p>
          </div>

          <div>
            <p className="text-gray-600 text-sm">Full Name</p>
            <p className="font-medium text-gray-900">{employee.name}</p>
          </div>

          <div>
            <p className="text-gray-600 text-sm">SIN</p>
            <p className="font-medium text-gray-900">{employee.sin}</p>
          </div>

          <div>
            <p className="text-gray-600 text-sm">Role</p>
            <p className="font-medium text-gray-900">{employee.role}</p>
          </div>

          <div className="sm:col-span-2">
            <p className="text-gray-600 text-sm">Work Location</p>
            <p className="font-medium text-gray-900">{employee.location}</p>
          </div>

          <div>
            <p className="text-gray-600 text-sm">Annual Salary</p>
            <p className="font-medium text-gray-900">${employee.salary}</p>
          </div>

          <div>
            <p className="text-gray-600 text-sm">Branch City</p>
            <p className="font-medium text-gray-900">{employee.branchCity}</p>
          </div>

          <div>
            <p className="text-gray-600 text-sm">Branch ID</p>
            <p className="font-medium text-gray-900">{employee.branchId}</p>
          </div>

          <div>
            <p className="text-gray-600 text-sm">Manager</p>
            <p className="font-medium text-gray-900">{employee.manager}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
