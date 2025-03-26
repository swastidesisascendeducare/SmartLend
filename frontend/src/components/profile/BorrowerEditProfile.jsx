import ProfileForm from "../ProfileForm";

const BorrowerEditProfile = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Borrower Profile</h1>
            <ProfileForm userType="borrower" />
        </div>
    );
};

export default BorrowerEditProfile;


// import { useParams } from "react-router-dom";
// import ProfileForm from "../ProfileForm";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const BorrowerEditProfile = () => {
//     const { id } = useParams(); // ✅ Get borrower ID from route params
//     const [borrowerData, setBorrowerData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // ✅ Fetch borrower data for editing
//     useEffect(() => {
//         const fetchBorrowerData = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get(`/api/borrowers/${id}`); // ✅ Updated API route
//                 setBorrowerData(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Failed to fetch borrower data:", error);
//                 setError("Failed to load borrower data");
//                 setLoading(false);
//             }
//         };

//         fetchBorrowerData();
//     }, [id]);

//     // ✅ Loading and Error States
//     if (loading) return <div className="text-center text-gray-500">Loading borrower data...</div>;
//     if (error) return <div className="text-center text-red-500">{error}</div>;

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold mb-4">Edit Borrower Profile</h1>
//             <ProfileForm borrowerId={id} initialData={borrowerData} userType="borrower" />
//         </div>
//     );
// };

// export default BorrowerEditProfile;
