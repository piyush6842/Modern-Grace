import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../components/ThemeContext'; // Import ThemeContext

const Footer = () => {
  const { theme } = useContext(ThemeContext); // Access theme from context

  return (
    <footer className={`py-10 px-4 sm:px-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} text-center`}>
      <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left`}>
        
        {/* Company Information */}
        <div className="mb-8">
          <h1 className={`font-bold text-2xl lg:text-3xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>MODERN GRACE</h1>
          <p className={`text-lg mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>Interior Designs for your Home</p>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Transforming spaces to elevate lives. Let us help you design the art of living well.</p>
        </div>

        {/* Quick Links */}
        <div className="mb-8">
          <h2 className={`font-bold text-2xl lg:text-3xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Quick Links</h2>
          <div className="space-y-3 flex flex-col items-center md:items-start">
            {['About', 'Products', 'Contact', 'Home'].map((link, idx) => (
              <Link
                key={idx}
                to={`/${link.toLowerCase()}`}
                className={`block text-lg hover:text-gray-900 transition hover:underline ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Social Links */}
        <div className="mb-8">
          <h2 className={`font-bold text-2xl lg:text-3xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Follow Us</h2>
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <a href="https://twitter.com" className={`fa fa-twitter text-2xl text-black hover:text-blue-600 ${theme === 'dark' ? 'text-white' : ''}`} target="_blank" rel="noopener noreferrer">
              <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} ml-2`}>Twitter</span>
            </a>
            <a href="https://facebook.com" className={`fa fa-facebook text-2xl text-black hover:text-blue-800 ${theme === 'dark' ? 'text-white' : ''}`} target="_blank" rel="noopener noreferrer">
              <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} ml-4`}>Facebook</span>
            </a>
            <a href="https://youtube.com" className={`fa fa-youtube text-2xl text-black hover:text-red-700 ${theme === 'dark' ? 'text-white' : ''}`} target="_blank" rel="noopener noreferrer">
              <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} ml-2`}>Youtube</span>
            </a>
            <a href="https://instagram.com" className={`fa fa-instagram text-2xl text-black hover:text-pink-700 ${theme === 'dark' ? 'text-white' : ''}`} target="_blank" rel="noopener noreferrer">
              <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} ml-2`}>Instagram</span>
            </a>
            <a href="https://pinterest.com" className={`fa fa-pinterest text-2xl text-black hover:text-red-800 ${theme === 'dark' ? 'text-white' : ''}`} target="_blank" rel="noopener noreferrer">
              <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} ml-2`}>Pinterest</span>
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className={`font-bold text-2xl lg:text-3xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Contact Info</h2>
          <div className="space-y-3">
            <p className={`flex items-center justify-center md:justify-start space-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
              <i className="fa fa-phone text-xl text-green-600" />
              <span>+91 83028 56521</span>
            </p>
            <p className={`flex items-center justify-center md:justify-start space-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
              <i className="fa fa-envelope text-xl text-blue-600" />
              <span>manishgupta39459@gmail.com</span>
            </p>
            <p className={`flex items-center justify-center md:justify-start space-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
              <i className="fa fa-address-book text-2xl text-blue-600" />
              <span>E-152, Uppal Southend, Sector-49, Gurugram</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer Copyright */}
      <div className={`mt-10 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        <p>© 2024, Made with 💗 by <strong>Manish Gupta</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
