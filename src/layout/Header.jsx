import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className="shadow fixed top-0 z-50 w-full"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(229, 229, 248, 0.6), rgba(55, 55, 73, 0.2)), url(${headerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div className="container mx-auto flex items-center justify-between py-2 md:py-4 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-1 sm:gap-2">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-10 w-auto sm:h-16 md:h-20  lg:h-24 xl:h-28 mr-6 transition-all duration-300 " 
          />
          <img 
            src={logoText} 
            alt="Company Logo Text" 
            className="h-10 w-auto sm:h-16 md:h-20 transition-all duration-300" 
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
            className="xl:hidden text-gray-700 hover:text-indigo-600 transition p-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:block space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `hover:text-indigo-600 transition ${isActive ? "text-yellow-500 font-semibold" : "text-white"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <nav className={`
          xl:hidden fixed top-[88px] left-0 w-full h-screen
          bg-white/90 backdrop-blur-lg transform transition-transform duration-300
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col items-center pt-8 space-y-4
        `}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-xl hover:text-indigo-600 transition ${isActive ? "text-indigo-700 font-semibold" : "text-gray-700"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;