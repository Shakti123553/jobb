import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Utility to apply active link styling
  const isActive = (path) =>
    location.pathname === path ? "text-green-600" : "text-black";

  return (
    <nav className="bg-white p-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
       <h1 className="text-6xl font-semibold pl-20">
  <Link to="/" className="flex items-center">
    J<span style={{ color: "#83B348" }}>o</span>bbe
  </Link>
</h1>  


        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-20 text-xl pr-50 font-bold items-center">
          <Link to="/" className={`${isActive("/")} hover:text-green-600 transition-colors inline-flex items-center gap-1`}>
            Home
          </Link>
          <Link to="/about" className={`${isActive("/about")} hover:text-green-600 transition-colors inline-flex items-center gap-1`}>
            About Us 
          </Link>
          <Link to="/JobList" className={`${isActive("/jobs")} hover:text-green-600 transition-colors inline-flex items-center gap-1`}>
            Job List 
          </Link>
          <Link to="/contact" className={`${isActive("/contact")} hover:text-green-600 transition-colors inline-flex items-center gap-1`}>
            Contact Us
          </Link>
          <Link
            to="/post"
            className="bg-green-500 text-white font-bold py-3 px-10 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-colors"
          >
            POST A JOB
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-gray-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 my-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col space-y-3 py-4 px-6 bg-gray-50 border-t mt-2 rounded-lg">
          {['/', '/about', '/jobs', '/contact'].map((path) => (
            <Link
              key={path}
              to={path}
              className={`${
                isActive(path)
              } font-medium py-2 px-4 rounded hover:bg-green-50 hover:text-green-600 transition-colors`}
              onClick={toggleMenu}
            >
              {path === '/' ? 'Home' : path.replace('/', '').replace(/^\w/, c => c.toUpperCase())}
            </Link>
          ))}
          <Link
            to="/post"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-colors text-center mt-2"
            onClick={toggleMenu}
          >
            Post a Job
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
