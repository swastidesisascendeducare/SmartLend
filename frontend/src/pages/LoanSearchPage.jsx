
/////INITIAL////////

// import React, { useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import Slider from "rc-slider";
// import "rc-slider/assets/index.css";
// //added by Vidhi
// import { useEffect } from "react";
// import axios from "axios";

// const appliedLoanAmount = 10000; // Loan amount borrower applied for

// const lenders = [
//   { id: 1, name: "Lender A", amount: 10000, interestRate: 10, tenure: "12 months", type: "Individual" },
//   { id: 2, name: "Lender B", amount: 10000, interestRate: 12, tenure: "24 months", type: "Individual" },
//   { id: 3, name: "Lender C", amount: 5000, interestRate: 8, tenure: "6 months", type: "Collaborative" },
//   { id: 4, name: "Lender D", amount: 3000, interestRate: 9, tenure: "12 months", type: "Collaborative" },
//   { id: 5, name: "Lender E", amount: 2000, interestRate: 7, tenure: "18 months", type: "Collaborative" }
// ];

// export default function LoanPage() {
//   const [requestedAmount, setRequestedAmount] = useState(0);
//   const [selectedLenders, setSelectedLenders] = useState([]);
//   const [interestRateFilter, setInterestRateFilter] = useState([0, 15]);
//   const [tenureFilter, setTenureFilter] = useState(["All"]); // Default to show all tenures

//   const tenureOptions = ["All", "6 months", "12 months", "18 months", "24 months"];

//   const handleRequest = (lender) => {
//     if (selectedLenders.includes(lender.id)) {
//       setRequestedAmount(requestedAmount - lender.amount);
//       setSelectedLenders(selectedLenders.filter((id) => id !== lender.id));
//     } else {
//       setRequestedAmount(requestedAmount + lender.amount);
//       setSelectedLenders([...selectedLenders, lender.id]);
//     }
//   };

//   const remainingAmount = appliedLoanAmount - requestedAmount;
//   const individualLoans = lenders.filter((loan) => loan.type === "Individual" && loan.amount === appliedLoanAmount);
//   const collaborativeLoans = lenders.filter((loan) => loan.type === "Collaborative");
//   const filteredCollaborativeLoans = collaborativeLoans.filter((loan) => {
//     return (
//       loan.interestRate >= interestRateFilter[0] &&
//       loan.interestRate <= interestRateFilter[1] &&
//       (tenureFilter[0] === "All" || loan.tenure === tenureFilter[0])
//     );
//   });

//   const filteredIndividualLoans = individualLoans.filter((loan) => {
//     return (
//       loan.interestRate >= interestRateFilter[0] &&
//       loan.interestRate <= interestRateFilter[1] &&
//       (tenureFilter[0] === "All" || loan.tenure === tenureFilter[0])
//     );
//   });

//   return (
//     <div className="flex flex-col items-center p-6 w-full max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md">
//       <h2 className="text-4xl font-bold mb-4">Loan Options</h2>

//       {/* Main Content */}
//       <div className="flex flex-row w-full">
//         {/* Sidebar Filters */}
//         <div className="w-64 bg-white p-4 rounded-lg shadow-sm mr-4">
//           <h3 className="text-lg font-bold mb-2">Filters</h3>
//           <label className="block mb-2 font-semibold">Interest Rate Filter:</label>
//           <div className="mb-4">
//             <Slider range value={interestRateFilter} onChange={setInterestRateFilter} min={0} max={20} step={1} />
//             <div className="flex justify-between text-gray-600">
//               <span>{interestRateFilter[0]}%</span>
//               <span>{interestRateFilter[1]}%</span>
//             </div>
//           </div>

//           <label className="block mb-2 font-semibold">Tenure Filter:</label>
//           <select
//             value={tenureFilter[0]}
//             onChange={(e) => setTenureFilter([e.target.value])}
//             className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           >
//             {tenureOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Tabs */}
//         <div className="flex-1">
//           <Tabs>
//             <TabList className="flex w-full justify-between border-b-2 mb-4 text-lg">
//               <Tab className="flex-1 text-center py-3 cursor-pointer border-b-4 border-transparent hover:border-blue-500">Individual Lenders</Tab>
//               <Tab className="flex-1 text-center py-3 cursor-pointer border-b-4 border-transparent hover:border-blue-500">Collaborative Lenders</Tab>
//             </TabList>

