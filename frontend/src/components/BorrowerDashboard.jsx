import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BorrowerDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [loanData, setLoanData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        setLoanData([
          { id: "LN001", amount: 5000, status: "Approved", nextPayment: "2025-03-15" },
          { id: "LN002", amount: 10000, status: "Pending", nextPayment: "2025-04-01" }
        ]);
        setError(false);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <motion.div
      className="container mx-auto p-6 bg-gray-100 min-h-screen flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Borrower Dashboard</h2>
      {loading ? (
        <div className="flex justify-center items-center h-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-lg font-semibold">
          Error loading data. <button className="text-blue-500 underline" onClick={() => window.location.reload()}>Retry</button>
        </div>
      ) : (
        <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-3xl">
          <h4 className="text-2xl font-semibold mb-4 text-gray-700">Loan Status</h4>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-200 text-gray-700">
                <th className="border border-gray-300 p-3">Loan ID</th>
                <th className="border border-gray-300 p-3">Amount ($)</th>
                <th className="border border-gray-300 p-3">Status</th>
                <th className="border border-gray-300 p-3">Next Payment</th>
              </tr>
            </thead>
            <tbody>
              {loanData.length > 0 ? (
                loanData.map((loan) => (
                  <tr key={loan.id} className="border border-gray-300 hover:bg-gray-100">
                    <td className="border border-gray-300 p-3">{loan.id}</td>
                    <td className="border border-gray-300 p-3">${loan.amount}</td>
                    <td className={`border border-gray-300 p-3 font-bold ${loan.status === "Approved" ? "text-green-500" : "text-yellow-500"}`}>{loan.status}</td>
                    <td className="border border-gray-300 p-3">{loan.nextPayment || "N/A"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-600">No loans found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
};

export default BorrowerDashboard;
