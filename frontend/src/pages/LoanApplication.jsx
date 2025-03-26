// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import BorrowerLayout from "../components/BorrowerLayout";

// const LoanApplication = () => {
//   const [formData, setFormData] = useState({
//     loanID: "",
//     age: "",
//     income: "",
//     loanAmount: "",
//     creditScore: "",
//     monthsEmployed: "",
//     numCreditLines: "",
//     interestRate: "",
//     loanTerm: "",
//     dtiRatio: "",
//     education: "",
//     employmentType: "",
//     maritalStatus: "",
//     hasMortgage: "",
//     hasDependents: "",
//     loanPurpose: "",
//     hasCoSigner: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data: ", formData);
//     setSubmitted(true);
//   };

//   return (
//     <motion.div
//       className="container mx-auto p-6 max-w-2xl bg-white shadow-lg rounded-lg"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
//         Loan Application
//       </h2>

//       {submitted ? (
//         <div className="text-green-600 text-center font-semibold text-xl">
//           ✅ Your loan application has been submitted successfully!
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-4">

//           {/* Personal Details */}
//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Age</label>
//             <input
//               type="number"
//               name="age"
//               placeholder="Age"
//               className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Income ($)</label>
//             <input
//               type="number"
//               name="income"
//               placeholder="Income ($)"
//               className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Loan Information */}
//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Loan Amount ($)</label>
//             <input
//               type="number"
//               name="loanAmount"
//               placeholder="Loan Amount ($)"
//               className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Credit Score</label>
//             <input
//               type="number"
//               name="creditScore"
//               placeholder="Credit Score"
//               className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Employment and Financial Details */}
//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Months Employed</label>
//             <input
//               type="number"
//               name="monthsEmployed"
//               placeholder="Months Employed"
//               className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Number of Credit Lines</label>
//             <input
//               type="number"
//               name="numCreditLines"
//               placeholder="Number of Credit Lines"
//               className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Financial Details */}
//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Interest Rate (%)</label>
//             <input
//               type="number"
//               step="0.01"
//               name="interestRate"
//               placeholder="Interest Rate (%)"
//               className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Loan Term (Months)</label>
//             <input
//               type="number"
//               name="loanTerm"
//               placeholder="Loan Term (Months)"
//               className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Categorical Fields */}
//           {/* Education */}
//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Education</label>
//             <select
//               name="education"
//               onChange={handleChange}
//               required
//               className='border p-2 w-full rounded-lg'
//               >
//               <option value="" disabled selected>
//                 Select Education Level
//               </option>
//               <option value="PhD">PhD</option>
//               <option value="Master's">Master's</option>
//               <option value="Bachelor's">Bachelor's</option>
//               <option value="High School">High School</option>
//             </select>
//           </div>

//           {/* Employment Type */}
//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Employment Type</label>
//             <select
//               name="employmentType"
//               onChange={handleChange}
//               required
//               className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
//             >
//               <option value="" disabled selected>
//                 Select Employment Type
//               </option>
//               <option value="Full-time">Full-time</option>
//               <option value="Part-time">Part-time</option>
//               <option value="Self-employed">Self-employed</option>
//               <option value="Unemployed">Unemployed</option>
//             </select>
//           </div>

//           {/* Marital Status */}
//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Marital Status</label>
//             <select
//               name="maritalStatus"
//               onChange={handleChange}
//               required
//               className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
//             >
//               <option value="" disabled selected>
//                 Select Marital Status
//               </option>
//               <option value="Single">Single</option>
//               <option value="Married">Married</option>
//               <option value="Divorced">Divorced</option>
//             </select>
//           </div>

//           {/* Has Mortgage */}
//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Has Mortgage</label>
//             <select
//               name="hasMortgage"
//               onChange={handleChange}
//               required
//               className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
//             >
//               <option value="" disabled selected>
//                 Do you have a mortgage?
//               </option>
//               <option value="Yes">Yes</option>
//               <option value="No">No</option>
//             </select>
//           </div>

//           {/* Has Dependents */}
//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Has Dependents</label>
//             <select
//               name="hasDependents"
//               onChange={handleChange}
//               required
//               className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
//             >
//               <option value="" disabled selected>
//                 Do you have dependents?
//               </option>
//               <option value="Yes">Yes</option>
//               <option value="No">No</option>
//             </select>
//           </div>

//           {/* Loan Purpose */}
//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Loan Purpose</label>
//             <select
//               name="loanPurpose"
//               onChange={handleChange}
//               required
//               className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
//             >
//               <option value="" disabled selected>
//                 Select Loan Purpose
//               </option>
//               <option value="Home">Home</option>
//               <option value="Auto">Auto</option>
//               <option value="Education">Education</option>
//               <option value="Business">Business</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           {/* Has Co-Signer */}
//           <div className="flex flex-col">
//             <label className="text-gray-600 mb-2">Has Co-Signer</label>
//             <select
//               name="hasCoSigner"
//               onChange={handleChange}
//               required
//               className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
//             >
//               <option value="" disabled selected>
//                 Do you have a co-signer?
//               </option>
//               <option value="Yes">Yes</option>
//               <option value="No">No</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className={`p-3 w-full rounded-lg font-bold bg-green-500 hover:bg-green-600 text-white`}
//           >
//             Submit Application
//           </button>

