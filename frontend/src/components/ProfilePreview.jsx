import React from "react";

const ProfilePreview = ({ data }) => {
    if (!data) {
        return <div className="p-6 bg-white rounded-lg shadow-md text-center">Loading...</div>;
    }

    return (
        <div className="bg-white rounded-lg shadow-md h-full overflow-hidden">
            <h2 className="text-2xl font-semibold p-4 bg-gray-100 border-b">Profile Preview</h2>
            <div className="p-4 overflow-y-auto" style={{height: 'calc(100% - 60px)'}}>
                <PreviewItem label="Full Name" value={data.fullName} />
                <PreviewItem label="Email" value={data.email} />
                <PreviewItem label="Phone" value={data.phone} />
                <PreviewItem label="Address" value={data.address} />
                
                {data.userType === "borrower" && (
                    <>
                        <PreviewItem label="Income" value={data.income} />
                        <PreviewItem label="Loan Purpose" value={data.loanPurpose} />
                    </>
                )}
                
                {data.userType === "lender" && (
                    <>
                        <PreviewItem label="Investment Range" value={data.investmentRange} />
                        <PreviewItem label="Risk Preference" value={data.riskPreference} />
                    </>
                )}
            </div>
        </div>
    );
};

const PreviewItem = ({ label, value }) => (
    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 py-2">
        <span className="font-semibold text-gray-700">{label}:</span>
        <span className="text-gray-600">{value || "N/A"}</span>
    </div>
);

export default ProfilePreview;
