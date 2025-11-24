"use client";

import { useRouter } from "next/navigation";

export default function EmployeeDashboard() {
  const router = useRouter();

  // Employee Stats Example
  const stats = {
    upcoming: 5,
    completedProcedures: 12,
    pendingTreatments: 4,
  };

  // List of sample upcoming appointments
  const upcomingAppointments = [
    {
      id: 8,
      patient: "Stephie McRandom",
      procedure: "Braces / Invisalign",
      date: "2025-11-25",
      start: "10:00 AM",
      end: "11:00 AM",
    },
    {
      id: 10,
      patient: "Paul McRandomee",
      procedure: "Crowns",
      date: "2025-11-28",
      start: "3:00 PM",
      end: "4:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Employee Dashboard</h1>
        <p className="mt-1 text-gray-200">Welcome, Dr. Céline Wan</p>
        <p className="text-sm text-gray-300 mt-1">Role: Dentist</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              label: "Upcoming Appointments",
              value: stats.upcoming,
              color: "blue",
            },
            {
              label: "Completed Procedures",
              value: stats.completedProcedures,
              color: "green",
            },
            {
              label: "Pending Treatments",
              value: stats.pendingTreatments,
              color: "amber",
            },
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

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>

          {upcomingAppointments.length > 0 ? (
            <div className="space-y-3">
              {upcomingAppointments.map((appt) => (
                <div key={appt.id} className="border-b pb-3 last:border-0">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{appt.patient}</p>
                      <p className="text-sm text-gray-500">
                        Procedure: {appt.procedure}
                      </p>
                      <p className="text-sm text-gray-500">
                        Appointment #{appt.id}
                      </p>
                    </div>

                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      Upcoming
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    {appt.date} • {appt.start} - {appt.end}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No upcoming appointments found</p>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            className="bg-[#1A3A79] hover:bg-[#173063] text-white font-medium py-3 px-4 rounded-lg transition"
            onClick={() => router.push("/route/employee/appointments")}
          >
            View All Appointments
          </button>

          <button
            className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg border border-gray-300 transition"
            onClick={() => router.push("/route/employee/treatments/add")}
          >
            Add Patient Treatment
          </button>
        </div>
      </div>
    </div>
  );
}
