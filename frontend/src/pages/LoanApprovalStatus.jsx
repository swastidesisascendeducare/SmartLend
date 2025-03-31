
// import React, { useState, useEffect } from "react";

// const LoanStatusPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState("date");
//   const [debouncedSearch, setDebouncedSearch] = useState("");

//   // Loan Applications Data
//   const loanApplications = [
//     { id: "LN-12345", date: "2025-02-20", amount: 15000, status: "Approved", reason: "Good credit score" },
//     { id: "LN-67890", date: "2025-02-22", amount: 8000, status: "Pending", reason: "Under review" },
//     { id: "LN-11223", date: "2025-02-24", amount: 20000, status: "Rejected", reason: "Low income eligibility" },
//   ];

//   // Debounced Search Effect (Prevents frequent re-renders)
//   useEffect(() => {
//     const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
//     return () => clearTimeout(timer);
//   }, [searchTerm]);

//   // Handle search and sorting
//   const filteredLoans = loanApplications
//     .filter((loan) => 
//       loan.id.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
//       loan.status.toLowerCase().includes(debouncedSearch.toLowerCase())
//     )
//     .sort((a, b) => 
//       sortBy === "date" 
//         ? new Date(a.date) - new Date(b.date) 
//         : a.amount - b.amount
//     );

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
//         Loan Approval & Status
//       </h2>

//       {/* Search and Sort Controls */}
//       <div className="flex flex-col md:flex-row justify-between mb-4 gap-3">
//         <input
//           type="text"
//           placeholder="Search by Loan ID or Status..."
//           className="border p-3 rounded-md w-full md:w-1/2"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <select 
//           className="border p-3 rounded-md w-full md:w-1/4" 
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//         >
//           <option value="date">Sort by Date</option>
//           <option value="amount">Sort by Amount</option>
//         </select>
//       </div>

//       {/* Loan Status Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
//           <thead>
//             <tr className="bg-blue-600 text-white">
//               {["Loan ID", "Date Applied", "Amount", "Status", "Reason"].map((heading, index) => (
//                 <th key={index} className="py-3 px-4 text-left">{heading}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredLoans.length > 0 ? (
//               filteredLoans.map((loan) => (
//                 <tr key={loan.id} className="border-b border-gray-200 hover:bg-gray-100">
//                   <td className="py-3 px-4">{loan.id}</td>
//                   <td className="py-3 px-4">{loan.date}</td>
//                   <td className="py-3 px-4">${loan.amount.toLocaleString()}</td>
//                   <td
//                     className={`py-3 px-4 font-semibold ${
//                       loan.status === "Approved" ? "text-green-600" :
//                       loan.status === "Rejected" ? "text-red-600" :
//                       "text-yellow-600"
//                     }`}
//                   >
//                     {loan.status}
//                   </td>
//                   <td className="py-3 px-4">{loan.reason}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center py-4 text-gray-500">No loans found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default LoanStatusPage;



////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import BorrowerLayout from "../components/BorrowerLayout";

// const LoanStatusPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState("date");
//   const [debouncedSearch, setDebouncedSearch] = useState("");
//   const [loanApplications, setLoanApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch loan applications from backend
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError("");

//       try {
//         const response = await fetch("http://localhost:5001/get-loans");
//         if (!response.ok) throw new Error("Failed to fetch loan data.");

//         const data = await response.json();
//         setLoanApplications(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Debounced search to prevent frequent re-renders
//   useEffect(() => {
//     const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
//     return () => clearTimeout(timer);
//   }, [searchTerm]);

//   // Filter and sort loan applications
//   const filteredLoans = loanApplications
//     .filter((loan) => 
//       loan.LoanID.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
//       (loan.approved === 1 ? "approved" : "rejected").includes(debouncedSearch.toLowerCase())
//     )
//     .sort((a, b) => 
//       sortBy === "date" 
//         ? new Date(a.date) - new Date(b.date) 
//         : a.amount - b.amount
//     );

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
//         Loan Approval & Status
//       </h2>

