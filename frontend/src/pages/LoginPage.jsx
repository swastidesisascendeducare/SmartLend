import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { ArrowLeft as Home } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/SmartLendLogo6.png"
import gradient from "../assets/gradient.png"

const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setUser(true);
    navigate("/dashboard");
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center px-6" style={{ backgroundImage: `url(${gradient})`, backgroundSize: "cover" }}
>
      

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md relative">

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
            <Link to="/forgotpassword" className="text-primary cursor-pointer hover:underline">
              Reset here
            </Link>
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
