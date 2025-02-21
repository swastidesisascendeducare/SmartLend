import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft as Home } from "lucide-react"; // Importing Home Icon
import BackgroundAnimation from "../components/Background-Animation";
import logo from "../assets/SmartLendLogo6.png"

const SignUpPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialType = params.get("type") === "lender"; // Detect tab from URL
  const navigate = useNavigate();

  const [isLender, setIsLender] = useState(initialType);

  useEffect(() => {
    setIsLender(initialType);
  }, [initialType]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center px-6">
      {/* Animated Background */}
      <BackgroundAnimation />

      {/* SignUp Container */}
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

        {/* Toggle Borrower/Lender Tabs */}
        <div className="flex justify-between my-6 bg-gray-200 p-1 rounded-lg">
          <button
            onClick={() => setIsLender(false)}
            className={`w-1/2 py-2 rounded-lg text-lg font-semibold transition-all duration-300 ${
              !isLender ? "bg-primary text-white shadow-md scale-105" : "text-gray-600"
            }`}
          >
            Borrower
          </button>
          <button
            onClick={() => setIsLender(true)}
            className={`w-1/2 py-2 rounded-lg text-lg font-semibold transition-all duration-300 ${
              isLender ? "bg-primary text-white shadow-md scale-105" : "text-gray-600"
            }`}
          >
            Lender
          </button>
        </div>

        {/* Signup Form */}
        <form className="space-y-4 text-textDark">
          <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-zinc-400 rounded-lg text-lg font-medium" />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-zinc-400 rounded-lg text-lg font-medium" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-zinc-400 rounded-lg text-lg font-medium" />
          <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-zinc-400 rounded-lg text-lg font-medium" />
          
          {/* Submit Button */}
          <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-hoverEffect transition text-lg font-semibold">
            Sign Up as {isLender ? "Lender" : "Borrower"}
          </button>

          <div className="mt-4 text-center text-gray-600">
            <p className="text-sm mt-2">
              Already have an account?{" "}
              <Link to="/loginpage" className="text-primary cursor-pointer">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
