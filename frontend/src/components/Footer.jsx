import React from "react";
import { Link } from "react-router-dom";
import gradient from "../assets/gradient.png"; 

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${gradient})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="text-gray-900 py-10 relative"
    >
      {/* Background Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-white opacity-20 backdrop-blur-md"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between items-start relative">
        
        {/* Left - Brand & Copyright */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-black">SmartLend</h2>
          <p className="text-sm mt-2 text-gray-700">
            &copy; {new Date().getFullYear()} SmartLend Ltd. All rights reserved.
          </p>
          <p className="text-sm mt-1 text-gray-700">
            Authors: Swasti Mishra, Sharvani Pallempati, Trupti Khodwe, Vidhi Arora
          </p>
        </div>

        {/* Center - Navigation Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-black">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link to="/privacy-policy" className="hover:text-gray-600 transition">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-gray-600 transition">Terms & Conditions</Link></li>
            <li><Link to="/meet-the-team" className="hover:text-gray-600 transition">Meet the Team</Link></li>
          </ul>
        </div>

        {/* Right - Support Email */}
        <div>
          <h3 className="text-lg font-semibold text-black">Support</h3>
          <p className="text-sm text-gray-700">
            Email: <a href="mailto:smartlend25@gmail.com" className="hover:underline">smartlend25@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm text-gray-700 relative">
        Built with ❤️ by SmartLend Team
        <p className="mt-2 text-xs">
          *SmartLend does not provide financial advice. All loans are subject to terms and conditions.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
