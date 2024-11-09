import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeContext from '../components/ThemeContext'; // Import ThemeContext
import image1 from "../images/InteriorLogo.avif";

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme context
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className={`flex justify-between bg-gray-100 fixed w-full top-0 shadow-md ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'} z-50 p-4 lg:px-10`}>
        <div className='flex items-center'>
          <a href='/'><img className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] rounded-full' src={image1} alt="Logo" /></a>
        </div>

        {/* Desktop Menu */}
        <div className='hidden sm:flex mt-2 lg:mt-[40px] lg:mr-[80px]'>
          <ul className='flex'>
            <Link to="/">
              <li className={`mr-4 lg:mr-10 font-bold text-base lg:text-lg ${location.pathname === '/' || location.pathname === '/home' ? 'text-gray-300 bg-gray-800 px-3 rounded-full' : 'hover:text-gray-600'}`}>
                Home
              </li>
            </Link>
            <Link to='/products'>
              <li className={`mr-4 lg:mr-10 font-bold text-base lg:text-lg ${location.pathname === '/products' ? 'text-gray-300 bg-gray-800 px-3 rounded-full' : 'hover:text-gray-600'}`}>
                Products
              </li>
            </Link>
            <Link to='/about'>
              <li className={`mr-4 lg:mr-10 font-bold text-base lg:text-lg ${location.pathname === '/about' ? 'text-gray-300 bg-gray-800 px-3 rounded-full' : 'hover:text-gray-600'}`}>
                About
              </li>
            </Link>
            <Link to='/contact'>
              <li className={`mr-4 lg:mr-10 font-bold text-base lg:text-lg ${location.pathname === '/contact' ? 'text-gray-300 bg-gray-800 px-3 rounded-full' : 'hover:text-gray-600'}`}>
                Contact
              </li>
            </Link>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className='sm:hidden flex items-center'>
          <button onClick={toggleMobileMenu} className={`text-gray-800 text-2xl ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-100'}`}>
            ☰
          </button>
        </div>
        
        {/* Theme Toggle Button */}
        <div className="flex items-center">
          <button onClick={toggleTheme} className="ml-4 p-2 bg-gray-700 text-white rounded-full transition-colors duration-300 hover:bg-gray-600">
            {theme === 'dark' ? '🌙' : '🌞'}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center pt-[100px] z-40 transition duration-300">
          <button onClick={toggleMobileMenu} className="text-gray-300 text-3xl mb-8">
            ✕
          </button>
          <ul className="flex flex-col items-center space-y-6">
            <Link to="/" onClick={toggleMobileMenu}>
              <li className={`font-bold text-lg text-white ${location.pathname === '/' || location.pathname === '/home' ? 'text-gray-300 bg-black px-3 py-2 rounded-full' : 'hover:text-gray-400'}`}>
                Home
              </li>
            </Link>
            <Link to="/products" onClick={toggleMobileMenu}>
              <li className={`font-bold text-lg text-white ${location.pathname === '/products' ? 'text-gray-300 bg-black px-3 py-2 rounded-full' : 'hover:text-gray-400'}`}>
                Products
              </li>
            </Link>
            <Link to="/about" onClick={toggleMobileMenu}>
              <li className={`font-bold text-lg text-white ${location.pathname === '/about' ? 'text-gray-300 bg-black px-3 py-2 rounded-full' : 'hover:text-gray-400'}`}>
                About
              </li>
            </Link>
            <Link to="/contact" onClick={toggleMobileMenu}>
              <li className={`font-bold text-lg text-white ${location.pathname === '/contact' ? 'text-gray-300 bg-black px-3 py-2 rounded-full' : 'hover:text-gray-400'}`}>
                Contact
              </li>
            </Link>
          </ul>
        </div>
      )}

      {/* Add padding at the top so the rest of the page content is not hidden behind the fixed header */}
      <div className='pt-[80px] lg:pt-[100px]'></div>
    </>
  );
};

export default Header;
