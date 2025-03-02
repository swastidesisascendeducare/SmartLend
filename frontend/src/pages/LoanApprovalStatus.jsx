import React, { useState } from "react";

const LoanStatusPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");

  // Loan Applications Data
  const loanApplications = [
    { id: "LN-12345", date: "2025-02-20", amount: 15000, status: "Approved", reason: "Good credit score" },
    { id: "LN-67890", date: "2025-02-22", amount: 8000, status: "Pending", reason: "Under review" },
    { id: "LN-11223", date: "2025-02-24", amount: 20000, status: "Rejected", reason: "Low income eligibility" },
  ];

  // Handle search filtering
  const filteredLoans = loanApplications
    .filter((loan) => loan.id.toLowerCase().includes(searchTerm.toLowerCase()) || loan.status.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortBy === "date" ? new Date(a.date) - new Date(b.date) : a.amount - b.amount));

  return (
    <div className="container mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Loan Approval & Status</h2>

      {/* Search and Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <input
          type="text"
          placeholder="Search by Loan ID or Status..."
          className="border p-2 rounded-md w-full md:w-1/3"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="border p-2 rounded-md mt-2 md:mt-0" onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
      </div>

      {/* Loan Status Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-4">Loan ID</th>
              <th className="py-3 px-4">Date Applied</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Reason</th>
            </tr>
          </thead>
          <tbody>
            {filteredLoans.length > 0 ? (
              filteredLoans.map((loan, index) => (
                <tr key={index} className="border-b border-gray-200 text-center hover:bg-gray-100">
                  <td className="py-3 px-4">{loan.id}</td>
                  <td className="py-3 px-4">{loan.date}</td>
                  <td className="py-3 px-4">${loan.amount.toLocaleString()}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      loan.status === "Approved" ? "text-green-600" :
                      loan.status === "Rejected" ? "text-red-600" :
                      "text-yellow-600"
                    }`}
                  >
                    {loan.status}
                  </td>
                  <td className="py-3 px-4">{loan.reason}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">No loans found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanStatusPage;
