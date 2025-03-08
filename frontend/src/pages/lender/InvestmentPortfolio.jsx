import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const InvestmentPortfolio = () => {
  // Mock Data for Investments
  const investments = [
    {
      id: 1,
      borrower: "Rahul Verma",
      amountInvested: 50000,
      returns: 6500,
      riskLevel: "Low",
      status: "Active",
      nextPayment: "15th March 2025",
    },
    {
      id: 2,
      borrower: "Aditi Shah",
      amountInvested: 75000,
      returns: 12000,
      riskLevel: "Medium",
      status: "Active",
      nextPayment: "10th March 2025",
    },
    {
      id: 3,
      borrower: "Arjun Nair",
      amountInvested: 30000,
      returns: 4800,
      riskLevel: "High",
      status: "Delayed",
      nextPayment: "Overdue by 7 days",
    },
    {
      id: 4,
      borrower: "Neha Patel",
      amountInvested: 60000,
      returns: 9000,
      riskLevel: "Low",
      status: "Repaid",
      nextPayment: "Loan Fully Repaid",
    },
  ];

  // Risk Distribution for Pie Chart
  const riskData = [
    { name: "Low Risk", value: 2 },
    { name: "Medium Risk", value: 1 },
    { name: "High Risk", value: 1 },
  ];

  const COLORS = ["#4CAF50", "#FF9800", "#F44336"];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">📈 Investment Portfolio</h1>
      
      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">💰 Total Investment</h2>
          <p className="text-gray-600">₹{investments.reduce((acc, loan) => acc + loan.amountInvested, 0)}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">📈 Total Returns</h2>
          <p className="text-gray-600">₹{investments.reduce((acc, loan) => acc + loan.returns, 0)}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">🔄 Active Investments</h2>
          <p className="text-gray-600">{investments.filter(loan => loan.status === "Active").length} Ongoing Loans</p>
        </div>
      </div>

      {/* Risk Analysis Pie Chart */}
      <div className="flex justify-center items-center mt-8">
        <PieChart width={300} height={300}>
          <Pie
            data={riskData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {riskData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Loan Details Table */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">📑 Loan Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Borrower</th>
                <th className="px-4 py-2 text-left">Invested (₹)</th>
                <th className="px-4 py-2 text-left">Returns (₹)</th>
                <th className="px-4 py-2 text-left">Risk</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Next Payment</th>
              </tr>
            </thead>
            <tbody>
              {investments.map((loan) => (
                <tr key={loan.id} className="border-b">
                  <td className="px-4 py-2">{loan.borrower}</td>
                  <td className="px-4 py-2">₹{loan.amountInvested}</td>
                  <td className="px-4 py-2">₹{loan.returns}</td>
                  <td className={`px-4 py-2 font-bold ${
                    loan.riskLevel === "Low" ? "text-green-600" : 
                    loan.riskLevel === "Medium" ? "text-yellow-600" : 
                    "text-red-600"
                  }`}>
                    {loan.riskLevel}
                  </td>
                  <td className={`px-4 py-2 font-semibold ${
                    loan.status === "Active" ? "text-blue-600" : 
                    loan.status === "Repaid" ? "text-green-600" : 
                    "text-red-600"
                  }`}>
                    {loan.status}
                  </td>
                  <td className="px-4 py-2">{loan.nextPayment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Suggested Borrowers for New Investments */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">🌟 Trending Borrowers for New Investments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold">Vikas Malhotra</h3>
            <p className="text-gray-600">Credit Score: 830</p>
            <p className="text-gray-600">Interest Rate: 9%</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Invest Now
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold">Sneha Roy</h3>
            <p className="text-gray-600">Credit Score: 810</p>
            <p className="text-gray-600">Interest Rate: 10%</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPortfolio;
