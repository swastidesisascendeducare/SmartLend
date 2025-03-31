import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { ArrowLeft as Home } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/SmartLendLogo6.png";
import gradient from "../assets/gradient.png";

const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");


    try {
      console.log("🚀 Attempting login for:", formData.email);

      // ✅ Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      console.log("✅ Firebase Auth Success:", user.uid);

      // Fetch user data from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        throw new Error("User data not found in Firestore.");
      }

      const userData = userDoc.data();
      console.log("👤 Firestore User Data:", userData);

      if (userData.isLender === undefined) {
        throw new Error("User type not assigned.");
      }

      // Store user info in localStorage & update state
      const userDetails = { uid: user.uid, email: user.email, role: userData.isLender ? "lender" : "borrower" };
      localStorage.setItem("user", JSON.stringify(userDetails));
      setUser(userDetails);

      // Redirect user based on role
      navigate(userData.isLender ? "/lender-dashboard" : "/loan-application");
    } catch (error) {
      console.error("❌ Login Error:", error);
      setError(error.message || "Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center px-6" style={{ backgroundImage: `url(${gradient})`, backgroundSize: "cover" }}>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md relative">
        {/* Back Button */}
        <button onClick={() => navigate("/")} className="absolute top-4 left-4 text-gray-600 hover:text-primary transition" aria-label="Go to Home">
          <Home size={28} />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="SmartLend Logo" className="h-16 object-contain" />
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          {/* Display error message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button type="submit" className="w-full bg-primary text-white p-2 rounded mt-2 hover:bg-opacity-90 transition" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-4 text-center text-gray-600">
          <p className="text-sm">
            Forgot your password? <Link to="/forgotpassword" className="text-primary cursor-pointer hover:underline">Reset here</Link>
          </p>
          <p className="text-sm mt-2">
            Don't have an account? <Link to="/signuppage" className="text-primary hover:underline ml-1">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;