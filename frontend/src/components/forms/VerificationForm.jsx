const VerificationForm = ({ formData, setFormData}) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, [e.target.name]: file });
        }
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Verification</h2>
            <div className="space-y-6">
                <div>
                    <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700 mb-1">
                        Profile Picture
                    </label>
                    <input
                        type="file"
                        id="profilePicture"
                        name="profilePicture"
                        onChange={handleFileChange}
                        className="mt-1 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                    />
                </div>
                <div>
                    <label htmlFor="idProof" className="block text-sm font-medium text-gray-700 mb-1">
                        ID Proof (Aadhar, PAN, etc.)
                    </label>
                    <input
                        type="file"
                        id="idProof"
                        name="idProof"
                        onChange={handleFileChange}
                        className="mt-1 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                    />
                </div>
            </div>
            
        </div>
    );
};

export default VerificationForm;
