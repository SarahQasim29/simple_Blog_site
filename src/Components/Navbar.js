import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Assignment } from '@mui/icons-material';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg py-4 fixed top-0 inset-x-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-3xl font-extrabold text-white hover:text-gray-200 transition duration-300">
          My Blog
        </Link>
        <div className="flex space-x-8">
          <Link to="/" className="text-white text-lg hover:text-gray-200 flex items-center transition duration-300">
            <HomeIcon className="mr-2" /> Home
          </Link>
          <Link to="/add-blog" className="text-white text-lg hover:text-gray-200 flex items-center transition duration-300">
            <Assignment className="mr-2" /> New Blog
          </Link>
          <Link to="/about" className="text-white text-lg hover:text-gray-200 flex items-center transition duration-300">
            <InfoIcon className="mr-2" /> About
          </Link>
          <Link to="/contact" className="text-white text-lg hover:text-gray-200 flex items-center transition duration-300">
            <ContactMailIcon className="mr-2" /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
