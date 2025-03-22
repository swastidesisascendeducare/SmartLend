import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import BorrowerDashboard from "./components/BorrowerDashboard";
import LoanApplicationPage from "./pages/LoanApplication";
import BorrowerEditProfile from "./components/profile/BorrowerEditProfile";
import LenderEditProfile from "./components/profile/LenderEditProfile";
import LenderProfile from "./pages/LenderProfile";
import BorrowerProfile from "./pages/BorrowerProfile";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import TransactionHistory from "./pages/TransactionHistory";
import NotificationsPage from "./pages/NotificationsPage";
import LoanStatusPage from "./pages/LoanApprovalStatus";
import LoanAgreementPage from "./pages/LoanAgreement";
import RepaymentTrackingPage from "./pages/RepaymentTracking";
import OCR from "./pages/OCR";
import LenderDashboard from "./pages/lender/LenderDashboard";
import LoanMatchingFunding from "./pages/lender/LoanMatchingFunding";
import CollaborativeLoanFunding from "./pages/lender/CollaborativeLoanFunding";
import InvestmentPortfolio from "./pages/lender/InvestmentPortfolio";
import LoanAgreementReview from "./pages/lender/LoanAgreementReview";
import PublicNavbar from "./components/PublicNavbar";
import BorrowerNavbar from "./components/BorrowerNavbar";
import LenderNavbar from "./components/LenderNavbar";
import Footer from "./components/Footer";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Dynamic Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          {user ? (user.role === "lender" ? <LenderNavbar /> : <BorrowerNavbar />) : <PublicNavbar />}
        </div>

        {/* Main Content */}
        <div className="flex-grow pt-16">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signuppage" element={<SignupPage />} />
            <Route path="/loginpage" element={<LoginPage setUser={setUser} />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

            {/* Protected Borrower Routes */}
            {user?.role === "borrower" && (
              <>
                <Route path="/dashboard" element={<BorrowerDashboard />} />
                <Route path="/loan-application" element={<LoanApplicationPage />} />
                <Route path="/loan-status" element={<LoanStatusPage />} />
                <Route path="/loan-agreement" element={<LoanAgreementPage />} />
                <Route path="/repayment-tracking" element={<RepaymentTrackingPage />} />
                <Route path="/borrower-profile" element={<BorrowerProfile />} />
                <Route path="/borrower-profile/edit" element={<BorrowerEditProfile />} />
                <Route path="/ocr-upload" element={<OCR />} /> {/* Added OCR Route */}                 
              </>
            )}

            {/* Protected Lender Routes */}
            {user?.role === "lender" && (
              <>
                <Route path="/lender-dashboard" element={<LenderDashboard />} />
                <Route path="/loan-matching-funding" element={<LoanMatchingFunding />} />
                <Route path="/collaborative-loan-funding" element={<CollaborativeLoanFunding />} />
                <Route path="/investment-portfolio" element={<InvestmentPortfolio />} />
                <Route path="/loan-agreement-review" element={<LoanAgreementReview />} />
                <Route path="/lender-profile" element={<LenderProfile />} />
                <Route path="/lender-profile/edit" element={<LenderEditProfile />} />
              </>
            )}

            {/* Common Protected Routes */}
            {user && (
              <>
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/transaction-history" element={<TransactionHistory userRole={user.role} />} />
                <Route path="/notifications" element={<NotificationsPage userType={user.role} />} />
              </>
            )}

            {/* Redirects */}
            <Route path="*" element={<Navigate to={user ? (user.role === "lender" ? "/lender-dashboard" : "/dashboard") : "/loginpage"} />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer className="mt-auto" />
      </div>
    </Router>
  );
};

export default App;
