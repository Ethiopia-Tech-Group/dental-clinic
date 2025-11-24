"use client";

import { useRouter } from "next/navigation";

export default function AdminViewPatients() {
  const router = useRouter();

  // Dummy patient data
  const patients = [
    {
      id: 1,
      name: "Stephie McRandom",
      dob: "1990-05-12",
      phone: "123-456-7890",
      email: "stephie@example.com",
    },
    {
      id: 2,
      name: "Paul McRandomee",
      dob: "1985-08-23",
      phone: "987-654-3210",
      email: "paul@example.com",
    },
    {
      id: 3,
      name: "Emma White",
      dob: "1992-11-10",
      phone: "555-666-7777",
      email: "emma@example.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Patients</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Date of Birth</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">Email</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{patient.id}</td>
                <td className="py-2 px-4">{patient.name}</td>
                <td className="py-2 px-4">{patient.dob}</td>
                <td className="py-2 px-4">{patient.phone}</td>
                <td className="py-2 px-4">{patient.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="mt-4 bg-[#1A3A79] hover:bg-[#162f65] text-white py-2 px-4 rounded"
          onClick={() => router.push("/route/admin/patient/add")}
        >
          Add New Patient
        </button>
      </div>
    </div>
  );
}
