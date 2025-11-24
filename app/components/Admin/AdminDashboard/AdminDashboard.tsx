"use client";

import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  // Dummy stats for demonstration
  const stats = {
    employees: 12,
    patients: 58,
    appointments: 34,
    services: 10,
  };

  const recentAppointments = [
    {
      id: 101,
      patient: "Stephie McRandom",
      type: "Dental Cleaning",
      date: "2025-11-22",
      status: "pending",
    },
    {
      id: 102,
      patient: "Paul McRandomee",
      type: "Braces/Invisible",
      date: "2025-11-23",
      status: "completed",
    },
    {
      id: 103,
      patient: "Emma White",
      type: "Root Canal",
      date: "2025-11-25",
      status: "pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="mt-1 text-gray-200">Welcome, Admin</p>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Employees", value: stats.employees, color: "blue" },
            { label: "Patients", value: stats.patients, color: "green" },
            {
              label: "Appointments",
              value: stats.appointments,
              color: "amber",
            },
            { label: "Services", value: stats.services, color: "purple" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`rounded-lg shadow p-4 text-center border-l-4 ${
                stat.color === "blue"
                  ? "text-blue-600 border-blue-500 bg-blue-100"
                  : stat.color === "green"
                  ? "text-green-600 border-green-500 bg-green-100"
                  : stat.color === "amber"
                  ? "text-amber-600 border-amber-500 bg-amber-100"
                  : "text-purple-600 border-purple-500 bg-purple-100"
              }`}
            >
              <p className="text-gray-500">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Appointments */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Appointments</h2>
          {recentAppointments.length > 0 ? (
            <div className="space-y-3">
              {recentAppointments.map((appt) => (
                <div
                  key={appt.id}
                  className="border-b pb-3 last:border-0 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{appt.patient}</p>
                    <p className="text-sm text-gray-500">
                      {appt.type} - Appointment #{appt.id}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm text-gray-500">{appt.date}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        appt.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {appt.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No recent appointments found.</p>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            className="bg-[#1A3A79] hover:bg-[#162f65] text-white font-medium py-3 px-4 rounded-lg transition"
            onClick={() => router.push("/route/admin/employee/add")}
          >
            Add New Employee
          </button>
          <button
            className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg border border-gray-300 transition"
            onClick={() => router.push("/route/admin/patient/add")}
          >
            Add New Patient
          </button>
        </div>
      </div>
    </div>
  );
}