//             {/* Individual Lenders */}
//             <TabPanel>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {filteredIndividualLoans.length ? (
//                   filteredIndividualLoans.map((loan) => (
//                     <div key={loan.id} className="p-4 border rounded-lg bg-white shadow-sm">
//                       <h3 className="text-lg font-semibold">{loan.name}</h3>
//                       <p className="text-gray-600">Amount: ₹{loan.amount} | Rate: {loan.interestRate}% | Tenure: {loan.tenure}</p>
//                       <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply Now</button>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-gray-600">No individual lenders available for this loan amount.</p>
//                 )}
//               </div>
//             </TabPanel>

//             {/* Collaborative Lenders */}
//             <TabPanel>
//               {/* Loan Progress Bar */}
//               <div className="w-full bg-gray-200 rounded-lg overflow-hidden h-6 mb-4">
//                 <div className="bg-blue-500 h-full text-white flex items-center justify-center text-sm" style={{ width: `${(requestedAmount / appliedLoanAmount) * 100}%` }}>
//                   {requestedAmount} funded
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">Remaining: ₹{remainingAmount}</p>

//               {/* Collaborative Lenders */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {filteredCollaborativeLoans.length ? (
//                   filteredCollaborativeLoans.map((loan) => (
//                     <div key={loan.id} className={`p-4 border rounded-lg shadow-sm ${selectedLenders.includes(loan.id) ? "bg-green-100" : "bg-white"}`}>
//                       <h3 className="text-lg font-semibold">{loan.name}</h3>
//                       <p className="text-gray-600">Amount: ₹{loan.amount} | Rate: {loan.interestRate}% | Tenure: {loan.tenure}</p>
//                       <button
//                         onClick={() => handleRequest(loan)}
//                         className={`mt-2 font-bold py-2 px-4 rounded ${selectedLenders.includes(loan.id) ? "bg-red-500 hover:bg-red-700 text-white" : "bg-blue-500 hover:bg-blue-700 text-white"}`}
//                       >
//                         {selectedLenders.includes(loan.id) ? "Cancel Request" : "Send Request"}
//                       </button>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-gray-600">No collaborative lenders available.</p>
//                 )}
//               </div>
//             </TabPanel>
//           </Tabs>
//         </div>
//       </div>
//     </div>
//   );
// }





//////////GIVING ERROR////////////////(INTEGRATED)//////////////////////


// import React, { useState, useEffect } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import Slider from "rc-slider";
// import "rc-slider/assets/index.css";
// import axios from "axios";

// const appliedLoanAmount = 10000; // Loan amount borrower applied for

// function LoanPage() {
//   const [lenders, setLenders] = useState([]);
//   const [requestedAmount, setRequestedAmount] = useState(0);
//   const [selectedLenders, setSelectedLenders] = useState([]);
//   const [interestRateFilter, setInterestRateFilter] = useState([0, 15]);
//   const [tenureFilter, setTenureFilter] = useState(["All"]); // Default to show all tenures

//   const tenureOptions = ["All", "6 months", "12 months", "18 months", "24 months"];

//   useEffect(() => {
//     // const fetchLoanMatches = async () => {
//     //   try {
//     //     const response = await axios.get("http://localhost:5001/api/loan/match/67dbc69dbce5f055462a5c1f"); // Replace 123 with borrower ID
//     //     setLenders(response.data);
//     //   } catch (error) {
//     //     console.error("Error fetching loan matches:", error);
//     //   }
//     // };

//     // const fetchLoanMatches = async () => {
//     //   try {
//     //     const response = await axios.get(`http://localhost:5001/api/loan/match/${id}`);
//     //     console.log(response.data);  // Debugging log
//     //     setLenders(response.data);
//     //   } catch (error) {
//     //     console.error("Error fetching loan matches:", error.response?.data || error.message);
//     //   }
//     // };
    
//     const fetchLoanMatches = async () => {
//       try {
//         // Replace `hardcodedId` with the actual MongoDB _id from your user data
//         const borrowerId = "65fbd6a123456789abcd1234"; // Example _id from MongoDB
    
