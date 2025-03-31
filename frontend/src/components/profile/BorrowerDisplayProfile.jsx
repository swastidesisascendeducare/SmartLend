import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Sample Borrower Data
const borrowerData = {
  name: "Vidhi Arora",
  email: "aroravidhi342@gmail.com",
  phone: "9315523457",
  address: "93, PRIYA ENCLAVE, DELHI-110095",
  profilePicture: "https://via.placeholder.com/150",
  loanAmount: "1,00,000",
  loanPurpose: "Home Renovation",
  loanTerm: "12 months",
  annualIncome: "10,00,000",
  creditScore: "780",
  bankDetails: {
    accountNumber: "1234567890",
    ifscCode: "ABC1234567",
  },
  documents: [
    { type: "ID Proof", file: "https://example.com/id-proof.pdf" },
    { type: "Address Proof", file: "https://example.com/address-proof.pdf" },
  ],
};



const ProfileItem = ({ label, value }) => (
  <p className="mb-4 text-gray-700">
    <span className="font-medium">{label}: </span> {value || "N/A"}
  </p>
);

const BorrowerDisplayProfile = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#435FEF] to-[#2E4ABF] text-white">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8 relative text-gray-800">
        {/* 🔹 Greeting Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Hello Vidhi</h1>
            <p className="text-gray-600 mt-2">
              Manage your loans and financial details with ease.
            </p>
            <Link
              to="/borrower-profile/edit"
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Edit Profile
            </Link>
          </div>

          {/* 🔹 Profile Picture */}
          <div className="flex flex-col items-center">
            <img
              src={borrowerData.profilePicture}
              alt="Profile"
              className="w-48 h-48 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* 🔹 Stats Section */}
        <div className="flex justify-center gap-6 mb-8">
          {/* <StatCard label="Loan Amount" value={borrowerData.loanAmount} />
          <StatCard label="Loan Term" value={borrowerData.loanTerm} /> */}
          <StatCard label="Credit Score" value={borrowerData.creditScore} />
        </div>

        {/* 🔹 Details Section (Clickable Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PersonalDetails borrowerData={borrowerData} onClick={() => setActiveModal("personal")} />
          {/* <LoanDetails borrowerData={borrowerData} onClick={() => setActiveModal("loan")} /> */}
          <FinancialDetails borrowerData={borrowerData} onClick={() => setActiveModal("financial")} />
          <BankDetails borrowerData={borrowerData} onClick={() => setActiveModal("bank")} />
          <Documents borrowerData={borrowerData} onClick={() => setActiveModal("documents")} />
          <Security onClick={() => setActiveModal("security")} />
        </div>

        {/* 🔹 Modal for Detailed Sections */}
        {activeModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
              <h2 className="text-lg font-bold mb-4">{sections.find((s) => s.id === activeModal)?.title}</h2>
              {sections.find((s) => s.id === activeModal)?.content}
              <button
                className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-xl"
                onClick={() => setActiveModal(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ✅ Reusable Stat Card Component
const StatCard = ({ label, value }) => (
  <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center">
    <h3 className="text-xl font-bold text-gray-600">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

// ✅ Section Components (Now Clickable)
const PersonalDetails = ({ borrowerData, onClick }) => (
  <Card title="Personal Information" onClick={onClick}>
    <ProfileItem label="Name" value={borrowerData.name} />
    <ProfileItem label="Email" value={borrowerData.email} />
    <ProfileItem label="Phone" value={borrowerData.phone} />
    <ProfileItem label="Address" value={borrowerData.address} />
  </Card>
);

// const LoanDetails = ({ borrowerData, onClick }) => (
//   <Card title="Loan Information" onClick={onClick}>
//     <ProfileItem label="Loan Amount" value={borrowerData.loanAmount} />
//     <ProfileItem label="Loan Purpose" value={borrowerData.loanPurpose} />
//     <ProfileItem label="Loan Term" value={borrowerData.loanTerm} />
//   </Card>
// );

const FinancialDetails = ({ borrowerData, onClick }) => (
  <Card title="Financial Information" onClick={onClick}>
    <ProfileItem label="Annual Income" value={borrowerData.annualIncome} />
    <ProfileItem label="Credit Score" value={borrowerData.creditScore} />
  </Card>
);

const BankDetails = ({ borrowerData, onClick }) => (
  <Card title="Bank Details" onClick={onClick}>
    <ProfileItem label="Account Number" value={borrowerData.bankDetails.accountNumber} />
    <ProfileItem label="IFSC Code" value={borrowerData.bankDetails.ifscCode} />
  </Card>
);

const Documents = ({ borrowerData, onClick }) => (
  <Card title="Documents" onClick={onClick}>
    {borrowerData.documents.map((doc, index) => (
      <p key={index} className="mb-2">
        {doc.type}:{" "}
        <a href={doc.file} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Document
        </a>
      </p>
    ))}
  </Card>
);

const Security = ({ onClick }) => (
  <Card title="Security" onClick={onClick}>
    <Link to="/change-password" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Change Password
    </Link>
  </Card>
);

// ✅ Reusable Card Component (Now Clickable)
const Card = ({ title, children, onClick }) => (
  <motion.div
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
    className="bg-blue-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <h4 className="text-lg font-semibold text-gray-800 mb-4">{title}</h4>
    {children}
  </motion.div>
);

// ✅ Define Sections
const sections = [
  { id: "personal", title: "Personal Info", content: <PersonalDetails borrowerData={borrowerData} /> },
  // { id: "loan", title: "Loan Details", content: <LoanDetails borrowerData={borrowerData} /> },
  { id: "financial", title: "Financial Details", content: <FinancialDetails borrowerData={borrowerData} /> },
  { id: "bank", title: "Bank Details", content: <BankDetails borrowerData={borrowerData} /> },
  { id: "documents", title: "Documents", content: <Documents borrowerData={borrowerData} /> },
];

// ✅ Correct Export
export default BorrowerDisplayProfile;




////BorrowerProfile giving error///////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// // Main Profile Component
// const BorrowerDisplayProfile = () => {
//   const { id } = useParams(); // ✅ Get borrower ID from URL
//   const [borrowerData, setBorrowerData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeModal, setActiveModal] = useState(null);

//   useEffect(() => {
//     const fetchBorrowerData = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(`/api/borrower/${id}`);
//         setBorrowerData(response.data);
//       } catch (err) {
//         console.error("Failed to fetch borrower data:", err);
//         setError("Failed to load borrower data");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchBorrowerData();
//   }, [id]);

//   if (isLoading) {
//     return <div className="text-center text-gray-600">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-600">{error}</div>;
//   }

//   if (!borrowerData) {
//     return <div className="text-center text-gray-600">No profile data available.</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Borrower Profile
//         </h2>

//         {/* 🔹 Section Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-6 border-b pb-4">
//           {sections.map((section) => (
//             <button
//               key={section.id}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
//               onClick={() => setActiveModal(section.id)}
//             >
//               {section.title}
//             </button>
//           ))}
//         </div>

//         {/* 🔹 All Details (Always Visible) */}
//         <AllDetails borrowerData={borrowerData} />

//         {/* 🔹 Modal for Specific Sections */}
//         {activeModal && (
//           <Modal
//             title={sections.find((s) => s.id === activeModal)?.title}
//             onClose={() => setActiveModal(null)}
//           >
//             {sections.find((s) => s.id === activeModal)?.content(borrowerData)}
//           </Modal>
//         )}

//         {/* 🔹 Edit Profile Button */}
//         <div className="text-center mt-8">
//           <Link
//             to={`/borrower-profile/edit/${borrowerData._id}`}
//             className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 text-lg font-semibold"
//           >
//             Edit Profile
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ✅ Always Visible: All Details Section
// const AllDetails = ({ borrowerData }) => (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     <PersonalDetails borrowerData={borrowerData} />
//     <LoanDetails borrowerData={borrowerData} />
//     <FinancialDetails borrowerData={borrowerData} />
//     <BankDetails borrowerData={borrowerData} />
//     <Documents borrowerData={borrowerData} />
//     <Security borrowerData={borrowerData} />
//   </div>
// );

// // ✅ Section Components
// const PersonalDetails = ({ borrowerData }) => (
//   <Card title="Personal Information">
//     <img
//       src={borrowerData.profilePicture || "https://via.placeholder.com/150"}
//       alt="Profile"
//       className="w-32 h-32 rounded-full mx-auto mb-4"
//     />
//     <ProfileItem label="Name" value={borrowerData.name} />
//     <ProfileItem label="Email" value={borrowerData.email} />
//     <ProfileItem label="Phone" value={borrowerData.phone} />
//     <ProfileItem label="Address" value={borrowerData.address} />
//   </Card>
// );

// const LoanDetails = ({ borrowerData }) => (
//   <Card title="Loan Information">
//     <ProfileItem label="Loan Amount" value={`$${borrowerData.loanAmount}`} />
//     <ProfileItem label="Loan Purpose" value={borrowerData.loanPurpose} />
//     <ProfileItem label="Loan Term" value={`${borrowerData.loanTerm} months`} />
//   </Card>
// );

// const FinancialDetails = ({ borrowerData }) => (
//   <Card title="Financial Information">
//     <ProfileItem label="Annual Income" value={`$${borrowerData.annualIncome}`} />
//     <ProfileItem label="Credit Score" value={borrowerData.creditScore} />
//   </Card>
// );

// const BankDetails = ({ borrowerData }) => (
//   <Card title="Bank Details">
//     <ProfileItem label="Account Number" value={borrowerData.bankDetails?.accountNumber} />
//     <ProfileItem label="IFSC Code" value={borrowerData.bankDetails?.ifscCode} />
//   </Card>
// );

// const Documents = ({ borrowerData }) => (
//   <Card title="Documents">
//     {borrowerData.documents?.map((doc, index) => (
//       <div key={index} className="mb-2">
//         <p>{doc.type}: </p>
//         <a
//           href={doc.file}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:underline"
//         >
//           View Document
//         </a>
//       </div>
//     ))}
//   </Card>
// );

// const Security = ({ borrowerData }) => (
//   <Card title="Security">
//     <div className="flex justify-between items-center">
//       <span>Password</span>
//       <Link
//         to="/change-password"
//         state={{ userType: "borrower" }}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
//       >
//         Change Password
//       </Link>
//     </div>
//   </Card>
// );

// // ✅ Modal Component
// const Modal = ({ title, children, onClose }) => (
//   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//     <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
//       <h2 className="text-lg font-bold mb-4">{title}</h2>
//       {children}
//       <button
//         className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-xl"
//         onClick={onClose}
//       >
//         &times;
//       </button>
//     </div>
//   </div>
// );

// // ✅ Reusable Card Component
// const Card = ({ title, children }) => (
//   <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
//     <h4 className="text-lg font-semibold text-gray-800 mb-4">{title}</h4>
//     {children}
//   </div>
// );

// // ✅ Reusable Profile Item Component
// const ProfileItem = ({ label, value }) => (
//   <p className="mb-4 text-gray-700">
//     <span className="font-medium">{label}: </span> {value || "N/A"}
//   </p>
// );

// // ✅ Define Sections for Modal
// const sections = [
//   { id: "personal", title: "Personal Info", content: (data) => <PersonalDetails borrowerData={data} /> },
//   { id: "loan", title: "Loan Details", content: (data) => <LoanDetails borrowerData={data} /> },
//   { id: "financial", title: "Financial Details", content: (data) => <FinancialDetails borrowerData={data} /> },
//   { id: "bank", title: "Bank Details", content: (data) => <BankDetails borrowerData={data} /> },
//   { id: "documents", title: "Documents", content: (data) => <Documents borrowerData={data} /> },
//   { id: "security", title: "Security", content: (data) => <Security borrowerData={data} /> },
// ];

// export default BorrowerDisplayProfile;










/////////////////////////////////////////////

/////NOT WORKING PROPERLYYY///////////////////////////////

// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// // Main Profile Component
// const BorrowerDisplayProfile = () => {
//   const { id } = useParams(); // ✅ Get borrowerId from route params
//   const [borrowerData, setBorrowerData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeModal, setActiveModal] = useState(null);

//   // useEffect(() => {
//   //   const fetchBorrowerData = async () => {
//   //     if (!id) return;
//   //     try {
//   //       const response = await axios.get(`/api/borrower/${id}`);
//   //       setBorrowerData(response.data);
//   //     } catch (error) {
//   //       console.error("Failed to fetch borrower data:", error);
//   //       setError("Failed to load borrower data");
//   //     } finally {
//   //       setIsLoading(false);
//   //     }
//   //   };

//   //   fetchBorrowerData();
//   // }, [id]);

//   useEffect(() => {
//     const fetchBorrowerData = async () => {
//       const userId = localStorage.getItem("userId"); // ✅ Read userId from localStorage
//       if (!userId) {
//         console.error("🚨 No user ID found");
//         setIsLoading(false);
//         return;
//       }
  
//       try {
//         console.log("Fetching data with ID:", userId);
//         const response = await axios.get(`/api/borrower/${userId}`);
//         console.log("Data fetched:", response.data);
//         setBorrowerData(response.data);
//       } catch (error) {
//         console.error("Failed to fetch borrower data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
  
//     fetchBorrowerData();
//   }, []);
  
  

//   if (isLoading) {
//     return <div className="text-center text-gray-600">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   if (!borrowerData) {
//     return <div className="text-center text-gray-600">No profile data available.</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Borrower Profile</h2>

//         {/* 🔹 Section Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-6 border-b pb-4">
//           {sections.map((section) => (
//             <button
//               key={section.id}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
//               onClick={() => setActiveModal(section.id)}
//             >
//               {section.title}
//             </button>
//           ))}
//         </div>

//         {/* 🔹 All Details Section */}
//         <AllDetails borrowerData={borrowerData} />

//         {/* 🔹 Modal for Specific Sections */}
//         {activeModal && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
//               <h2 className="text-lg font-bold mb-4">
//                 {sections.find((s) => s.id === activeModal)?.title}
//               </h2>
//               {sections.find((s) => s.id === activeModal)?.content}

//               <button
//                 className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-xl"
//                 onClick={() => setActiveModal(null)}
//               >
//                 &times;
//               </button>
//             </div>
//           </div>
//         )}

//         {/* 🔹 Edit Profile Button */}
//         <div className="text-center mt-8">
//           <Link
//             to={`/borrower-profile/edit/${id}`}
//             className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 text-lg font-semibold"
//           >
//             Edit Profile
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ✅ Always Visible: All Details Section
// const AllDetails = ({ borrowerData }) => (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     <PersonalDetails borrowerData={borrowerData} />
//     <LoanDetails borrowerData={borrowerData} />
//     <FinancialDetails borrowerData={borrowerData} />
//     <BankDetails borrowerData={borrowerData} />
//     <Documents borrowerData={borrowerData} />
//     <Security borrowerData={borrowerData} />
//   </div>
// );

// // ✅ Section Components
// const PersonalDetails = ({ borrowerData }) => (
//   <Card title="Personal Information">
//     <img src={borrowerData.profilePicture} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
//     <ProfileItem label="Name" value={borrowerData.name} />
//     <ProfileItem label="Email" value={borrowerData.email} />
//     <ProfileItem label="Phone" value={borrowerData.phone} />
//     <ProfileItem label="Address" value={borrowerData.address} />
//   </Card>
// );

// const LoanDetails = ({ borrowerData }) => (
//   <Card title="Loan Information">
//     <ProfileItem label="Loan Amount" value={borrowerData.loanAmount} />
//     <ProfileItem label="Loan Purpose" value={borrowerData.loanPurpose} />
//     <ProfileItem label="Loan Term" value={borrowerData.loanTerm} />
//   </Card>
// );

// const FinancialDetails = ({ borrowerData }) => (
//   <Card title="Financial Information">
//     <ProfileItem label="Annual Income" value={borrowerData.annualIncome} />
//     <ProfileItem label="Credit Score" value={borrowerData.creditScore} />
//   </Card>
// );

// const BankDetails = ({ borrowerData }) => (
//   <Card title="Bank Details">
//     <ProfileItem label="Account Number" value={borrowerData.bankDetails?.accountNumber} />
//     <ProfileItem label="IFSC Code" value={borrowerData.bankDetails?.ifscCode} />
//   </Card>
// );

// const Documents = ({ borrowerData }) => (
//   <Card title="Documents">
//     {borrowerData.documents?.map((doc, index) => (
//       <div key={index} className="mb-2">
//         <p>{doc.type}: </p>
//         <a href={doc.file} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//           View Document
//         </a>
//       </div>
//     ))}
//   </Card>
// );

// const Security = ({ borrowerData }) => (
//   <Card title="Security">
//     <div className="flex justify-between items-center">
//       <span>Password</span>
//       <Link
//         to="/change-password"
//         state={{ userType: "borrower" }}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
//       >
//         Change Password
//       </Link>
//     </div>
//   </Card>
// );

// // ✅ Define Sections for Modal
// const sections = [
//   { id: "personal", title: "Personal Info", content: <PersonalDetails borrowerData={null} /> },
//   { id: "loan", title: "Loan Details", content: <LoanDetails borrowerData={null} /> },
//   { id: "financial", title: "Financial Details", content: <FinancialDetails borrowerData={null} /> },
//   { id: "bank", title: "Bank Details", content: <BankDetails borrowerData={null} /> },
//   { id: "documents", title: "Documents", content: <Documents borrowerData={null} /> },
//   { id: "security", title: "Security", content: <Security borrowerData={null} /> },
// ];

// // ✅ Reusable Card Component
// const Card = ({ title, children }) => (
//   <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
//     <h4 className="text-lg font-semibold text-gray-800 mb-4">{title}</h4>
//     {children}
//   </div>
// );

// // ✅ Reusable Profile Item Component
// const ProfileItem = ({ label, value }) => (
//   <p className="mb-4 text-gray-700">
//     <span className="font-medium">{label}: </span> {value || "N/A"}
//   </p>
// );

// export default BorrowerDisplayProfile;

// //////////////INTEGRATION ONE////////////GIVING ERROR//////////////
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const BorrowerDisplayProfile = ({ userId }) => {
//   const [borrowerData, setBorrowerData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBorrowerData = async () => {
//       if (!userId) {
//         console.error("🚨 No user ID found");
//         setError("User ID is missing");
//         setLoading(false);
//         return;
//       }

//       console.log(`🚀 Fetching borrower data for ID: ${userId}`);

//       try {
//         const response = await axios.get(`/api/borrower/${userId}`);
//         console.log("✅ Borrower data fetched:", response.data);
//         setBorrowerData(response.data);
//       } catch (error) {
//         console.error("❌ Failed to fetch borrower data:", error);
//         setError("Failed to load borrower data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBorrowerData();
//   }, [userId]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Borrower Profile</h1>
//       {borrowerData ? (
//         <div>
//           <p><strong>Name:</strong> {borrowerData.name}</p>
//           <p><strong>Email:</strong> {borrowerData.email}</p>
//           <p><strong>Phone Number:</strong> {borrowerData.phoneNumber}</p>
//           <p><strong>Income:</strong> {borrowerData.income}</p>
//           <p><strong>Loan Amount:</strong> {borrowerData.loanAmount || "Not applied"}</p>
//         </div>
//       ) : (
//         <p>No data found.</p>
//       )}
//     </div>
//   );
// };

// export default BorrowerDisplayProfile;
