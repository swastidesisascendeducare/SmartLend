import BorrowerDisplayProfile from "../components/profile/BorrowerDisplayProfile";
import BorrowerLayout from "../components/BorrowerLayout";

const BorrowerProfile = () => {
    const borrowerData = {
        profilePicture: "https://via.placeholder.com/150",  // Replace with actual profile image URL
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



//////////////////INTEGRATION ONE//////////////GIVING ERROR////////////////////////////////


// import { useEffect, useState } from 'react';
// import BorrowerDisplayProfile from '../components/profile/BorrowerDisplayProfile';
// import BorrowerLayout from '../components/BorrowerLayout';
// import axios from 'axios';

// const BorrowerProfile = ({ userId }) => {
//   const [borrowerData, setBorrowerData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchBorrowerData = async () => {
//       if (!userId) {
//         console.error('🚨 No user ID found in BorrowerProfile');
//         setIsLoading(false);
//         return;
//       }

//       try {
//         console.log(`🔍 Fetching data for userId: ${userId}`);
//         const response = await axios.get(`/api/borrower/${userId}`);
//         setBorrowerData(response.data);
//       } catch (error) {
//         console.error('❌ Failed to fetch borrower data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchBorrowerData();
//   }, [userId]);

//   return (
//     <BorrowerLayout>
//       {isLoading ? (
//         <div>Loading profile...</div>
//       ) : borrowerData ? (
//         <BorrowerDisplayProfile borrowerData={borrowerData} isLoading={false} userType="borrower" />
//       ) : (
//         <div>No borrower data found.</div>
//       )}
//     </BorrowerLayout>
//   );
// };

// export default BorrowerProfile;
