import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SmartLendLogo from "../assets/SmartLendLogo7.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#435FEF] shadow-lg fixed w-full top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <button onClick={() => window.location.reload()}>
          <img src={SmartLendLogo} alt="SmartLend" className="h-12 cursor-pointer" />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold text-lg">
          {["Home", "About", "How It Works", "FAQ", "Contact Us"].map((item, index) => (
            <li key={index}>
              <Link
                  to={item.toLowerCase().replace(/\s+/g, "-")}
                  smooth={true}
                  duration={500}
                  onClick={(e) => {
                    const target = `#${item.toLowerCase().replace(/\s+/g, "-")}`;
                    if (window.location.pathname !== "/") {
                      window.location.href = `/${target}`;
                    } else {
                      e.preventDefault(); // Prevent default if already on the page
                      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
                    }
                    setIsOpen(false); // Close mobile menu
                  }}
                  className="cursor-pointer hover:text-[#F5FFC3] transition-all"
                >
                  {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Login & Signup */}
        <div className="hidden md:flex space-x-4">
          <RouterLink to="/loginpage">
            <button className="border border-white text-white px-5 py-2 rounded-lg hover:bg-white hover:text-[#435FEF] transition-all">
              Login
            </button>
          </RouterLink>
          <RouterLink to="/signuppage">
            <button className="border border-white text-white px-5 py-2 rounded-lg hover:bg-white hover:text-[#435FEF] transition-all">
              Sign Up
            </button>
          </RouterLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#435FEF] text-white flex flex-col items-center justify-center space-y-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <button
          className="absolute top-5 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={35} />
        </button>

        {["Home", "About", "How It Works", "FAQ", "Contact Us"].map((item, index) => (
          <Link
            key={index}
            to={item.toLowerCase().replace(/\s+/g, "-")}
            smooth={true}
            duration={500}
            className="text-2xl font-semibold hover:text-[#F5FFC3] transition-all"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}

        <RouterLink to="/loginpage">
          <button className="w-40 border border-white py-3 rounded-lg hover:bg-white hover:text-[#435FEF] transition-all">
            Login
          </button>
        </RouterLink>
        <RouterLink to="/signuppage">
          <button className="w-40 border border-white py-3 rounded-lg hover:bg-white hover:text-[#435FEF] transition-all">
            Sign Up
          </button>
        </RouterLink>
      </div>
    </nav>
  );
};

export default Navbar;
