import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileStepper from "./ProfileStepper";
import LivePreview from "./ProfilePreview";
import useAutoSave from "../hooks/useProfileForm";

import PersonalInfoForm from "./forms/PersonalInfoForm";
import FinancialDetailsForm from "./forms/FinancialDetailsForm";
import InvestmentPreferencesForm from "./forms/InvestmentPreferencesForm";
import LoanPreferencesForm from "./forms/LoanPreferencesForm";
import BankDetailsForm from "./forms/BankDetailsForm";
import VerificationForm from "./forms/VerificationForm";

const ProfileForm = ({ userType }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        profilePicture: null,
        idProof: null,
        financialDetails: {},
    });
    const navigate = useNavigate();

    const handleSave = () => {
        console.log("Saving form data:", formData);
        navigate(userType === "lender" ? "/profile/lender" : "/profile/borrower");
    };

    useAutoSave(formData);

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const renderForm = () => {
        switch(step) {
            case 1:
                return <PersonalInfoForm formData={formData} setFormData={setFormData} nextStep={nextStep} />;
            case 2:
                return <VerificationForm formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
            case 3:
                return userType === "borrower" 
                    ? <FinancialDetailsForm formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
                    : <InvestmentPreferencesForm formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
            case 4:
                return userType === "borrower"
                    ? <LoanPreferencesForm formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
                    : <BankDetailsForm formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <ProfileStepper step={step} />

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-grow mb-8">
                    {renderForm()}
                    <div className="flex justify-between mt-4">
                        <button 
                            onClick={prevStep} 
                            className={`bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400 transition-colors duration-300 ${step === 1 ? 'invisible' : ''}`}
                        >
                            Back
                        </button>
                        <button 
                            onClick={nextStep} 
                            className={`bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-300 ${step === 4 ? 'invisible' : ''}`}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/3"> 
                    <div className="sticky top-4">
                        <LivePreview data={formData} />
                        <div className="flex justify-center mt-4">
                            <button 
                                onClick={handleSave}
                                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors duration-300"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;
