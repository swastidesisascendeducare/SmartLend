import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { UploadCloud, FileText, CheckCircle, XCircle } from 'lucide-react';

const DocumentUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles(uploadedFiles);
  };

  const handleRemoveFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setUploadStatus('Please upload at least one document.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', files[0]);
  
    try {
      setUploadStatus('Uploading...');
      const response = await fetch('http://localhost:5000/api/ocr', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
      if (response.ok) {
        setUploadStatus(`Upload successful! Extracted Text: ${result.text}`);
      } else {
        setUploadStatus('Failed to process document.');
      }
    } catch (error) {
      setUploadStatus('Error uploading document. Please try again.');
      console.error('Upload Error:', error);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-4xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Upload Documents for Verification</h1>
        <p className="text-gray-500 mb-6">Supported formats: PDF, JPEG, PNG. Max size: 10MB.</p>

        {/* Upload Area */}
        <label className="cursor-pointer border-dashed border-2 border-gray-300 rounded-lg p-10 text-center hover:bg-gray-100 transition flex flex-col items-center justify-center">
          <UploadCloud className="mb-4 text-gray-400" size={48} />
          <span className="text-gray-500">Click to upload or drag and drop files here</span>
          <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={handleFileChange} />
        </label>

        {/* File List */}
        {files.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Uploaded Files</h2>
            {files.map((file, index) => (
              <motion.div key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex items-center">
                  <FileText className="text-blue-500" size={24} />
                  <div className="ml-4">
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <XCircle className="text-red-500 cursor-pointer" size={24} onClick={() => handleRemoveFile(index)} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Upload Button */}
        <Button onClick={handleUpload} className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white">Upload Documents</Button>

        {/* Status Message */}
        {uploadStatus && (
          <motion.p className={`mt-4 text-center ${uploadStatus.includes('successful') ? 'text-green-500' : 'text-red-500'}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {uploadStatus}
          </motion.p>
        )}
      </Card>
    </div>
  );
};

export default DocumentUpload;