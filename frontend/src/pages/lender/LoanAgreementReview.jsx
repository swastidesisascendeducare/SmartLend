import React, { useState, useEffect, useRef, useCallback } from "react";
import BorrowerLayout from "../../components/BorrowerLayout";
import axios from "axios";

const LoanAgreementPage = () => {
  const [agreed, setAgreed] = useState(false);
  const [signature, setSignature] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  const [agreement, setAgreement] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const hasFetched = useRef(false);

  const sendUserRole = useCallback(async () => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    try {
      console.log("Fetching the agreement...");
      const response = await axios.post(
        "http://localhost:5001/api/ai/agreement"
      );
      setAgreement(response.data.generatedAgreement);
      console.log("Agreement Fetched:", response.data.generatedAgreement);
    } catch (error) {
      console.error("Error:", error);
      setFetchError("Failed to load the loan agreement. Please try again.");
    }
  }, []);

  useEffect(() => {
    sendUserRole();
  }, [sendUserRole]);

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
      Loan Agreement
      ----------------------
      ${agreement}
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
    <BorrowerLayout>
      <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Loan Agreement</h2>

        {fetchError ? (
          <p className="text-red-500">{fetchError}</p>
        ) : (
          <pre className="bg-gray-100 p-4 mb-4 overflow-auto whitespace-pre-wrap">
            {agreement || "Loading agreement..."}
          </pre>
        )}

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="mr-2"
          />
          <label htmlFor="agree" className="text-sm">
            I agree to the terms and conditions.
          </label>
        </div>

        <input
          type="text"
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
          placeholder="Enter your signature"
          className="w-full p-2 border rounded mb-4"
        />

        {!isSigned ? (
          <button
            onClick={handleSignAgreement}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign Agreement
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={handleDownload}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Download Agreement
            </button>
            <p className="text-green-500">Agreement signed successfully!</p>
          </div>
        )}
      </div>
    </BorrowerLayout>
  );
};

export default LoanAgreementPage;
