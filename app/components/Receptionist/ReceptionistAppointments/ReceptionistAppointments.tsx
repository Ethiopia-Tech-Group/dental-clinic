"use client";

import { useState } from "react";

export default function ReceptionistAppointments() {
  const [showForm, setShowForm] = useState(false);

  const [appointments, setAppointments] = useState([
    {
      id: 101,
      patient: "Stephie McRandom",
      type: "Dental Cleaning",
      date: "2025-11-20",
      time: "10:00 AM",
      status: "pending",
    },
    {
      id: 102,
      patient: "Paul McRandomee",
      type: "Root Canal",
      date: "2025-11-22",
      time: "2:00 PM",
      status: "completed",
    },
    {
      id: 103,
      patient: "Stephie McRandom",
      type: "Braces Checkup",
      date: "2025-11-23",
      time: "1:00 PM",
      status: "pending",
    },
    {
      id: 104,
      patient: "New Patient Example",
      type: "Consultation",
      date: "2025-11-25",
      time: "11:00 AM",
      status: "pending-approval",
    },
  ]);

  const [formData, setFormData] = useState({
    patient: "",
    type: "",
    date: "",
    time: "",
  });

  const handleAdd = (approve: boolean) => {
    const newAppt = {
      id: Date.now(),
      ...formData,
      status: approve ? "approved" : "pending-approval",
    };

    setAppointments([...appointments, newAppt]);
    setShowForm(false);
    setFormData({ patient: "", type: "", date: "", time: "" });

    alert(
      approve
        ? "Appointment added and approved!"
        : "Appointment added and marked as Pending Approval."
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Manage Appointments</h1>
        <p className="mt-1 text-gray-200">
          Add, approve, or edit patient appointments.
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow">
        {/* Add Button */}
        <button
          onClick={() => setShowForm(true)}
          className="mb-4 bg-[#1A3A79] text-white py-2 px-4 rounded hover:bg-[#162f65] transition"
        >
          Add New Appointment
        </button>

        {/* Add Appointment Form */}
        {showForm && (
          <div className="p-4 mb-6 border rounded bg-gray-50">
            <h2 className="text-lg font-semibold mb-3">New Appointment</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="border p-2 rounded"
                placeholder="Patient Name"
                value={formData.patient}
                onChange={(e) =>
                  setFormData({ ...formData, patient: e.target.value })
                }
              />
              <input
                className="border p-2 rounded"
                placeholder="Appointment Type"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              />
              <input
                className="border p-2 rounded"
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
              <input
                className="border p-2 rounded"
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
              />
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleAdd(false)}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Save as Pending Approval
              </button>
              <button
                onClick={() => handleAdd(true)}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Approve Now
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

        {/* Appointment Table */}
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="border px-4 py-2 text-left text-sm">Patient</th>
              <th className="border px-4 py-2 text-left text-sm">ID</th>
              <th className="border px-4 py-2 text-left text-sm">Type</th>
              <th className="border px-4 py-2 text-left text-sm">Date</th>
              <th className="border px-4 py-2 text-left text-sm">Time</th>
              <th className="border px-4 py-2 text-left text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, index) => (
              <tr
                key={appt.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border px-4 py-2">{appt.patient}</td>
                <td className="border px-4 py-2">{appt.id}</td>
                <td className="border px-4 py-2">{appt.type}</td>
                <td className="border px-4 py-2">{appt.date}</td>
                <td className="border px-4 py-2">{appt.time}</td>

                <td className="border px-4 py-2">
                  <div className="flex items-center gap-2">
                    {/* Status Badge */}
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        appt.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : appt.status === "approved"
                          ? "bg-green-200 text-green-900"
                          : appt.status === "pending-approval"
                          ? "bg-blue-100 text-blue-800"
                          : appt.status === "rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {appt.status.replace("-", " ")}
                    </span>

                    {/* Action Buttons */}
                    {appt.status === "pending-approval" && (
                      <>
                        <button
                          onClick={() =>
                            setAppointments(
                              appointments.map((item) =>
                                item.id === appt.id
                                  ? { ...item, status: "approved" }
                                  : item
                              )
                            )
                          }
                          className="px-3 py-1 bg-green-600 text-white text-xs rounded"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() =>
                            setAppointments(
                              appointments.map((item) =>
                                item.id === appt.id
                                  ? { ...item, status: "rejected" }
                                  : item
                              )
                            )
                          }
                          className="px-3 py-1 bg-red-600 text-white text-xs rounded"
                        >
                          Reject
                        </button>
                      </>
                    )}

                    {appt.status === "approved" && (
                      <button
                        onClick={() =>
                          setAppointments(
                            appointments.map((item) =>
                              item.id === appt.id
                                ? { ...item, status: "completed" }
                                : item
                            )
                          )
                        }
                        className="px-3 py-1 bg-blue-600 text-white text-xs rounded"
                      >
                        Complete
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
