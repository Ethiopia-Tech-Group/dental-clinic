"use client";

import { useRouter } from "next/navigation";

export default function ViewAdminServices() {
  const router = useRouter();

  // Dummy services data
  const services = [
    { id: 1, name: "Dental Cleaning", description: "Regular teeth cleaning" },
    { id: 2, name: "Root Canal", description: "Treatment for infected tooth" },
    { id: 3, name: "Teeth Whitening", description: "Cosmetic teeth whitening" },
    { id: 4, name: "Braces/Invisalign", description: "Orthodontic treatment" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Services</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Service Name</th>
              <th className="py-2 px-4">Description</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{service.id}</td>
                <td className="py-2 px-4">{service.name}</td>
                <td className="py-2 px-4">{service.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="mt-4 bg-[#1A3A79] hover:bg-[#162f65] text-white py-2 px-4 rounded"
          onClick={() => router.push("/route/admin/admin-service/add")}
        >
          Add New Service
        </button>
      </div>
    </div>
  );
}
