import React, { useState } from "react";
import { motion } from "framer-motion";

const LoanApplication = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    ownOrRent: "",
    sellBeforeBuying: "",
    purchaseType: "",
    preQualified: "",
    representedByRealtor: "",
    comments: "",
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documents: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", formData);
  };

  return (
    <motion.div 
      className="container mx-auto p-6 max-w-2xl bg-white shadow-lg rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Apply for a Loan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="firstName" placeholder="First Name" className="border p-2 w-full" onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" className="border p-2 w-full" onChange={handleChange} required />
        </div>
        <input type="email" name="email" placeholder="Email" className="border p-2 w-full" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" className="border p-2 w-full" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Street Address" className="border p-2 w-full" onChange={handleChange} required />
        <div className="grid grid-cols-3 gap-4">
          <input type="text" name="city" placeholder="City" className="border p-2 w-full" onChange={handleChange} required />
          <input type="text" name="state" placeholder="State" className="border p-2 w-full" onChange={handleChange} required />
          <input type="text" name="zip" placeholder="ZIP Code" className="border p-2 w-full" onChange={handleChange} required />
        </div>

        <label className="block">Do you own or rent your home?</label>
        <div className="flex gap-4">
          <label><input type="radio" name="ownOrRent" value="Own" onChange={handleChange} /> Own</label>
          <label><input type="radio" name="ownOrRent" value="Rent" onChange={handleChange} /> Rent</label>
        </div>

        <label className="block">Do you need to sell your home before buying?</label>
        <div className="flex gap-4">
          <label><input type="radio" name="sellBeforeBuying" value="Yes" onChange={handleChange} /> Yes</label>
          <label><input type="radio" name="sellBeforeBuying" value="No" onChange={handleChange} /> No</label>
        </div>

        <select name="purchaseType" className="border p-2 w-full" onChange={handleChange} required>
          <option value="">Select Type of Purchase</option>
          <option value="New Home">New Home</option>
          <option value="Refinancing">Refinancing</option>
          <option value="Investment Property">Investment Property</option>
        </select>

        <label className="block">Are you pre-qualified for a loan?</label>
        <div className="flex gap-4">
          <label><input type="radio" name="preQualified" value="Yes" onChange={handleChange} /> Yes</label>
          <label><input type="radio" name="preQualified" value="No" onChange={handleChange} /> No</label>
          <label><input type="radio" name="preQualified" value="Cash Buyer" onChange={handleChange} /> Cash Buyer</label>
        </div>

        <label className="block">Upload Required Documents</label>
        <input type="file" multiple className="border p-2 w-full" onChange={handleFileChange} />

        <textarea name="comments" placeholder="Comments or Questions" className="border p-2 w-full" onChange={handleChange} rows="4"></textarea>
        
        <button type="submit" className="bg-green-500 text-white p-2 w-full rounded-lg">Submit</button>
      </form>
    </motion.div>
  );
};

export default LoanApplication;
