"use client";

import { useState } from "react";

export default function EmployeeAddProcedure() {
  const [patient, setPatient] = useState("");
  const [tooth, setTooth] = useState("");
  const [procedureCode, setProcedureCode] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [totalCharge, setTotalCharge] = useState("");
  const [appointmentId, setAppointmentId] = useState("");

  const patients = ["Stephie McRandom", "Paul McRandomee"]; // Example patients

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log({
      patient,
      tooth,
      procedureCode,
      description,
      amount,
      totalCharge,
      appointmentId,
    });
    alert("Procedure submitted (static form, no backend yet).");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Add Appointment Procedure</h1>
        <p className="mt-1 text-gray-200">
          Note: The invoice will be taken care of by the Receptionist after the
          procedure is completed.
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

          {/* Procedure Code */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Procedure Code *
            </label>
            <input
              type="number"
              value={procedureCode}
              onChange={(e) => setProcedureCode(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter procedure code"
              required
            />
          </div>

          {/* Procedure Description */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Procedure Description *
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter procedure description"
              required
            />
          </div>

          {/* Procedure Amount */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Procedure Amount *
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
              required
            />
          </div>

          {/* Total Charge */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Total Charge ($) *
            </label>
            <input
              type="number"
              value={totalCharge}
              onChange={(e) => setTotalCharge(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter total charge"
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
            Add Procedure
          </button>
        </form>
      </div>
    </div>
  );
}
