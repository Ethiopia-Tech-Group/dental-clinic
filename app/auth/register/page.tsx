"use client";

import Image from "next/image";
import myImage from "../../../public/img/10005.jpg";

export default function RegistrationPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src={myImage}
          alt="Registration Image"
          className="object-cover w-full h-full"
          fill
        />
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Create an Account
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-[#1A3A79] text-white py-2 rounded hover:bg-[#1A3A79] transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
