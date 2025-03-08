const LoanPreferencesForm = ({ formData, setFormData}) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Loan Preferences</h2>

            <div className="space-y-6">
                <div>
                    <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Loan Type
                    </label>
                    <select
                        id="loanType"
                        name="loanType"
                        value={formData.loanType || ""}
                        onChange={handleChange}
                        className="mt-1 block w-full border rounded p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    >
                        <option value="">Select</option>
                        <option value="Home">Home</option>
                        <option value="Auto">Auto</option>
                        <option value="Education">Education</option>
                        <option value="Business">Business</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="preferredInterestRate" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Interest Rate (%)
                    </label>
                    <input
                        type="number"
                        id="preferredInterestRate"
                        name="preferredInterestRate"
                        value={formData.preferredInterestRate || ""}
                        onChange={handleChange}
                        className="mt-1 block w-full border rounded p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="preferredLoanTerm" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Loan Term (Months)
                    </label>
                    <input
                        type="number"
                        id="preferredLoanTerm"
                        name="preferredLoanTerm"
                        value={formData.preferredLoanTerm || ""}
                        onChange={handleChange}
                        className="mt-1 block w-full border rounded p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                </div>
            </div>

        </div>
    );
};

export default LoanPreferencesForm;
