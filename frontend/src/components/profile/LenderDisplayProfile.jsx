import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Sample Lender Data
const lenderData = {
  name: "Rishabh Dixit",
  email: "Rishabh@gmail.com",
  phone: "8264675692",
  address: "Koramangala, Bangalore, India",
  profilePicture: "https://via.placeholder.com/150",
  availableFunds: "₹2,00,000",
  minInterestRate: "3%",
  maxLoanAmount: "₹3,00,000",
  maxLoanTerm: "18 months",
  riskAppetite: "Medium",
  bankDetails: {
    accountNumber: "839519847347",
    ifscCode: "HDFC0004386",
    bankName: "HDFC Bank",
    branchName: "Koramangala Branch",
    accountType: "Savings",
    upiId: "rishabh@hdfcbank",
  },
  documents: [
    { type: "ID Proof", file: "https://example.com/id-proof.pdf" },
    { type: "Address Proof", file: "https://example.com/address-proof.pdf" },
    { type: "Bank Statement", file: "https://example.com/bank-statement.pdf" },
  ],
};  

const ProfileItem = ({ label, value }) => (
  <p className="mb-4 text-gray-700">
    <span className="font-medium">{label}: </span> {value || "N/A"}
  </p>
);

// Main Profile Component
const LenderDisplayProfile = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#435FEF] to-[#2E4ABF] text-white">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8 relative text-gray-800">
        {/* 🔹 Greeting Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Hello Rishabh</h1>
            <p className="text-gray-600 mt-2">
              Take control of your profile and stay on top of your financial investments with ease.
            </p>
            <Link
              to="/lender-profile/edit"
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Edit Profile
            </Link>
          </div>

          {/* 🔹 Profile Picture */}
          <div className="flex flex-col items-center">
            <img
              src={lenderData.profilePicture}
              alt="Profile"
              className="w-48 h-48 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* 🔹 Stats Section */}
        <div className="flex justify-center gap-6 mb-8">
          <StatCard label="Available Funds" value={lenderData.availableFunds} />
          <StatCard label="Max Loan Amount" value={lenderData.maxLoanAmount} />
          <StatCard label="Max Loan Term" value={lenderData.maxLoanTerm} />
        </div>

        {/* 🔹 Details Section (Clickable Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PersonalDetails lenderData={lenderData} onClick={() => setActiveModal("personal")} />
          <InvestmentDetails lenderData={lenderData} onClick={() => setActiveModal("investment")} />
          <BankDetails lenderData={lenderData} onClick={() => setActiveModal("bank")} />
          <Documents lenderData={lenderData} onClick={() => setActiveModal("documents")} />
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
const PersonalDetails = ({ lenderData, onClick }) => (
  <Card title="Personal Information" onClick={onClick}>
    <ProfileItem label="Name" value={lenderData.name} />
    <ProfileItem label="Email" value={lenderData.email} />
    <ProfileItem label="Phone" value={lenderData.phone} />
    <ProfileItem label="Address" value={lenderData.address} />
  </Card>
);

const InvestmentDetails = ({ lenderData, onClick }) => (
  <Card title="Investment Preferences" onClick={onClick}>
    <ProfileItem label="Available Funds" value={lenderData.availableFunds} />
    <ProfileItem label="Minimum Interest Rate" value={lenderData.minInterestRate} />
    <ProfileItem label="Maximum Loan Amount" value={lenderData.maxLoanAmount} />
    <ProfileItem label="Maximum Loan Term" value={lenderData.maxLoanTerm} />
  </Card>
);

const BankDetails = ({ lenderData, onClick }) => (
  <Card title="Bank Details" onClick={onClick}>
    <ProfileItem label="Account Number" value={lenderData.bankDetails.accountNumber} />
    <ProfileItem label="IFSC Code" value={lenderData.bankDetails.ifscCode} />
  </Card>
);

const Documents = ({ lenderData, onClick }) => (
  <Card title="Documents" onClick={onClick}>
    {lenderData.documents.map((doc, index) => (
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
  { id: "personal", title: "Personal Info", content: <PersonalDetails lenderData={lenderData} /> },
  { id: "investment", title: "Investment Preferences", content: <InvestmentDetails lenderData={lenderData} /> },
  { id: "bank", title: "Bank Details", content: <BankDetails lenderData={lenderData} /> },
  { id: "documents", title: "Documents", content: <Documents lenderData={lenderData} /> },
];

// ✅ Correct Export
export default LenderDisplayProfile;
