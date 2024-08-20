'use client'
import Link from 'next/link'
import { useState , useEffect } from 'react';
import {motion , AnimatePresence} from 'framer-motion'
import { useSession, signIn, signOut } from "next-auth/react";
import { Toaster, toast } from 'sonner'
import Image from 'next/image'
import logo from '@/assets/transparent_2024-08-20T06-07-09 (1).png'
import {FaHome} from 'react-icons/fa'

import { FaFacebook, FaTwitter, FaLinkedin ,FaTelegram ,FaTimes ,FaEnvelope, FaBars , FaInstagram , FaGithub , FaShoppingBag , FaShoppingCart , FaDollarSign } from 'react-icons/fa';



const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const greeting = (name: string) => {
    
    toast.success(`Welcome ${name}`);
  }
  
  useEffect(() => {
    console.log("Session:", session); // Debugging
  
    if (session) {
      setTimeout(() => {
       
        // <Toaster position='top-center' richColors/>
      
        greeting(session.user?.name);
      }, 500); // Slight delay to ensure session is loaded
    }
  }, [session]);
  

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
    <nav className=" p-4  rounded-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-teal-500 text-2xl"><Image src={logo} alt='abryks' width={60} height={60}></Image></div>
        <Toaster position='top-center' richColors/>
        <div className="hidden md:flex space-x-6">
          <Link href='' className='text-black font-bold'>Shop</Link>
          
          <div>
      
       
    </div>
           <div  className='text-black'> 
          {session ? (
        <>
          {/* <span>Hi, {session.user?.name}</span> */}
          
          
          <button className='mx-2 font-bold' onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <Link href='/sign-in' className='font-bold'>Sign In</Link>
        
      )}
      </div> 
          <Link href='' className='text-black'></Link>
          <Link href='/cart'><FaShoppingCart className='text-3xl text-gray-600'></FaShoppingCart></Link>
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
      <>
       <div
       className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
       onClick={toggleMenu}
     />
      
         <motion.div className="fixed top-0 left-0 w-[75%] z-50  h-screen " variants={sidebarVariants} initial='closed' animate='open' exit='closed'>
          
         <motion.div className="bg-white border-3 border-black w-full h-full rounded-xl p-6 flex flex-col  items-start justify-start space-y-4" variants={itemVariants} initial='closed' animate='open'  exit='closed'>
          
         <div className='w-full p-2 m-2 flex justify-between  ' >
          <p className='font-bold py-2 text-lg'>Menu</p>
         <FaTimes className='text-3xl text-black-400  ml-auto' onClick={toggleMenu}></FaTimes>
         
         </div>
         <div className='w-full rounded-lg hover:bg-gray-200  flex justify-between items-center'>
         <Link href='/' className='text-black font-semibold    p-2 ' onClick={toggleMenu}>  Home </Link><FaHome className='text-2xl mx-2' ></FaHome> </div>
       
         <div className='w-full rounded-lg  flex justify-between hover:bg-gray-200  items-center'>
         <Link href='' className='text-black font-semibold    p-2 ' onClick={toggleMenu}>  Shop </Link><FaShoppingBag className='text-2xl mx-2'></FaShoppingBag> </div>
         <div className='w-full rounded-lg hover:bg-gray-200  flex justify-between items-center'>
         <Link href='' className='text-black font-semibold    p-2 ' onClick={toggleMenu}>  New Arrivals </Link><FaDollarSign className='text-2xl mx-2'></FaDollarSign> </div>
         <div className='w-full rounded-lg  flex justify-between hover:bg-gray-200  items-center' >
         <Link href='/cart' onClick={toggleMenu} className='text-black font-semibold    p-2 '>  Cart </Link><FaShoppingCart className='text-2xl mx-2'></FaShoppingCart> </div>
          
          <div className="font-bold text-2xl w-full flex flex-col flex-grow justify-center items-center"><Image src={logo}  alt='abryks' width={70} height={70}></Image>
          <p>Abryks</p></div>
          <div className='w-full p-4 m-2  flex justify-between'>
         <Link href='https://www.facebook.com/profile.php?id=100071642654808&mibextid=ZbWKwL'> <FaFacebook className="text-blue-700 text-2xl " /></Link>
         <Link href='https://www.linkedin.com/in/muhammad-abdullah-7266a12b6/' > <FaLinkedin className="text-blue-500 text-2xl" /></Link>
         <Link href="mailto:muhammad11abdullah21@gmail.com"><FaEnvelope className='text-red-400 text-2xl'></FaEnvelope></Link>
          <Link  href='https://t.me/AbD112156'><FaTelegram className="text-blue-400 text-2xl" /></Link>
          
          <Link href='https://github.com/Abdullah-1121'><FaGithub className="text-gray-700 text-2xl"></FaGithub></Link>
          </div>
         </motion.div>
         
       </motion.div>
       </>
       
      )}
      </AnimatePresence>
      
    </nav>
  );
};

export default Navbar;
