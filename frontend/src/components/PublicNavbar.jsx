import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import hamburger & close icons
import SmartLendLogo from "../assets/SmartLendLogo7.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#435FEF] shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <img src={SmartLendLogo} alt="SmartLend" className="h-10" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold">
          <li><Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-[#F5FFC3]">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-[#F5FFC3]">About</Link></li>
          <li><Link to="how-it-works" smooth={true} duration={500} className="cursor-pointer hover:text-[#F5FFC3]">How It Works</Link></li>
          <li><Link to="faq" smooth={true} duration={500} className="cursor-pointer hover:text-[#F5FFC3]">FAQ</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-[#F5FFC3]">Contact Us</Link></li>
        </ul>

        {/* Desktop Login & Signup */}
        <div className="hidden md:flex space-x-4">
          <RouterLink to="/loginpage">
            <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-[#435FEF]">
              Login
            </button>
          </RouterLink>
          <RouterLink to="/signuppage">
            <button className="border text-white border-white px-4 py-2 rounded hover:bg-white hover:text-[#435FEF]">
              Sign Up
            </button>
          </RouterLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#435FEF] text-white text-center space-y-4 py-6 absolute w-full top-[60px] left-0 shadow-lg">
          <Link to="home" smooth={true} duration={500} className="block hover:text-[#F5FFC3]" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="block hover:text-[#F5FFC3]" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="how-it-works" smooth={true} duration={500} className="block hover:text-[#F5FFC3]" onClick={() => setIsOpen(false)}>How It Works</Link>
          <Link to="faq" smooth={true} duration={500} className="block hover:text-[#F5FFC3]" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link to="contact" smooth={true} duration={500} className="block hover:text-[#F5FFC3]" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <RouterLink to="/loginpage">
            <button className="w-full border border-white py-2 rounded hover:bg-white hover:text-[#435FEF]">Login</button>
          </RouterLink>
          <RouterLink to="/signuppage">
            <button className="w-full border border-white py-2 rounded hover:bg-white hover:text-[#435FEF]">Sign Up</button>
          </RouterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
