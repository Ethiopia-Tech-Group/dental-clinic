"use client";

import { useRouter } from "next/navigation";

export default function AdminAppointments() {
  const router = useRouter();

  // Dummy appointments data
  const appointments = [
    {
      id: 101,
      patient: "Stephie McRandom",
      type: "Dental Cleaning",
      date: "2025-11-22",
      startTime: "10:00",
      endTime: "11:00",
      status: "pending",
    },
    {
      id: 102,
      patient: "Paul McRandomee",
      type: "Braces/Invisible",
      date: "2025-11-23",
      startTime: "14:00",
      endTime: "15:00",
      status: "completed",
    },
    {
      id: 103,
      patient: "Emma White",
      type: "Root Canal",
      date: "2025-11-25",
      startTime: "09:00",
      endTime: "10:00",
      status: "pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Appointments</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Patient</th>
              <th className="py-2 px-4">Type</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Time</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{appt.id}</td>
                <td className="py-2 px-4">{appt.patient}</td>
                <td className="py-2 px-4">{appt.type}</td>
                <td className="py-2 px-4">{appt.date}</td>
                <td className="py-2 px-4">
                  {appt.startTime} - {appt.endTime}
                </td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      appt.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {appt.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="mt-4 bg-[#1A3A79] hover:bg-[#162f65] text-white py-2 px-4 rounded"
          onClick={() => router.push("/route/admin/appointment/add")}
        >
          Add New Appointment
        </button>
      </div>
    </div>
  );
}