//         const response = await axios.get(`http://localhost:5001/api/loan/match/${borrowerId}`);
//         console.log("Loan Matches:", response.data);
//         setLenders(response.data);
//       } catch (error) {
//         console.error("Error fetching loan matches:", error.response?.data || error.message);
//       }
//     };
    

//     const fetchCollaborativeFunding = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/loan/best-collaborative");
//         setLenders((prevLenders) => [...prevLenders, ...response.data]);
//       } catch (error) {
//         console.error("Error fetching collaborative funding:", error);
//       }
//     };

//     fetchLoanMatches();
//     fetchCollaborativeFunding();
//   }, []);

//   const handleRequest = async (lender) => {
//     try {
//       if (selectedLenders.includes(lender.id)) {
//         setRequestedAmount(requestedAmount - lender.amount);
//         setSelectedLenders(selectedLenders.filter((id) => id !== lender.id));
//       } else {
//         const response = await axios.post("http://localhost:5001/api/loan/fund-loan", {
//           lenderId: lender.id,
//           amount: lender.amount,
//         });

//         console.log(response.data);
//         setRequestedAmount(requestedAmount + lender.amount);
//         setSelectedLenders([...selectedLenders, lender.id]);
//       }
//     } catch (error) {
//       console.error("Error funding loan:", error);
//     }
//   };

//   const remainingAmount = appliedLoanAmount - requestedAmount;
//   const individualLoans = lenders.filter((loan) => loan.type === "Individual" && loan.amount === appliedLoanAmount);
//   const collaborativeLoans = lenders.filter((loan) => loan.type === "Collaborative");
//   const filteredCollaborativeLoans = collaborativeLoans.filter((loan) => {
//     return (
//       loan.interestRate >= interestRateFilter[0] &&
//       loan.interestRate <= interestRateFilter[1] &&
//       (tenureFilter[0] === "All" || loan.tenure === tenureFilter[0])
//     );
//   });

//   const filteredIndividualLoans = individualLoans.filter((loan) => {
//     return (
//       loan.interestRate >= interestRateFilter[0] &&
//       loan.interestRate <= interestRateFilter[1] &&
//       (tenureFilter[0] === "All" || loan.tenure === tenureFilter[0])
//     );
//   });

//   return (
//     <div className="flex flex-col items-center p-6 w-full max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md">
//       <h2 className="text-4xl font-bold mb-4">Loan Options</h2>

//       <div className="flex flex-row w-full">
//         {/* Sidebar Filters */}
//         <div className="w-64 bg-white p-4 rounded-lg shadow-sm mr-4">
//           <h3 className="text-lg font-bold mb-2">Filters</h3>
//           <label className="block mb-2 font-semibold">Interest Rate Filter:</label>
//           <div className="mb-4">
//             <Slider range value={interestRateFilter} onChange={setInterestRateFilter} min={0} max={20} step={1} />
//             <div className="flex justify-between text-gray-600">
//               <span>{interestRateFilter[0]}%</span>
//               <span>{interestRateFilter[1]}%</span>
//             </div>
//           </div>

//           <label className="block mb-2 font-semibold">Tenure Filter:</label>
//           <select
//             value={tenureFilter[0]}
//             onChange={(e) => setTenureFilter([e.target.value])}
//             className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           >
//             {tenureOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Tabs */}
//         <div className="flex-1">
//           <Tabs>
//             <TabList className="flex w-full justify-between border-b-2 mb-4 text-lg">
//               <Tab className="flex-1 text-center py-3 cursor-pointer border-b-4 border-transparent hover:border-blue-500">Individual Lenders</Tab>
//               <Tab className="flex-1 text-center py-3 cursor-pointer border-b-4 border-transparent hover:border-blue-500">Collaborative Lenders</Tab>
//             </TabList>

