////////////////////////////COMMENTING ON 27TH MARCH//////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { FaDownload, FaBell, FaCreditCard, FaPhoneAlt } from "react-icons/fa";
// import BorrowerLayout from "../components/BorrowerLayout"; // ✅ Import BorrowerLayout

// const BorrowerDashboard = () => {
//   const [loading, setLoading] = useState(true);
//   const [loanData, setLoanData] = useState([]);
//   const [error, setError] = useState(false);
//   const [creditScore, setCreditScore] = useState(750);
//   const [notifications, setNotifications] = useState([
//     "Upcoming EMI due on March 15, 2025",
//     "Low balance warning: Add funds for next EMI",
//     "Limited-time offer: Lower interest rate available",
//   ]);

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       try {
//         setLoanData([
//           { id: "LN001", amount: 5000, status: "Approved", nextPayment: "2025-03-15", paidAmount: 2000 },
//           { id: "LN002", amount: 10000, status: "Pending", nextPayment: "2025-04-01", paidAmount: 0 },
//         ]);
//         setError(false);
//       } catch (err) {
//         setError(true);
//       }
//       setLoading(false);
//     }, 1000);
//   }, []);

//   return (
//     <BorrowerLayout>  {/* ✅ Wrap content inside BorrowerLayout */}
//       <motion.div
//         className="container mx-auto p-6 bg-gray-100 min-h-screen flex flex-col items-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-3xl font-bold text-blue-600 mb-6">Borrower Dashboard</h2>

//         {/* Notifications */}
//         <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 w-full max-w-3xl">
//           <h4 className="text-lg font-semibold text-yellow-700">
//             <FaBell className="inline-block mr-2" />Notifications
//           </h4>
//           <ul className="list-disc ml-5 text-gray-700">
//             {notifications.map((note, index) => (
//               <li key={index}>{note}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Loan Overview */}
//         {loading ? (
//           <div className="flex justify-center items-center h-20">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
//           </div>
//         ) : error ? (
//           <div className="text-red-500 text-lg font-semibold">
//             Error loading data. <button className="text-blue-500 underline" onClick={() => window.location.reload()}>Retry</button>
//           </div>
//         ) : (
//           <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-3xl">
//             <h4 className="text-2xl font-semibold mb-4 text-gray-700">Loan Overview</h4>
//             <table className="w-full border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-blue-200 text-gray-700">
//                   <th className="border border-gray-300 p-3">Loan ID</th>
//                   <th className="border border-gray-300 p-3">Amount ($)</th>
//                   <th className="border border-gray-300 p-3">Paid ($)</th>
//                   <th className="border border-gray-300 p-3">Next Payment</th>
//                   <th className="border border-gray-300 p-3">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loanData.map((loan) => (
//                   <tr key={loan.id} className="border border-gray-300 hover:bg-gray-100">
//                     <td className="border border-gray-300 p-3">{loan.id}</td>
//                     <td className="border border-gray-300 p-3">${loan.amount}</td>
//                     <td className="border border-gray-300 p-3">${loan.paidAmount}</td>
//                     <td className="border border-gray-300 p-3">{loan.nextPayment || "N/A"}</td>
//                     <td className={`border border-gray-300 p-3 font-bold ${loan.status === "Approved" ? "text-green-500" : "text-yellow-500"}`}>{loan.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </motion.div>
//     </BorrowerLayout>
//   );
// };

// export default BorrowerDashboard;

/////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaDownload, FaBell, FaCreditCard, FaPhoneAlt } from "react-icons/fa";
import BorrowerLayout from "../components/BorrowerLayout"; // ✅ Import BorrowerLayout
import RepaymentTracking from "../pages/RepaymentTracking";

const BorrowerDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [loanData, setLoanData] = useState([]);
  const [error, setError] = useState(false);
  const [creditScore, setCreditScore] = useState(750);
  const [notifications, setNotifications] = useState([
    "Upcoming EMI due on April 04, 2025",
  ]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoanData([
          { id: "LN001", amount: 500000, status: "Approved", nextPayment: "2025-04-06", paidAmount: 50000 }
        ]);
        setError(false);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <BorrowerLayout>  {/* ✅ Wrap content inside BorrowerLayout */}
      <motion.div
        className="container mx-auto p-6 bg-gray-100 min-h-screen flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Borrower Dashboard</h2>

        {/* Notifications */}
        <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 w-full max-w-3xl">
          <h4 className="text-lg font-semibold text-yellow-700">
            <FaBell className="inline-block mr-2" />Notifications
          </h4>
          <ul className="list-disc ml-5 text-gray-700">
            {notifications.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>

        {/* Loan Overview */}
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
            <h4 className="text-2xl font-semibold mb-4 text-gray-700">Loan Overview</h4>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-200 text-gray-700">
                  <th className="border border-gray-300 p-3">Loan ID</th>
                  <th className="border border-gray-300 p-3">Amount (Rs.)</th>
                  <th className="border border-gray-300 p-3">Paid (Rs.)</th>
                  <th className="border border-gray-300 p-3">Next Payment</th>
                  <th className="border border-gray-300 p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {loanData.map((loan) => (
                  <tr key={loan.id} className="border border-gray-300 hover:bg-gray-100">
                    <td className="border border-gray-300 p-3">{loan.id}</td>
                    <td className="border border-gray-300 p-3">Rs.{loan.amount}</td>
                    <td className="border border-gray-300 p-3">Rs.{loan.paidAmount}</td>
                    <td className="border border-gray-300 p-3">{loan.nextPayment || "N/A"}</td>
                    <td className={`border border-gray-300 p-3 font-bold ${loan.status === "Approved" ? "text-green-500" : "text-yellow-500"}`}>{loan.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
                {/* <RepaymentTracking/> */}
          </div>
        )}
      </motion.div>
    </BorrowerLayout>
  );
};

export default BorrowerDashboard;