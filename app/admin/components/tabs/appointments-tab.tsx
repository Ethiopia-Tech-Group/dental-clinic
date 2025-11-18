"use client";

import React, { useState } from "react";
import { DataTable } from "@/components/shared/data-table";
import { Modal } from "@/components/shared/modal";
import { Badge } from "@/components/shared/badge";
import { useAppStore } from "@/lib/store";
import { Appointment } from "@/types";
import { Plus, Calendar, Clock, User, MapPin, FileText, X } from 'lucide-react';

export function AppointmentsTab() {
  const { appointments, patients, dentists, branches, addAppointment, updateAppointment, deleteAppointment } = useAppStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [formData, setFormData] = useState<Partial<Appointment>>({ status: "scheduled" });

  const handleOpenModal = (appointment?: Appointment) => {
    if (appointment) {
      setFormData(appointment);
      setEditingId(appointment.id);
    } else {
      setFormData({ status: "scheduled" });
      setEditingId(null);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({ status: "scheduled" });
  };

  const handleRowClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCloseDetail = () => setSelectedAppointment(null);

  const handleDelete = (appointment: Appointment) => {
    deleteAppointment(appointment.id);
    if (selectedAppointment?.id === appointment.id) setSelectedAppointment(null);
  };

  const getPatientName = (id: string) => patients.find((p) => p.id === id)?.name || "Unknown";
  const getDentistName = (id: string) => dentists.find((d) => d.id === id)?.name || "Unknown";
  const getBranchName = (id: string) => branches.find((b) => b.id === id)?.name || "Unknown";
  const getPatientDetails = (id: string) => patients.find((p) => p.id === id);
  const getDentistDetails = (id: string) => dentists.find((d) => d.id === id);
  const getBranchDetails = (id: string) => branches.find((b) => b.id === id);

  const columns = [
    { key: "appointmentDate" as const, label: "Date", sortable: true },
    { key: "appointmentTime" as const, label: "Time", sortable: true },
    { key: "patientId" as const, label: "Patient", render: (value: unknown) => getPatientName(value as string) },
    { key: "dentistId" as const, label: "Dentist", render: (value: unknown) => getDentistName(value as string) },
    { key: "branchId" as const, label: "Branch", render: (value: unknown) => getBranchName(value as string) },
    {
      key: "status" as const,
      label: "Status",
      render: (value: unknown) => (
        <Badge variant={value === "completed" ? "success" : value === "scheduled" ? "info" : "error"}>
          {String(value)}
        </Badge>
      ),
    },
  ];

  return (
    <div className="flex h-full gap-6">
      <div className={`flex-1 space-y-6 ${selectedAppointment ? 'lg:pr-80' : ''}`}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
            <p className="text-gray-600 mt-1">Manage all clinic appointments</p>
          </div>
          <button onClick={() => handleOpenModal()} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
            <Plus className="w-5 h-5" /> New Appointment
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <DataTable
            columns={columns}
            data={appointments}
            searchFields={["appointmentDate", "notes"]}
            onEdit={handleOpenModal}
            onDelete={handleDelete}
            onRowClick={handleRowClick}
          />
        </div>
      </div>

      {/* Sidebar and Modal remain same as your code */}
    </div>
  );
}
