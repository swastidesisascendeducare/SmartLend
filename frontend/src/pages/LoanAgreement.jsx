import React, { useState } from "react";

const LoanAgreementPage = () => {
  const [agreed, setAgreed] = useState(false);
  const [signature, setSignature] = useState("");

  const handleSignAgreement = () => {
    if (!agreed) {
      alert("Please agree to the terms before signing.");
      return;
    }
    if (!signature.trim()) {
      alert("Please provide your signature before signing.");
      return;
    }
    alert("Loan Agreement Signed Successfully!");
  };

  const handleDownload = () => {
    alert("Loan Agreement PDF Downloaded! (Mock Functionality)");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
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
        <p><strong>Loan Amount:</strong> $10,000</p>
        <p><strong>Interest Rate:</strong> 5% per annum</p>
        <p><strong>Term:</strong> 24 months</p>
        <p><strong>Monthly Payment:</strong> $440</p>
      </div>

      {/* Agreement Terms */}
      <div className="mt-6 border p-6 rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">
          Agreement Terms
        </h2>
        <p className="text-gray-700">
          By signing this agreement, you acknowledge that you have read and
          understood the terms and conditions of the loan.
        </p>
        <textarea
          className="w-full border p-3 mt-3 rounded-lg resize-none"
          rows="4"
          placeholder="Add any comments or modifications..."
        ></textarea>
      </div>

      {/* Checkbox for Agreement Confirmation */}
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          className="mr-2 h-5 w-5"
        />
        <label className="text-gray-700 text-sm">
          I agree to the terms and conditions of this loan agreement.
        </label>
      </div>

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
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default LoanAgreementPage;
