import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";

const LoanAgreementReview = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const loanDetails = {
    borrower: "Amit Sharma",
    lender: "FinTrust Capital",
    amount: 50000,
    interestRate: "12% per annum",
    tenure: "24 months",
    monthlyInstallment: "₹2,500",
    latePenalty: "2% per delayed week",
    legalCompliance: "Fully RBI Compliant",
  };

  const handleAgreementAcceptance = () => {
    setIsAccepted(true);
    alert("✅ Agreement Accepted! Loan processing initiated.");
  };

  // PDF Document
  const LoanAgreementPDF = () => (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>📜 Loan Agreement</Text>
          <Text>Borrower: {loanDetails.borrower}</Text>
          <Text>Lender: {loanDetails.lender}</Text>
          <Text>Loan Amount: ₹{loanDetails.amount}</Text>
          <Text>Interest Rate: {loanDetails.interestRate}</Text>
          <Text>Tenure: {loanDetails.tenure}</Text>
          <Text>Monthly Installment: {loanDetails.monthlyInstallment}</Text>
          <Text>Late Payment Penalty: {loanDetails.latePenalty}</Text>
          <Text>Legal Compliance: {loanDetails.legalCompliance}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">📜 Loan Agreement Review</h1>

      {/* Agreement Details */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">📌 Key Agreement Terms</h2>
        <p><strong>Borrower:</strong> {loanDetails.borrower}</p>
        <p><strong>Lender:</strong> {loanDetails.lender}</p>
        <p><strong>Loan Amount:</strong> ₹{loanDetails.amount}</p>
        <p><strong>Interest Rate:</strong> {loanDetails.interestRate}</p>
        <p><strong>Tenure:</strong> {loanDetails.tenure}</p>
        <p><strong>Monthly Installment:</strong> {loanDetails.monthlyInstallment}</p>
        <p><strong>Late Payment Penalty:</strong> {loanDetails.latePenalty}</p>
        <p><strong>Legal Compliance:</strong> {loanDetails.legalCompliance}</p>
      </div>

      {/* AI Risk Analysis */}
      <div className="mt-6 bg-gray-100 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">🤖 AI Risk Analysis</h2>
        <p className="text-green-600 font-semibold">✅ Low Risk – Borrower has a credit score of 820.</p>
        <p className="text-gray-600">Likelihood of repayment: 95%</p>
      </div>

      {/* Agreement Acceptance Section */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">🖊️ Accept & Sign Agreement</h2>
        <p>By clicking "Accept Agreement," you acknowledge the loan terms and agree to legally abide by them.</p>
        
        <div className="mt-4 flex items-center">
          <Button className="bg-green-500 text-white px-6 py-2 rounded-lg mr-4" onClick={handleAgreementAcceptance}>
            ✅ Accept Agreement
          </Button>

          <PDFDownloadLink document={<LoanAgreementPDF />} fileName="Loan_Agreement.pdf">
            {({ loading }) => (
              <Button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                {loading ? "Preparing Document..." : "📄 Download Agreement"}
              </Button>
            )}
          </PDFDownloadLink>
        </div>

        {isAccepted && <p className="mt-4 text-green-600 font-semibold">✔ Agreement Accepted Successfully!</p>}
      </div>
    </div>
  );
};

// PDF Styles
const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});

export default LoanAgreementReview;
