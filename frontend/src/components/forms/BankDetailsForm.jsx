const BankDetailsForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
      setFormData({
          ...formData,
          bankDetails: {
              ...formData.bankDetails,
              [e.target.name]: e.target.value,
          },
      });
  };

  return (
      <div className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Bank Account Details</h2>
          <div className="space-y-6">
              <div>
                  <label htmlFor="accountHolder" className="block text-sm font-medium text-gray-700 mb-1">
                      Account Holder Name
                  </label>
                  <input
                      type="text"
                      id="accountHolder"
                      name="accountHolder"
                      value={formData.bankDetails?.accountHolder || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full border rounded p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
              </div>

              <div>
                  <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">
                      Bank Name
                  </label>
                  <input
                      type="text"
                      id="bankName"
                      name="bankName"
                      value={formData.bankDetails?.bankName || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full border rounded p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
              </div>

              <div>
                  <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Account Number
                  </label>
                  <input
                      type="text"
                      id="accountNumber"
                      name="accountNumber"
                      value={formData.bankDetails?.accountNumber || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full border rounded p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
              </div>

              <div>
                  <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700 mb-1">
                      IFSC Code
                  </label>
                  <input
                      type="text"
                      id="ifscCode"
                      name="ifscCode"
                      value={formData.bankDetails?.ifscCode || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full border rounded p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
              </div>

              <div>
                  <label htmlFor="branchName" className="block text-sm font-medium text-gray-700 mb-1">
                      Branch Name
                  </label>
                  <input
                      type="text"
                      id="branchName"
                      name="branchName"
                      value={formData.bankDetails?.branchName || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full border rounded p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
              </div>

              <div>
                  <label htmlFor="accountType" className="block text-sm font-medium text-gray-700 mb-1">
                      Account Type
                  </label>
                  <select
                      id="accountType"
                      name="accountType"
                      value={formData.bankDetails?.accountType || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full border rounded p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                      <option value="">Select Account Type</option>
                      <option value="savings">Savings</option>
                      <option value="current">Current</option>
                  </select>
              </div>

              <div>
                  <label htmlFor="upiId" className="block text-sm font-medium text-gray-700 mb-1">
                      UPI ID
                  </label>
                  <input
                      type="text"
                      id="upiId"
                      name="upiId"
                      value={formData.bankDetails?.upiId || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full border rounded p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
              </div>
          </div>
      </div>
  );
};

export default BankDetailsForm;
