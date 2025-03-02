import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import BorrowerDashboard from "./components/BorrowerDashboard";
import LoanApplicationPage from "./pages/LoanApplication";
import PublicNavbar from "./components/PublicNavbar"; // General navbar
import BorrowerNavbar from "./components/BorrowerNavbar"; // Borrower-specific navbar
import Footer from "./components/Footer"; // Footer for all pages

const App = () => {
  const [user, setUser] = useState(null); // Authentication state

  return (
    <Router>
      {/* Dynamic Navbar: Public for general users, Borrower for logged-in users */}
      {user ? <BorrowerNavbar /> : <PublicNavbar />}
      
      <div className="content-wrapper"> {/* Wrapper for layout consistency */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signuppage" element={<SignupPage />} />
          <Route path="/loginpage" element={<LoginPage setUser={setUser} />} />
          
          {/* Borrower Dashboard (Protected Route - Authentication Bypassed for Now) */}
          <Route path="/borrower-dashboard" element={<BorrowerDashboard />} />

          {/* Loan Application Page (Protected Route - Authentication Bypassed for Now) */}
          <Route path="/loan-application" element={<LoanApplicationPage />} />
          
          {/* Uncomment this when authentication is ready */}
          {/**
          <Route path="/borrower-dashboard" 
            element={user ? <BorrowerDashboard /> : <Navigate to="/loginpage" />} />

          <Route path="/loan-application" 
            element={user ? <LoanApplicationPage /> : <Navigate to="/loginpage" />} />
          */}
        </Routes>
      </div>
      
      {/* Footer across all pages */}
      <Footer />
    </Router>
  );
};

export default App;
