import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkBackground text-linksIcons py-10">
      <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between text-center md:text-left">
        
        {/* Left - Brand & Copyright */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white">SmartLend</h2>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center - Navigation Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/about" className="hover:text-hoverEffect transition">About</a></li>
            <li><a href="/faq" className="hover:text-hoverEffect transition">FAQ</a></li>
            <li><a href="/privacy-policy" className="hover:text-hoverEffect transition">Privacy Policy</a></li>
            <li><a href="/contact" className="hover:text-hoverEffect transition">Contact</a></li>
          </ul>
        </div>

        {/* Right - Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-3">
            <a href="#" className="text-xl hover:text-hoverEffect transition"><FaFacebookF /></a>
            <a href="#" className="text-xl hover:text-hoverEffect transition"><FaTwitter /></a>
            <a href="#" className="text-xl hover:text-hoverEffect transition"><FaLinkedinIn /></a>
            <a href="#" className="text-xl hover:text-hoverEffect transition"><FaInstagram /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
