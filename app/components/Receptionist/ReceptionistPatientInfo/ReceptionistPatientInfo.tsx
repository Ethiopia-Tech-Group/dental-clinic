"use client";

import { useState } from "react";

export default function ReceptionistPatientInfo() {
  const [showForm, setShowForm] = useState(false);

  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Stephie McRandom",
      dob: "1990-05-15",
      email: "stephie@example.com",
      phone: "+1 555-1234",
      lastVisit: "2025-11-20",
      medicalSummary: "Healthy teeth. Annual cleaning required.",
    },
    {
      id: 2,
      name: "Paul McRandomee",
      dob: "1985-02-10",
      email: "paul@example.com",
      phone: "+1 555-5678",
      lastVisit: "2025-11-22",
      medicalSummary: "Follow-up for fillings and teeth cleaning.",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    medicalSummary: "",
  });

  const handleAddPatient = () => {
    const newPatient = {
      id: Date.now(),
      ...formData,
      lastVisit: "—", // new patients have no previous visit
    };

    setPatients([...patients, newPatient]);

    setFormData({
      name: "",
      dob: "",
      email: "",
      phone: "",
      medicalSummary: "",
    });

    setShowForm(false);
    alert("Patient added successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Patient Information</h1>
        <p className="mt-1 text-gray-200">View or add patient details.</p>
      </div>

      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow">
        {/* Add Patient Button */}
        <button
          onClick={() => setShowForm(true)}
          className="mb-4 bg-[#1A3A79] text-white py-2 px-4 rounded hover:bg-[#162f65] transition"
        >
          Add New Patient
        </button>

        {/* Add Patient Form */}
        {showForm && (
          <div className="p-4 mb-6 border rounded bg-gray-50">
            <h2 className="text-lg font-semibold mb-3">New Patient</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="border p-2 rounded"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="date"
                className="border p-2 rounded"
                value={formData.dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
              />
              <input
                className="border p-2 rounded"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                className="border p-2 rounded"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <textarea
              className="border p-2 rounded w-full mt-4"
              placeholder="Medical Summary"
              rows={3}
              value={formData.medicalSummary}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  medicalSummary: e.target.value,
                })
              }
            />

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleAddPatient}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save Patient
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Patient Table */}
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="border px-4 py-2 text-left text-sm font-medium">
                Patient Name
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium">
                Date of Birth
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium">
                Email
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium">
                Phone
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium">
                Last Visit
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium">
                Medical Summary
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={patient.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border px-4 py-2">{patient.name}</td>
                <td className="border px-4 py-2">{patient.dob}</td>
                <td className="border px-4 py-2">{patient.email}</td>
                <td className="border px-4 py-2">{patient.phone}</td>
                <td className="border px-4 py-2">{patient.lastVisit}</td>
                <td className="border px-4 py-2">{patient.medicalSummary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
