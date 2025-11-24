"use client";

export default function EmployeeAppointmentProcedures() {
  const procedures = [
    {
      patient: "Stephie McRandom",
      appointmentId: 8,
      date: "2025-11-25",
      code: 6,
      description: "Braces/Invisalign procedure",
      tooth: 11,
      amount: 53,
      totalCharge: 50.0,
    },
    {
      patient: "Paul McRandomee",
      appointmentId: 1,
      date: "2025-11-28",
      code: 3,
      description: "Wisdom tooth removal",
      tooth: 8,
      amount: 1,
      totalCharge: 500.0,
    },
    {
      patient: "Stephie McRandom",
      appointmentId: 6,
      date: "2025-11-22",
      code: 9,
      description: "Bonding appointment",
      tooth: 21,
      amount: 1,
      totalCharge: 500.0,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Appointment Procedures</h1>
        <p className="mt-1 text-gray-200">
          Note: The date of the Appointment Procedures matches the date of their
          respective Appointment IDs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Patient Name
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Appointment ID
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Date
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Procedure Code
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Description
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Tooth
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Amount
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Total Charge ($)
              </th>
            </tr>
          </thead>
          <tbody>
            {procedures.map((proc, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border px-4 py-2">{proc.patient}</td>
                <td className="border px-4 py-2">{proc.appointmentId}</td>
                <td className="border px-4 py-2">{proc.date}</td>
                <td className="border px-4 py-2">{proc.code}</td>
                <td className="border px-4 py-2">{proc.description}</td>
                <td className="border px-4 py-2">{proc.tooth}</td>
                <td className="border px-4 py-2">{proc.amount}</td>
                <td className="border px-4 py-2">
                  {proc.totalCharge.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
