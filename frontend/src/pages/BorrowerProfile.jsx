import BorrowerDisplayProfile from "../components/profile/BorrowerDisplayProfile";
import BorrowerLayout from "../components/BorrowerLayout";

const BorrowerProfile = () => {
    const borrowerData = {
        profilePicture: "https://via.placeholder.com/150",
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+91 8765432190",
        address: "Delhi, India",
        loanAmount: "₹2,00,000",
        loanPurpose: "Education",
        loanTerm: "36 months",
        annualIncome: "₹6,00,000",
        creditScore: "720",
        bankDetails: {
            accountNumber: "YYYY-YYYY-YYYY-5678",
            ifscCode: "ICIC0005678",
        },
        documents: [
            { type: "Aadhar Card", file: "https://example.com/aadhar.pdf" },
            { type: "PAN Card", file: "https://example.com/pan.pdf" },
            { type: "Salary Slips", file: "https://example.com/salary_slips.pdf" },
        ],
    };

    return <BorrowerDisplayProfile borrowerData={borrowerData} isLoading={false} userType = 'borrower'/>;
};

export default BorrowerProfile;