//             {/* Individual Lenders */}
//             <TabPanel>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {filteredIndividualLoans.length ? (
//                   filteredIndividualLoans.map((loan) => (
//                     <div key={loan.id} className="p-4 border rounded-lg bg-white shadow-sm">
//                       <h3 className="text-lg font-semibold">{loan.name}</h3>
//                       <p className="text-gray-600">Amount: ₹{loan.amount} | Rate: {loan.interestRate}% | Tenure: {loan.tenure}</p>
//                       <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply Now</button>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-gray-600">No individual lenders available for this loan amount.</p>
//                 )}
//               </div>
//             </TabPanel>

//             {/* Collaborative Lenders */}
//             <TabPanel>
//               <div className="w-full bg-gray-200 rounded-lg overflow-hidden h-6 mb-4">
//                 <div className="bg-blue-500 h-full text-white flex items-center justify-center text-sm" style={{ width: `${(requestedAmount / appliedLoanAmount) * 100}%` }}>
//                   {requestedAmount} funded
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">Remaining: ₹{remainingAmount}</p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {filteredCollaborativeLoans.length ? (
//                   filteredCollaborativeLoans.map((loan) => (
//                     <div key={loan.id} className={`p-4 border rounded-lg shadow-sm ${selectedLenders.includes(loan.id) ? "bg-green-100" : "bg-white"}`}>
//                       <h3 className="text-lg font-semibold">{loan.name}</h3>
//                       <p className="text-gray-600">Amount: ₹{loan.amount} | Rate: {loan.interestRate}% | Tenure: {loan.tenure}</p>
//                       <button
//                         onClick={() => handleRequest(loan)}
//                         className={`mt-2 font-bold py-2 px-4 rounded ${selectedLenders.includes(loan.id) ? "bg-red-500 hover:bg-red-700 text-white" : "bg-blue-500 hover:bg-blue-700 text-white"}`}
//                       >
//                         {selectedLenders.includes(loan.id) ? "Cancel Request" : "Send Request"}
//                       </button>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-gray-600">No collaborative lenders available.</p>
//                 )}
//               </div>
//             </TabPanel>
//           </Tabs>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoanPage;



///////////////////////////////////////////////////////////////

//commenting on 26th march/////////


// import React, { useState, useEffect } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import Slider from "rc-slider";
// import "rc-slider/assets/index.css";
// import axios from "axios";

// const appliedLoanAmount = 10000; // Loan amount borrower applied for

// function LoanPage() {
//   const [lenders, setLenders] = useState([]);
//   const [requestedAmount, setRequestedAmount] = useState(0);
//   const [selectedLenders, setSelectedLenders] = useState([]);
//   const [interestRateFilter, setInterestRateFilter] = useState([0, 15]);
//   const [tenureFilter, setTenureFilter] = useState(["All"]); // Default to show all tenures

//   const tenureOptions = ["All", "6 months", "12 months", "18 months", "24 months"];

//   useEffect(() => {
//     const fetchLoanMatches = async () => {
//       try {
//         const borrowerId = "65fbd6a123456789abcd1234"; // Replace with actual borrower ID
//         const response = await axios.get(`http://localhost:5001/api/loan/match/${borrowerId}`);
//         console.log("Loan Matches:", response.data);
//         setLenders(response.data);
//       } catch (error) {
//         console.error("Error fetching loan matches:", error.response?.data || error.message);
//       }
//     };

//     const fetchCollaborativeFunding = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/loan/best-collaborative");
//         console.log("Collaborative Loans:", response.data);
//         setLenders((prevLenders) => [...prevLenders, ...response.data]);
//       } catch (error) {
//         console.error("Error fetching collaborative funding:", error.response?.data || error.message);
//       }
//     };

//     fetchLoanMatches();
//     fetchCollaborativeFunding();
//   }, []);

//   const handleRequest = async (lender) => {
//     try {
//       if (selectedLenders.includes(lender._id)) {
//         setRequestedAmount(requestedAmount - lender.amount);
//         setSelectedLenders(selectedLenders.filter((id) => id !== lender._id));
//       } else {
//         const response = await axios.post("http://localhost:5001/api/loan/fund-loan", {
//           lenderId: lender._id, // Using correct MongoDB `_id`
//           amount: lender.amount,
//         });

//         console.log(response.data);
//         setRequestedAmount(requestedAmount + lender.amount);
//         setSelectedLenders([...selectedLenders, lender._id]);
//       }
//     } catch (error) {
//       console.error("Error funding loan:", error.response?.data || error.message);
//     }
//   };