//         </form>
//       )}
//     </motion.div>
//   );
// };

// export default LoanApplication;

import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const LoanApplication = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
    income: "",
    loanAmount: "",
    creditScore: "",
    monthsEmployed: "",
    numCreditLines: "",
    interestRate: "",
    dtiRatio: "",
    education: "",
    employmentType: "",
    maritalStatus: "",
    hasMortgage: "0",
    hasDependents: "0",
    loanPurpose: "",
    hasCoSigner: "0",
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Map form data to API format
  const mapFormDataToAPI = (data) => {
    return {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      age: parseInt(data.age),
      income: parseFloat(data.income),
      loanAmount: parseFloat(data.loanAmount),
      creditScore: parseInt(data.creditScore),
      monthsEmployed: parseInt(data.monthsEmployed),
      numCreditLines: parseInt(data.numCreditLines),
      interestRate: parseFloat(data.interestRate),
      dtiRatio: parseFloat(data.dtiRatio),
      education: data.education,
      employmentType: data.employmentType,
      maritalStatus: data.maritalStatus,
      hasMortgage: parseInt(data.hasMortgage),
      hasDependents: parseInt(data.hasDependents),
      loanPurpose: data.loanPurpose,
      hasCoSigner: parseInt(data.hasCoSigner),
    };
  };

  // Submit form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setPrediction(null);

    const apiData = mapFormDataToAPI(formData);
    console.log("Data sent to API:", apiData);

    try {
      const res = await axios.post("http://localhost:8000/predict-loan", apiData);

      if (res.data.error) {
        setError(res.data.error);
        setPrediction(null);
      } else {
        setPrediction(res.data.approved ? "❌ Loan Denied!" :  "✅ Loan Approved!");
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
      }
    } catch (error) {
      console.error("Error while calling API:", error);
      setError("An error occurred while processing your request.");
    }
  };

  return (
    <motion.div
      className="container mx-auto p-6 max-w-2xl bg-white shadow-lg rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Loan Application
      </h2>

      {/* Popup after submission */}
      {showPopup && (
        <motion.div
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg ${
            prediction.includes("Approved") ? "bg-green-500" : "bg-red-500"
          } text-white font-bold text-xl`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {prediction}
        </motion.div>
      )}

      {error && (
        <div className="text-red-600 text-center font-semibold text-xl mb-4">
          ❗ {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.phoneNumber}
            required
          />
        </div>

        {/* Age */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Age</label>
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.age}
            required
          />
        </div>

        {/* Income */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Income ($)</label>
          <input
            type="number"
            name="income"
            placeholder="Income ($)"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.income}
            required
          />
        </div>

        {/* Loan Amount */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Loan Amount ($)</label>
          <input
            type="number"
            name="loanAmount"
            placeholder="Loan Amount ($)"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.loanAmount}
            required
          />
        </div>

        {/* Credit Score */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Credit Score</label>
          <input
            type="number"
            name="creditScore"
            placeholder="Credit Score"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.creditScore}
            required
          />
        </div>

        {/* Months Employed */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Months Employed</label>
          <input
            type="number"
            name="monthsEmployed"
            placeholder="Months Employed"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.monthsEmployed}
            required
          />
        </div>

        {/* Number of Credit Lines */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Number of Credit Lines</label>
          <input
            type="number"
            name="numCreditLines"
            placeholder="Number of Credit Lines"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.numCreditLines}
            required
          />
        </div>

        {/* Interest Rate */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Interest Rate (%)</label>
          <input
            type="number"
            name="interestRate"
            placeholder="Interest Rate (%)"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.interestRate}
            required
          />
        </div>

        {/* DTI Ratio */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">DTI Ratio</label>
          <input
            type="number"
            step="0.01"
            name="dtiRatio"
            placeholder="DTI Ratio"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.dtiRatio}
            required
          />
        </div>

        {/* Loan Purpose */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Loan Purpose</label>
          <input
            type="text"
            name="loanPurpose"
            placeholder="Loan Purpose"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.loanPurpose}
            required
          />

           {/* Categorical Details */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Education</label>
          <select
            name="education"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.education}
            required
          >
            <option value="">Select</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Employment Type</label>
          <select
            name="employmentType"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.employmentType}
            required
          >
            <option value="">Select</option>
            <option value="Salaried">Salaried</option>
            <option value="SelfEmployed">Self Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Marital Status</label>
          <select
            name="maritalStatus"
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            onChange={handleChange}
            value={formData.maritalStatus}
            required
          >
            <option value="">Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>

        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 text-white p-3 w-full rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Submit Application
        </button>
      </form>
    </motion.div>
  );
};

export default LoanApplication;