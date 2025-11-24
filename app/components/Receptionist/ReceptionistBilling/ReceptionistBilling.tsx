"use client";

import { useState } from "react";

export default function ReceptionistBilling() {
  const [bills, setBills] = useState([
    {
      patient: "Stephie McRandom",
      appointmentId: 101,
      procedure: "Dental Cleaning",
      tooth: 21,
      amount: 50.0,
      status: "unpaid",
    },
    {
      patient: "Paul McRandomee",
      appointmentId: 102,
      procedure: "Root Canal",
      tooth: 33,
      amount: 500.0,
      status: "paid",
    },
    {
      patient: "Stephie McRandom",
      appointmentId: 103,
      procedure: "Braces Checkup",
      tooth: 999,
      amount: 0.0,
      status: "unpaid",
    },
  ]);

  const handleMarkPaid = (id: number) => {
    setBills((prev) =>
      prev.map((bill) =>
        bill.appointmentId === id ? { ...bill, status: "paid" } : bill
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Patient Billing</h1>
        <p className="mt-1 text-gray-200">
          View patient bills and update payment status.
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="border px-4 py-2 text-left text-sm font-medium">
                Patient Name
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium">
                Appointment ID
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium">
                Procedure
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium">
                Tooth
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium">
                Amount
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium">
                Status
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill, index) => (
              <tr
                key={bill.appointmentId}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border px-4 py-2">{bill.patient}</td>
                <td className="border px-4 py-2">{bill.appointmentId}</td>
                <td className="border px-4 py-2">{bill.procedure}</td>
                <td className="border px-4 py-2">{bill.tooth}</td>
                <td className="border px-4 py-2">${bill.amount.toFixed(2)}</td>
                <td className="border px-4 py-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      bill.status === "paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {bill.status}
                  </span>
                </td>
                <td className="border px-4 py-2">
                  {bill.status === "unpaid" && (
                    <button
                      onClick={() => handleMarkPaid(bill.appointmentId)}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                    >
                      Mark as Paid
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
