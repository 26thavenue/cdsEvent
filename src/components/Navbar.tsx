import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent text-white py-8 px-6 lg:px-24 relative z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-yellow-500 font-bold text-2xl">ACDS</span>
          <span className="hidden md:inline-block font-semibold">Summit</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center text-white font-medium">
          <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
          <Link to="/event" className="hover:text-yellow-500 transition-colors">Event Details</Link>
          <Link to="/gallery" className="hover:text-yellow-500 transition-colors">Gallery</Link>
          <Link to="/venue" className="hover:text-yellow-500 transition-colors">Location</Link>
          <Link to="/register" className="hover:bg-yellow-500 px-4 py-2 rounded transition-colors  ">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          onClick={toggleMenu}
          className="md:hidden w-10 h-10 flex justify-end items-center cursor-pointer z-50"
        >
          {isOpen ? (
            <X size={32} className="bg-primary " />
          ) : (
            <Menu size={32} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay and Drawer */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu} />
          <div className="fixed top-0 right-0 h-full w-full bg-white text-primary z-50 flex flex-col p-6 space-y-6 pt-6">

             <div className="flex  my-4 justify-end items-center mb-4">
                {/* <span className="text-xl font-bold text-[#0B3D2E]">ACDS Summit</span> */}
                <button
                  aria-label="Close menu"
                  onClick={toggleMenu}
                  className="text-[#0B3D2E] self-end"
                >
                  <X size={32} />
                </button>
              </div>
            <Link to="/" onClick={toggleMenu} className="hover:text-yellow-500 transition-colors">Home</Link>
            <Link to="/event" onClick={toggleMenu} className="hover:text-yellow-500 transition-colors">Event Details</Link>
            <Link to="/gallery" onClick={toggleMenu} className="hover:text-yellow-500 transition-colors">Gallery</Link>
            <Link to="/venue" onClick={toggleMenu} className="hover:text-yellow-500 transition-colors">Location</Link>
            <Link to="/register" onClick={toggleMenu} className="hover:bg-yellow-500 transition-colors">Register</Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