//   const remainingAmount = appliedLoanAmount - requestedAmount;
//   const individualLoans = lenders.filter((loan) => loan.type === "Individual" && loan.amount === appliedLoanAmount);
//   const collaborativeLoans = lenders.filter((loan) => loan.type === "Collaborative");

//   const filteredCollaborativeLoans = collaborativeLoans.filter((loan) => {
//     return (
//       loan.interestRate >= interestRateFilter[0] &&
//       loan.interestRate <= interestRateFilter[1] &&
//       (tenureFilter[0] === "All" || loan.tenure === tenureFilter[0])
//     );
//   });

//   const filteredIndividualLoans = individualLoans.filter((loan) => {
//     return (
//       loan.interestRate >= interestRateFilter[0] &&
//       loan.interestRate <= interestRateFilter[1] &&
//       (tenureFilter[0] === "All" || loan.tenure === tenureFilter[0])
//     );
//   });

//   return (
//     <div className="flex flex-col items-center p-6 w-full max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md">
//       <h2 className="text-4xl font-bold mb-4">Loan Options</h2>

//       <div className="flex flex-row w-full">
//         {/* Sidebar Filters */}
//         <div className="w-64 bg-white p-4 rounded-lg shadow-sm mr-4">
//           <h3 className="text-lg font-bold mb-2">Filters</h3>
//           <label className="block mb-2 font-semibold">Interest Rate Filter:</label>
//           <div className="mb-4">
//             <Slider range value={interestRateFilter} onChange={setInterestRateFilter} min={0} max={20} step={1} />
//             <div className="flex justify-between text-gray-600">
//               <span>{interestRateFilter[0]}%</span>
//               <span>{interestRateFilter[1]}%</span>
//             </div>
//           </div>

//           <label className="block mb-2 font-semibold">Tenure Filter:</label>
//           <select
//             value={tenureFilter[0]}
//             onChange={(e) => setTenureFilter([e.target.value])}
//             className="block w-full p-2 text-sm text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           >
//             {tenureOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Tabs */}
//         <div className="flex-1">
//           <Tabs>
//             <TabList className="flex w-full justify-between border-b-2 mb-4 text-lg">
//               <Tab className="flex-1 text-center py-3 cursor-pointer border-b-4 border-transparent hover:border-blue-500">
//                 Individual Lenders
//               </Tab>
//               <Tab className="flex-1 text-center py-3 cursor-pointer border-b-4 border-transparent hover:border-blue-500">
//                 Collaborative Lenders
//               </Tab>
//             </TabList>

//             {/* Individual Lenders */}
//             <TabPanel>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {filteredIndividualLoans.length ? (
//                   filteredIndividualLoans.map((loan) => (
//                     <div key={loan._id} className="p-4 border rounded-lg bg-white shadow-sm">
//                       <h3 className="text-lg font-semibold">{loan.name}</h3>
//                       <p className="text-gray-600">
//                         Amount: ₹{loan.amount} | Rate: {loan.interestRate}% | Tenure: {loan.tenure}
//                       </p>
//                       <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                         Apply Now
//                       </button>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-gray-600">No individual lenders available.</p>
//                 )}
//               </div>
//             </TabPanel>

//             {/* Collaborative Lenders */}
//             <TabPanel>
//               <div className="w-full bg-gray-200 rounded-lg overflow-hidden h-6 mb-4">
//                 <div
//                   className="bg-blue-500 h-full text-white flex items-center justify-center text-sm"
//                   style={{ width: `${(requestedAmount / appliedLoanAmount) * 100}%` }}
//                 >
//                   {requestedAmount} funded
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">Remaining: ₹{remainingAmount}</p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {filteredCollaborativeLoans.length ? (
//                   filteredCollaborativeLoans.map((loan) => (
//                     <div key={loan._id} className="p-4 border rounded-lg shadow-sm">
//                       <h3 className="text-lg font-semibold">{loan.name}</h3>
//                       <p className="text-gray-600">
//                         Amount: ₹{loan.amount} | Rate: {loan.interestRate}% | Tenure: {loan.tenure}
//                       </p>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-gray-600">No collaborative lenders available.</p>
//                 )}
//               </div>
//             </TabPanel>
//           </Tabs>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoanPage;