//       {/* Search and Sort Controls */}
//       <div className="flex flex-col md:flex-row justify-between mb-4 gap-3">
//         <input
//           type="text"
//           placeholder="Search by Loan ID or Status..."
//           className="border p-3 rounded-md w-full md:w-1/2"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <select 
//           className="border p-3 rounded-md w-full md:w-1/4" 
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//         >
//           <option value="date">Sort by Date</option>
//           <option value="amount">Sort by Amount</option>
//         </select>
//       </div>

//       {/* Display Loading or Error */}
//       {loading && <p className="text-center text-gray-500">Loading loan data...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {/* Loan Status Table */}
//       {!loading && !error && (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
//             <thead>
//               <tr className="bg-blue-600 text-white">
//                 {["Loan ID", "Date Applied", "Amount", "Status"].map((heading, index) => (
//                   <th key={index} className="py-3 px-4 text-left">{heading}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {filteredLoans.length > 0 ? (
//                 filteredLoans.map((loan) => (
//                   <tr key={loan.LoanID} className="border-b border-gray-200 hover:bg-gray-100">
//                     <td className="py-3 px-4">{loan.LoanID}</td>
//                     <td className="py-3 px-4">{loan.date || "N/A"}</td>
//                     <td className="py-3 px-4">${loan.amount?.toLocaleString() || "N/A"}</td>
//                     <td
//                       className={`py-3 px-4 font-semibold ${
//                         loan.approved === 1
//                           ? "text-green-600" // Approved
//                           : "text-red-600" // Rejected
//                       }`}
//                     >
//                       {loan.approved === 1 ? "Approved" : "Rejected"}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="text-center py-4 text-gray-500">
//                     No loans found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoanStatusPage;


// import React, { useState, useEffect } from "react";

// const LoanStatusPage = () => {
//   const [email, setEmail] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState("date");
//   const [debouncedSearch, setDebouncedSearch] = useState("");
//   const [loanApplications, setLoanApplications] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Fetch loan applications from backend
//   const fetchData = async () => {
//     if (!email.trim()) {
//       setError("Please enter your email to fetch loan data.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch(
//         `http://localhost:8000/get-loan-by-email?email=${encodeURIComponent(email)}`
//       );
//       if (!response.ok) throw new Error("Failed to fetch loan data.");

//       const data = await response.json();
//       if (Array.isArray(data) && data.length > 0) {
//         setLoanApplications(data);
//       } else {
//         setLoanApplications([]);
//         setError("No loan applications found for this email.");
//       }
//     } catch (err) {
//       setError(err.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Debounced search to prevent frequent re-renders
//   useEffect(() => {
//     const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
//     return () => clearTimeout(timer);
//   }, [searchTerm]);

//   // Filter and sort loan applications
//   const filteredLoans = loanApplications
//     .filter((loan) => {
//       const status = loan.approved === 0 ? "approved" : "rejected";
//       return (
//         loan._id?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
//         status.includes(debouncedSearch.toLowerCase())
//       );
//     })
//     .sort((a, b) => {
//       if (sortBy === "date") {
//         return new Date(a.date || 0) - new Date(b.date || 0);
//       } else {
//         return (a.amount || 0) - (b.amount || 0);
//       }
//     });

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
//         Loan Approval & Status
//       </h2>

//       {/* Email Input */}
//       <div className="flex flex-col mb-4">
//         <input
//           type="email"
//           placeholder="Enter your email to fetch loans..."
//           className="border p-3 rounded-md w-full"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button
//           onClick={fetchData}
//           className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
//         >
//           Fetch Loan Data
//         </button>
//       </div>

//       {/* Search and Sort Controls */}
//       <div className="flex flex-col md:flex-row justify-between mb-4 gap-3">
//         <input
//           type="text"
//           placeholder="Search by Loan ID or Status..."
//           className="border p-3 rounded-md w-full md:w-1/2"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <select
//           className="border p-3 rounded-md w-full md:w-1/4"
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//         >
//           <option value="date">Sort by Date</option>
//           <option value="amount">Sort by Amount</option>
//         </select>
//       </div>

