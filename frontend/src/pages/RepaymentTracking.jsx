import React, { useState } from "react";
import { CheckCircle, Clock, XCircle, CreditCard } from "lucide-react"; // Icons for better UI

const RepaymentTracking = () => {
  const [repayments, setRepayments] = useState([
    { id: 1, dueDate: "2025-03-10", amount: "$500", status: "Upcoming" },
    { id: 2, dueDate: "2025-02-10", amount: "$500", status: "Paid" },
    { id: 3, dueDate: "2025-01-10", amount: "$500", status: "Paid" },
  ]);

  // Function to handle payment
  const handlePayNow = (id) => {
    setRepayments((prevRepayments) =>
      prevRepayments.map((payment) =>
        payment.id === id ? { ...payment, status: "Paid" } : payment
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">📅 Loan Repayment Tracker</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 border">Payment ID</th>
              <th className="p-3 border">Due Date</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {repayments.map((payment) => (
              <tr key={payment.id} className="text-center hover:bg-gray-50">
                <td className="p-3 border">{payment.id}</td>
                <td className="p-3 border">{payment.dueDate}</td>
                <td className="p-3 border">{payment.amount}</td>
                <td
                  className={`p-3 border font-semibold flex items-center justify-center gap-2 ${
                    payment.status === "Paid"
                      ? "text-green-600"
                      : payment.status === "Upcoming"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {payment.status === "Paid" && <CheckCircle size={18} />}
                  {payment.status === "Upcoming" && <Clock size={18} />}
                  {payment.status === "Overdue" && <XCircle size={18} />}
                  {payment.status}
                </td>
                <td className="p-3 border">
                  {payment.status === "Upcoming" ? (
                    <button
                      onClick={() => handlePayNow(payment.id)}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition"
                    >
                      <CreditCard size={16} />
                      Pay Now
                    </button>
                  ) : (
                    <span className="text-gray-400">No Action</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepaymentTracking;