// import React, { useState, useEffect } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import Slider from "rc-slider";
// import "rc-slider/assets/index.css";
// import axios from "axios";

// const appliedLoanAmount = 10000; // Loan amount borrower applied for

// function LoanPage() {
//   const [lenders, setLenders] = useState([]);
//   const [requestedAmount, setRequestedAmount] = useState(0);
//   const [selectedLenders, setSelectedLenders] = useState([]);
//   const [interestRateFilter, setInterestRateFilter] = useState([0, 15]);
//   const [tenureFilter, setTenureFilter] = useState("All");

//   const tenureOptions = ["All", "6 months", "12 months", "18 months", "24 months"];

//   useEffect(() => {
//     const fetchLoanMatches = async () => {
//       try {
//         const borrowerId = "67e79f25380f8ee9318dd9b1"; // Replace with actual borrower ID
//         const response = await axios.get(
//           `http://localhost:5001/api/loans/match/${borrowerId}`
//         );
//         console.log("Loan Matches:", response.data);
//         setLenders(response.data);
//       } catch (error) {
//         console.error("Error fetching loan matches:", error.response?.data || error.message);
//       }
//     };

//     const fetchCollaborativeFunding = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/loans/best-collaborative");
//         console.log("Collaborative Loans:", response.data);
//         setLenders((prevLenders) => [...prevLenders, ...response.data]);
//       } catch (error) {
//         console.error("Error fetching collaborative funding:", error.response?.data || error.message);
//       }
//     };

//     fetchLoanMatches();
//     fetchCollaborativeFunding();
//   }, []);

//   const handleRequest = async (lender) => {
//     try {
//       const loanId = lender._id;
//       const amount = lender.amountRequested;

//       if (selectedLenders.includes(loanId)) {
//         setRequestedAmount(requestedAmount - amount);
//         setSelectedLenders(selectedLenders.filter((id) => id !== loanId));
//       } else {
//         const requestBody = {
//           borrowerId: "67dadbc239be500f27cc1d19",
//           amountRequested: amount,
//           interestRate: lender.interestRate,
//           loanTerm: lender.loanTerm,
//           approvedByML: true,
//         };

//         const response = await axios.post("http://localhost:5001/api/loans/request-loan", requestBody);

//         console.log(response.data);
//         setRequestedAmount(requestedAmount + amount);
//         setSelectedLenders([...selectedLenders, loanId]);
//       }
//     } catch (error) {
//       console.error("Error requesting loan:", error.response?.data || error.message);
//     }
//   };

//   const remainingAmount = 100000 - requestedAmount;

//   const filteredLoans = lenders.filter((loan) => {
//     return (
//       loan.interestRate >= interestRateFilter[0] &&
//       loan.interestRate <= interestRateFilter[1] &&
//       (tenureFilter === "All" || `${loan.loanTerm} months` === tenureFilter)
//     );
//   });

//   return (
//     <div className="flex flex-col items-center p-6 w-full max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md">
//       <h2 className="text-4xl font-bold mb-4">Loan Options</h2>

//       <div className="flex flex-row w-full">
//         {/* Sidebar Filters */}
//         <div className="w-64 bg-white p-4 rounded-lg shadow-sm mr-4">
//           <h3 className="text-lg font-bold mb-2">Filters</h3>
//           <label className="block mb-2 font-semibold">Interest Rate Filter:</label>
//           <div className="mb-4">
//             <Slider
//               range
//               value={interestRateFilter}
//               onChange={setInterestRateFilter}
//               min={0}
//               max={20}
//               step={1}
//             />
//             <div className="flex justify-between text-gray-600">
//               <span>{interestRateFilter[0]}%</span>
//               <span>{interestRateFilter[1]}%</span>
//             </div>
//           </div>

//           <label className="block mb-2 font-semibold">Tenure Filter:</label>
//           <select
//             value={tenureFilter}
//             onChange={(e) => setTenureFilter(e.target.value)}
//             className="block w-full p-2 text-sm text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-blue-500"
//           >
//             {tenureOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Loan List */}
//         <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
//           <Tabs>
//             <TabList>
//               <Tab>Loan Matches</Tab>
//               <Tab>Collaborative Loans</Tab>
//             </TabList>

