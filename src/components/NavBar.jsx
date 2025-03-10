import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            PawsUp <span role="img" aria-label="paw">🐾</span>
          </Link>
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-8 text-lg font-medium absolute md:static bg-blue-900 md:bg-transparent w-full md:w-auto left-0 top-full p-5 md:p-0`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-gray-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <Link
              to="/more-info"
              className="hover:text-gray-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              More Info
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;