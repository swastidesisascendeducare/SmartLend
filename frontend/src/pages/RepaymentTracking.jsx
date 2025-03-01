import React from "react";

const RepaymentTracking = () => {
  const repayments = [
    { id: 1, dueDate: "2025-03-10", amount: "$500", status: "Upcoming" },
    { id: 2, dueDate: "2025-02-10", amount: "$500", status: "Paid" },
    { id: 3, dueDate: "2025-01-10", amount: "$500", status: "Paid" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Repayment Tracking</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Payment ID</th>
            <th className="p-3 border">Due Date</th>
            <th className="p-3 border">Amount</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {repayments.map((payment) => (
            <tr key={payment.id} className="text-center">
              <td className="p-3 border">{payment.id}</td>
              <td className="p-3 border">{payment.dueDate}</td>
              <td className="p-3 border">{payment.amount}</td>
              <td className={`p-3 border ${payment.status === "Paid" ? "text-green-500" : "text-red-500"}`}>
                {payment.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RepaymentTracking;
