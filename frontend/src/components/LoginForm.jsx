import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Uncomment and integrate Firebase when backend is ready
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     onLogin();
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //   });

    console.log("Login attempted with:", email, password);
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-textDark mt-6">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 border border-zinc-400 rounded-lg text-lg font-medium"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-3 border border-zinc-400 rounded-lg text-lg font-medium"
        required
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-hoverEffect transition text-lg font-semibold">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
