"use client";

import React, { useState } from "react";
import { DataTable } from "@/components/shared/data-table";
import { Modal } from "@/components/shared/modal";
import { Badge } from "@/components/shared/badge";
import { useAppStore } from "@/lib/store";
import { Appointment, Branch, Dentist, Patient } from "@/types";
import { Plus, Calendar, Clock, User, MapPin, FileText, X } from 'lucide-react';

export function AppointmentsTab() {
  const {
    appointments,
    patients,
    dentists,
    branches,
    addAppointment,
    updateAppointment,
    deleteAppointment,
  } = useAppStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [formData, setFormData] = useState<Partial<Appointment>>({
    patientId: "",
    dentistId: "",
    branchId: "",
    appointmentDate: "",
    appointmentTime: "",
    status: "scheduled",
    notes: "",
  });

  const handleOpenModal = (appointment?: Appointment) => {
    if (appointment) {
      setFormData(appointment);
      setEditingId(appointment.id);
    } else {
      setFormData({
        patientId: "",
        dentistId: "",
        branchId: "",
        appointmentDate: "",
        appointmentTime: "",
        status: "scheduled",
        notes: "",
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

  const handleView = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCloseDetail = () => {
    setSelectedAppointment(null);
  };

  const handleDelete = (appointment: Appointment) => {
    if (confirm("Are you sure you want to delete this appointment?")) {
      deleteAppointment(appointment.id);
      if (selectedAppointment?.id === appointment.id) {
        setSelectedAppointment(null);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (
      !formData.patientId ||
      !formData.dentistId ||
      !formData.branchId ||
      !formData.appointmentDate ||
      !formData.appointmentTime
    ) {
      alert("Please fill in all required fields");
      return;
    }

    if (editingId) {
      updateAppointment(editingId, formData);
      // Update the selected appointment if it's the one being edited
      if (selectedAppointment?.id === editingId) {
        setSelectedAppointment({
          ...selectedAppointment,
          ...formData
        } as Appointment);
      }
    } else {
      const newAppointment: Appointment = {
        id: `a${Date.now()}`,
        patientId: formData.patientId!,
        dentistId: formData.dentistId!,
        branchId: formData.branchId!,
        appointmentDate: formData.appointmentDate!,
        appointmentTime: formData.appointmentTime!,
        status: (formData.status as any) || "scheduled",
        notes: formData.notes || "",
        createdAt: new Date().toISOString().split("T")[0],
      };
      addAppointment(newAppointment);
    }
    handleCloseModal();
  };

  const getPatientName = (id: string) => {
    return patients.find((p) => p.id === id)?.name || "Unknown";
  };

  const getDentistName = (id: string) => {
    return dentists.find((d) => d.id === id)?.name || "Unknown";
  };

  const getBranchName = (id: string) => {
    return branches.find((b) => b.id === id)?.name || "Unknown";
  };

  const getPatientDetails = (id: string) => {
    return patients.find((p) => p.id === id);
  };

  const getDentistDetails = (id: string) => {
    return dentists.find((d) => d.id === id);
  };

  const getBranchDetails = (id: string) => {
    return branches.find((b) => b.id === id);
  };

  const columns = [
    { key: "appointmentDate" as const, label: "Date", sortable: true },
    { key: "appointmentTime" as const, label: "Time", sortable: true },
    {
      key: "patientId" as const,
      label: "Patient",
      render: (value: unknown) => getPatientName(value as string),
    },
    {
      key: "dentistId" as const,
      label: "Dentist",
      render: (value: unknown) => getDentistName(value as string),
    },
    {
      key: "branchId" as const,
      label: "Branch",
      render: (value: unknown) => getBranchName(value as string),
    },
    {
      key: "status" as const,
      label: "Status",
      render: (value: unknown) => {
        const status = value as string;
        return (
          <Badge
            variant={
              status === "completed"
                ? "success"
                : status === "scheduled"
                ? "info"
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
    <div className="flex h-full gap-6 ">
      {/* Main Content */}
      <div className={` flex-1 space-y-6 relative${selectedAppointment ? 'lg:pr-80 pr-0' : ''}`}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
            <p className="text-gray-600 mt-1">Manage all clinic appointments</p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New Appointment
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <DataTable
            columns={columns}
            data={appointments}
            searchFields={["appointmentDate", "notes"]}
            onEdit={handleOpenModal}
            onDelete={handleDelete}
            onView={handleView}
          />
        </div>
      </div>

      {/* Appointment Detail Sidebar */}
      {selectedAppointment && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white border-l border-gray-200 shadow-lg lg:static lg:shadow-none z-10">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Appointment Details</h3>
              <button
                onClick={handleCloseDetail}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {/* Status Badge */}
                <div className="flex justify-center">
                  <Badge
                    variant={
                      selectedAppointment.status === "completed"
                        ? "success"
                        : selectedAppointment.status === "scheduled"
                        ? "info"
                        : "error"
                    }
                  >
                    {selectedAppointment.status.toUpperCase()}
                  </Badge>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(selectedAppointment.appointmentDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="font-semibold text-gray-900">
                      {selectedAppointment.appointmentTime}
                    </p>
                  </div>
                </div>

                {/* Patient Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Patient Information
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    {(() => {
                      const patient = getPatientDetails(selectedAppointment.patientId);
                      return patient ? (
                        <div className="space-y-2">
                          <p className="font-semibold text-gray-900">{patient.name}</p>
                          <p className="text-sm text-gray-600">{patient.email}</p>
                          <p className="text-sm text-gray-600">{patient.phone}</p>
                        </div>
                      ) : (
                        <p className="text-gray-500">Patient not found</p>
                      );
                    })()}
                  </div>
                </div>

                {/* Dentist Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Dentist Information
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    {(() => {
                      const dentist = getDentistDetails(selectedAppointment.dentistId);
                      return dentist ? (
                        <div className="space-y-2">
                          <p className="font-semibold text-gray-900">{dentist.name}</p>
                          <p className="text-sm text-gray-600">{dentist.specialization}</p>
                          <p className="text-sm text-gray-600">{dentist.email}</p>
                        </div>
                      ) : (
                        <p className="text-gray-500">Dentist not found</p>
                      );
                    })()}
                  </div>
                </div>

                {/* Branch Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Branch Information
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    {(() => {
                      const branch = getBranchDetails(selectedAppointment.branchId);
                      return branch ? (
                        <div className="space-y-2">
                          <p className="font-semibold text-gray-900">{branch.name}</p>
                          <p className="text-sm text-gray-600">{branch.address}</p>
                          <p className="text-sm text-gray-600">{branch.phone}</p>
                        </div>
                      ) : (
                        <p className="text-gray-500">Branch not found</p>
                      );
                    })()}
                  </div>
                </div>

                {/* Notes */}
                {selectedAppointment.notes && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Notes
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">
                        {selectedAppointment.notes}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex gap-3">
                <button
                  onClick={() => handleOpenModal(selectedAppointment)}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Edit Appointment
                </button>
                <button
                  onClick={() => handleDelete(selectedAppointment)}
                  className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create/Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Appointment Form" size="lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Patient *
              </label>
              <select
                value={formData.patientId || ""}
                onChange={(e) =>
                  setFormData({ ...formData, patientId: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a patient</option>
                {patients.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dentist *
              </label>
              <select
                value={formData.dentistId || ""}
                onChange={(e) =>
                  setFormData({ ...formData, dentistId: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a dentist</option>
                {dentists.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date *
              </label>
              <input
                type="date"
                value={formData.appointmentDate || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    appointmentDate: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time *
              </label>
              <input
                type="time"
                value={formData.appointmentTime || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    appointmentTime: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={formData.status || "scheduled"}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value as any })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="scheduled">Scheduled</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              value={formData.notes || ""}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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