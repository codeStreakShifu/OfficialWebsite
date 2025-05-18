import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronDown } from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import logoText from "../assets/images/logoText.svg";
import { div } from 'framer-motion/client';

import hi from "../assets/images/hi.png";

const FooterColumn = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="footer-column relative">
      <div
        className="flex justify-between items-center cursor-pointer md:cursor-default border-b border-indigo-400/20 pb-3 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-lg relative text-blue-200/40">
          {title}
          <span className="absolute bottom-[-8px] left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 md:group-hover:w-[50%]" />
        </h3>
        <FaChevronDown
          className={`md:hidden transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-indigo-400`}
        />
      </div>
      <div
        className={`${isOpen ? 'max-h-96 mt-4' : 'max-h-0 md:max-h-full md:mt-4'
          } overflow-hidden font-100 text transition-all duration-300  md:block`}
      >
        {children}
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="relative">
    {/* Hero Image Container */}
    <div className="absolute w-screen transform -translate-y-[90%] left-0 pointer-events-none z-20">
      <div className="container mx-auto relative px-4 "


      >
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full max-w-[75vw] mx-auto">
          <img
            src={hi}
            alt=""
            className="absolute inset-0 w-full h-full object-fit"
          />
        </div>
      </div>
    </div>

    <div className="modern-footer bg-purple-900 relative z-10 pt-[6%] transition-all duration-1500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content container mx-auto px-6">
        <div className="footer-columns grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
          {/* Company Info Column - Always visible */}
          <div className="footer-column flex flex-col items-left  text-left md:text-left ">
            <Link to="/" className="md:self-left">
              <img src={logo} alt="VoxEdition Works" className="footer-logo h-16 md:mb-4 " />
            </Link>
            <div className="w-full  mb-6 md:hidden" />
            <p className="company-description my-6 text-blue-200/35 "
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.5rem', fontWeight: '600',

              }}
            >
              Socials
            </p>
            <div className="social-links flex space-x-4 mb-8">
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
          <FooterColumn className="font-light text" title="Quick Links">
            <ul className="space-y-2 text-left md:text-left text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-indigo-400 transition-colors " >Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-indigo-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </FooterColumn>

          {/* Services Column */}
          <FooterColumn title="Services">
            <ul className="space-y-2 text-left md:text-left text-sm">
              <li><Link to="/services/web-development" className="text-gray-400 hover:text-indigo-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services/graphic-design" className="text-gray-400 hover:text-indigo-400 transition-colors">Graphic Design</Link></li>
              <li><Link to="/services/marketing" className="text-gray-400 hover:text-indigo-400 transition-colors">Marketing Strategy</Link></li>
              <li><Link to="/services/book-publishing" className="text-gray-400 hover:text-indigo-400 transition-colors">Book Publishing</Link></li>
            </ul>
          </FooterColumn>

          {/* Contact Info Column */}
          <FooterColumn title="Policy">
            <div className="flex flex-col text-left justify-left space-y-2">
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
          </FooterColumn>

          {/* Contact Info Column */}
          <FooterColumn title="Contact Us" >
            <ul className="contact-info space-y-4 text-left md:text-left text-sm">
              <li className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                <FaMapMarkerAlt className="text-indigo-400 text-xl" />
                <span className="text-gray-400">123 Creative Street, Design District, NY 10001</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <FaPhone className="text-indigo-400 text-xl" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <FaEnvelope className="text-indigo-400 text-xl" />
                <a href="mailto:hello@voxedition.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  hello@voxedition.com
                </a>
              </li>
            </ul>
          </FooterColumn>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content flex items-center justify-center ">
          <Link to="/" className="">
            <img src={logoText} alt="VoxEdition Works" className="footer-logo md:w-9lg md:mb-16 my-8 mt-20 md:mt-6" />
          </Link>

        </div>
      </div>

    </div>
  </footer>


);

export default Footer;