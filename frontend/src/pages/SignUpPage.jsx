import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft as Home, Eye, EyeOff } from "lucide-react"; // Importing Icons
import BackgroundAnimation from "../components/Background-Animation";
import logo from "../assets/SmartLendLogo6.png";

const SignUpPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialType = params.get("type") === "lender"; // Detect tab from URL
  const navigate = useNavigate();

  const [isLender, setIsLender] = useState(initialType);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    loanAmount: "",
    lenderType: "individual",
  });

  useEffect(() => {
    setIsLender(initialType);
  }, [initialType]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation & API integration here
    console.log("Submitted Form Data:", formData);
    navigate("/dashboard");
  };

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
        <form onSubmit={handleSubmit} className="space-y-4 text-textDark">
          <input 
            type="text" 
            name="fullName" 
            placeholder="Full Name" 
            value={formData.fullName} 
            onChange={handleInputChange} 
            className="w-full px-4 py-3 border border-zinc-400 rounded-lg text-lg font-medium" 
            required
          />

          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleInputChange} 
            className="w-full px-4 py-3 border border-zinc-400 rounded-lg text-lg font-medium" 
            required
          />

          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              name="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 border border-zinc-400 rounded-lg text-lg font-medium pr-12"
              required
            />
            <button 
              type="button" 
              onClick={togglePasswordVisibility} 
              className="absolute right-4 top-3 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <input 
            type="tel" 
            name="phoneNumber" 
            placeholder="Phone Number" 
            value={formData.phoneNumber} 
            onChange={handleInputChange} 
            className="w-full px-4 py-3 border border-zinc-400 rounded-lg text-lg font-medium" 
            required
          />

          {/* Borrower Specific Field */}
          {!isLender && (
            <input 
              type="number" 
              name="loanAmount" 
              placeholder="Desired Loan Amount ($)" 
              value={formData.loanAmount} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 border border-zinc-400 rounded-lg text-lg font-medium" 
              required
            />
          )}

          {/* Lender Specific Field */}
          {isLender && (
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium text-sm mb-2">Lender Type</label>
              <select 
                name="lenderType" 
                value={formData.lenderType} 
                onChange={handleInputChange} 
                className="w-full px-4 py-3 border border-zinc-400 rounded-lg text-lg font-medium"
              >
                <option value="individual">Individual</option>
                <option value="institution">Institutional</option>
              </select>
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-hoverEffect transition text-lg font-semibold"
          >
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
