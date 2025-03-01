import React from "react";

const LoanAgreementPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Loan Agreement</h1>
      <p className="mb-4">Review and sign your loan agreement below:</p>
      
      <div className="border p-4 rounded shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-2">Loan Agreement Details</h2>
        <p><strong>Loan Amount:</strong> $10,000</p>
        <p><strong>Interest Rate:</strong> 5% per annum</p>
        <p><strong>Term:</strong> 24 months</p>
        <p><strong>Monthly Payment:</strong> $440</p>
      </div>
      
      <div className="mt-6 border p-4 rounded shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-2">Agreement Terms</h2>
        <p>By signing this agreement, you acknowledge that you have read and understood the terms and conditions of the loan.</p>
        <textarea
          className="w-full border p-2 mt-2 rounded"
          rows="5"
          placeholder="Add any comments or modifications..."
        ></textarea>
      </div>
      
      <div className="mt-6 flex justify-between">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Agreement</button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Download PDF</button>
      </div>
    </div>
  );
};

export default LoanAgreementPage;
