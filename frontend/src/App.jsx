import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import BorrowerDashboard from "./components/BorrowerDashboard";
import BorrowerNavbar from "./components/BorrowerNavbar"; // New Navbar for Borrowers
import PublicNavbar from "./components/PublicNavbar"; // Navbar for non-logged-in users
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

const App = () => {
  const [user, setUser] = useState(null); // Authentication state

  return (
    <Router>
      {user ? <BorrowerNavbar /> : <PublicNavbar />} {/* Dynamic Navbar */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signuppage" element={<SignupPage />} />
        <Route path="/loginpage" element={<LoginPage setUser={setUser} />} />
        
         <Route
        //  path="/dashboard"
        //  element={user ? <BorrowerDashboard /> : <Navigate to="/loginpage" />} // Protect Dashboard
        ///>
        
        path="/borrower-dashboard" element={<BorrowerDashboard />} />
        <Route path="/transaction-history" element={<TransactionHistory userRole="lender" />} />
        <Route path="/notifications" element={<NotificationsPage userRole="lender" />} />

        <Route
          path="/loan-application"
          element={user ? <LoanApplicationPage /> : <Navigate to="/loginpage" />} // Protect Loan Application Page
        />

        <Route path="/profile/borrower" element={<BorrowerProfile />} />
        <Route path="/profile/lender" element={<LenderProfile />} />

        <Route path="/profile/borrower/edit" element={<BorrowerEditProfile />} />
        <Route path="/profile/lender/edit" element={<LenderEditProfile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
};

export default App;
