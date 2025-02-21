import React from "react";

const SignupForm = ({ userType, formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
        required
      />
      <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-hoverEffect">
        Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}
      </button>
    </form>
  );
};

export default SignupForm;
