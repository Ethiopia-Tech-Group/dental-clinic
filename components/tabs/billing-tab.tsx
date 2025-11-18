"use client";

import React, { useState } from "react";
import { DataTable } from "@/components/shared/data-table";
import { Modal } from "@/components/shared/modal";
import { Badge } from "@/components/shared/badge";
import { useAppStore } from "@/lib/store";
import { Billing } from "@/types";
import { Plus, DollarSign } from 'lucide-react';

export function BillingTab() {
  const {
    billing,
    appointments,
    patients,
    addBilling,
    updateBilling,
    deleteBilling ,
  } = useAppStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Billing>>({
    appointmentId: "",
    patientId: "",
    amount: 0,
    status: "pending",
    description: "",
    dueDate: "",
  });

  const handleOpenModal = (bill?: Billing) => {
    if (bill) {
      setFormData(bill);
      setEditingId(bill.id);
    } else {
      setFormData({
        appointmentId: "",
        patientId: "",
        amount: 0,
        status: "pending",
        description: "",
        dueDate: "",
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
      !formData.appointmentId ||
      !formData.patientId ||
      !formData.amount ||
      !formData.dueDate
    ) {
      alert("Please fill in all required fields");
      return;
    }

    if (editingId) {
      updateBilling(editingId, formData);
    } else {
      const newBilling: Billing = {
        id: `bill${Date.now()}`,
        appointmentId: formData.appointmentId!,
        patientId: formData.patientId!,
        amount: formData.amount!,
        status: (formData.status as any) || "pending",
        description: formData.description || "",
        dueDate: formData.dueDate!,
        createdAt: new Date().toISOString().split("T")[0],
      };
      addBilling(newBilling);
    }
    handleCloseModal();
  };

  const getPatientName = (id: string) => {
    return patients.find((p) => p.id === id)?.name || "Unknown";
  };

  const getAppointmentDate = (id: string) => {
    const apt = appointments.find((a) => a.id === id);
    return apt ? `${apt.appointmentDate} ${apt.appointmentTime}` : "N/A";
  };

  const totalBilled = billing.reduce((sum, b) => sum + b.amount, 0);
  const totalPaid = billing
    .filter((b) => b.status === "paid")
    .reduce((sum, b) => sum + b.amount, 0);
  const totalPending = billing
    .filter((b) => b.status === "pending" || b.status === "overdue")
    .reduce((sum, b) => sum + b.amount, 0);

  const columns = [
    {
      key: "patientId" as const,
      label: "Patient",
      render: (value: unknown) => getPatientName(value as string),
    },
    {
      key: "appointmentId" as const,
      label: "Appointment",
      render: (value: unknown) => getAppointmentDate(value as string),
    },
    {
      key: "amount" as const,
      label: "Amount",
      render: (value: unknown) => `$${value}`,
    },
    { key: "description" as const, label: "Description", sortable: true },
    { key: "dueDate" as const, label: "Due Date", sortable: true },
    {
      key: "status" as const,
      label: "Status",
      render: (value: unknown) => {
        const status = value as string;
        return (
          <Badge
            variant={
              status === "paid"
                ? "success"
                : status === "pending"
                ? "warning"
                : "error"
            }
          >
            {status}
          </Badge>
        );
      },
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Billing</h2>
          <p className="text-gray-600 mt-1">Manage payments and invoices</p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          New Invoice
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Billed</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                ${totalBilled}
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Paid</p>
              <p className="text-3xl font-bold text-green-600 mt-2">
                ${totalPaid}
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Pending/Overdue</p>
              <p className="text-3xl font-bold text-red-600 mt-2">
                ${totalPending}
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-red-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <DataTable
          columns={columns}
          data={billing}
          searchFields={["description"]}
          onEdit={handleOpenModal}
          onDelete={(item) => deleteBilling(item.id)}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Billing Form"
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Appointment *
              </label>
              <select
                value={formData.appointmentId || ""}
                onChange={(e) => {
                  const selectedAppointment = appointments.find(
                    (a) => a.id === e.target.value
                  );
                  setFormData({
                    ...formData,
                    appointmentId: e.target.value,
                    patientId: selectedAppointment?.patientId || "",
                  });
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select an appointment</option>
                {appointments.map((a) => (
                  <option key={a.id} value={a.id}>
                    {getAppointmentDate(a.id)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Patient *
              </label>
              <select
                value={formData.patientId || ""}
                disabled
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              >
                <option value="">
                  {formData.patientId
                    ? getPatientName(formData.patientId)
                    : "Auto-filled from appointment"}
                </option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount ($) *
              </label>
              <input
                type="number"
                value={formData.amount || 0}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    amount: parseFloat(e.target.value),
                  })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0.00"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status *
              </label>
              <select
                value={formData.status || "pending"}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value as any })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <input
                type="text"
                value={formData.description || ""}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Cleaning and checkup"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Due Date *
              </label>
              <input
                type="date"
                value={formData.dueDate || ""}
                onChange={(e) =>
                  setFormData({ ...formData, dueDate: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
