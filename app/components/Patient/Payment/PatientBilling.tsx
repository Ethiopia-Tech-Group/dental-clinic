"use client";

export default function PatientBilling() {
  const billingHistory = [
    {
      id: 901,
      appointmentId: 102,
      service: "Dental Cleaning",
      amount: 850,
      date: "2025-11-22",
      status: "unpaid",
    },
    {
      id: 902,
      appointmentId: 110,
      service: "Root Canal Therapy",
      amount: 1200,
      date: "2025-12-01",
      status: "paid",
    },
    {
      id: 903,
      appointmentId: 98,
      service: "General Checkup",
      amount: 300,
      date: "2025-10-10",
      status: "paid",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Billing & Payments</h1>
        <p className="mt-1 text-gray-200">Hello, Stephie McRandom</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Billing Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Billing History</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-sm font-semibold">Invoice ID</th>
                  <th className="border px-4 py-2 text-sm font-semibold">Appointment ID</th>
                  <th className="border px-4 py-2 text-sm font-semibold">Service</th>
                  <th className="border px-4 py-2 text-sm font-semibold">Amount</th>
                  <th className="border px-4 py-2 text-sm font-semibold">Date</th>
                  <th className="border px-4 py-2 text-sm font-semibold">Status</th>
                </tr>
              </thead>

              <tbody>
                {billingHistory.map((bill) => (
                  <tr key={bill.id} className="hover:bg-gray-50">
                    <td className="border px-4 py-2 text-sm">{bill.id}</td>
                    <td className="border px-4 py-2 text-sm">{bill.appointmentId}</td>
                    <td className="border px-4 py-2 text-sm">{bill.service}</td>
                    <td className="border px-4 py-2 text-sm">${bill.amount}</td>
                    <td className="border px-4 py-2 text-sm">{bill.date}</td>

                    <td className="border px-4 py-2 text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          bill.status === "paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {bill.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
