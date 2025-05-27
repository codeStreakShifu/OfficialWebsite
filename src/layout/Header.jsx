import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.svg";
import logoText from "../assets/images/logotext.svg";
import headerBg from "../assets/images/header-bg.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

// Navigation items configuration
const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  // State for mobile menu and scroll position
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to handle header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // Main header container with conditional styling based on scroll position
    <header
      className={`fixed top-0 z-50 max-w-screen w-full cursor-none transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg' // Scrolled state
          : 'bg-slate-700/40 backdrop-blur-3lg shadow-lg ' // Default state
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo and Brand Name */}
        <Link
          to="/"
          className="flex items-center gap-2 relative group"
          style={{
            filter: 'drop-shadow(1px 1px 2px rgba(255, 255, 255, 0.7))',
          }}
        >
          {/* Company Logo with hover effect */}
          <img
            src={logo}
            alt="Company Logo"
            className="h-16 w-auto transition-all duration-300 group-hover:scale-105"
          />
          {/* Company Name with hover effect */}
          <img
            src={logoText}
            alt="Company Logo Text"
            className="h-14 w-auto transition-all duration-300 group-hover:opacity-80"
          />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-white/80 backdrop-blur-lg shadow-lg border-2 border-gray-900/60' // Scrolled state
              : 'bg-gray-800/40 backdrop-blur-sm border-2 border-white/70' // Default state
          }`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {/* Animated hamburger/close icon */}
          <motion.div
            className="flex items-center justify-center"
            animate={{ 
              rotate: isMenuOpen ? 90 : 0,
              scale: isMenuOpen ? 0.9 : 1
            }}
            transition={{ 
              duration: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            {isMenuOpen ? (
              <FaTimes size={24} className={`${scrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <FaBars size={24} className={`${scrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </motion.div>
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-2 py-1">
          {/* Map through navigation items */}
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `
                relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${isActive
                  ? 'text-indigo-600 bg-white/80 shadow-md' // Active state
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-white/50' // Inactive state
                }
              `}
            >
              {item.label}
            </NavLink>
          ))}
          {/* Call-to-action button */}
          <Link
            to="/contact"
            className="ml-2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:text-gray-300 rounded-full text-sm font-medium 
              hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Navigation Menu with Animation */}
        <motion.nav
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: {
              x: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
              }
            },
            closed: {
              x: "100%",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
              }
            }
          }}
          className="lg:hidden fixed top-[73px] right-0 md:w-1/3 w-2/3 h-screen
            bg-white/90 backdrop-blur-xl shadow-2xl border border-radius-2xl rounded-l-lg z-50 overflow-y-auto"
        >
          {/* Mobile Menu Items */}
          <div className="flex flex-col items-start pt-8 px-6 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `
                  w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300
                  ${isActive
                    ? 'text-indigo-600 bg-indigo-50/50' // Active state
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50/50' // Inactive state
                  }
                `}
              >
                {item.label}
              </NavLink>
            ))}
            {/* Mobile CTA Button */}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 
                text-white rounded-lg text-lg font-medium text-center hover:shadow-lg 
                hover:shadow-indigo-500/30 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;