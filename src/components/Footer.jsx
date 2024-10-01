import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-white py-8 mt-16">
      <div className="container mx-auto px-4 font-mono">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {currentYear} dMANOJ. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://github.com/Dmanoj07" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/manoj-dhami-47022624a/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
           
          </div>
          <div>
          <Link
              to="top"
              smooth={true}
              className="bg-black-700 hover:bg-gray-600 text-white p-2 rounded-full transition-all duration-300 cursor-pointer inline-block"
            >
              <FaArrowUp size={20} className="animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;