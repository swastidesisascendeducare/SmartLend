import React from "react";

const LoanStatusPage = () => {
  // Dummy data for loan status
  const loanApplications = [
    {
      id: "LN-12345",
      date: "2025-02-20",
      amount: "$15,000",
      status: "Approved",
      reason: "Good credit score",
    },
    {
      id: "LN-67890",
      date: "2025-02-22",
      amount: "$8,000",
      status: "Pending",
      reason: "Under review",
    },
    {
      id: "LN-11223",
      date: "2025-02-24",
      amount: "$20,000",
      status: "Rejected",
      reason: "Low income eligibility",
    },
  ];

  return (
    <div className="container mx-auto mt-20 p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Loan Approval & Status</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4">Loan ID</th>
              <th className="py-2 px-4">Date Applied</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Reason</th>
            </tr>
          </thead>
          <tbody>
            {loanApplications.map((loan, index) => (
              <tr key={index} className="border-b border-gray-200 text-center">
                <td className="py-2 px-4">{loan.id}</td>
                <td className="py-2 px-4">{loan.date}</td>
                <td className="py-2 px-4">{loan.amount}</td>
                <td
                  className={`py-2 px-4 font-semibold ${
                    loan.status === "Approved"
                      ? "text-green-600"
                      : loan.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {loan.status}
                </td>
                <td className="py-2 px-4">{loan.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanStatusPage;