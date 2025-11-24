"use client";

export default function ReceptionistDashboard() {
  const stats = {
    totalAppointments: 25,
    pendingPayments: 8,
    completedPayments: 17,
  };

  const recentAppointments = [
    {
      patient: "Stephie McRandom",
      appointmentId: 101,
      date: "2025-11-20",
      time: "10:00 AM",
      type: "Dental Cleaning",
      status: "pending",
    },
    {
      patient: "Paul McRandomee",
      appointmentId: 102,
      date: "2025-11-22",
      time: "2:00 PM",
      type: "Root Canal",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Receptionist Dashboard</h1>
        <p className="mt-1 text-gray-200">Welcome, Céline Wan</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-lg shadow p-4 text-center border-l-4 text-blue-600 border-blue-500 bg-blue-100">
            <p className="text-gray-500">Total Appointments</p>
            <p className="text-3xl font-bold">{stats.totalAppointments}</p>
          </div>
          <div className="rounded-lg shadow p-4 text-center border-l-4 text-amber-600 border-amber-500 bg-amber-100">
            <p className="text-gray-500">Pending Payments</p>
            <p className="text-3xl font-bold">{stats.pendingPayments}</p>
          </div>
          <div className="rounded-lg shadow p-4 text-center border-l-4 text-green-600 border-green-500 bg-green-100">
            <p className="text-gray-500">Completed Payments</p>
            <p className="text-3xl font-bold">{stats.completedPayments}</p>
          </div>
        </div>

        {/* Recent Appointments */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Appointments</h2>
          {recentAppointments.length > 0 ? (
            <div className="space-y-3">
              {recentAppointments.map((appt) => (
                <div
                  key={appt.appointmentId}
                  className="border-b pb-3 last:border-0 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{appt.patient}</p>
                    <p className="text-sm text-gray-500">
                      {appt.type} | Appointment #{appt.appointmentId}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {appt.date} | {appt.time}
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      appt.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {appt.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No recent appointments found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
