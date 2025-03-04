import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import BorrowerDashboard from "./components/BorrowerDashboard";
import LoanApplicationPage from "./pages/LoanApplication";
import PublicNavbar from "./components/PublicNavbar";
import BorrowerNavbar from "./components/BorrowerNavbar";
import LoanStatusPage from "./pages/LoanApprovalStatus";
import LoanAgreementPage from "./pages/LoanAgreement";
import RepaymentTrackingPage from "./pages/RepaymentTracking";
import LenderDashboard from "./pages/lender/LenderDashboard"
import LoanMatchingFunding from "./pages/lender/LoanMatchingFunding"
import CollaborativeLoanFunding from "./pages/lender/CollaborativeLoanFunding"
import InvestmentPortfolio from "./pages/lender/InvestmentPortfolio"
import LoanAgreementReview from "./pages/lender/LoanAgreementReview"
import Footer from "./components/Footer";


const App = () => {
  const [user, setUser] = useState(null); // Authentication state

  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Ensures full height */}
        
        {/* Navbar at the top */}
        {user ? <BorrowerNavbar /> : <PublicNavbar />}
        
        {/* Main Content Wrapper (pushes footer down) */}
        <div className="flex-grow pt-16"> {/* Adjust pt-16 based on navbar height */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signuppage" element={<SignupPage />} />
            <Route path="/loginpage" element={<LoginPage setUser={setUser} />} />
            
            {/* Borrower Dashboard (Protected Route - Authentication Bypassed for Now) */}
            <Route path="/borrower-dashboard" element={<BorrowerDashboard />} />

            {/* Loan Application Page */}
            <Route path="/loan-application" element={<LoanApplicationPage />} />

            {/* Loan-related pages */}
            <Route path="/loan-approval-status" element={<LoanStatusPage />} />
            <Route path="/loan-agreement" element={<LoanAgreementPage />} />
            <Route path="/repayment-tracking" element={<RepaymentTrackingPage />} />

            <Route path="/lender/lender-dashboard" element={<LenderDashboard />} />
            <Route path="/lender/loan-matching-funding" element={<LoanMatchingFunding />} />
            <Route path="/lender/collaborative-loan-funding" element={<CollaborativeLoanFunding />} />
            <Route path="/lender/investment-portfolio" element={<InvestmentPortfolio />} />
            <Route path="/lender/loan-agreement-review" element={<LoanAgreementReview />} />
          </Routes>
        </div>

        {/* Footer always at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
