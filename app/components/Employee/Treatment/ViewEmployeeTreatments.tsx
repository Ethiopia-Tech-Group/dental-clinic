"use client";

export default function ViewEmployeeTreatments() {
  const treatments = [
    {
      patient: "Stephie McRandom",
      type: "Teeth Whitening",
      medication: "No medications administered",
      symptoms: "No symptoms",
      tooth: 999,
      comments: "No comments",
      appointmentId: 2,
    },
    {
      patient: "Stephie McRandom",
      type: "Root Canal",
      medication: "Anesthesia",
      symptoms: "Dysarthria (Temporary speech impairment)",
      tooth: 33,
      comments:
        "Do not eat food 24 hours before the procedure. Cannot drive after the treatment.",
      appointmentId: 3,
    },
    {
      patient: "Paul McRandomee",
      type: "Fillings",
      medication: "Need to come for followup",
      symptoms: "Disease",
      tooth: 12355664,
      comments: "Come on 30 March",
      appointmentId: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Patient Treatments</h1>
        <p className="mt-1 text-gray-200">
          Treatments are diagnosed after an appointment with a patient and are
          required before creating a patient's appointment procedure.
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Patient Name
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Treatment Type
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Medication
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Symptoms
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Tooth
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Comments
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Appointment ID
              </th>
            </tr>
          </thead>
          <tbody>
            {treatments.map((treatment, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border px-4 py-2">{treatment.patient}</td>
                <td className="border px-4 py-2">{treatment.type}</td>
                <td className="border px-4 py-2">{treatment.medication}</td>
                <td className="border px-4 py-2">{treatment.symptoms}</td>
                <td className="border px-4 py-2">{treatment.tooth}</td>
                <td className="border px-4 py-2">{treatment.comments}</td>
                <td className="border px-4 py-2">{treatment.appointmentId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
