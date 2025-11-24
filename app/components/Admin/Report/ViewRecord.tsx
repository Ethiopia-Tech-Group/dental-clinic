"use client";

export default function AdminReports() {
  // Dummy data for the report
  const stats = {
    totalAppointments: 25,
    completedAppointments: 18,
    pendingAppointments: 7,
    totalPatients: 12,
    totalRevenue: 4520.5,
  };

  const revenuePerService = [
    { service: "Dental Cleaning", amount: 500 },
    { service: "Root Canal", amount: 1500 },
    { service: "Teeth Whitening", amount: 700 },
    { service: "Braces/Invisalign", amount: 1820.5 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Reports</h1>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500 text-blue-600">
          <p className="text-gray-500">Total Appointments</p>
          <p className="text-3xl font-bold">{stats.totalAppointments}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500 text-green-600">
          <p className="text-gray-500">Completed Appointments</p>
          <p className="text-3xl font-bold">{stats.completedAppointments}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-amber-500 text-amber-600">
          <p className="text-gray-500">Pending Appointments</p>
          <p className="text-3xl font-bold">{stats.pendingAppointments}</p>
        </div>
      </div>

      {/* Patients and Revenue */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-500 mb-2">Total Patients</p>
          <p className="text-3xl font-bold">{stats.totalPatients}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-500 mb-2">Total Revenue ($)</p>
          <p className="text-3xl font-bold">{stats.totalRevenue}</p>
        </div>
      </div>

      {/* Revenue by Service */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Revenue by Service</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">Service</th>
              <th className="py-2 px-4">Revenue ($)</th>
            </tr>
          </thead>
          <tbody>
            {revenuePerService.map((item, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{item.service}</td>
                <td className="py-2 px-4">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
