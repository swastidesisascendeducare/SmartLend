const InvestmentPreferencesForm = ({ formData, setFormData}) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Investment Preferences</h2>

            <div className="space-y-6">
                <div>
                    <label htmlFor="maxInvestment" className="block text-sm font-medium text-gray-700 mb-1">
                        Maximum Investment Amount (₹)
                    </label>
                    <input
                        type="number"
                        id="maxInvestment"
                        name="maxInvestment"
                        value={formData.maxInvestment || ""}
                        onChange={handleChange}
                        className="mt-1 block w-full border rounded p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="minInvestment" className="block text-sm font-medium text-gray-700 mb-1">
                        Minimum Investment per Loan (₹)
                    </label>
                    <input
                        type="number"
                        id="minInvestment"
                        name="minInvestment"
                        value={formData.minInvestment || ""}
                        onChange={handleChange}
                        className="mt-1 block w-full border rounded p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="riskAppetite" className="block text-sm font-medium text-gray-700 mb-1">
                        Risk Appetite
                    </label>
                    <select
                        id="riskAppetite"
                        name="riskAppetite"
                        value={formData.riskAppetite || ""}
                        onChange={handleChange}
                        className="mt-1 block w-full border rounded p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    >
                        <option value="">Select</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
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

export default InvestmentPreferencesForm;
