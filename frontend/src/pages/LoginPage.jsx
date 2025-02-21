import React from "react";
import { useNavigate } from "react-router-dom";
import BackgroundAnimation from "../components/Background-Animation";
import LoginForm from "../components/LoginForm";
import { ArrowLeft as Home } from "lucide-react"; // Importing Home Icon
import { Link } from "react-router-dom";
import logo from "../assets/SmartLendLogo6.png"

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/dashboard");
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center px-6">
      <BackgroundAnimation />

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md relative">

        {/* Home Icon (Top Left) */}
        <button 
            onClick={() => navigate("/")} 
            className="absolute top-4 left-4 text-gray-600 hover:text-primary transition"
        >
            <Home size={28} />
        </button>

        <div className="flex justify-center mb-4">
            <img src={logo} alt="SmartLend Logo" className="h-14" />
        </div>

        <LoginForm onLogin={handleLoginSuccess} />

        <div className="mt-4 text-center text-gray-600">
          <p className="text-sm">
            Forgot your password?{" "}
            <span className="text-primary cursor-pointer">Reset here</span>
          </p>
          <p className="text-sm mt-2">
            Don't have an account?{" "}
            <Link to="/signuppage" className="text-primary cursor-pointer">
                Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
