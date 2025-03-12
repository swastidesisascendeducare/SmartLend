import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Ensure this is correct
import { useNavigate } from "react-router-dom"; // Import navigate function

const SignupForm = ({ userType }) => {
  const navigate = useNavigate(); // Initialize navigate

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🔥 Form Submitted!");  // Debugging log
  
    try {
      console.log("🚀 Attempting Firebase Signup...");
      
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
  
      console.log("✅ User Registered:", userCredential.user);
      alert("Signup Successful!");
  
      // Navigate to dashboard after successful signup
      navigate("/dashboard"); 
    } catch (error) {
      console.error("❌ Signup Error:", error);
      alert(`Signup Error: ${error.code} - ${error.message}`);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        pattern="[0-9]{10}"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
      >
        Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}
      </button>
    </form>
  );
};

export default SignupForm;
