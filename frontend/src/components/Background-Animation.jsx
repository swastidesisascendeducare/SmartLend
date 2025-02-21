import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/bg1.json"; 

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Lottie animationData={animationData} className="w-full h-full object-cover" />
    </div>
  );
};

export default BackgroundAnimation;
