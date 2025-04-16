import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Disable body scroll on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0B3D2E] text-white py-8 px-6 lg:px-24 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-gold-light font-bold text-2xl">ACDS</span>
          <span className="hidden md:inline-block font-semibold">Summit</span>
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={toggleMenu}
          className="w-10 h-10 flex justify-end items-center cursor-pointer z-50"
        >
          {isOpen ? (
            <X size={32} className="text-white" />
          ) : (
            <Menu size={32} className="text-white" />
          )}
        </button>
      </div>

      {isOpen && (
        <>
          {/* Overlay background */}
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu} />

          {/* Slide-in menu */}
          <div className="fixed top-0 right-0 h-full w-full lg:w-1/2 bg-white text-primary z-50 flex flex-col p-6 space-y-6 pt-16">
            {/* Close Button */}
            <button
              aria-label="Close menu"
              onClick={toggleMenu}
              className="absolute top-6 right-6"
            >
              <X size={32} className="text-black" />
            </button>

            {/* Links */}
            <Link to="/" onClick={toggleMenu} className="hover:text-gold-light transition-colors max-w-fit">
              Home
            </Link>
            <Link to="/event" onClick={toggleMenu} className="hover:text-gold-light transition-colors max-w-fit">
              Event Details
            </Link>
            <Link to="/gallery" onClick={toggleMenu} className="hover:text-gold-light transition-colors max-w-fit">
              Gallery
            </Link>
            <Link to="/location" onClick={toggleMenu} className="hover:text-gold-light transition-colors max-w-fit">
              Location
            </Link>
            <Link to="/register" onClick={toggleMenu} className="hover:bg-gold-light transition-colors max-w-fit">
              Register
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
