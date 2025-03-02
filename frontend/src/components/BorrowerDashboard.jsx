import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaDownload, FaBell, FaCreditCard, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";

const BorrowerDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [loanData, setLoanData] = useState([]);
  const [error, setError] = useState(false);
  const [creditScore, setCreditScore] = useState(750);
  const [notifications, setNotifications] = useState([
    "Upcoming EMI due on March 15, 2025",
    "Low balance warning: Add funds for next EMI",
    "Limited-time offer: Lower interest rate available",
  ]);

  // Simulated Loan Data Fetching
  const fetchLoanData = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoanData([
          { id: "LN001", amount: 5000, status: "Approved", nextPayment: "2025-03-15", paidAmount: 2000 },
          { id: "LN002", amount: 10000, status: "Pending", nextPayment: "2025-04-01", paidAmount: 0 },
        ]);
        setError(false);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchLoanData();
  }, []);

  return (
    <motion.div
      className="container mx-auto p-6 bg-gray-100 min-h-screen flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Borrower Dashboard</h2>
      
      {/* Notifications */}
      <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 w-full max-w-3xl">
        <h4 className="text-lg font-semibold text-yellow-700"><FaBell className="inline-block mr-2" />Notifications</h4>
        <ul className="list-disc ml-5 text-gray-700">
          {notifications.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>

      {/* Credit Score */}
      <div className="flex justify-center items-center mb-6">
        <div className="w-32 h-32">
          <CircularProgressbar
            value={creditScore}
            text={`${creditScore}`}
            styles={buildStyles({
              textSize: "20px",
              pathColor: creditScore > 700 ? "#22c55e" : "#eab308",
              textColor: "#333",
            })}
          />
        </div>
        <p className="ml-4 text-lg text-gray-700">Credit Score</p>
      </div>

      {/* Loan Details */}
      {loading ? (
        <div className="flex justify-center items-center h-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-lg font-semibold">
          Error loading data. <button className="text-blue-500 underline" onClick={fetchLoanData}>Retry</button>
        </div>
      ) : (
        <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-3xl">
          <h4 className="text-2xl font-semibold mb-4 text-gray-700">Loan Overview</h4>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-200 text-gray-700">
                <th className="border border-gray-300 p-3">Loan ID</th>
                <th className="border border-gray-300 p-3">Amount ($)</th>
                <th className="border border-gray-300 p-3">Paid ($)</th>
                <th className="border border-gray-300 p-3">Next Payment</th>
                <th className="border border-gray-300 p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {loanData.map((loan) => (
                <tr key={loan.id} className="border border-gray-300 hover:bg-gray-100">
                  <td className="border border-gray-300 p-3">{loan.id}</td>
                  <td className="border border-gray-300 p-3">${loan.amount}</td>
                  <td className="border border-gray-300 p-3">${loan.paidAmount}</td>
                  <td className="border border-gray-300 p-3">{loan.nextPayment || "N/A"}</td>
                  <td className={`border border-gray-300 p-3 font-bold ${loan.status === "Approved" ? "text-green-500" : "text-yellow-500"}`}>{loan.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Actions */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"><FaDownload className="mr-2" />Download Agreement</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center"><FaCreditCard className="mr-2" />Make Payment</button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded flex items-center"><FaPhoneAlt className="mr-2" />Contact Support</button>
      </div>
    </motion.div>
  );
};

export default BorrowerDashboard;
