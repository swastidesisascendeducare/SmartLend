import React, { useState } from "react";
import { format } from "date-fns";

const transactionsData = {
  borrower: [
    { id: 1, type: "Loan Received", amount: 10000, status: "Completed", date: "2025-03-04" },
    { id: 2, type: "Repayment", amount: 2500, status: "Pending", date: "2025-03-03" },
  ],
  lender: [
    { id: 1, type: "Funds Added", amount: 5000, status: "Completed", date: "2025-03-04" },
    { id: 2, type: "Loan Disbursed", amount: 2000, status: "Pending", date: "2025-03-03" },
    { id: 3, type: "Interest Received", amount: 300, status: "Completed", date: "2025-03-02" },
  ],
};

const statusColors = {
  Completed: "text-green-500",
  Pending: "text-yellow-500",
  Failed: "text-red-500",
};

export default function TransactionHistory({ userRole }) {
  const [filter, setFilter] = useState("All");
  const transactions = transactionsData[userRole] || [];

  const filteredTransactions =
    filter === "All" ? transactions : transactions.filter((txn) => txn.type === filter);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Transaction History</h2>
      <div className="mb-4 text-center">
        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          {transactions.map((txn) => (
            <option key={txn.type} value={txn.type}>{txn.type}</option>
          ))}
        </select>
      </div>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border border-gray-200 text-center">ID</th>
              <th className="p-3 border border-gray-200 text-center">Type</th>
              <th className="p-3 border border-gray-200 text-center">Amount (₹)</th>
              <th className="p-3 border border-gray-200 text-center">Status</th>
              <th className="p-3 border border-gray-200 text-center">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((txn) => (
              <tr key={txn.id} className="hover:bg-gray-100">
                <td className="p-3 border border-gray-200 text-center">{txn.id}</td>
                <td className="p-3 border border-gray-200 text-center">{txn.type}</td>
                <td className="p-3 border border-gray-200 text-center">₹{txn.amount.toLocaleString()}</td>
                <td className={`p-3 border border-gray-200 text-center ${statusColors[txn.status] || "text-gray-500"}`}>{txn.status}</td>
                <td className="p-3 border border-gray-200 text-center">{format(new Date(txn.date), "dd MMM yyyy")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
