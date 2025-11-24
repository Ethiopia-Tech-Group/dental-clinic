"use client";

export default function EmployeeViewReviews() {
  const reviews = [
    {
      date: "2025-04-10",
      comments:
        "I could not believe the service I received for this appointment. Absolutely horrible. You will be hearing about me on Yelp!!!",
      professionalism: 1,
      communication: 1,
      cleanliness: 2,
      procedure: "Teeth Whitening",
    },
    {
      date: "2025-06-15",
      comments: "Excellent service, very professional staff.",
      professionalism: 5,
      communication: 5,
      cleanliness: 5,
      procedure: "Dental Cleaning",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-[#1A3A79] text-white p-6 mb-6">
        <h1 className="text-2xl font-bold">Patient Reviews</h1>
        <p className="mt-1 text-gray-200">
          Note: Patient reviews are anonymous. Ratings are on a scale from 1 to
          5.
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Date of Review
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Comments
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Professionalism
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Communication
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Cleanliness
              </th>
              <th className="border px-4 py-2 text-left text-sm font-medium text-gray-700">
                Procedure
              </th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border px-4 py-2">{review.date}</td>
                <td className="border px-4 py-2">{review.comments}</td>
                <td className="border px-4 py-2">{review.professionalism}</td>
                <td className="border px-4 py-2">{review.communication}</td>
                <td className="border px-4 py-2">{review.cleanliness}</td>
                <td className="border px-4 py-2">{review.procedure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
