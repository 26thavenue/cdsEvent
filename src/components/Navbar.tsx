import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0B3D2E] text-white py-8 px-24  relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-gold-light font-bold text-2xl">ACDS</span>
          <span className="hidden md:inline-block font-semibold">Summit</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gold-light transition-colors">
            Home
          </Link>
          <Link to="/event" className="hover:text-gold-light transition-colors">
            Event Details
          </Link>
          <Link to="/gallery" className="hover:text-gold-light transition-colors">
            Gallery
          </Link>
          <Link to="/venue" className="hover:text-gold-light transition-colors">
            Venue
          </Link>
          <Link 
            to="/register" 
            className="bg-gold  rounded hover:bg-gold-light transition-colors text-navy-dark font-medium"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <X size={24} className="text-gold-light" />
            ) : (
              <Menu size={24} className="text-gold-light" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy-light border-t border-navy-dark z-20">
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              to="/" 
              className="hover:text-gold-light transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/event" 
              className="hover:text-gold-light transition-colors py-2"
              onClick={toggleMenu}
            >
              Event Details
            </Link>
            <Link 
              to="/gallery" 
              className="hover:text-gold-light transition-colors py-2"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link 
              to="/location" 
              className="hover:text-gold-light transition-colors py-2"
              onClick={toggleMenu}
            >
              Location
            </Link>
            <Link 
              to="/register" 
              className="bg-gold py-2 text-center rounded hover:bg-gold-light transition-colors text-navy-dark font-medium"
              onClick={toggleMenu}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;