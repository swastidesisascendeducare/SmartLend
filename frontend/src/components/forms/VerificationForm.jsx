// const VerificationForm = ({ formData, setFormData}) => {
//     const handleFileChange = (e) => {
//       const file = e.target.files[0];
//       if (file) {
//         setFormData({ ...formData, [e.target.name]: file });
//       }
//     };
  
//     return (
//       <div className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Verification</h2>
//         <div className="space-y-6">
//           <div>
//             <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700 mb-1">
//               Profile Picture
//             </label>
//             <input
//               type="file"
//               id="profilePicture"
//               name="profilePicture"
//               onChange={handleFileChange}
//               className="mt-1 block w-full text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded-full file:border-0
//               file:text-sm file:font-semibold
//               file:bg-blue-50 file:text-blue-700
//               hover:file:bg-blue-100"
//             />
//           </div>
//           <div>
//             <label htmlFor="idProof" className="block text-sm font-medium text-gray-700 mb-1">
//               ID Proof (Aadhar, PAN, etc.)
//             </label>
//             <input
//               type="file"
//               id="idProof"
//               name="idProof"
//               onChange={handleFileChange}
//               className="mt-1 block w-full text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded-full file:border-0
//               file:text-sm file:font-semibold
//               file:bg-blue-50 file:text-blue-700
//               hover:file:bg-blue-100"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default VerificationForm;
  
const VerificationForm = ({ formData, setFormData, userRole }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, [e.target.name]: file });
    }
  };

  const getDocumentUrl = (type) => {
    const doc = formData.documents?.find((d) => d.type === type);
    return doc ? doc.file : null;
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Verification</h2>
      <div className="space-y-6">
        {/* Profile Picture */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
          {formData.profilePicture && (
            <img
              src={formData.profilePicture instanceof File ? URL.createObjectURL(formData.profilePicture) : formData.profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-2 object-cover"
            />
          )}
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* ID Proof */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ID Proof (Aadhar, PAN, etc.)</label>
          {getDocumentUrl("ID Proof") && (
            <p className="mb-2">
              <a href={getDocumentUrl("ID Proof")} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View Existing ID Proof
              </a>
            </p>
          )}
          <input
            type="file"
            name="idProof"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Address Proof */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address Proof</label>
          {getDocumentUrl("Address Proof") && (
            <p className="mb-2">
              <a href={getDocumentUrl("Address Proof")} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View Existing Address Proof
              </a>
            </p>
          )}
          <input
            type="file"
            name="addressProof"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Income Verification (For Borrowers Only) */}
        {userRole === "borrower" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Income Verification (Salary Slip, ITR, Bank Statement)</label>
            {getDocumentUrl("Income Document") && (
              <p className="mb-2">
                <a href={getDocumentUrl("Income Document")} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  View Existing Income Proof
                </a>
              </p>
            )}
            <input
              type="file"
              name="incomeProof"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VerificationForm;
