"use client";

import { useRouter } from "next/navigation";

export default function PatientAppointments() {
  const router = useRouter();

  const appointments = [
    {
      id: 101,
      type: "General Checkup",
      status: "completed",
      date: "2025-11-20",
      doctor: "Dr. John Smith",
      notes: "Routine annual checkup.",
    },
    {
      id: 102,
      type: "Dental Cleaning",
      status: "pending",
      date: "2025-11-22",
      doctor: "Dr. Alice Brown",
      notes: "Teeth cleaning and scaling.",
    },
    {
      id: 103,
      type: "Eye Exam",
      status: "pending",
      date: "2025-11-23",
      doctor: "Dr. Emma White",
      notes: "Checkup for vision and eye health.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">My Appointments</h1>
        <p className="mt-1 text-gray-200">Hello, Stephie McRandom</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Appointment List */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">
            Upcoming & Past Appointments
          </h2>
          {appointments.length > 0 ? (
            <div className="space-y-4">
              {appointments.map((appt) => (
                <div
                  key={appt.id}
                  className="border-b pb-3 last:border-0 flex flex-col sm:flex-row sm:justify-between sm:items-center"
                >
                  <div>
                    <p className="font-medium text-gray-800">{appt.type}</p>
                    <p className="text-sm text-gray-500">
                      Appointment #{appt.id} with {appt.doctor}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{appt.notes}</p>
                    <p className="text-sm text-gray-500 mt-1">{appt.date}</p>
                  </div>
                  <span
                    className={`mt-2 sm:mt-0 text-xs px-2 py-1 rounded-full ${
                      appt.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {appt.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">You have no appointments scheduled.</p>
          )}
        </div>
      </div>
    </div>
  );
}
