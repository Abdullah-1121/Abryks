import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Company Name */}
        <div className="mb-4 md:mb-0">
          <Link href="/" className='text-2xl m-2 font-bold  '>
        My Company
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-0">
        <Link href="/" className='text-lg m-2  '>
        Home
          </Link>
          <Link href="/" className='text-lg m-2  '>
        Men
          </Link>
          <Link href="/" className='text-lg m-2  '>
        Women
          </Link>
          <Link href="/" className='text-lg m-2  '>
        Contact Us
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
