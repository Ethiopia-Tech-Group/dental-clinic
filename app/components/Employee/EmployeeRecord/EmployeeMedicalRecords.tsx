"use client";

export default function EmployeeMedicalRecords() {
  const medicalRecords = [
    {
      patient: "Stephie McRandom",
      details:
        "Stephie currently has healthy teeth. Only requires annual cleaning. Last cleaning was 1 year ago.",
      recordId: 2,
    },
    {
      patient: "Paul McRandomee",
      details: "Paul Sr. had an annual teeth cleaning last year.",
      recordId: 3,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Patient Medical Records</h1>
        <p className="mt-1 text-gray-200">
          Notes on patient medical history and other relevant health information
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
                Details
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Record ID
              </th>
            </tr>
          </thead>
          <tbody>
            {medicalRecords.map((record, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border px-4 py-2">{record.patient}</td>
                <td className="border px-4 py-2">{record.details}</td>
                <td className="border px-4 py-2">{record.recordId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
