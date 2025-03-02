import React, { useState, useEffect } from "react";

const LoanStatusPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Loan Applications Data
  const loanApplications = [
    { id: "LN-12345", date: "2025-02-20", amount: 15000, status: "Approved", reason: "Good credit score" },
    { id: "LN-67890", date: "2025-02-22", amount: 8000, status: "Pending", reason: "Under review" },
    { id: "LN-11223", date: "2025-02-24", amount: 20000, status: "Rejected", reason: "Low income eligibility" },
  ];

  // Debounced Search Effect (Prevents frequent re-renders)
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Handle search and sorting
  const filteredLoans = loanApplications
    .filter((loan) => 
      loan.id.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      loan.status.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .sort((a, b) => 
      sortBy === "date" 
        ? new Date(a.date) - new Date(b.date) 
        : a.amount - b.amount
    );

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Loan Approval & Status
      </h2>

      {/* Search and Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-3">
        <input
          type="text"
          placeholder="Search by Loan ID or Status..."
          className="border p-3 rounded-md w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          className="border p-3 rounded-md w-full md:w-1/4" 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
      </div>

      {/* Loan Status Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              {["Loan ID", "Date Applied", "Amount", "Status", "Reason"].map((heading, index) => (
                <th key={index} className="py-3 px-4 text-left">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredLoans.length > 0 ? (
              filteredLoans.map((loan) => (
                <tr key={loan.id} className="border-b border-gray-200 hover:bg-gray-100">
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
