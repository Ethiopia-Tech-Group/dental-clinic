"use client";

import { useState } from "react";
import Image from "next/image";
import myImage from "../../../public/img/2df612c4e1992f701036f697b7bf16e2.jpg";
import Link from "next/link";

export default function Login() {
  const [role, setRole] = useState("patient"); // default role
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");

    // Validation
    if (!email) {
      setEmailError("Please enter your email address");
      return;
    }
    if (!password) {
      setPasswordError("Please enter your password");
      return;
    }

    // STATIC REDIRECTION BASED ON ROLE
    if (role === "patient") {
      window.location.href = "/route/patient";
    } else if (role === "employee") {
      window.location.href = "/route/employee";
    } else if (role === "admin") {
      window.location.href = "/route/admin";
    } else if (role === "receptionist") {
      window.location.href = "/route/receptionist";
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image src={myImage} alt="Login Image" className="w-full h-55" fill />
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Login to Your Account
          </h2>

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">
              Select Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="patient">Patient</option>
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
              <option value="receptionist">Receptionist</option>
            </select>
          </div>

          {/* Errors */}
          {emailError && <p className="text-red-600 mb-2">{emailError}</p>}
          {passwordError && (
            <p className="text-red-600 mb-2">{passwordError}</p>
          )}

          {/* Inputs */}
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-[#1A3A79] text-white py-2 rounded hover:bg-[#162f65] transition"
            >
              Login
            </button>
          </div>

          <div className="text-center mt-4">
            <Link
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
