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
    employmentStatus: "",
    loanAmount: "",
    annualIncome: "",
    representedByRealtor: "",
    comments: "",
    documents: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const [documentPreviews, setDocumentPreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, documents: files });

    // Show previews for images
    const previews = files.map((file) => URL.createObjectURL(file));
    setDocumentPreviews(previews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", formData);
    setSubmitted(true);
  };

  return (
    <motion.div
      className="container mx-auto p-6 max-w-2xl bg-white shadow-lg rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Loan Application
      </h2>

      {submitted ? (
        <div className="text-green-600 text-center font-semibold text-xl">
          ✅ Your loan application has been submitted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border p-2 w-full rounded-lg"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border p-2 w-full rounded-lg"
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 w-full rounded-lg"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="border p-2 w-full rounded-lg"
            onChange={handleChange}
            required
          />

          <h3 className="text-xl font-semibold text-gray-700">Address</h3>
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            className="border p-2 w-full rounded-lg"
            onChange={handleChange}
            required
          />
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="border p-2 w-full rounded-lg"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              className="border p-2 w-full rounded-lg"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              className="border p-2 w-full rounded-lg"
              onChange={handleChange}
              required
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-700">Loan Details</h3>
          <input
            type="number"
            name="loanAmount"
            placeholder="Loan Amount ($)"
            className="border p-2 w-full rounded-lg"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="annualIncome"
            placeholder="Annual Income ($)"
            className="border p-2 w-full rounded-lg"
            onChange={handleChange}
            required
          />

          <h3 className="text-xl font-semibold text-gray-700">Employment Status</h3>
          <select
            name="employmentStatus"
            className="border p-2 w-full rounded-lg"
            onChange={handleChange}
            required
          >
            <option value="">Select Employment Status</option>
            <option value="Employed">Employed</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Student">Student</option>
          </select>

          <h3 className="text-xl font-semibold text-gray-700">Home Ownership</h3>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="ownOrRent" value="Own" onChange={handleChange} /> Own
            </label>
            <label>
              <input type="radio" name="ownOrRent" value="Rent" onChange={handleChange} /> Rent
            </label>
          </div>

          <label className="block font-medium text-gray-600">
            Upload Required Documents
          </label>
          <input
            type="file"
            multiple
            className="border p-2 w-full rounded-lg"
            onChange={handleFileChange}
          />

          {documentPreviews.length > 0 && (
            <div className="mt-4">
              <h4 className="text-lg font-medium text-gray-700">Document Previews:</h4>
              <div className="flex flex-wrap gap-2">
                {documentPreviews.map((src, index) => (
                  <img key={index} src={src} alt={`Document ${index + 1}`} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                ))}
              </div>
            </div>
          )}

          <textarea
            name="comments"
            placeholder="Additional Comments or Questions"
            className="border p-2 w-full rounded-lg"
            onChange={handleChange}
            rows="4"
          ></textarea>

          <button
            type="submit"
            className={`p-3 w-full rounded-lg font-bold ${
              Object.values(formData).some((val) => val === "" || val === null)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
            disabled={Object.values(formData).some((val) => val === "" || val === null)}
          >
            Submit Application
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default LoanApplication;
