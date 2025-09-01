import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "About Us",
    path: "/about"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Solutions",
    path: "/solutions"
  }, {
    name: "Products",
    path: "/products"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <nav className="bg-[hsl(var(--dark-gray))] shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/lovable-uploads/032976b7-7468-404f-a75f-4688c8e3580d.png" alt="Eelectron Logo" className="h-10 w-auto" />
              
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive(link.path) ? "text-white border-b-2 border-white" : "text-gray-300 hover:text-white"}`}>
                {link.name}
              </Link>)}
            <Link to="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[hsl(var(--dark-gray))]">
            {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive(link.path) ? "text-white bg-[hsl(var(--dark-gray))]/50" : "text-gray-300 hover:text-white hover:bg-[hsl(var(--dark-gray))]/50"}`}>
                {link.name}
              </Link>)}
            <div className="px-3 py-2">
              <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center block">
                Get Quote
              </Link>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navigation;