//       {/* Display Loading or Error */}
//       {loading && (
//         <p className="text-center text-gray-500">Loading loan data...</p>
//       )}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {/* Loan Status Table */}
//       {!loading && !error && loanApplications.length > 0 && (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
//             <thead>
//               <tr className="bg-blue-600 text-white">
//                 {["Loan ID", "Date Applied", "Amount", "Status"].map(
//                   (heading, index) => (
//                     <th key={index} className="py-3 px-4 text-left">
//                       {heading}
//                     </th>
//                   )
//                 )}
//               </tr>
//             </thead>
//             <tbody>
//               {filteredLoans.length > 0 ? (
//                 filteredLoans.map((loan) => (
//                   <tr
//                     key={loan._id || Math.random()}
//                     className="border-b border-gray-200 hover:bg-gray-100"
//                   >
//                     <td className="py-3 px-4">{loan.LoanID || "N/A"}</td>
//                     <td className="py-3 px-4">
//                       {loan.date
//                         ? new Date(loan.date).toLocaleDateString()
//                         : "N/A"}
//                     </td>
//                     <td className="py-3 px-4">
//                       ₹{loan.loanAmount?.toLocaleString() || "0"}
//                     </td>
//                     <td
//                       className={`py-3 px-4 font-semibold ${
//                         loan.approved === 0
//                           ? "text-green-600" // Approved
//                           : "text-red-600" // Rejected
//                       }`}
//                     >
//                       {loan.approved === 0 ? "Approved" : "Rejected"}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="text-center py-4 text-gray-500">
//                     No loans found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoanStatusPage;


import React, { useState, useEffect } from "react";

const LoanStatusPage = () => {
  const [email, setEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loanApplications, setLoanApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch loan applications from backend
  const fetchData = async () => {
    if (!email.trim()) {
      setError("Please enter your email to fetch loan data.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:8000/get-loan-by-email?email=${encodeURIComponent(email)}`
      );
      if (!response.ok) throw new Error("Failed to fetch loan data.");

      const data = await response.json();
      console.log("Fetched loan data:", data); // Debugging log

      if (Array.isArray(data) && data.length > 0) {
        setLoanApplications(data);
      } else {
        setLoanApplications([]);
        setError("No loan applications found for this email.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Debounced search to prevent frequent re-renders
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Filter and sort loan applications
  const filteredLoans = loanApplications
    .filter((loan) => {
      const status = loan.approved === 0 ? "approved" : "rejected";
      return (
        loan._id?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        status.includes(debouncedSearch.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
      } else {
        return (a.loanAmount || 0) - (b.loanAmount || 0);
      }
    });

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Loan Approval & Status
      </h2>

      {/* Email Input */}
      <div className="flex flex-col mb-4">
        <input
          type="email"
          placeholder="Enter your email to fetch loans..."
          className="border p-3 rounded-md w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={fetchData}
          className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Fetch Loan Data
        </button>
      </div>

      {/* Search and Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-3">
        <input
          type="text"
          placeholder="Search by Loan ID or Status..."
          className="border p-3 rounded-md w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border p-3 rounded-md w-full md:w-1/4"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
      </div>

      {/* Display Loading or Error */}
      {loading && (
        <p className="text-center text-gray-500">Loading loan data...</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Loan Status Table */}
      {!loading && !error && loanApplications.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                {["Loan ID", "Date Applied", "Amount", "Status"].map(
                  (heading, index) => (
                    <th key={index} className="py-3 px-4 text-left">
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filteredLoans.length > 0 ? (
                filteredLoans.map((loan) => (
                  <tr
                    key={loan._id || Math.random()}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-4">{loan._id || "N/A"}</td>
                    <td className="py-3 px-4">
                      {loan.createdAt
                        ? new Date(loan.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="py-3 px-4">
                      ₹{loan.loanAmount?.toLocaleString() || "0"}
                    </td>
                    <td
                      className={`py-3 px-4 font-semibold ${
                        loan.approved === 0
                          ? "text-green-600" // Approved
                          : "text-red-600" // Rejected
                      }`}
                    >
                      {loan.approved === 0 ? "Approved" : "Rejected"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No loans found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LoanStatusPage;
