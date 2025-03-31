// import React, { useState,useEffect,useRef } from "react";
// import BorrowerLayout from "../components/BorrowerLayout";
// import axios from 'axios';
// const LoanAgreementPage = () => {
//   const [agreed, setAgreed] = useState(false);
//   const [signature, setSignature] = useState("");
//   const [isSigned, setIsSigned] = useState(false);
//   const [agreement, setAgreement ] = useState('');
//   const hasFetched = useRef(false);
  
//   useEffect(() => {
//     const sendUserRole = async () => {
//       if (hasFetched.current) return; // Prevent duplicate calls
//       hasFetched.current = true;

//       try {
//         console.log("Fetching the agreement...");
//         const response = await axios.post("http://localhost:5001/api/ai/agreement");
//         setAgreement(response.data.generatedAgreement);
//         console.log("Response:", response.data);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     sendUserRole();
//   }, []);

//   const handleSignAgreement = () => {
//     if (!agreed) {
//       alert("Please agree to the terms before signing.");
//       return;
//     }
//     if (!signature.trim()) {
//       alert("Please provide your signature before signing.");
//       return;
//     }
//     setIsSigned(true);
//   };

//   const handleDownload = () => {
//     const element = document.createElement("a");
//     const fileContent = `
//       Loan Agreement Details
//       ----------------------
//       Loan Amount: $10,000
//       Interest Rate: 5% per annum
//       Term: 24 months
//       Monthly Payment: $440
//       ----------------------
//       Agreement Signed By: ${signature}
//     `;
//     const file = new Blob([fileContent], { type: "text/plain" });
//     element.href = URL.createObjectURL(file);
//     element.download = "Loan_Agreement.txt";
//     document.body.appendChild(element);
//     element.click();
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-8 bg-gray-100 min-h-screen shadow-lg rounded-lg">
//       <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
//         Loan Agreement
//       </h1>

//       <p className="text-gray-700 text-center mb-4">
//         Review and sign your loan agreement below.
//       </p>

//       {/* Loan Details Section */}
//       <div className="border p-6 rounded-lg shadow-md bg-white">
//         <h2 className="text-xl font-semibold mb-3 text-gray-800">
//           Loan Agreement Details
//         </h2>
//         <p><strong>Loan Amount:</strong> $10,000</p>
//         <p><strong>Interest Rate:</strong> 5% per annum</p>
//         <p><strong>Term:</strong> 24 months</p>
//         <p><strong>Monthly Payment:</strong> $440</p>
//       </div>

//       {/* Agreement Terms */}
//       <div className="mt-6 border p-6 rounded-lg shadow-md bg-white">
//         <h2 className="text-xl font-semibold mb-3 text-gray-800">
//           Agreement Terms
//         </h2>
//         <p className="text-gray-700">
//           By signing this agreement, you acknowledge that you have read and
//           understood the terms and conditions of the loan.
//           <pre className="whitespace-pre-wrap p-4 border rounded bg-gray-100 text-gray-800">
//           {agreement}
//         </pre>
//         </p>
//         {/* <textarea
//           className="w-full h-auto border p-3 mt-3 rounded-lg resize-none"
//           rows="4"
//           placeholder="Add any comments or modifications..."
//           readOnly
//           value={agreement}
//         /> */}
//       </div>

//       {/* Checkbox for Agreement Confirmation */}
//       <label className="flex items-center mt-4 cursor-pointer">
//         <input
//           type="checkbox"
//           checked={agreed}
//           onChange={() => setAgreed(!agreed)}
//           className="mr-2 h-5 w-5"
//         />
//         <span className="text-gray-700 text-sm">
//           I agree to the terms and conditions of this loan agreement.
//         </span>
//       </label>

//       {/* Signature Input */}
//       <div className="mt-4">
//         <label className="text-gray-800 font-medium block mb-2">
//           Digital Signature:
//         </label>
//         <input
//           type="text"
//           value={signature}
//           onChange={(e) => setSignature(e.target.value)}
//           className="w-full border p-3 rounded-lg"
//           placeholder="Enter your full name as a signature"
//         />
//       </div>

//       {/* Success Message */}
//       {isSigned && (
//         <p className="text-green-600 mt-4 font-semibold">
//           ✅ Loan Agreement Signed Successfully!
//         </p>
//       )}

//       {/* Buttons */}
//       <div className="mt-6 flex justify-between">
//         <button
//           onClick={handleSignAgreement}
//           className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
//         >
//           Sign Agreement
//         </button>
//         <button
//           onClick={handleDownload}
//           className="bg-gray-600 text-white px-5 py-3 rounded-lg hover:bg-gray-700 transition"
//         >
//           Download PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoanAgreementPage;


