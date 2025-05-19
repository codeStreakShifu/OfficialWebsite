import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.svg";
import logoText from "../assets/images/logotext.svg";
import headerBg from "../assets/images/header-bg.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 z-50 max-w-screen w-full cursor-none transition-all duration-500 ${scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-slate-700/40 backdrop-blur-3lg shadow-lg '
        }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 relative group"
          style={{
            filter: 'drop-shadow(1px 1px 2px rgba(255, 255, 255, 0.7))',

          }}
        >
          <img
            src={logo}
            alt="Company Logo"
            className="h-16 w-auto transition-all duration-300 group-hover:scale-105"
          />
          <img
            src={logoText}
            alt="Company Logo Text"
            className="h-14 w-auto transition-all duration-300 group-hover:opacity-80"
          />
        </Link>        {/* Hamburger Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-full hover:bg-white-700/90  transition-all  ${scrolled
              ? 'bg-white/80 backdrop-blur-lg shadow-lg'
              : 'bg-sky-750/90'
            }`}
          onClick={toggleMenu}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMenuOpen ? (
              <FaTimes size={24} className="text-gray-800 " />
            ) : (
              <FaBars size={24} className="text-gray-800 " />
            )}
          </motion.div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-2 py-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `
                relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${isActive
                  ? 'text-indigo-600 bg-white/80 shadow-md'
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-white/50'
                }
              `}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-medium 
              hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Navigation */}
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
          className="lg:hidden fixed top-[73px] right-0 w-3/4 h-screen
            bg-white/90 backdrop-blur-xl shadow-2xl"
        >
          <div className="flex flex-col items-end pt-8 px-6 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `
                  w-full text-right px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300
                  ${isActive
                    ? 'text-indigo-600 bg-indigo-50/50'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50/50'
                  }
                `}
              >
                {item.label}
              </NavLink>
            ))}
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