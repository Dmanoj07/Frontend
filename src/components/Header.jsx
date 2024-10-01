import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="w-full text-center mb-8 pt-8">
      <div className="logo mb-6">
        <span className="text-4xl font-bold">d</span>
        <span className="text-5xl font-bold">MANOJ</span>
        <span className="text-4xl font-bold text-green-700">.</span>
      </div>
      <nav className="inline-block bg-dark bg-opacity-80 backdrop-filter backdrop-blur-sm border-2 border-green-800 rounded-full px-6 py-3 shadow-lg font-mono">
        <Link to="about" smooth={true} className="mx-3 cursor-pointer hover:text-green-700 transition-colors">About</Link>
        <Link to="skills" smooth={true} className="mx-3 cursor-pointer hover:text-green-700 transition-colors">Skills</Link>
        <Link to="projects" smooth={true} className="mx-3 cursor-pointer hover:text-green-700 transition-colors">Projects</Link>
        <Link to="contact" smooth={true} className="mx-3 cursor-pointer hover:text-green-700 transition-colors">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
