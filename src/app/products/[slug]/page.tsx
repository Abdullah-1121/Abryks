'use client'
import React from 'react'

import {client} from '@/sanity/lib/client'
import { FaTruck , FaStar} from 'react-icons/fa';
import { useDispatch, UseDispatch } from 'react-redux';
import {addToCart} from '@/redux/CartSlice'
import {useState , useEffect} from 'react'
import Sheet from '@/components/sheet'
import Cartsheet from '@/components/Cartsheet';
import CheckoutButton from '@/components/checkoutbtn'
import Checkout from '@/components/checkoutcomp'
import Link from 'next/link'
import { FaShoppingBag } from 'react-icons/fa';
import {motion} from 'framer-motion'

import Image from 'next/image'



export default  function ProductPage({params}:{
     params:{slug:string}
}){
    const random = Math.floor(Math.random() * (13-2))
    const random2 = random + 4
    const getRandomRating = () => {
      return (Math.random() * (5.0 - 3.8) + 3.8).toFixed(1);
    };

  

  
  // console.log(random , random2 )
  // console.log(params.slug)
  const [products,setproducts]=useState<any>([]);
  const [fproducts,setfproducts]=useState<any>([]);
  const query = `*[_type == "products" && slug.current == "${params.slug}"][0] {
    _id,
      price,
      title,
      Description,
      "slug":slug.current,
      "categoryName": category->title,
      "ImageUrl":image.asset->url
  }  `;
    const fquery = `
    *[_type == "products"][${random}...${random2}] {
    _id,
      price,
      title,
      Description,
      "slug":slug.current,
      "categoryName": category->title,
      "ImageUrl":image.asset->url
  } 

    `
    useEffect(()=>{
      async function getData(){
        const data = await client.fetch(query);
        const fdata = await client.fetch(fquery);
        setproducts(data)
        setfproducts(fdata)

      }
      getData()
    },[])
    // console.log(fproducts)
    let dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);
    const addtoCart = (product:any)=>{
      dispatch(addToCart(product))
      openSheet()
      
    }
    const convars = {
      initial :{
        scale:1
      },
      animate : {
        scale : 0.9,
        transition:{
          duration : 0.2
        }
        
    
      }
    }

      
    
    return (
        <>
         <div className="container mx-auto px-4 py-8 flex flex-grow min-h-screen flex-col">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 flex-grow">
        <div className="w-full lg:w-1/2">
          <Image 
            src={products.ImageUrl}
            alt='Image'
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 *:">
        <p className='text-md '>{products.categoryName}</p>
          <h1 className="text-3xl font-bold mb-4">{products.title}</h1>
          <p className="text-gray-600 mb-4">{products.Description}</p>
          <button className='px-4 py-2 mb-2 bg-black rounded-full w-auto flex space-x-2'><span className='text-white text-sm '> 4.1</span><FaStar className='text-white'></FaStar> </button>
          <p className="text-xl  font-bold mb-2">${products.price}</p>
          <span className='text-sm mb-2'>Incl. plus shipping</span>
          <div className='flex mb-2'>
            <FaTruck></FaTruck><span className='mx-2 text-sm '>3-5 days shipping</span>
          </div>
          <Sheet isOpen={isSheetOpen} onClose={closeSheet}>

       <Cartsheet/>

        {/* Cart items will be listed here */}
        
      </Sheet>
          {/* <div className="flex items-center gap-4 mb-6">
            <button 
              
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200"
            >
              -
            </button>
            <span className="text-lg">1</span>
            <button 
              
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200"
            >
              +
            </button>
            
          </div> */}
          <div className='flex flex-wrap justify-center gap-4  items-center mt-4 '>
          <Link href='' className='mx-2 '><button 
           
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-700 border-2 border-black "
            onClick={()=>{addtoCart({products})}}
          >
            Add to Cart
          </button>
          </Link>
         <Link href='/cart'> <button 
          onClick={()=>{addtoCart({products})}}
          
           className="px-6 py-3 mx-2 font-semibold text-black rounded-lg hover:underline border-2 border-black"
           
         >
           Checkout Now
         </button>
         </Link>
         
            
        
          
          
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full m-2 flex-grow'>
        <div className='w-full'>
          <p className='md:text-2xl text-xl text-center font-semibold '>You may also like these</p>
        </div>
        <div className="product-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 p-2 lg:grid-cols-4 gap-4 mt-4">
  {fproducts.map((product: any) => {
    const randomRating = getRandomRating();
    return (
      <Link href={`/products/${product.slug}`} key={product._id}>
        <motion.div
          variants={convars}
          initial="initial"
          whileHover="animate"
          className="product-card border hover:bg-gray-100 border-gray-300 rounded-lg p-3 shadow-lg flex flex-col justify-between h-full"
        >
          <div className="bg-gray-100 rounded-md">
            <Image
              src={product.ImageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="product-image w-full h-40 object-contain mb-2 rounded"
            />
          </div>

          <h3 className="product-title md:text-lg text-md  font-semibold text-center mt-2">{product.title}</h3>
          <div className="flex justify-between items-center px-2 md:flex-row flex-col">
            <p className="product-price text-black text-lg md:text-2xl font-semibold mx-2">
              ${product.price}
            </p>
            <div className="flex justify-center items-center ">
              <div className='flex '>
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  aria-hidden="true"
                  className="md:h-4 md:w-4 h-2 w-2 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
              </div>
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-1 md:px-2 py-0.5 text-xs md:font-semibold">
                {randomRating}
              </span>
            </div>
          </div>

          <p className="product-category text-gray-500 text-center text-sm md:text-md mt-1 hidden md:block">
            Category: {product.categoryName}
          </p>
          <div className="w-full p-2 justify-center items-center hidden md:flex">
  <button className="md:p-2 p-1 bg-black text-white rounded-md hover:bg-gray-700 w-full flex justify-center items-center">
    Shop Now <FaShoppingBag className="mx-2 md:text-xl text-md text-white" />
  </button>
</div>
        </motion.div>
      </Link>
    );
  })}
</div>

      </div>
    </div>
        </>
    )

}
