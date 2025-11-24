"use client";

import { useRouter } from "next/navigation";

export default function PatientDashboard() {
  const router = useRouter();

  const stats = {
    total: 12,
    completed: 7,
    pending: 3,
  };

  const recentAppointments = [
    {
      id: 101,
      type: "General Checkup",
      status: "completed",
      date: "2025-11-20",
    },
    { id: 102, type: "Dental Cleaning", status: "pending", date: "2025-11-22" },
    { id: 103, type: "Eye Exam", status: "pending", date: "2025-11-23" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79]  text-white p-6   mb-6">
        <h1 className="text-2xl font-bold">Patient Dashboard</h1>
        <p className="mt-1 text-gray-200">Welcome, Stephie McRandom</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Total Appointments", value: stats.total, color: "blue" },
            { label: "Completed", value: stats.completed, color: "green" },
            { label: "Pending", value: stats.pending, color: "amber" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`rounded-lg shadow p-4 text-center border-l-4 ${
                stat.color === "blue"
                  ? "text-blue-600 border-blue-500 bg-blue-100"
                  : stat.color === "green"
                  ? "text-green-600 border-green-500 bg-green-100"
                  : "text-amber-600 border-amber-500 bg-amber-100"
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
                <div key={appt.id} className="border-b pb-3 last:border-0">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{appt.type}</p>
                      <p className="text-sm text-gray-500">
                        Appointment #{appt.id}
                      </p>
                    </div>
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
                  <p className="text-sm text-gray-500 mt-1">{appt.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No recent appointments found</p>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            className="bg-[#1A3A79]  hover:bg-[#1A3A79]  text-white font-medium py-3 px-4 rounded-lg transition"
            onClick={() => router.push("/patient/appointments/book")}
          >
            Book New Appointment
          </button>
          <button
            className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg border border-gray-300 transition"
            onClick={() => router.push("/patient/appointments")}
          >
            View All Appointments
          </button>
        </div>
      </div>
    </div>
  );
}
