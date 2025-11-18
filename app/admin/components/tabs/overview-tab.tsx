"use client";

import React from "react";
import { Calendar, Users, Stethoscope, MapPin, CreditCard } from 'lucide-react';
import { useAppStore } from "@/lib/store";

interface StatCard {
  label: string;
  value: number;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  iconColor: string;
}

export function OverviewTab() {
  const { appointments, patients, dentists, branches, billing } = useAppStore();

  const pendingBills = billing.filter((b) => b.status === "pending").length;
  const completedAppointments = appointments.filter(
    (a) => a.status === "completed"
  ).length;

  const stats: StatCard[] = [
    {
      label: "Total Appointments",
      value: appointments.length,
      icon: Calendar,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      label: "Total Patients",
      value: patients.length,
      icon: Users,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      label: "Total Dentists",
      value: dentists.length,
      icon: Stethoscope,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      label: "Total Branches",
      value: branches.length,
      icon: MapPin,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      label: "Pending Bills",
      value: pendingBills,
      icon: CreditCard,
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      label: "Completed Appointments",
      value: completedAppointments,
      icon: Calendar,
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-600 mt-1">
          Welcome to your dental clinic management system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`${stat.bgColor} rounded-lg p-6 border border-gray-200`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                </div>
                <Icon className={`w-8 h-8 ${stat.iconColor}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mt-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Appointments
          </h3>
          <div className="space-y-3">
            {appointments.slice(0, 5).map((apt) => (
              <div
                key={apt.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {apt.appointmentDate} at {apt.appointmentTime}
                  </p>
                  <p className="text-xs text-gray-600">{apt.notes}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    apt.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : apt.status === "scheduled"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {apt.status}
                </span>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
}
