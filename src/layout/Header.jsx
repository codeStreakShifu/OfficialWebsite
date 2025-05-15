import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"; // Adjust the path based on your logo location
import logoText from "../assets/images/text-logo.png"; // Adjust the path based on your logo text location

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Header = () => (
  // Adjust header height and width with these classes
  <header className="bg-white shadow sticky top-0 z-50 w-full">
    {/* Adjust container width: max-w-7xl, max-w-6xl, max-w-5xl, etc */}
    {/* Adjust padding: px-4, px-6, px-8, etc */}
    {/* Adjust vertical padding: py-2, py-4, py-6, etc */}
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <Link to="/" className="flex items-center">
        {/* Adjust logo size: h-6, h-8, h-10, h-12, etc */}
        {/* Add width if needed: w-auto, w-24, w-32, etc */}
        {/* Add margin if needed: mr-4, ml-2, etc */}
        <img src={logo} alt="Company Logo" className="h-20 w-auto" />
        <img src={logoText} alt="Company Logo Text" className="h-20 w-auto" />
        
      
      </Link>
      {/* Adjust nav spacing: space-x-4, space-x-6, space-x-8, etc */}
      <nav className="space-x-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `hover:text-indigo-600 transition ${isActive ? "text-indigo-700 font-semibold" : "text-gray-700"}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;