//             {/* Loan Matches Tab */}
//             <TabPanel>
//               <h3 className="text-2xl font-semibold mb-4">Loan Matches</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {filteredLoans.map((loan) => (
//                   <div key={loan._id} className="p-4 bg-gray-50 border rounded-lg shadow-sm">
//                     <h4 className="text-lg font-semibold">Loan ID: {loan._id}</h4>
//                     <p className="text-sm text-gray-600">Amount: ₹{loan.amountRequested}</p>
//                     <p className="text-sm text-gray-600">Interest Rate: {loan.interestRate}%</p>
//                     <p className="text-sm text-gray-600">Tenure: {loan.loanTerm} months</p>
//                     <button
//                       onClick={() => handleRequest(loan)}
//                       className={`mt-2 px-4 py-2 ${
//                         selectedLenders.includes(loan._id) ? "bg-red-500" : "bg-blue-500"
//                       } text-white rounded-lg`}
//                     >
//                       {selectedLenders.includes(loan._id) ? "Cancel" : "Request Loan"}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </TabPanel>

//             {/* Collaborative Loan Tab */}
//             <TabPanel>
//               <h3 className="text-2xl font-semibold mb-4">Collaborative Loans</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {filteredLoans.map((loan) => (
//                   <div key={loan._id} className="p-4 bg-gray-50 border rounded-lg shadow-sm">
//                     <h4 className="text-lg font-semibold">Loan ID: {loan._id}</h4>
//                     <p className="text-sm text-gray-600">Amount: ₹{loan.amountRequested}</p>
//                     <p className="text-sm text-gray-600">Interest Rate: {loan.interestRate}%</p>
//                     <p className="text-sm text-gray-600">Tenure: {loan.loanTerm} months</p>
//                     <button
//                       onClick={() => handleRequest(loan)}
//                       className={`mt-2 px-4 py-2 ${
//                         selectedLenders.includes(loan._id) ? "bg-red-500" : "bg-blue-500"
//                       } text-white rounded-lg`}
//                     >
//                       {selectedLenders.includes(loan._id) ? "Cancel" : "Request Loan"}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </TabPanel>
//           </Tabs>

//           {/* Remaining Amount Indicator */}
//           <div className="mt-6 text-center">
//             <p className="text-lg font-semibold">
//               Remaining Amount to be Requested: ₹{remainingAmount}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoanPage;

import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import axios from "axios";

const appliedLoanAmount = 10000; // Loan amount borrower applied for

