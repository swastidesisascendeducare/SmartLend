import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundAnimation from "../components/Background-Animation";
import LoginForm from "../components/LoginForm";
import { ArrowLeft as Home } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/SmartLendLogo6.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500); // Simulating network delay
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center px-6 bg-gray-100">
      <BackgroundAnimation />

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative transition-all duration-300">
        {/* Home Button */}
        <button 
          onClick={() => navigate("/")} 
          className="absolute top-4 left-4 text-gray-600 hover:text-primary transition"
          aria-label="Go to Home"
        >
          <Home size={28} />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="SmartLend Logo" className="h-16 object-contain" />
        </div>

        {/* Login Form */}
        <LoginForm onLogin={handleLoginSuccess} isLoading={isLoading} />

        {/* Additional Links */}
        <div className="mt-4 text-center text-gray-600">
          <p className="text-sm">
            Forgot your password? 
            <Link to="/reset-password" className="text-primary hover:underline ml-1">
              Reset here
            </Link>
          </p>
          <p className="text-sm mt-2">
            Don't have an account?
            <Link to="/signuppage" className="text-primary hover:underline ml-1">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
