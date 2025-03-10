import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-darkBackground text-linksIcons py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between text-center md:text-left">
        
        {/* Left - Brand & Copyright */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white">SmartLend</h2>
          <p className="text-sm mt-2">SmartLend &copy; {new Date().getFullYear()} All rights reserved.</p>
          
          <p className="text-sm mt-1">Authors: Swasti Mishra, Sharvani Pallempati, Trupti Khodwe, Vidhi Arora</p>
        </div>

        {/* Center - Navigation Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/about" className="hover:text-hoverEffect transition">About</a></li>
            <li><a href="/faq" className="hover:text-hoverEffect transition">FAQ</a></li>
            <li><Link to="/privacy-policy" className="hover:text-hoverEffect transition">Privacy Policy</Link></li>
            <li><a href="/contact" className="hover:text-hoverEffect transition">Contact</a></li>
          </ul>
        </div>

        {/* Right - Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-3">
            {[
              { icon: <FaFacebookF />, link: "https://facebook.com" },
              { icon: <FaTwitter />, link: "https://twitter.com" },
              { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
              { icon: <FaInstagram />, link: "https://instagram.com" }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`Follow us on ${social.link.split(".")[1]}`} 
                className="text-xl hover:text-hoverEffect transition duration-300 transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;