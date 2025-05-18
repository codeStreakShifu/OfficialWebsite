import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import logo from "../assets/images/logoText.svg";

const Footer = () => (
  <footer className="modern-footer bg-purple-900/40 text-white py-10 pb-0">
    <div className="footer-content container mx-auto flex flex-col md:flex-row items-start justify-between items-center text-center px-6">
      {/* Main Footer Columns */}
      <div className="footer-columns grid grid-cols-1 md:grid-cols-4 gap-10 w-full">
        {/* Company Info Column */}
        <div className="footer-column flex flex-col justify-center items-center">
          <Link to="/">
            <img src={logo} alt="VoxEdition Works" className="footer-logo h-16 mb-4" />
          </Link>
          <p className="company-description mb-4 text-gray-300">
            Inspiring Creators • Scaling Brands through innovative solutions and creative excellence.
          </p>
          <div className="social-links flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <FaFacebookF className="text-lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <FaTwitter className="text-lg" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <FaLinkedinIn className="text-lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-indigo-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-indigo-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="text-gray-300 hover:text-indigo-400 transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-indigo-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="footer-column">
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link to="/services/web-development" className="text-gray-300 hover:text-indigo-400 transition-colors">Web Development</Link></li>
            <li><Link to="/services/graphic-design" className="text-gray-300 hover:text-indigo-400 transition-colors">Graphic Design</Link></li>
            <li><Link to="/services/marketing" className="text-gray-300 hover:text-indigo-400 transition-colors">Marketing Strategy</Link></li>
            <li><Link to="/services/book-publishing" className="text-gray-300 hover:text-indigo-400 transition-colors">Book Publishing</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-column flex flex-col text-left items-center">
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <ul className="contact-info space-y-4">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-indigo-400 text-xl mt-1" />
              <span className="text-gray-300">123 Creative Street, Design District, NY 10001</span>
            </li>
            <li className="flex items-center space-x-3 " >
              <FaPhone className="text-indigo-400 text-xl" />
              <a href="tel:+1234567890" className="text-gray-300 hover:text-indigo-400 transition-colors">
                +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-indigo-400 text-xl" />
              <a href="mailto:hello@voxedition.com" className="text-gray-300 hover:text-indigo-400 transition-colors">
                hello@voxedition.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="footer-bottom bg-gray-800/50 mt-10 py-4">
      <div className="footer-bottom-content container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} VoxEdition Works Inc. All rights reserved.
        </p>
        <div className="footer-links space-x-4 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
            Terms of Service
          </Link>
          <Link to="/cookies" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;