"use client";

import { useRouter } from "next/navigation";

export default function PatientMedicalRecords() {
  const router = useRouter();

  const medicalRecords = [
    {
      id: 301,
      type: "General Consultation",
      date: "2025-08-10",
      doctor: "Dr. John Smith",
      diagnosis: "Seasonal allergies",
      prescription: "Antihistamines for 7 days",
      notes: "Follow-up recommended in 6 months.",
    },
    {
      id: 302,
      type: "Dental Treatment",
      date: "2025-09-15",
      doctor: "Dr. Alice Brown",
      diagnosis: "Mild gum inflammation",
      prescription: "Antibiotic mouthwash",
      notes: "Return if pain persists.",
    },
    {
      id: 303,
      type: "Eye Examination",
      date: "2025-10-01",
      doctor: "Dr. Emma White",
      diagnosis: "Myopia detected",
      prescription: "New spectacles recommended",
      notes: "Next checkup in 1 year.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">My Medical Records</h1>
        <p className="mt-1 text-gray-200">Hello, Stephie McRandom</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Medical Records List */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Medical Record History</h2>

          {medicalRecords.length > 0 ? (
            <div className="space-y-4">
              {medicalRecords.map((rec) => (
                <div
                  key={rec.id}
                  className="border-b pb-3 last:border-0 flex flex-col"
                >
                  <p className="font-medium text-gray-800">{rec.type}</p>

                  <p className="text-sm text-gray-500">
                    Record #{rec.id} — {rec.date}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Doctor: {rec.doctor}
                  </p>

                  <p className="text-sm text-gray-700 mt-2">
                    <span className="font-semibold">Diagnosis:</span>{" "}
                    {rec.diagnosis}
                  </p>

                  <p className="text-sm text-gray-700 mt-1">
                    <span className="font-semibold">Prescription:</span>{" "}
                    {rec.prescription}
                  </p>

                  <p className="text-sm text-gray-600 mt-1">{rec.notes}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No medical records available yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
