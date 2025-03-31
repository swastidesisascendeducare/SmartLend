import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoanMatchingFunding = () => {
  const navigate = useNavigate();
  const [loanRequests, setLoanRequests] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/loans/get-eligible-borrowers/${'67de9cb6f1728e1e9523bf9d'}`
        );
        console.log(response.data)
        setLoanRequests(response.data);
      } catch (error) {
        console.error("Error fetching loan requests", error);
      }
    };

    fetchLoans();
  }, []);

  const filteredLoans = filter === "All" ? loanRequests : loanRequests.filter((loan) => loan.risk === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Loan Matching & Funding</h1>

      {/* Loan Requests */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.isArray(filteredLoans) &&
  filteredLoans.map((loan) => (
    <div key={loan.id} className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{loan.name}</h2>
      <p className="text-gray-600">Loan Amount: ₹{loan.loanAmount}</p>
      <p className="text-gray-600">Interest Rate: {loan.interestRate}%</p>
      <p className="text-gray-600">Duration: {loan.loanTerm}</p>

      {/* Fund Button */}
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => navigate("/loan-agreement")}>
          Fund Loan
      </button>

    </div>
  ))}
      </div>
    </div>
  );
};

export default LoanMatchingFunding;
