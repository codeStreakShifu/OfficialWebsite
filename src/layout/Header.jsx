import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.svg";
import logoText from "../assets/images/logotext.svg";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

// Navigation items configuration
const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
    to: "/services", label: "Services",
    dropdown: [
      { to: "/services/web-development", label: "Web Development" },
      { to: "/services/graphic-design", label: "Graphic Design" },
      { to: "/services/marketing", label: "Marketing Strategy" },
      { to: "/services/book-publishing", label: "Book Designing and Distribution" },
    ],
  },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false); // desktop dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile dropdown

  const location = useLocation();

  // Detect if current route is under /services
  const isServicesActive = location.pathname.startsWith("/services");

  // Handle scroll background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ backdropFilter: "blur(8px)" }}
      animate={
        scrolled
          ? { backgroundColor: "rgba(166, 177, 179, 0.15)", backdropFilter: "blur(12px)" }
          : { backgroundColor: "rgba(184, 215, 250, 0.10)", backdropFilter: "blur(8px)" }
      }
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 z-50 w-full shadow-md border-b border-white/10 md:px-20 px-10"
    >
      <div className="w-full flex items-center justify-between py-4 md:py-6 lg:px-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 relative group"
          style={{ filter: "drop-shadow(1px 1px 2px rgba(255, 255, 255, 0.7))" }}
        >
          <img
            src={logo}
            alt="Company Logo"
            className="h-12 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
          />
          <img
            src={logoText}
            alt="Company Logo Text"
            className="h-10 md:h-14 w-auto object-contain transition-all duration-300 group-hover:opacity-80"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className={`xl:hidden p-2 rounded-full transition-all duration-300 
    ${scrolled
              ? "bg-white/80 backdrop-blur-lg shadow-lg border-2 border-gray-900/60"
              : "bg-gray-800/40 backdrop-blur-sm border-2 border-white/70"
            }`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <motion.div
            className="flex items-center justify-center"
            animate={{ rotate: isMenuOpen ? 90 : 0, scale: isMenuOpen ? 0.9 : 1 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 260, damping: 20 }}
          >
            {isMenuOpen ? (
              <FaTimes size={22} className={`${scrolled ? "text-gray-900" : "text-white"}`} />
            ) : (
              <FaBars size={22} className={`${scrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </motion.div>
        </button>



        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-1 rounded-full px-0 py-2">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <NavLink
                  to={item.to}
                  className={`
                    relative px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 flex items-center
                    ${isServicesActive
                      ? "text-white bg-indigo-900 shadow-lg shadow-indigo-500/25"
                      : "text-white hover:text-white hover:bg-white/10"
                    }
                  `}
                  onClick={(e) => {
                    e.preventDefault();
                    setServicesDropdown(!servicesDropdown);
                  }}
                >
                  {item.label}
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    animate={{ rotate: servicesDropdown ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </NavLink>

                {/* Dropdown */}
                {servicesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full mt-2 min-w-[240px] bg-gray-900/95 rounded-xl shadow-xl py-2 z-50 border border-gray-800"
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        onClick={() => {
                          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                          setServicesDropdown(false);
                        }}
                        className="block px-5 py-3 text-gray-200 hover:bg-white/10 hover:text-white text-sm transition-all flex items-center gap-2"
                      >
                        {sub.label}
                        <motion.span
                          className="opacity-0 -translate-x-2"
                          whileHover={{ opacity: 1, translateX: 0 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                }}
                className={({ isActive }) => `
                  relative px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-300
                  ${isActive
                    ? "text-white bg-indigo-600 shadow-lg shadow-indigo-500/25"
                    : "text-white hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {item.label}
              </NavLink>
            )
          )}

          {/* CTA */}
          <Link
            to="/contact"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }}
            className="ml-2 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-medium 
              hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5 border border-white/20"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Nav */}
        <motion.nav
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
            closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
          }}
          className="xl:hidden fixed top-full right-0 w-4/5 sm:w-2/3 max-w-[100vw] h-screen
            bg-white/95 backdrop-blur-xl shadow-2xl rounded-l-lg z-50 overflow-y-auto"
        >
          <div className="flex flex-col items-start pt-6 px-6 space-y-2">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="w-full">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50/50 transition-all"
                  >
                    {item.label}
                    <FaChevronDown
                      className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.dropdown.map((sub) => (
                        <NavLink
                          key={sub.to}
                          to={sub.to}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setMobileServicesOpen(false);
                            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                          }}
                          className={({ isActive }) => `
          block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-all
          ${isActive
                              ? "text-indigo-600 bg-indigo-50"
                              : "text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
                            }
        `}
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                  }}
                  className={({ isActive }) => `
                    w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                    ${isActive
                      ? "text-indigo-600 bg-indigo-50/50"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50/50"
                    }
                  `}
                >
                  {item.label}
                </NavLink>
              )
            )}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              }}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-medium
                text-white rounded-lg text-lg font-medium text-center hover:shadow-lg 
                hover:shadow-indigo-500/30 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
