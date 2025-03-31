import React from "react";
import BorrowerNavbar from "./BorrowerNavbar";
import Footer from "./Footer";

const BorrowerLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Main content area */}
      <div className="flex-grow">{children}</div>
      
    </div>
  );
};

export default BorrowerLayout;
