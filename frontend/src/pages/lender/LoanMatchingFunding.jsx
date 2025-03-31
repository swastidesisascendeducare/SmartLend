import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// const loanRequests = [
//   { id: 1, name: "Amit Sharma", amount: 50000, interest: 12, duration: "12 months", risk: "Low", funded: 30 },
//   { id: 2, name: "Priya Mehta", amount: 200000, interest: 15, duration: "24 months", risk: "High", funded: 60 },
//   { id: 3, name: "Rahul Verma", amount: 100000, interest: 10, duration: "18 months", risk: "Medium", funded: 45 },
//   { id: 4, name: "Neha Gupta", amount: 75000, interest: 13, duration: "15 months", risk: "Low", funded: 80 },
// ];


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
      
      {/* Filter Options
      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter by Risk Level:</label>
        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div> */}

      {/* Loan Requests */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.isArray(filteredLoans) &&
  filteredLoans.map((loan) => (
    <div key={loan.id} className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{loan.name}</h2>
      <p className="text-gray-600">Loan Amount: ₹{loan.loanAmount}</p>
      <p className="text-gray-600">Interest Rate: {loan.interestRate}%</p>
      <p className="text-gray-600">Duration: {loan.loanTerm}</p>
      {/* <p className={`font-semibold ${loan.risk === "High" ? "text-red-500" : loan.risk === "Medium" ? "text-orange-500" : "text-green-500"}`}>
        Risk Level: {loan.risk}
      </p> */}

      {/* Funding Progress Bar */}
      <div className="mt-4 bg-gray-200 h-4 rounded-full overflow-hidden">
        <div className="bg-blue-500 h-full" style={{ width: `${loan.funded}%` }}></div>
      </div>
      <p className="text-sm mt-1">{loan.funded}% funded</p>

      {/* Fund Button */}
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => navigate("/loan-agreement-review")}>
          Fund Loan
      </button>

    </div>
  ))}
      </div>
    </div>
  );
};

export default LoanMatchingFunding;
