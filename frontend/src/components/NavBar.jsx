import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-6xl font-semibold pl-20">
              J<span className="text-green-600">o</span>bbe
                   </h1>

        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-15 text-lg pr-20 font-bold items-center">
  <Link to="/" className="text-black font-bold hover:text-green-600 transition-colors">Home</Link>
  <Link to="/about" className="text-black font-bold hover:text-green-600 transition-colors">About Us</Link>
  <Link to="/jobs" className="text-black font-bold hover:text-green-600 transition-colors">Job List</Link>
  <Link to="/contact" className="text-black font-bold hover:text-green-600 transition-colors">Contact Us</Link>
  <Link to="/post" className="bg-green-500 text-white font-bold py-3 px-10 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-colors">
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
          <Link 
            to="/" 
            className="text-gray-700 font-medium py-2 px-4 rounded hover:bg-green-50 hover:text-green-600 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-gray-700 font-medium py-2 px-4 rounded hover:bg-green-50 hover:text-green-600 transition-colors"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link 
            to="/jobs" 
            className="text-gray-700 font-medium py-2 px-4 rounded hover:bg-green-50 hover:text-green-600 transition-colors"
            onClick={toggleMenu}
          >
            Job List
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-700 font-medium py-2 px-4 rounded hover:bg-green-50 hover:text-green-600 transition-colors"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
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