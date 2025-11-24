"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminAddService() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log({ name, description });
    alert("Service added (static demo)!");
    router.push("/route/admin/service");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-26">
      <h1 className="text-2xl font-bold mb-6">Add New Service</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-6 space-y-4 "
      >
        <div>
          <label className="block mb-1 font-medium">Service Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description *</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#1A3A79] hover:bg-[#162f65] text-white py-2 px-4 rounded"
        >
          Add Service
        </button>
      </form>
    </div>
  );
}
