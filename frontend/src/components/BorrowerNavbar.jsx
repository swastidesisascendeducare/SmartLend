import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SmartLendLogo from "../assets/SmartLendLogo7.png";

const BorrowerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <img src={SmartLendLogo} alt="SmartLend" className="h-10" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold">
          <li><Link to="/dashboard" className="cursor-pointer hover:text-[#F5FFC3]">Dashboard</Link></li>
          <li><Link to="/loan-application" className="cursor-pointer hover:text-[#F5FFC3]">Apply for Loan</Link></li>
          <li><Link to="/loan-status" className="cursor-pointer hover:text-[#F5FFC3]">Loan Status</Link></li>
          <li><Link to="/repayment-tracking" className="cursor-pointer hover:text-[#F5FFC3]">Repayment Tracking</Link></li>
          <li><Link to="/loan-agreement" className="cursor-pointer hover:text-[#F5FFC3]">Loan Agreement</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 text-white text-center space-y-4 py-6 absolute w-full top-[60px] left-0 shadow-lg">
          <Link to="/dashboard" className="block hover:text-[#F5FFC3]" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/loan-application" className="block hover:text-[#F5FFC3]" onClick={() => setIsOpen(false)}>Apply for Loan</Link>
          <Link to="/loan-status" className="block hover:text-[#F5FFC3]" onClick={() => setIsOpen(false)}>Loan Status</Link>
          <Link to="/repayment-tracking" className="block hover:text-[#F5FFC3]" onClick={() => setIsOpen(false)}>Repayment Tracking</Link>
          <Link to="/loan-agreement" className="block hover:text-[#F5FFC3]" onClick={() => setIsOpen(false)}>Loan Agreement</Link>
        </div>
      )}
    </nav>
  );
};

export default BorrowerNavbar;
