import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error on new submission

    // **Bypassing Authentication for Testing**
    console.log("Testing mode: Bypassing authentication");
    onLogin();

    // Uncomment when integrating Firebase
    /*
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        onLogin();
      })
      .catch((error) => {
        setError("Invalid email or password. Please try again.");
      });
    */
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-primary focus:border-primary"
            required
            autoFocus
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-primary focus:border-primary"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition text-lg font-semibold shadow-md"
        >
          Login
        </button>
      </form>

      <p className="text-center text-gray-600 mt-4">
        Don't have an account?{" "}
        <a href="/signup" className="text-primary font-semibold hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
