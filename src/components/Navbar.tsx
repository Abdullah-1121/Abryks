'use client'
import Link from 'next/link'
import { useState } from 'react';
import {motion , AnimatePresence} from 'framer-motion'
import { FaFacebook, FaTwitter, FaLinkedin , FaTimes , FaBars , FaInstagram , FaGithub , FaShoppingBag , FaShoppingCart } from 'react-icons/fa';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 5,
      },
    },
    closed: {
      x: '-100%',
      transition: {
        stiffness: 20,
        damping: 5,
        duration:0.5
      },
    },
    
  };

  const itemVariants = {
    open: (i:any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration:0.4
      },
    }),
    closed: {
      opacity: 0,
      x: -20,
    },
  };


  return (
    <nav className=" p-4 border-2 shadow-xl rounded-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-teal-500 text-2xl">MyLogo</div>
        <div className="hidden md:flex space-x-6">
          <Link href='' className='text-black'>Mens</Link>
          <Link href='' className='text-black'>Women</Link>
          <Link href='' className='text-black'></Link>
          <Link href=''><FaShoppingCart className='text-3xl text-gray-600'></FaShoppingCart></Link>
        </div>
        <div className="md:hidden flex items-center">
        <FaShoppingCart className='text-3xl text-gray-600 mx-2'></FaShoppingCart>
          <button onClick={toggleMenu}>
          <FaBars className='text-3xl text-gray-600'></FaBars>
          </button>
        </div>
      </div>
      <AnimatePresence>
     {isOpen && (
      
         <motion.div className="fixed top-0 left-0 w-[75%]   h-screen " variants={sidebarVariants} initial='closed' animate='open' exit='closed'>
          
         <motion.div className="bg-gray-300 border-3 border-black w-full h-full rounded-xl p-6 flex flex-col  items-start justify-start space-y-4" variants={itemVariants} initial='closed' animate='open'  exit='closed'>
          
         <div className='w-full p-2 m-2 ' onClick={toggleMenu}>
         <FaTimes className='text-3xl text-black-400 ml-auto'></FaTimes>
         </div>
         <Link href='' className='text-black'>Home</Link>
         <Link href='' className='text-black'>Men</Link>
          <Link href='' className='text-black'>Women</Link>
          <div className="text-teal-500 text-2xl">MyLogo</div>
          <div className='w-full p-4 m-2  flex justify-between'>
          <FaFacebook className="text-gray-700 text-3xl" />
          <FaLinkedin className="text-gray-700 text-3xl" />
          <FaTwitter className="text-gray-700 text-3xl" />
          <FaInstagram className="text-gray-700 text-3xl"></FaInstagram>
          <FaGithub className="text-gray-700 text-3xl"></FaGithub>
          </div>
         </motion.div>
         
       </motion.div>
       
      )}
      </AnimatePresence>
      
    </nav>
  );
};

export default Navbar;
