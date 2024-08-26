'use client'
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image'
import logo from '@/assets/transparent_2024-08-20T06-07-09 (1).png'
import {toast,Toaster} from 'sonner'

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-4">
      <Toaster position='top-center' richColors/>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Company Name */}
        <div className="mb-4 md:mb-0">
          <Link href="/" className='text-2xl m-2 font-bold  '>
          <Image src={logo} alt='abryks' width={50} height={50}></Image> <p>ₐbᵣyₖₛ</p>
        
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-col md:items-center mb-4 md:mb-0">
          <p className=' text-lg md:text-xl font-semibold text-center'>Sign Up to Our Newsletter</p>
          <div>
        <input type="text" placeholder='Email Address' className='px-4 py-2 rounded-md m-2' />
        <button onClick={() => toast.info('Done')} className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600">Subscribe</button>
        </div>
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
      <div className="mt-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Abryks. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
