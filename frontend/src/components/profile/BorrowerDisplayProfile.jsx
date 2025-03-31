import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        {/* Greeting Section */}
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

          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <img
              src={borrowerData.profilePicture}
              alt="Profile"
              className="w-48 h-48 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center gap-6 mb-8">
          <StatCard label="Credit Score" value={borrowerData.creditScore} />
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PersonalDetails borrowerData={borrowerData} onClick={() => setActiveModal("personal")} />
          <FinancialDetails borrowerData={borrowerData} onClick={() => setActiveModal("financial")} />
          <BankDetails borrowerData={borrowerData} onClick={() => setActiveModal("bank")} />
          <Documents borrowerData={borrowerData} onClick={() => setActiveModal("documents")} />
          <Security onClick={() => setActiveModal("security")} />
        </div>

        {/* Modal for Detailed Sections */}
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

// Reusable Stat Card Component
const StatCard = ({ label, value }) => (
  <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center">
    <h3 className="text-xl font-bold text-gray-600">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

// Section Components (Now Clickable)
const PersonalDetails = ({ borrowerData, onClick }) => (
  <Card title="Personal Information" onClick={onClick}>
    <ProfileItem label="Name" value={borrowerData.name} />
    <ProfileItem label="Email" value={borrowerData.email} />
    <ProfileItem label="Phone" value={borrowerData.phone} />
    <ProfileItem label="Address" value={borrowerData.address} />
  </Card>
);

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

const sections = [
  { id: "personal", title: "Personal Info", content: <PersonalDetails borrowerData={borrowerData} /> },
  { id: "financial", title: "Financial Details", content: <FinancialDetails borrowerData={borrowerData} /> },
  { id: "bank", title: "Bank Details", content: <BankDetails borrowerData={borrowerData} /> },
  { id: "documents", title: "Documents", content: <Documents borrowerData={borrowerData} /> },
];

export default BorrowerDisplayProfile;
