import { useState, useEffect } from "react";

const useProfileForm = (initialData = {}) => {
    const [formData, setFormData] = useState(initialData);
    const [currentStep, setCurrentStep] = useState(1);

    // Load saved draft from localStorage
    useEffect(() => {
        const savedData = localStorage.getItem("profileDraft");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    // Auto-save drafts to localStorage
    useEffect(() => {
        localStorage.setItem("profileDraft", JSON.stringify(formData));
    }, [formData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleFileUpload = (name, file) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: file,
        }));
    };

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    return { formData, setFormData, handleChange, handleFileUpload, currentStep, nextStep, prevStep };
};

export default useProfileForm;
