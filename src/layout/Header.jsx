import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Header = () => (
  <header className="bg-white shadow sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <Link to="/" className="text-2xl font-bold text-indigo-700">Agency</Link>
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