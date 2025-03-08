import React, { useState } from "react";

const LoanAgreementPage = () => {
  const [agreed, setAgreed] = useState(false);
  const [signature, setSignature] = useState("");
  const [isSigned, setIsSigned] = useState(false);

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

  const handleDownload = () => {
    const element = document.createElement("a");
    const fileContent = `
      Loan Agreement Details
      ----------------------
      Loan Amount: $10,000
      Interest Rate: 5% per annum
      Term: 24 months
      Monthly Payment: $440
      ----------------------
      Agreement Signed By: ${signature}
    `;
    const file = new Blob([fileContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "Loan_Agreement.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
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
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default LoanAgreementPage;
