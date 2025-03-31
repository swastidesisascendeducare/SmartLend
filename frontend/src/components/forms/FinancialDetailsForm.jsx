const FinancialDetailsForm = ({ formData, setFormData,userType }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Financial Details</h2>

            <div className="space-y-6">
                    <>
                        <div>
                            <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700 mb-1">
                                Annual Income
                            </label>
                            <input
                                type="text"
                                id="annualIncome"
                                name="annualIncome"
                                value={formData.annualIncome || ""}
                                onChange={handleChange}
                                className="mt-1 block w-full border rounded p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="creditScore" className="block text-sm font-medium text-gray-700 mb-1">
                                Credit Score
                            </label>
                            <input
                                type="number"
                                id="creditScore"
                                name="creditScore"
                                value={formData.creditScore || ""}
                                onChange={handleChange}
                                className="mt-1 block w-full border rounded p-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                        </div>
                    </>
            </div>

        </div>
    );
};

export default FinancialDetailsForm;
