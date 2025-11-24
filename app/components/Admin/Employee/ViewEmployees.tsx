"use client";

import { useRouter } from "next/navigation";

export default function AdminViewEmployees() {
  const router = useRouter();

  // Dummy data for demonstration
  const employees = [
    {
      id: 1,
      name: "Céline Wan",
      role: "Dentist",
      branch: "Ottawa",
      salary: 75000.5,
    },
    {
      id: 2,
      name: "John Smith",
      role: "Receptionist",
      branch: "Toronto",
      salary: 50000,
    },
    {
      id: 3,
      name: "Alice Brown",
      role: "Hygienist",
      branch: "Ottawa",
      salary: 60000,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Employees</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Branch</th>
              <th className="py-2 px-4">Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{emp.id}</td>
                <td className="py-2 px-4">{emp.name}</td>
                <td className="py-2 px-4">{emp.role}</td>
                <td className="py-2 px-4">{emp.branch}</td>
                <td className="py-2 px-4">${emp.salary.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="mt-4 bg-[#1A3A79] hover:bg-[#162f65] text-white py-2 px-4 rounded"
          onClick={() => router.push("/route/admin/employee/add")}
        >
          Add New Employee
        </button>
      </div>
    </div>
  );
}
