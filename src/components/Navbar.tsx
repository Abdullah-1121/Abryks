'use client'
import Link from 'next/link'
import { useState , useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { addToCart , removeProduct , Addone , removeOne} from '@/redux/CartSlice'
import {motion , AnimatePresence} from 'framer-motion'
import { useSession, signIn, signOut } from "next-auth/react";
import { Toaster, toast } from 'sonner'
import Image from 'next/image'
import logo from '@/assets/transparent_2024-08-20T06-07-09 (1).png'
import {FaHome} from 'react-icons/fa'
import Sheet from '@/components/sheet';
import CheckoutButton from './checkoutbtn';
import { FaFacebook, FaTwitter, FaLinkedin ,FaTelegram ,FaTimes ,FaEnvelope, FaBars , FaInstagram , FaGithub , FaShoppingBag , FaShoppingCart , FaDollarSign } from 'react-icons/fa';



const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);
  const cart = useSelector((state:any) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (product:any) => { dispatch(removeProduct(product)); };
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
    <nav className=" p-2 mx-2  rounded-xl shadow-xl border-2  bg-white">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="font-bold text-2xl flex justfiy-center items-center"><Image src={logo} alt='abryks' width={50} height={50}></Image> <p>ₐbᵣyₖₛ</p></div>
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
          <div>
      <div onClick={openSheet}>
        <FaShoppingCart className="text-3xl text-gray-600" />
      </div>
      <Sheet isOpen={isSheetOpen} onClose={closeSheet}>
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <div className="h-full w-full flex flex-col justify-start items-center p-2 m-2 overflow-y-auto">
  {cart.cartItems.map((item: any) => (
    <div
      key={item._id}
      className="bg-white rounded-lg shadow-md p-4 mb-2 flex items-center w-full "
    >
      {/* Product Image */}
      <div className="flex-shrink-0 h-[100px] w-[100px] overflow-hidden rounded-md border border-gray-200 ">
        <Image
          src={item.ImageUrl}
          alt={item.title}
          width={100}
          height={100}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Product Details */}
      <div className="ml-4 flex flex-col justify-between flex-grow">
        <h2 className="text-[14px] font-semibold">{item.title}</h2>
        <p className="text-gray-600 text-[10px]">${item.price}</p>

        {/* Quantity and Remove */}
        <div className="flex items-center justify-between mt-2">
          <button
            onClick={() => handleRemoveFromCart(item)}
            className="text-red-500 text-[10px] hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  ))}
  <div className='flex flex-col '>
    
    <div className='flex justify-between mb-2'><p>Subtotal</p><p>${cart.totalAmount}</p></div>
    <div className='flex justify-between mb-2'><p>Total:</p>${cart.totalAmount}</div>
    <div className='mb-2'><p className='text-[10px] text-gray-400'>Tax included and shipping calculated at checkout</p></div>
    
    <div className='mb-2'><CheckoutButton ></CheckoutButton></div>
    <div><Link href={'/cart'} className=''><button className='bg-white text-black border-2 border-black w-full p-2 rounded-md hover:underline'>View in Cart</button></Link></div>
  </div>
</div>

        {/* Cart items will be listed here */}
        
      </Sheet>
    </div>
        </div>
        <div className="md:hidden flex items-center">
        <div className='m-2'>
      <div onClick={openSheet}>
        <FaShoppingCart className="text-3xl text-gray-600" />
      </div>
      <Sheet isOpen={isSheetOpen} onClose={closeSheet}>
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <div className="h-full w-full flex flex-col justify-start items-center p-2 m-2 overflow-y-auto">
  {cart.cartItems.map((item: any) => (
    <div
      key={item._id}
      className="bg-white rounded-lg shadow-md p-4 mb-2 flex items-center w-full "
    >
      {/* Product Image */}
      <div className="flex-shrink-0 h-[100px] w-[100px] overflow-hidden rounded-md border border-gray-200 ">
        <Image
          src={item.ImageUrl}
          alt={item.title}
          width={100}
          height={100}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Product Details */}
      <div className="ml-4 flex flex-col justify-between flex-grow">
        <h2 className="text-[14px] font-semibold">{item.title}</h2>
        <p className="text-gray-600 text-[10px]">${item.price}</p>

        {/* Quantity and Remove */}
        <div className="flex items-center justify-between mt-2">
          <button
            onClick={() => handleRemoveFromCart(item)}
            className="text-red-500 text-[10px] hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  ))}
  <div className='flex flex-col '>
    
    <div className='flex justify-between mb-2'><p>Subtotal</p><p>${cart.totalAmount}</p></div>
    <div className='flex justify-between mb-2'><p>Total:</p>${cart.totalAmount}</div>
    <div className='mb-2'><p className='text-[10px] text-gray-400'>Tax included and shipping calculated at checkout</p></div>
    
    <div className='mb-2'><CheckoutButton ></CheckoutButton></div>
    <div><Link href={'/cart'} className=''><button className='bg-white text-black border-2 border-black w-full p-2 rounded-md hover:underline'>View in Cart</button></Link></div>
  </div>
</div>

        {/* Cart items will be listed here */}
        
      </Sheet>
    </div>
          <button onClick={toggleMenu}>
          <FaBars className='text-3xl text-gray-600'></FaBars>
          </button>
        </div>
      </div>
      <AnimatePresence>
     {isOpen && (
      <>
       <div
       className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
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
          <p>ₐbᵣyₖₛ</p></div>
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
