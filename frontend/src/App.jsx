import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import BorrowerDashboard from "./components/BorrowerDashboard";
import BorrowerNavbar from "./components/BorrowerNavbar"; // New Navbar for Borrowers
import PublicNavbar from "./components/PublicNavbar"; // Navbar for non-logged-in users
import LoanApplicationPage from "./pages/LoanApplication";

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

        <Route
          path="/loan-application"
          element={user ? <LoanApplicationPage /> : <Navigate to="/loginpage" />} // Protect Loan Application Page
        />
      </Routes>
    </Router>
  );
};

export default App;
