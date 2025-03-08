import React, { useState } from "react";
import { Link } from "react-router-dom";

const BorrowerDisplayProfile = ({ borrowerData, isLoading, userType }) => {
    const [activeTab, setActiveTab] = useState("personal");

    if (isLoading) {
        return <div className="text-center">Loading...</div>;
    }

    if (!borrowerData) {
        return <div className="text-center">No profile data available.</div>;
    }

    const tabs = [
        { id: "personal", label: "Personal Details" },
        { id: "loan", label: "Loan Details" },
        { id: "financial", label: "Financial Information" },
        { id: "bank", label: "Bank Details" },
        { id: "documents", label: "Uploaded Documents" },
        { id: "security", label: "Security" },
    ];

    return (
        <div className="container mx-auto p-4 sm:p-6 min-h-screen" >
            {/*style={{ background: "linear-gradient(90deg, rgba(245,255,195,1) 15%, rgba(67,95,239,1) 95%)" }}*/}
            <h2 className="text-3xl font-bold mb-8 text-center">Borrower Profile</h2>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                    <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`w-full text-left py-2 px-4 mb-2 rounded ${
                                    activeTab === tab.id
                                        ? "bg-blue-500 text-white"
                                        : "hover:bg-gray-100"
                                }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="md:w-3/4">
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                        {activeTab === "personal" && (
                            <ProfileSection title="Personal Details">
                                <img 
                                    src={borrowerData.profilePicture} 
                                    alt={`${borrowerData.name}'s profile`}
                                    className="w-32 h-32 rounded-full border object-cover mx-auto mb-4"
                                />
                                <ProfileItem label="Name" value={borrowerData.name} />
                                <ProfileItem label="Email" value={borrowerData.email} />
                                <ProfileItem label="Phone" value={borrowerData.phone} />
                                <ProfileItem label="Address" value={borrowerData.address} />
                            </ProfileSection>
                        )}

                        {activeTab === "loan" && (
                            <ProfileSection title="Loan Details">
                                <ProfileItem label="Loan Amount" value={borrowerData.loanAmount} />
                                <ProfileItem label="Loan Purpose" value={borrowerData.loanPurpose} />
                                <ProfileItem label="Loan Term" value={borrowerData.loanTerm} />
                            </ProfileSection>
                        )}

                        {activeTab === "financial" && (
                            <ProfileSection title="Financial Information">
                                <ProfileItem label="Annual Income" value={borrowerData.annualIncome} />
                                <ProfileItem label="Credit Score" value={borrowerData.creditScore} />
                            </ProfileSection>
                        )}

                        {activeTab === "bank" && (
                            <ProfileSection title="Bank Details">
                                <ProfileItem label="Account Number" value={borrowerData.bankDetails?.accountNumber} />
                                <ProfileItem label="IFSC Code" value={borrowerData.bankDetails?.ifscCode} />
                            </ProfileSection>
                        )}

                        {activeTab === "documents" && (
                            <ProfileSection title="Uploaded Documents">
                                {borrowerData.documents?.map((doc, index) => (
                                    <div key={index} className="mb-2">
                                        <p className="font-semibold">{doc.type}:</p>
                                        <a href={doc.file} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            View Document
                                        </a>
                                    </div>
                                ))}
                            </ProfileSection>
                        )}

                        {activeTab === "security" && (
                            <ProfileSection title="Security">
                                <div className="flex justify-between items-center">
                                    <span>Password</span>
                                    <Link 
                                        to="/change-password"
                                        state={{ userType: userType }} 
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                                    >
                                        Change Password
                                    </Link>
                                </div>
                            </ProfileSection>
                        )}
                    </div>
                </div>
            </div>

            <div className="text-center mt-8">
                <Link 
                    to={`/profile/borrower/edit`} 
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 text-lg font-semibold"
                >
                    Edit Profile
                </Link>
            </div>
        </div>
    );
};

const ProfileSection = ({ title, children }) => (
    <div>
        <h3 className="text-xl font-semibold mb-4 pb-2 border-b">{title}</h3>
        {children}
    </div>
);

const ProfileItem = ({ label, value }) => (
    <p className="mb-2"><span className="font-semibold">{label}:</span> {value || 'N/A'}</p>
);

export default BorrowerDisplayProfile;
