"use client";

export default function EmployeeUpcomingAppointments() {
  const upcomingAppointments = [
    {
      patient: "Stephie McRandom",
      date: "2025-11-25",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      procedure: "Braces / Invisalign",
      room: 15,
      appointmentId: 8,
    },
    {
      patient: "Paul McRandomee",
      date: "2025-11-28",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      procedure: "Crowns",
      room: 10,
      appointmentId: 10,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Upcoming Appointments</h1>
        <p className="mt-1 text-gray-200">
          Please view each patient's medical records before administering
          procedures.
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Patient Name
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Date
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Start Time
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                End Time
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Procedure
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Room
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Appointment ID
              </th>
            </tr>
          </thead>
          <tbody>
            {upcomingAppointments.map((appt, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border px-4 py-2">{appt.patient}</td>
                <td className="border px-4 py-2">{appt.date}</td>
                <td className="border px-4 py-2">{appt.startTime}</td>
                <td className="border px-4 py-2">{appt.endTime}</td>
                <td className="border px-4 py-2">{appt.procedure}</td>
                <td className="border px-4 py-2">{appt.room}</td>
                <td className="border px-4 py-2">{appt.appointmentId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
