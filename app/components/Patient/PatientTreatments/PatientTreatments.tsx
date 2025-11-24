"use client";

import { useRouter } from "next/navigation";

export default function PatientTreatments() {
  const router = useRouter();

  const treatments = [
    {
      id: 701,
      type: "Dental Filling",
      medication: "Local anesthesia",
      symptoms: "Tooth sensitivity and cavity",
      tooth: "Upper left molar",
      comments: "Procedure successful. Avoid hard foods for 24 hours.",
      appointmentId: 102,
    },
    {
      id: 702,
      type: "Root Canal Therapy",
      medication: "Painkillers + antibiotics",
      symptoms: "Severe toothache, swelling",
      tooth: "Lower right premolar",
      comments: "Follow-up required after 1 week.",
      appointmentId: 108,
    },
    {
      id: 703,
      type: "Scaling & Cleaning",
      medication: "None",
      symptoms: "Plaque buildup, gum redness",
      tooth: "Full mouth",
      comments: "Recommended cleaning every 6 months.",
      appointmentId: 115,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">My Treatments</h1>
        <p className="mt-1 text-gray-200">Hello, Stephie McRandom</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Treatments Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Treatment History</h2>

          {treatments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-sm font-semibold">
                      Treatment ID
                    </th>
                    <th className="border px-4 py-2 text-sm font-semibold">
                      Treatment Type
                    </th>
                    <th className="border px-4 py-2 text-sm font-semibold">
                      Medication
                    </th>
                    <th className="border px-4 py-2 text-sm font-semibold">
                      Symptoms
                    </th>
                    <th className="border px-4 py-2 text-sm font-semibold">
                      Tooth
                    </th>
                    <th className="border px-4 py-2 text-sm font-semibold">
                      Comments
                    </th>
                    <th className="border px-4 py-2 text-sm font-semibold">
                      Appointment ID
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {treatments.map((treat) => (
                    <tr key={treat.id} className="hover:bg-gray-50">
                      <td className="border px-4 py-2 text-sm">{treat.id}</td>
                      <td className="border px-4 py-2 text-sm">{treat.type}</td>
                      <td className="border px-4 py-2 text-sm">
                        {treat.medication}
                      </td>
                      <td className="border px-4 py-2 text-sm">
                        {treat.symptoms}
                      </td>
                      <td className="border px-4 py-2 text-sm">
                        {treat.tooth}
                      </td>
                      <td className="border px-4 py-2 text-sm">
                        {treat.comments}
                      </td>
                      <td className="border px-4 py-2 text-sm">
                        {treat.appointmentId}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">No treatment records available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
