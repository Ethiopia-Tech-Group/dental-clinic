"use client";

export default function PatientProfile() {
  const patient = {
    name: "Stephie McRandom",
    email: "stephie@example.com",
    phone: "+1 555-123-4567",
    gender: "Female",
    dob: "1998-04-12",
    address: "123 Maple Street, New York, USA",
    profilePhoto: "https://cdn-icons-png.flaticon.com/512/847/847969.png", // you can replace with real
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <p className="mt-1 text-gray-200">Hello, {patient.name}</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="flex flex-col items-center">
          <img
            src={patient.profilePhoto}
            alt="profile"
            className="w-28 h-28 rounded-full border shadow"
          />

          <h2 className="text-xl font-semibold mt-4">{patient.name}</h2>
          <p className="text-sm text-gray-500">{patient.email}</p>

          <button className="mt-4 bg-[#1A3A79] text-white px-6 py-2 rounded-lg hover:bg-[#153067]">
            Edit Profile
          </button>
        </div>

        {/* DETAILS */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-base font-medium text-gray-800">
              {patient.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-base font-medium text-gray-800">
              {patient.phone}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-base font-medium text-gray-800">
              {patient.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="text-base font-medium text-gray-800">
              {patient.gender}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="text-base font-medium text-gray-800">{patient.dob}</p>
          </div>

          <div className="sm:col-span-2">
            <p className="text-sm text-gray-500">Address</p>
            <p className="text-base font-medium text-gray-800">
              {patient.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
