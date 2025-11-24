"use client";

import { useState } from "react";

export default function PatientMakePayment() {
  const unpaidInvoices = [
    {
      id: 901,
      appointmentId: 102,
      service: "Dental Cleaning",
      amount: 850,
      date: "2025-11-22",
    },
    {
      id: 902,
      appointmentId: 110,
      service: "Root Canal Therapy",
      amount: 1200,
      date: "2025-12-01",
    },
  ];

  const [selected, setSelected] = useState<number | null>(null);

  const handlePayment = () => {
    if (selected === null) return alert("Please select an invoice to pay.");
    alert(`Proceeding to pay invoice #${selected}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Make a Payment</h1>
        <p className="mt-1 text-gray-200">Hello, Stephie McRandom</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Unpaid Invoices */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Outstanding Payments</h2>

          {unpaidInvoices.length > 0 ? (
            <div className="space-y-4">
              {unpaidInvoices.map((inv) => (
                <div
                  key={inv.id}
                  onClick={() => setSelected(inv.id)}
                  className={`border p-4 rounded cursor-pointer ${
                    selected === inv.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <p className="font-semibold text-gray-800">
                    Invoice #{inv.id} — {inv.service}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Appointment ID: {inv.appointmentId}
                  </p>
                  <p className="text-sm text-gray-500">Date: {inv.date}</p>
                  <p className="text-sm text-gray-900 font-semibold mt-1">
                    Amount: ${inv.amount}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">You have no unpaid invoices.</p>
          )}

          <button
            onClick={handlePayment}
            className="mt-6 bg-[#1A3A79] text-white px-6 py-2 rounded-lg hover:bg-[#153067]"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
