"use client";

import { useState } from "react";

export default function EmployeeAddTreatment() {
  const [patient, setPatient] = useState("");
  const [treatmentType, setTreatmentType] = useState("");
  const [medication, setMedication] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [tooth, setTooth] = useState("");
  const [comments, setComments] = useState("");
  const [appointmentId, setAppointmentId] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // For now, just log the input (static version)
    console.log({
      patient,
      treatmentType,
      medication,
      symptoms,
      tooth,
      comments,
      appointmentId,
    });
    alert("Treatment submitted (static form, no backend yet).");
  };

  const patients = ["Stephie McRandom", "Paul McRandomee"]; // example patient names

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Add Treatment for Patient</h1>
        <p className="mt-1 text-gray-200">
          Note: You can only add a treatment for your patients and your
          appointments.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Patient Name */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Patient Name *
            </label>
            <select
              value={patient}
              onChange={(e) => setPatient(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Patient</option>
              {patients.map((p, idx) => (
                <option key={idx} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Treatment Type */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Treatment Type *
            </label>
            <input
              type="text"
              value={treatmentType}
              onChange={(e) => setTreatmentType(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter treatment type"
              required
            />
          </div>

          {/* Medication */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Medication *
            </label>
            <input
              type="text"
              value={medication}
              onChange={(e) => setMedication(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter medication"
              required
            />
          </div>

          {/* Symptoms */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Symptoms *
            </label>
            <input
              type="text"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter symptoms"
              required
            />
          </div>

          {/* Tooth Number */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Tooth Number *
            </label>
            <input
              type="number"
              value={tooth}
              onChange={(e) => setTooth(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter tooth number"
              required
            />
          </div>

          {/* Comments */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Comments *
            </label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter any comments"
              required
            />
          </div>

          {/* Appointment ID */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Appointment ID *
            </label>
            <input
              type="number"
              value={appointmentId}
              onChange={(e) => setAppointmentId(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter appointment ID"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1A3A79] text-white py-2 rounded hover:bg-[#162f65] transition font-medium"
          >
            Add Treatment
          </button>
        </form>
      </div>
    </div>
  );
}
