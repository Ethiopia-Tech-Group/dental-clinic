"use client";

import { useRouter } from "next/navigation";

export default function PatientPrescriptions() {
  const router = useRouter();

  const prescriptions = [
    {
      id: 501,
      medicine: "Amoxicillin 500mg",
      dosage: "3 times a day for 7 days",
      doctor: "Dr. John Smith",
      date: "2025-09-12",
      instructions: "Take after meals. Drink plenty of water.",
      purpose: "Bacterial infection treatment",
    },
    {
      id: 502,
      medicine: "Ibuprofen 400mg",
      dosage: "Twice a day for 5 days",
      doctor: "Dr. Alice Brown",
      date: "2025-10-05",
      instructions: "Do not take on an empty stomach.",
      purpose: "Pain and inflammation relief",
    },
    {
      id: 503,
      medicine: "Loratadine 10mg",
      dosage: "Once a day for 14 days",
      doctor: "Dr. Emma White",
      date: "2025-11-02",
      instructions: "Take in the morning.",
      purpose: "Treatment for seasonal allergies",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">My Prescriptions</h1>
        <p className="mt-1 text-gray-200">Hello, Stephie McRandom</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Prescriptions List */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Prescribed Medications</h2>

          {prescriptions.length > 0 ? (
            <div className="space-y-4">
              {prescriptions.map((item) => (
                <div
                  key={item.id}
                  className="border-b pb-4 last:border-0 flex flex-col"
                >
                  <p className="font-medium text-gray-800 text-lg">
                    {item.medicine}
                  </p>

                  <p className="text-sm text-gray-500">
                    Prescription #{item.id} — {item.date}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Prescribed by: {item.doctor}
                  </p>

                  <p className="text-sm text-gray-700 mt-2">
                    <span className="font-semibold">Dosage:</span> {item.dosage}
                  </p>

                  <p className="text-sm text-gray-700 mt-1">
                    <span className="font-semibold">Purpose:</span>{" "}
                    {item.purpose}
                  </p>

                  <p className="text-sm text-gray-700 mt-2">
                    <span className="font-semibold">Instructions:</span>{" "}
                    {item.instructions}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">You have no prescriptions yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
