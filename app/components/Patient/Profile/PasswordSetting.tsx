"use client";

import { useState } from "react";

export default function PatientPasswordSettings() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handlePasswordUpdate = () => {
    if (!oldPass || !newPass || !confirmPass) {
      alert("Please fill all fields.");
      return;
    }

    if (newPass !== confirmPass) {
      alert("New passwords do not match!");
      return;
    }

    alert("Password updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Password Settings</h1>
        <p className="mt-1 text-gray-200">Update your account password</p>
      </div>

      <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Change Password</h2>

        {/* Old Password */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Old Password</label>
          <input
            type="password"
            className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
          />
        </div>

        {/* New Password */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">New Password</label>
          <input
            type="password"
            className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="text-sm text-gray-600">Confirm New Password</label>
          <input
            type="password"
            className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </div>

        <button
          onClick={handlePasswordUpdate}
          className="w-full bg-[#1A3A79] text-white py-2 rounded-lg hover:bg-[#153067]"
        >
          Update Password
        </button>
      </div>
    </div>
  );
}
