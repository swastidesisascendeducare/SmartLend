import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ArrowLeft as Home } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../firebaseConfig"; // ✅ Correct import
import axios from "axios"; // ✅ Added axios for backend integration
import logo from "../assets/SmartLendLogo6.png";
import gradient from "../assets/gradient.png";

const SignUpPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialType = params.get("type") === "lender";
  const navigate = useNavigate();

  const [isLender, setIsLender] = useState(initialType);
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

  // ✅ Handle Input Change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🔥 Form Submitted!", formData);

    try {
      console.log("🚀 Attempting Firebase Signup...");
      
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;
      console.log("✅ User Registered in Firebase:", user);

      // Store additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        isLender: isLender, // ✅ Save role
        lenderType: isLender ? formData.lenderType : null,
        loanAmount: !isLender ? formData.loanAmount : null, 
        createdAt: new Date(),
      });

      console.log("✅ User Data Saved to Firestore");

      // ✅ Send user data to backend (for MongoDB storage)
      
      const token = await user.getIdToken(); // ✅ Get Firebase Auth token

await axios.post("http://localhost:5001/api/auth/signup", {
  uid: user.uid,
  fullName: formData.fullName,
  email: formData.email,
  phoneNumber: formData.phoneNumber,
  isLender,
  lenderType: isLender ? formData.lenderType : null,
  loanAmount: !isLender ? formData.loanAmount : null
}, {
  headers: {
    Authorization: `Bearer ${token}` // ✅ Pass token in Authorization header
  }
});




      console.log("✅ User Data Sent to Backend");
      alert("Signup Successful!");

      // ✅ Navigate to Dashboard
      navigate(isLender ? "/lender-dashboard" : "/loan-application");

    } catch (error) {
      console.error("❌ Signup Error:", error);
      alert(`Signup Error: ${error.code} - ${error.message}`);
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center px-6" style={{ backgroundImage: `url(${gradient})`, backgroundSize: "cover" }}>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md relative">
        {/* ✅ Back Button */}
        <button 
          onClick={() => navigate("/")} 
          className="absolute top-4 left-4 text-gray-600 hover:text-primary transition"
        >
          <Home size={28} />
        </button>

        {/* ✅ Logo */}
        <div className="flex justify-center mb-4">
            <img src={logo} alt="SmartLend Logo" className="h-14" />
        </div>

        {/* ✅ User Type Toggle */}
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

        {/* ✅ Form */}
        <form className="space-y-4 text-textDark" onSubmit={handleSubmit}>
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
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleInputChange} 
            className="w-full px-4 py-3 border border-zinc-400 rounded-lg text-lg font-medium" 
            required
          />
          <input 
            type="tel" 
            name="phoneNumber" 
            placeholder="Phone Number" 
            value={formData.phoneNumber} 
            onChange={handleInputChange} 
            className="w-full px-4 py-3 border border-zinc-400 rounded-lg text-lg font-medium" 
            required
          />
          
          {/* ✅ Terms Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agreeTerms"
              required
              className="form-checkbox"
            />
            <label htmlFor="agreeTerms" className="text-sm text-gray-600">
              By signing up, you agree to our{" "}
              <Link to="/terms-and-conditions" className="text-primary hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>
          
          {/* ✅ Submit Button */}
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-hoverEffect transition text-lg font-semibold">
            Sign Up as {isLender ? "Lender" : "Borrower"}
          </button>

          {/* ✅ Redirect to Login */}
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
