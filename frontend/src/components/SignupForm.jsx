import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ userType }) => {
  const navigate = useNavigate();
  const auth = getAuth();

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

    try {
      console.log("Attempting Firebase Signup...");
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log("User Registered:", userCredential.user);

      // Get Firebase token
      const token = await userCredential.user.getIdToken();

      // Send data to backend
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        isLender: userType === 'lender',
      };

      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Pass token to backend
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Signup successful:', data);
        alert('Signup successful');
        
        // Navigate based on userType
        if (userType === 'lender') {
          navigate('/profile/lender');
        } else {
          navigate('/profile/borrower');
        }
      } else {
        console.error('Signup failed:', data.error);
        alert(data.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup Error:', error.message);
      alert(`Signup Error: ${error.message}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}
      </h2>

      {/* Full Name */}
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Phone */}
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

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Submit Button */}
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
