// import React from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// const InvestmentPortfolio = () => {
//   // Mock Data for Investments
//   const investments = [
//     {
//       id: 1,
//       borrower: "Rahul Verma",
//       amountInvested: 50000,
//       returns: 6500,
//       riskLevel: "Low",
//       status: "Active",
//       nextPayment: "15th March 2025",
//     },
//     {
//       id: 2,
//       borrower: "Aditi Shah",
//       amountInvested: 75000,
//       returns: 12000,
//       riskLevel: "Medium",
//       status: "Active",
//       nextPayment: "10th March 2025",
//     },
//     {
//       id: 3,
//       borrower: "Arjun Nair",
//       amountInvested: 30000,
//       returns: 4800,
//       riskLevel: "High",
//       status: "Delayed",
//       nextPayment: "Overdue by 7 days",
//     },
//     {
//       id: 4,
//       borrower: "Neha Patel",
//       amountInvested: 60000,
//       returns: 9000,
//       riskLevel: "Low",
//       status: "Repaid",
//       nextPayment: "Loan Fully Repaid",
//     },
//   ];

//   // Risk Distribution for Pie Chart
//   const riskData = [
//     { name: "Low Risk", value: 2 },
//     { name: "Medium Risk", value: 1 },
//     { name: "High Risk", value: 1 },
//   ];

//   const COLORS = ["#4CAF50", "#FF9800", "#F44336"];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">📈 Investment Portfolio</h1>
      
//       {/* Summary Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <h2 className="text-xl font-semibold">💰 Total Investment</h2>
//           <p className="text-gray-600">₹{investments.reduce((acc, loan) => acc + loan.amountInvested, 0)}</p>
//         </div>
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <h2 className="text-xl font-semibold">📈 Total Returns</h2>
//           <p className="text-gray-600">₹{investments.reduce((acc, loan) => acc + loan.returns, 0)}</p>
//         </div>
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <h2 className="text-xl font-semibold">🔄 Active Investments</h2>
//           <p className="text-gray-600">{investments.filter(loan => loan.status === "Active").length} Ongoing Loans</p>
//         </div>
//       </div>

//       {/* Risk Analysis Pie Chart */}
//       <div className="flex justify-center items-center mt-8">
//         <PieChart width={300} height={300}>
//           <Pie
//             data={riskData}
//             cx="50%"
//             cy="50%"
//             outerRadius={100}
//             fill="#8884d8"
//             dataKey="value"
//             label
//           >
//             {riskData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </div>

//       {/* Loan Details Table */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold mb-4">📑 Loan Details</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md rounded-lg">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="px-4 py-2 text-left">Borrower</th>
//                 <th className="px-4 py-2 text-left">Invested (₹)</th>
//                 <th className="px-4 py-2 text-left">Returns (₹)</th>
//                 <th className="px-4 py-2 text-left">Risk</th>
//                 <th className="px-4 py-2 text-left">Status</th>
//                 <th className="px-4 py-2 text-left">Next Payment</th>
//               </tr>
//             </thead>
//             <tbody>
//               {investments.map((loan) => (
//                 <tr key={loan.id} className="border-b">
//                   <td className="px-4 py-2">{loan.borrower}</td>
//                   <td className="px-4 py-2">₹{loan.amountInvested}</td>
//                   <td className="px-4 py-2">₹{loan.returns}</td>
//                   <td className={`px-4 py-2 font-bold ${
//                     loan.riskLevel === "Low" ? "text-green-600" : 
//                     loan.riskLevel === "Medium" ? "text-yellow-600" : 
//                     "text-red-600"
//                   }`}>
//                     {loan.riskLevel}
//                   </td>
//                   <td className={`px-4 py-2 font-semibold ${
//                     loan.status === "Active" ? "text-blue-600" : 
//                     loan.status === "Repaid" ? "text-green-600" : 
//                     "text-red-600"
//                   }`}>
//                     {loan.status}
//                   </td>
//                   <td className="px-4 py-2">{loan.nextPayment}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Suggested Borrowers for New Investments */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold mb-4">🌟 Trending Borrowers for New Investments</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <h3 className="text-xl font-semibold">Vikas Malhotra</h3>
//             <p className="text-gray-600">Credit Score: 830</p>
//             <p className="text-gray-600">Interest Rate: 9%</p>
//             <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//               Invest Now
//             </button>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <h3 className="text-xl font-semibold">Sneha Roy</h3>
//             <p className="text-gray-600">Credit Score: 810</p>
//             <p className="text-gray-600">Interest Rate: 10%</p>
//             <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//               Invest Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvestmentPortfolio;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const InvestmentPortfolio = () => {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  
  const lenderId = "67de9cb6f1728e1e9523bf9d"; // Replace with actual lenderId

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/loans/${lenderId}`);
        const loans = response.data.map((loan) => {
          const lenderInvestment = loan.fundedBy.find(f => f.lenderId === lenderId);
          return {
            id: loan._id,
            borrower: loan.borrowerId?.name || "Unknown",
            amountInvested: lenderInvestment?.amount || 0,
            returns: lenderInvestment?.interestRate ? (lenderInvestment.amount * lenderInvestment.interestRate) / 100 : 0,
            riskLevel: loan.interestRate < 8 ? "Low" : loan.interestRate < 12 ? "Medium" : "High",
            status: loan.status,
            nextPayment: loan.status === "Repaid" ? "Loan Fully Repaid" : "Upcoming",
          };
        });

        setInvestments(loans);
      } catch (err) {
        setError("Failed to fetch loan details.");
      } finally {
        setLoading(false);
      }
    };

    fetchInvestments();
  }, [lenderId]);

  const COLORS = ["#4CAF50", "#FF9800", "#F44336"];
  const riskData = [
    { name: "Low Risk", value: investments.filter(loan => loan.riskLevel === "Low").length },
    { name: "Medium Risk", value: investments.filter(loan => loan.riskLevel === "Medium").length },
    { name: "High Risk", value: investments.filter(loan => loan.riskLevel === "High").length },
  ].filter(item => item.value > 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">📈 Investment Portfolio</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : (
        <>
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
                  {investments.length > 0 ? (
                    investments.map((loan) => (
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
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-4 text-gray-600">
                        No investments found for this lender.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InvestmentPortfolio;