function LoanPage() {
  const [lenders, setLenders] = useState([]);
  const [requestedAmount, setRequestedAmount] = useState(0);
  const [selectedLenders, setSelectedLenders] = useState([]);
  const [interestRateFilter, setInterestRateFilter] = useState([0, 15]);
  const [tenureFilter, setTenureFilter] = useState("All");

  const tenureOptions = ["All", "6 months", "12 months", "18 months", "24 months"];

  useEffect(() => {
    const fetchLoanMatches = async () => {
      try {
        const borrowerId = "67d5e48e6322d17a985de753"; // Replace with actual borrower ID
        const response = await axios.get(
          `http://localhost:5001/api/loans/match/${borrowerId}`
        );
        console.log("Loan Matches:", response.data);
        setLenders(response.data);
      } catch (error) {
        console.error("Error fetching loan matches:", error.response?.data || error.message);
      }
    };

    const fetchCollaborativeFunding = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/loans/best-collaborative");
        console.log("Collaborative Loans:", response.data);
        setLenders((prevLenders) => [...prevLenders, ...response.data]);
      } catch (error) {
        console.error("Error fetching collaborative funding:", error.response?.data || error.message);
      }
    };

    fetchLoanMatches();
    fetchCollaborativeFunding();
  }, []);

  const handleRequest = async (lender) => {
    try {
      const loanId = lender._id;
      const amount = lender.amountRequested;

      if (selectedLenders.includes(loanId)) {
        setRequestedAmount(requestedAmount - amount);
        setSelectedLenders(selectedLenders.filter((id) => id !== loanId));
      } else {
        const requestBody = {
          borrowerId: "67e79f25380f8ee9318dd9b1",
          amountRequested: amount,
          interestRate: lender.interestRate,
          loanTerm: lender.loanTerm,
          approvedByML: true,
        };

        const response = await axios.post("http://localhost:5001/api/loans/request-loan", requestBody);

        console.log(response.data);
        setRequestedAmount(requestedAmount + amount);
        setSelectedLenders([...selectedLenders, loanId]);
      }
    } catch (error) {
      console.error("Error requesting loan:", error.response?.data || error.message);
    }
  };

  const remainingAmount = requestedAmount;

  const filteredLoans = lenders.filter((loan) => {
    return (
      loan.interestRate >= interestRateFilter[0] &&
      loan.interestRate <= interestRateFilter[1] &&
      (tenureFilter === "All" || `${loan.loanTerm} months` === tenureFilter)
    );
  });

  return (
    <div className="flex flex-col items-center p-6 w-full max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-4">Loan Options</h2>

      <div className="flex flex-row w-full">
        {/* Sidebar Filters */}
        <div className="w-64 bg-white p-4 rounded-lg shadow-sm mr-4">
          <h3 className="text-lg font-bold mb-2">Filters</h3>
          <label className="block mb-2 font-semibold">Interest Rate Filter:</label>
          <div className="mb-4">
            <Slider
              range
              value={interestRateFilter}
              onChange={setInterestRateFilter}
              min={0}
              max={20}
              step={1}
            />
            <div className="flex justify-between text-gray-600">
              <span>{interestRateFilter[0]}%</span>
              <span>{interestRateFilter[1]}%</span>
            </div>
          </div>

          <label className="block mb-2 font-semibold">Tenure Filter:</label>
          <select
            value={tenureFilter}
            onChange={(e) => setTenureFilter(e.target.value)}
            className="block w-full p-2 text-sm text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-blue-500"
          >
            {tenureOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Loan List */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
          <Tabs>
            <TabList>
              <Tab>Loan Matches</Tab>
              <Tab>Collaborative Loans</Tab>
            </TabList>

            {/* Loan Matches Tab */}
            <TabPanel>
              <h3 className="text-2xl font-semibold mb-4">Loan Matches</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredLoans.map((loan) => (
                  <div key={loan._id} className="p-4 bg-gray-50 border rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold">Loan ID: {loan._id}</h4>
                    <p className="text-sm text-gray-600">Amount: ₹{loan.amountRequested}</p>
                    <p className="text-sm text-gray-600">Interest Rate: {loan.interestRate}%</p>
                    <p className="text-sm text-gray-600">Tenure: {loan.loanTerm} months</p>
                    <button
                      onClick={() => handleRequest(loan)}
                      className={`mt-2 px-4 py-2 ${
                        selectedLenders.includes(loan._id) ? "bg-red-500" : "bg-blue-500"
                      } text-white rounded-lg`}
                    >
                      {selectedLenders.includes(loan._id) ? "Cancel" : "Request Loan"}
                    </button>
                  </div>
                ))}
              </div>
            </TabPanel>

            {/* Collaborative Loan Tab */}
            <TabPanel>
              <h3 className="text-2xl font-semibold mb-4">Collaborative Loans</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredLoans.map((loan) => (
                  <div key={loan._id} className="p-4 bg-gray-50 border rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold">Loan ID: {loan._id}</h4>
                    <p className="text-sm text-gray-600">Amount: ₹{loan.amountRequested}</p>
                    <p className="text-sm text-gray-600">Interest Rate: {loan.interestRate}%</p>
                    <p className="text-sm text-gray-600">Tenure: {loan.loanTerm} months</p>
                    <button
                      onClick={() => handleRequest(loan)}
                      className={`mt-2 px-4 py-2 ${
                        selectedLenders.includes(loan._id) ? "bg-red-500" : "bg-blue-500"
                      } text-white rounded-lg`}
                    >
                      {selectedLenders.includes(loan._id) ? "Cancel" : "Request Loan"}
                    </button>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>

          {/* Remaining Amount Indicator */}
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">
              Remaining Amount to be Requested: ₹{remainingAmount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanPage;