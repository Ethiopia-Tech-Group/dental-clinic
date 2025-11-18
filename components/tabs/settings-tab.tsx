"use client";

import React, { useState } from "react";
import { Bell, Lock, User, Database } from 'lucide-react';

export function SettingsTab() {
  const [settings, setSettings] = useState({
    clinicName: "DentalCare Clinic",
    clinicEmail: "admin@dentalclinic.com",
    clinicPhone: "+1-555-0100",
    operatingHours: "9:00 AM - 6:00 PM",
    emergencyPhone: "+1-555-0199",
    notificationsEnabled: true,
    emailNotifications: true,
    appointmentReminders: true,
    autoBackup: true,
  });

  const [savedMessage, setSavedMessage] = useState(false);

  const handleChange = (field: string, value: any) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  const sections = [
    {
      title: "Clinic Information",
      icon: User,
      fields: [
        {
          label: "Clinic Name",
          key: "clinicName",
          type: "text",
        },
        {
          label: "Email",
          key: "clinicEmail",
          type: "email",
        },
        {
          label: "Phone",
          key: "clinicPhone",
          type: "tel",
        },
        {
          label: "Operating Hours",
          key: "operatingHours",
          type: "text",
        },
        {
          label: "Emergency Phone",
          key: "emergencyPhone",
          type: "tel",
        },
      ],
    },
    {
      title: "Notifications",
      icon: Bell,
      fields: [
        {
          label: "Enable Notifications",
          key: "notificationsEnabled",
          type: "toggle",
        },
        {
          label: "Email Notifications",
          key: "emailNotifications",
          type: "toggle",
        },
        {
          label: "Appointment Reminders",
          key: "appointmentReminders",
          type: "toggle",
        },
      ],
    },
    {
      title: "Data & Security",
      icon: Lock,
      fields: [
        {
          label: "Enable Auto Backup",
          key: "autoBackup",
          type: "toggle",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-600 mt-1">
          Manage your clinic settings and preferences
        </p>
      </div>

      {savedMessage && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <div className="w-2 h-2 bg-green-600 rounded-full" />
          <p className="text-sm text-green-800">Settings saved successfully</p>
        </div>
      )}

      <div className="space-y-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.title}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Icon className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {section.title}
                </h3>
              </div>

              <div className="space-y-4">
                {section.fields.map((field) => (
                  <div key={field.key} className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">
                      {field.label}
                    </label>
                    {field.type === "toggle" ? (
                      <button
                        onClick={() =>
                          handleChange(field.key, !settings[field.key as keyof typeof settings])
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings[field.key as keyof typeof settings]
                            ? "bg-blue-600"
                            : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings[field.key as keyof typeof settings]
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    ) : (
                      <input
                        type={field.type}
                        value={String(settings[field.key as keyof typeof settings] ?? "")}
                        onChange={(e) =>
                          handleChange(field.key, e.target.value)
                        }
                        className="w-full md:w-64 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          System Information
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">System Version</span>
            <span className="font-medium text-gray-900">v1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Last Backup</span>
            <span className="font-medium text-gray-900">
              {new Date().toLocaleDateString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Database Status</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
              Healthy
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Save Settings
        </button>
        <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50">
          Reset to Default
        </button>
      </div>
    </div>
  );
}
