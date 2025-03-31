import React from "react";

const ProfilePreview = ({ data }) => {
    if (!data) {
        return <div className="p-6 bg-white rounded-lg shadow-md text-center">Loading...</div>;
    }

    return (
        <div className="bg-white rounded-lg shadow-md w-[75%] mx-auto p-6">
            <h2 className="text-2xl font-semibold p-4 bg-gray-100 border-b text-center">Profile Preview</h2>
            <div className="p-4 overflow-y-auto max-h-[500px]">

                {/* Personal Details */}
                <Section title="Personal Details">
                    <PreviewItem label="Full Name" value={data.name} />
                    <PreviewItem label="Email" value={data.email} />
                    <PreviewItem label="Phone" value={data.phone} />
                    <PreviewItem label="Address" value={data.address} />
                </Section>

                {/* Borrower-Specific Details */}
                {data.userType === "borrower" && (
                    <>
                        <Section title="Loan Details">
                            <PreviewItem label="Loan Amount" value={data.loanAmount} />
                            <PreviewItem label="Loan Purpose" value={data.loanPurpose} />
                            <PreviewItem label="Loan Term" value={data.loanTerm} />
                        </Section>

                        <Section title="Financial Information">
                            <PreviewItem label="Annual Income" value={data.financialDetails?.annualIncome} />
                            <PreviewItem label="Credit Score" value={data.financialDetails?.creditScore} />
                        </Section>

                        <Section title="Bank Details">
                            <PreviewItem label="Account Number" value={data.bankDetails?.accountNumber} />
                            <PreviewItem label="IFSC Code" value={data.bankDetails?.ifscCode} />
                        </Section>
                    </>
                )}

                {/* Lender-Specific Details */}
                {data.userType === "lender" && (
                    <>
                        <Section title="Investment Preferences">
                            <PreviewItem label="Investment Range" value={data.investmentRange} />
                            <PreviewItem label="Risk Preference" value={data.riskPreference} />
                        </Section>

                        <Section title="Bank Details">
                            <PreviewItem label="Account Number" value={data.bankDetails?.accountNumber} />
                            <PreviewItem label="IFSC Code" value={data.bankDetails?.ifscCode} />
                        </Section>
                    </>
                )}

                {/* Documents */}
                <Section title="Documents">
                    {data.documents?.length > 0 ? (
                        data.documents.map((doc, index) => (
                            <div key={index} className="mb-2">
                                <span className="font-semibold">{doc.type}: </span>
                                <a href={doc.file} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    View Document
                                </a>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No documents uploaded</p>
                    )}
                </Section>

                {/* Security Section */}
                <Section title="Security">
                    <PreviewItem label="Password" value="******" />
                </Section>
            </div>
        </div>
    );
};

// Reusable Section Component
const Section = ({ title, children }) => (
    <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b pb-2">{title}</h3>
        {children}
    </div>
);

// Reusable Preview Item Component
const PreviewItem = ({ label, value }) => (
    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 py-2">
        <span className="font-semibold text-gray-700">{label}:</span>
        <span className="text-gray-600">{value || "N/A"}</span>
    </div>
);

export default ProfilePreview;
