import React from "react";
import { FaUser, FaIdCard, FaFileAlt } from "react-icons/fa";

const Stepper = ({ step }) => {
    const steps = [
        { label: "Personal Details", icon: <FaUser /> },
        { label: "Upload Documents", icon: <FaIdCard /> },
        { label: "Financial Details", icon: <FaFileAlt /> },
    ];


    const getProgressPercentage = () => {
        if (step <= 2) return ((step - 1) / 2) * 100;
        if (step === 3) return 75;
        if (step === 4) return 100; 
        return 0;
    };

    return (
        <div className="max-w-3xl mx-auto my-8">
            <div className="flex justify-between items-center relative">
                {steps.map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-1/3 z-10">
                        <div className={`w-12 h-12 flex items-center justify-center rounded-full 
                            ${step > index + 1 || (step === 4 && index === 2) ? "bg-blue-500 text-white" : 
                              step === index + 1 ? "bg-blue-300 text-white" : "bg-gray-300 text-gray-700"}
                            transition-all duration-300 ease-in-out`}>
                            {item.icon}
                        </div>
                        <div className="mt-2 text-center">
                            <p className={`text-sm font-medium 
                                ${step > index + 1 || (step === 4 && index === 2) ? "text-blue-500" : 
                                  step === index + 1 ? "text-blue-300" : "text-gray-500"}`}>
                                {item.label}
                            </p>
                        </div>
                    </div>
                ))}
                <div className="absolute top-6 left-0 h-1 bg-gray-300 w-full -z-10">
                    <div 
                        className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
                        style={{ width: `${getProgressPercentage()}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Stepper;
