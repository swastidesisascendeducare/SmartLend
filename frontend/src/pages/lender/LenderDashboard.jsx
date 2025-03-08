import React from "react";
import { Line } from "recharts";

const LenderDashboard = () => {
  // Example Data
  const investmentPerformance = [
    { month: "Jan", returns: 2000 },
    { month: "Feb", returns: 3500 },
    { month: "Mar", returns: 4800 },
    { month: "Apr", returns: 4200 },
    { month: "May", returns: 5500 },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Lender Dashboard</h1>
      <p className="text-gray-600 mb-6">
        Track your investments, borrower risks, and loan repayments in real-time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold">Total Loans Funded</h2>
          <p className="text-3xl font-bold text-blue-600">₹1,20,000</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold">Active Borrowers</h2>
          <p className="text-3xl font-bold text-green-600">15</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold">Pending Repayments</h2>
          <p className="text-3xl font-bold text-red-600">₹35,000</p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Investment Performance</h2>
        <Line data={investmentPerformance} dataKey="returns" stroke="#3b82f6" />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Borrower Risk Insights</h2>
          <ul className="list-disc pl-5">
            <li>5 borrowers at low risk</li>
            <li>7 borrowers at moderate risk</li>
            <li>3 borrowers at high risk</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <ul className="text-gray-600">
            <li>+ ₹5,000 from Borrower A (EMI Payment)</li>
            <li>- ₹10,000 to Borrower B (New Loan)</li>
            <li>+ ₹7,500 from Borrower C (Early Repayment)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LenderDashboard;
