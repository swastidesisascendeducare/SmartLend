import React, { useState, useEffect } from "react";

const LoanStatusPage = () => {
  const [email, setEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loanApplications, setLoanApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    if (!email.trim()) {
      setError("Please enter your email to fetch loan data.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:8000/get-loan-by-email?email=${encodeURIComponent(email)}`
      );
      if (!response.ok) throw new Error("Failed to fetch loan data.");

      const data = await response.json();
      console.log("Fetched loan data:", data);

      if (Array.isArray(data) && data.length > 1) {
        setLoanApplications(data.slice(1));
      } else {
        setLoanApplications([]);
        setError("No loan applications found for this email.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredLoans = loanApplications
    .filter((loan) => {
      const status = loan.approved === 0 ? "approved" : "rejected";
      return (
        loan._id?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        status.includes(debouncedSearch.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
      } else {
        return (a.loanAmount || 0) - (b.loanAmount || 0);
      }
    });

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Loan Approval & Status
      </h2>
      <div className="flex flex-col mb-4">
        <input
          type="email"
          placeholder="Enter your email to fetch loans..."
          className="border p-3 rounded-md w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={fetchData}
          className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Fetch Loan Data
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              {["Date Applied", "Amount", "Status"].map((heading, index) => (
                <th key={index} className="py-3 px-4 text-left">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredLoans.length > 0 ? (
              filteredLoans.map((loan) => (
                <tr
                  key={loan._id || Math.random()}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-4">
                    {loan.createdAt
                      ? new Date(loan.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="py-3 px-4">
                    ₹{loan.loanAmount?.toLocaleString() || "0"}
                  </td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      loan.approved === 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {loan.approved === 0 ? "Approved" : "Rejected"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No loans found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanStatusPage;
