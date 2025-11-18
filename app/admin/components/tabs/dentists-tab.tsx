"use client";

import React, { useState } from "react";
import { DataTable } from "@/components/shared/data-table";
import { Modal } from "@/components/shared/modal";
import { useAppStore } from "@/lib/store";
import { Dentist } from "@/types";
import { Plus } from 'lucide-react';

export function DentistsTab() {
  const { dentists, branches, addDentist, updateDentist, deleteDentist } =
    useAppStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Dentist>>({
    name: "",
    phone: "",
    experience: 0,
    specialization: "",
    branchId: "",
    email: "",
    license: "",
  });

  const handleOpenModal = (dentist?: Dentist) => {
    if (dentist) {
      setFormData(dentist);
      setEditingId(dentist.id);
    } else {
      setFormData({
        name: "",
        phone: "",
        experience: 0,
        specialization: "",
        branchId: "",
        email: "",
        license: "",
      });
      setEditingId(null);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.specialization ||
      !formData.branchId
    ) {
      alert("Please fill in all required fields");
      return;
    }

    if (editingId) {
      updateDentist(editingId, formData);
    } else {
      const newDentist: Dentist = {
        id: `d${Date.now()}`,
        name: formData.name!,
        phone: formData.phone!,
        experience: formData.experience || 0,
        specialization: formData.specialization!,
        branchId: formData.branchId!,
        email: formData.email || "",
        license: formData.license || "",
        createdAt: new Date().toISOString().split("T")[0],
      };
      addDentist(newDentist);
    }
    handleCloseModal();
  };

  const getBranchName = (id: string) => {
    return branches.find((b) => b.id === id)?.name || "Unknown";
  };

  const columns = [
    { key: "name" as const, label: "Name", sortable: true },
    { key: "email" as const, label: "Email", sortable: true },
    { key: "phone" as const, label: "Phone", sortable: true },
    { key: "specialization" as const, label: "Specialization", sortable: true },
    { key: "experience" as const, label: "Experience (Years)", sortable: true },
    {
      key: "branchId" as const,
      label: "Branch",
      render: (value: unknown) => getBranchName(value as string),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dentists/Staff</h2>
          <p className="text-gray-600 mt-1">Manage dentists and staff members</p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          New Dentist
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <DataTable
          columns={columns}
          data={dentists}
          searchFields={["name", "email", "specialization"]}
          onEdit={handleOpenModal}
          onDelete={deleteDentist}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Dentist Form"
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Dr. Full Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone *
              </label>
              <input
                type="tel"
                value={formData.phone || ""}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Experience (Years) *
              </label>
              <input
                type="number"
                value={formData.experience || 0}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    experience: parseInt(e.target.value),
                  })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Specialization *
              </label>
              <select
                value={formData.specialization || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    specialization: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select specialization</option>
                <option value="General Dentistry">General Dentistry</option>
                <option value="Orthodontics">Orthodontics</option>
                <option value="Periodontics">Periodontics</option>
                <option value="Prosthodontics">Prosthodontics</option>
                <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                <option value="Endodontics">Endodontics</option>
                <option value="Oral Surgery">Oral Surgery</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Branch *
              </label>
              <select
                value={formData.branchId || ""}
                onChange={(e) =>
                  setFormData({ ...formData, branchId: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a branch</option>
                {branches.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                License Number
              </label>
              <input
                type="text"
                value={formData.license || ""}
                onChange={(e) =>
                  setFormData({ ...formData, license: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="DDS-YYYY-XXXXX"
              />
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={handleCloseModal}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {editingId ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
