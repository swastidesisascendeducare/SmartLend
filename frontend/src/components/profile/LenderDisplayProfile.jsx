import React, { useState } from "react";
import { Link } from "react-router-dom";

const LenderDisplayProfile = ({ lenderData, isLoading, userType }) => {
    const [activeTab, setActiveTab] = useState("personal");

    if (isLoading) {
        return <div className="text-center">Loading...</div>;
    }

    if (!lenderData) {
        return <div className="text-center">No profile data available.</div>;
    }

    const tabs = [
        { id: "personal", label: "Personal Details" },
        { id: "investment", label: "Investment Preferences" },
        { id: "bank", label: "Bank Details" },
        { id: "documents", label: "Uploaded Documents" },
        { id: "security", label: "Security" },
    ];

    return (
        <div className="container mx-auto p-4 sm:p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Lender Profile</h2>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Vertical Tabs */}
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

                {/* Content Area */}
                <div className="md:w-3/4">
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                        {activeTab === "personal" && (
                            <ProfileSection title="Personal Details">
                                <img 
                                    src={lenderData.profilePicture} 
                                    alt={`${lenderData.name}'s profile`}
                                    className="w-32 h-32 rounded-full border object-cover mx-auto mb-4"
                                />
                                <ProfileItem label="Name" value={lenderData.name} />
                                <ProfileItem label="Email" value={lenderData.email} />
                                <ProfileItem label="Phone" value={lenderData.phone} />
                                <ProfileItem label="Address" value={lenderData.address} />
                            </ProfileSection>
                        )}

                        {activeTab === "investment" && (
                            <ProfileSection title="Investment Preferences">
                                <ProfileItem label="Investment Range" value={lenderData.investmentAmount} />
                                <ProfileItem label="Preferred Loan Type" value={lenderData.loanType} />
                                <ProfileItem label="Risk Preference" value={lenderData.riskPreference} />
                            </ProfileSection>
                        )}

                        {activeTab === "bank" && (
                            <ProfileSection title="Bank Details">
                                <ProfileItem label="Account Number" value={lenderData.bankDetails?.accountNumber} />
                                <ProfileItem label="IFSC Code" value={lenderData.bankDetails?.ifscCode} />
                            </ProfileSection>
                        )}

                        {activeTab === "documents" && (
                            <ProfileSection title="Uploaded Documents">
                                {lenderData.documents?.map((doc, index) => (
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
                    to={`/profile/lender/edit`} 
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

export default LenderDisplayProfile;