import React, { useState, useEffect, useRef, useCallback } from "react";
import BorrowerLayout from "../components/BorrowerLayout";
import axios from 'axios';

const LoanAgreementPage = () => {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const [selectedConditions, setSelectedConditions] = useState({ flexibleRepayment: false, earlyPayment: false, penalty: true });
    const [agreed, setAgreed] = useState(false);
    const [signature, setSignature] = useState("");
    const [isSigned, setIsSigned] = useState(false);
    const [agreement, setAgreement] = useState('');
    const [fetchError, setFetchError] = useState(null);
    const hasFetched = useRef(false);
    const [loan, setLoan] = useState(null);
    const [lender, setLender] = useState(null);
    const [borrower, setBorrower] = useState(null);

    const sendUserRole = useCallback(async () => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        setLoading(true); 

        try {
            console.log("Fetching the agreement...");
            const response = await axios.post("http://localhost:5001/api/ai/agreement", {
              conditions: selectedConditions, 
            });
            setAgreement(response.data.generatedAgreement);
            setLoan(response.data.loan);
            setLender(response.data.lender);
            setBorrower(response.data.borrower);
            let agreementString = response.data.generatedAgreement;

            // 1. Remove surrounding backticks and "json" and surrounding curly braces
            agreementString = agreementString.replace(/^``````$/, '').trim();
            agreementString = agreementString.replace(/^\{/, '').replace(/\}$/, '').trim();

            // 2. Remove the "agreement" key and surrounding quotes
            agreementString = agreementString.replace(/^\s*"agreement":\s*"/, '').replace(/"\s*$/, '').trim();

            // 3. Unescape escaped characters
            agreementString = agreementString.replace(/\\n/g, '\n').replace(/\\"/g, '"');

            // 4. Setting the agreement
            setAgreement(agreementString);

            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error);
            setFetchError("Failed to load the loan agreement. Please try again.");
        } finally {
          setLoading(false);  // Hide loading modal
      }
    }, [selectedConditions]);

    useEffect(() => {
      if (!showModal) sendUserRole();
    }, [showModal, sendUserRole]);

    const handleSignAgreement = () => {
        if (!agreed) {
            alert("Please agree to the terms before signing.");
            return;
        }
        if (!signature.trim()) {
            alert("Please provide your signature before signing.");
            return;
        }
        setIsSigned(true);
    };

    const formatText = (text) => {
      const parts = text.split(/(\*\*[\w\s.,]+?\*\*)/g);
  
      return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const cleanPart = part.slice(2, -2);
          return <strong key={index}>{cleanPart}</strong>;
        } else {
          return part;
        }
      });
    };

    const handleDownload = () => {
        const element = document.createElement("a");
        const fileContent = `  
        Loan Agreement Details  
        ----------------------  
        Loan Amount: ₹${loan?.amountRequested || "N/A"}  
        Interest Rate: ${loan?.interestRate || "N/A"}% per annum  
        Term: ${loan?.loanTerm || "N/A"} months (${(loan?.loanTerm / 12)?.toFixed(1) || "N/A"} years)  
        Monthly Payment: ₹${((loan?.amountRequested * (loan?.interestRate / 100)) / loan?.loanTerm)?.toFixed(2) || "N/A"}  
        ----------------------  
        Agreement:  
        ${agreement}  
        ----------------------  
        Agreement Signed By: ${signature || "Not Signed"}  
        `;
        const file = new Blob([fileContent], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "Loan_Agreement.txt";
        document.body.appendChild(element);
        element.click();
    };

  return (
    <BorrowerLayout>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">Lender Conditions</h2>
                <p className="text-gray-700 mb-3">Select any additional conditions for the agreement.</p>

                <label className="flex items-center mb-2">
                    <input type="checkbox" checked={selectedConditions.flexibleRepayment} 
                        onChange={() => setSelectedConditions({ ...selectedConditions, flexibleRepayment: !selectedConditions.flexibleRepayment })} 
                        className="mr-2" />
                    Flexible Repayment Option
                </label>

                <label className="flex flex-col mb-2">
                    <div className="flex items-center">
                        <input type="checkbox" checked={selectedConditions.earlyPayment} 
                            onChange={() => setSelectedConditions({ ...selectedConditions, earlyPayment: !selectedConditions.earlyPayment })} 
                            className="mr-2" />
                        Allow Early Loan Payment
                    </div>
                    {selectedConditions.earlyPayment && (
                        <input type="number" min="1" max="100" 
                            value={selectedConditions.earlyPaymentDays || ''} 
                            onChange={(e) => setSelectedConditions({ ...selectedConditions, earlyPaymentDays: e.target.value })} 
                            placeholder="Enter days before due date" 
                            className="border rounded p-2 mt-2 text-sm w-full" />
                    )}
                </label>

                <label className="flex flex-col mb-2">
                    <div className="flex items-center">
                        <input type="checkbox" checked={selectedConditions.penalty} 
                            onChange={() => setSelectedConditions({ ...selectedConditions, penalty: !selectedConditions.penalty })} 
                            className="mr-2" />
                        Late Payment Penalty
                    </div>
                    {selectedConditions.penalty && (
                        <input type="number" min="0" max="5" step="0.1" 
                            value={selectedConditions.penaltyPercent || ''} 
                            onChange={(e) => setSelectedConditions({ ...selectedConditions, penaltyPercent: e.target.value })} 
                            placeholder="Penalty % (e.g., 2.5%)" 
                            className="border rounded p-2 mt-2 text-sm w-full" />
                    )}
                </label>

                <label className="flex flex-col mb-2">
                    <div className="flex items-center">
                        <input type="checkbox" checked={selectedConditions.autoDebit} 
                            onChange={() => setSelectedConditions({ ...selectedConditions, autoDebit: !selectedConditions.autoDebit })} 
                            className="mr-2" />
                        Auto-Debit for Repayments
                    </div>
                    {selectedConditions.autoDebit && (
                        <select value={selectedConditions.autoDebitFrequency || ''} 
                            onChange={(e) => setSelectedConditions({ ...selectedConditions, autoDebitFrequency: e.target.value })} 
                            className="border rounded p-2 mt-2 text-sm w-full">
                            <option value="" disabled>Select frequency</option>
                            <option value="monthly">Monthly</option>
                            <option value="bi-weekly">Bi-Weekly</option>
                            <option value="weekly">Weekly</option>
                        </select>
                    )}
                </label>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4" 
                    onClick={() => setShowModal(false)}>
                    Confirm
                </button>
            </div>
        </div>
    )}
    {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-sm z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                <p className="text-gray-700 mt-3">Fetching details and preparing your agreement...</p>
            </div>
        </div>
    )}
      <div className="max-w-2xl mx-auto p-8 bg-gray-100 min-h-screen shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Loan Agreement
        </h1>

        <p className="text-gray-700 text-center mb-4">
          Review and sign your loan agreement below.
        </p>

        {/* Loan Details Section */}
        <div className="border p-6 rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Loan Agreement Details
          </h2>
          <p>
            <strong>Loan Amount:</strong> ₹{loan?.amountRequested || "N/A"}
          </p>
          <p>
            <strong>Interest Rate:</strong> {loan?.interestRate || "N/A"}% per annum
          </p>
          <p>
            <strong>Term:</strong> {loan?.loanTerm || "N/A"} months ({(loan?.loanTerm / 12)?.toFixed(1) || "N/A"} years)
          </p>
          <p>
            <strong>Monthly Payment:</strong> ₹{((loan?.amountRequested * (loan?.interestRate / 100)) / loan?.loanTerm)?.toFixed(2) || "N/A"}
          </p>
        </div>


        {/* Agreement Terms */}
        <div className="mt-6 border p-6 rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Agreement Terms
          </h2>
          {fetchError && <p className="text-red-500">{fetchError}</p>}
          <p className="text-gray-700">
            By signing this agreement, you acknowledge that you have read and
            understood the terms and conditions of the loan.
            <pre className="whitespace-pre-wrap p-4 border rounded bg-gray-100 text-gray-800">
              {formatText(agreement)}
            </pre>
          </p>
        </div>

        {/* Checkbox for Agreement Confirmation */}
        <label className="flex items-center mt-4 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="mr-2 h-5 w-5"
          />
          <span className="text-gray-700 text-sm">
            I agree to the terms and conditions of this loan agreement.
          </span>
        </label>

        {/* Signature Input */}
        <div className="mt-4">
          <label className="text-gray-800 font-medium block mb-2">
            Digital Signature:
          </label>
          <input
            type="text"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            className="w-full border p-3 rounded-lg"
            placeholder="Enter your full name as a signature"
          />
        </div>

        {/* Success Message */}
        {isSigned && (
          <p className="text-green-600 mt-4 font-semibold">
            ✅ Loan Agreement Signed Successfully!
          </p>
        )}

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handleSignAgreement}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Agreement
          </button>
          <button
            onClick={handleDownload}
            className="bg-gray-600 text-white px-5 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            Download Text
          </button>
        </div>
      </div>
    </BorrowerLayout>
  );
};

export default LoanAgreementPage;