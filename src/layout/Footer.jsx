import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronDown } from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faYoutube, faThreads, faPinterest, faReddit } from '@fortawesome/free-brands-svg-icons';
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

    <div className="modern-footer bg-purple-900 relative z-10 pt-[6%] transition-all duration-1500">
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
            <div className="social-links flex flex-wrap gap-4 mb-8">
              <a href="https://www.facebook.com/profile.php?id=61576324054348" target="_blank" rel="noopener noreferrer"
                className="lg:w-1/5 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="https://x.com/VoxEditionWorks" target="_blank" rel="noopener noreferrer"
                className="lg:w-1/5 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <FaTwitter className="text-lg" />
              </a>
              <a href="https://www.linkedin.com/company/107119386/admin/dashboard/" target="_blank" rel="noopener noreferrer"
                className="lg:w-1/5 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <FaLinkedinIn className="text-lg" />
              </a>
              <a href="https://www.instagram.com/voxeditionwork_official25/" target="_blank" rel="noopener noreferrer"
                className="lg:w-1/5 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <FaInstagram className="text-lg" />
              </a>

              <a href="https://www.tiktok.com/@voxeditionworks_inc" target="_blank" rel="noopener noreferrer"
                className="lg:w-1/5 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <FontAwesomeIcon icon={faTiktok} />
              </a>

              <a href="https://www.youtube.com/channel/UCKuWTckwb0gvI-7ePCTnmsA" target="_blank" rel="noopener noreferrer"
                className="lg:w-1/5 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <FontAwesomeIcon icon={faYoutube} />
              </a>

              <a href="https://www.threads.com/@voxeditionwork_official25" target="_blank" rel="noopener noreferrer"
                className="lg:w-1/5 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <FontAwesomeIcon icon={faThreads} />
              </a>
              <a href="https://www.pinterest.com/VoxEditionWorksllc/" target="_blank" rel="noopener noreferrer"
                className="lg:w-1/5 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <FontAwesomeIcon icon={faPinterest} />
              </a>

              <a href="https://www.reddit.com/user/According_Name9554/" target="_blank" rel="noopener noreferrer"
                className="lg:w-1/5 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <FontAwesomeIcon icon={faReddit} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <FooterColumn className="font-light text" title="Quick Links">
            <ul className="space-y-2 text-left md:text-left text-sm">
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
                  className="text-gray-400 hover:text-indigo-400 transition-colors "
                >Home</Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >About Us</Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >Services</Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >Portfolio</Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >Contact</Link>
              </li>
            </ul>
          </FooterColumn>

          {/* Services Column */}
          <FooterColumn title="Services">
            <ul className="space-y-2 text-left md:text-left text-sm">
              <li><Link to="/services/web-development" className="text-gray-400 hover:text-indigo-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services/graphic-design" className="text-gray-400 hover:text-indigo-400 transition-colors">Graphic Design</Link></li>
              <li><Link to="/services/marketing" className="text-gray-400 hover:text-indigo-400 transition-colors">Marketing Strategy</Link></li>
              <li><Link to="/services/book-publishing" className="text-gray-400 hover:text-indigo-400 transition-colors">Book Designing and Distribution</Link></li>
            </ul>
          </FooterColumn>

          {/* Policies Column */}
          <FooterColumn title="Legal">
            <div className="flex flex-col text-left justify-left space-y-2">
              <Link
                to="/privacy-policy"
                className="text-sm text-gray-400 hover:text-indigo-400 transition-colors group flex items-center"
              >
                <span>Privacy Policy</span>
                <span className="w-0 group-hover:w-full h-[1px] bg-indigo-400 transition-all duration-300" />
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-400 hover:text-indigo-400 transition-colors group flex items-center"
              >
                <span>Terms of Service</span>
                <span className="w-0 group-hover:w-full h-[1px] bg-indigo-400 transition-all duration-300" />
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-gray-400 hover:text-indigo-400 transition-colors group flex items-center"
              >
                <span>Cookie Policy</span>
                <span className="w-0 group-hover:w-full h-[1px] bg-indigo-400 transition-all duration-300" />
              </Link>
            </div>
          </FooterColumn>

          {/* Contact Column */}
          <FooterColumn title="Contact Us">
            <ul className="contact-info space-y-4 text-left md:text-left text-sm">
              <li className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                <FaMapMarkerAlt className="text-indigo-400 text-xl" />
                <span className="text-gray-400">PMB 2039, 2001 L St NW Suite 500, Washington, DC 20036, Estados Unidos</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <FaPhone className="text-indigo-400 text-xl" />
                <a href="tel:+14064058028" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  +1 (406) 405-8028
                </a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <FaEnvelope className="text-indigo-400 text-xl" />
                <a href="mailto:hello@voxedition.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  admin@voxedition.com
                </a>
              </li>
            </ul>
          </FooterColumn>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom border-t border-gray-800 mt-12">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link to="/" className="mb-4 md:mb-0">
              <img src={logoText} alt="VoxEdition Works" className="h-8" />
            </Link>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} VoxEdition Works. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;