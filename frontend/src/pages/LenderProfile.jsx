import LenderDisplayProfile from "../components/profile/LenderDisplayProfile";

const LenderProfile = () => {
    const lenderData = {
        profilePicture: "https://via.placeholder.com/150",
        name: "John Doe",
        email: "john@example.com",
        phone: "+91 9876543210",
        address: "Mumbai, India",
        investmentAmount: "₹5,00,000 - ₹10,00,000",
        loanType: "Long-term",
        riskPreference: "Medium",
        bankDetails: {
            accountNumber: "XXXX-XXXX-XXXX-1234",
            ifscCode: "HDFC0001234",
        },
        documents: [
            { type: "Aadhar Card", file: "https://example.com/aadhar.pdf" },
            { type: "PAN Card", file: "https://example.com/pan.pdf" },
        ],
    };

    return <LenderDisplayProfile lenderData={lenderData} isLoading={false} userType = 'lender'/>;
};

export default LenderProfile;
