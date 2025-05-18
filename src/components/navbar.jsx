import { Link } from "react-router-dom";
import { useState } from "react";
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false); // For mobile dropdown

  return (
    <nav className="sticky top-0 z-50">
      {/* Main Nav */}
      <div className="bg-gray-900/70 backdrop-blur-md shadow-md text-white px-6 py-4 flex justify-between items-center">
        <Link to='/'>
          <img
            src="/logo.png"
            alt="Safar Craft Logo"
            className="h-10 transition-all duration-300"
          />
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="lg:hidden flex flex-col gap-1 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-sm items-center">
          <Link to="/" className="navbar-link">Home</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <span className="navbar-link cursor-pointer">Services ▾</span>
            <div className="absolute left-0 mt-2 w-56 bg-gray-800 border border-gray-700 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 z-50">
              <Link to="/cost" className="block px-4 py-2 hover:bg-gray-700">Cost Calculator</Link>
              <Link to="/itinerary" className="block px-4 py-2 hover:bg-gray-700">Itinerary Planner</Link>
              <Link to="/similar" className="block px-4 py-2 hover:bg-gray-700">Similar Place Suggestor</Link>
              <Link to="/packing" className="block px-4 py-2 hover:bg-gray-700">Packing List Generator</Link>
            </div>
          </div>
          <Link to="/gallery" className="navbar-link">Gallery</Link>
          <Link to="/about" className="navbar-link">About</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md pt-20 px-6 space-y-4 animate__animated animate__fadeInRight">
          {/* Close button positioned absolutely at top right */}
          <button
            className="absolute top-6 right-6 flex flex-col gap-1 z-50"
            onClick={() => setIsOpen(false)}
          >
            <span className="block h-0.5 w-6 bg-white rotate-45 translate-y-1.5"></span>
            <span className="block h-0.5 w-6 bg-white -rotate-45 -translate-y-1.5"></span>
          </button>

          <Link to="/" onClick={() => setIsOpen(false)} className="block py-3 text-xl border-b border-gray-700">Home</Link>

          {/* Mobile Services Dropdown */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => setIsServiceOpen(!isServiceOpen)}
              className="w-full text-left py-3 font-medium text-xl"
            >
              Services {isServiceOpen ? "▲" : "▼"}
            </button>
            {isServiceOpen && (
              <div className="pl-4 pb-2 text-lg">
                <Link to="/cost" onClick={() => setIsOpen(false)} className="block py-2">Cost Calculator</Link>
                <Link to="/itinerary" onClick={() => setIsOpen(false)} className="block py-2">Itinerary Planner</Link>
                <Link to="/similar" onClick={() => setIsOpen(false)} className="block py-2">Similar Place Suggestor</Link>
                <Link to="/packing" onClick={() => setIsOpen(false)} className="block py-2">Packing List Generator</Link>
              </div>
            )}
          </div>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="block py-3 text-xl border-b border-gray-700">Gallery</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-3 text-xl border-b border-gray-700">About</Link>
        </div>
      )}
    </nav>
  );
}
