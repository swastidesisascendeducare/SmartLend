import React from "react";
import BorrowerNavbar from "./BorrowerNavbar";
import Footer from "./Footer";

const BorrowerLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <BorrowerNavbar />
      
      {/* Main content area */}
      <div className="flex-grow">{children}</div>

      {/* Footer at the bottom */}
      
    </div>
  );
};

export default BorrowerLayout;
