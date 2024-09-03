'use client'
import React from 'react'
import Products from '@/lib/products'
import {useState,useEffect} from 'react'
import Link from 'next/link'
import { useDispatch, UseDispatch } from 'react-redux'
import { addToCart } from '@/redux/CartSlice'
import Image from 'next/image';
import {motion} from 'framer-motion'
import Star from '@/components/stars'
import { FaShoppingBag } from 'react-icons/fa'

const Featured = () => {
 const dispatch = useDispatch();
 const addtoCart = (product:any)=>{
  dispatch(addToCart(product))
 }
  const [products, setProducts] = useState([]);
  const getRandomRating = () => {
    return (Math.random() * (5.0 - 3.8) + 3.8).toFixed(1);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProducts = await Products();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    getProducts();
  }, []);

   
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
    // <div className='flex w-full border-2 bp'>Featured</div>
    <div className="featured-products py-8" id='featured'>
      <div className=' flex justify-between'><h2 className="text-2xl font-bold  mb-6 ml-4">New Arrivals</h2><Link href='/shop'><span className='mx-4 mt-3 text-blue-400 flex '>See All</span></Link></div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product:any) => {
            const randomRating = getRandomRating();
         return(
          <Link href={`/products/${product.slug}`} key={product._id}>
          <motion.div variants={convars} initial="initial" whileHover="animate" key={product._id} className="product-card border hover:bg-gray-100 border-gray-300 rounded-lg p-4 shadow-lg flex flex-col justify-center h-full">
            <div className=' bg-gray-100 rounded-md'><Image src={product.ImageUrl} alt={product.title} width={300} height={300} className="product-image w-full h-48 object-contain mb-4 rounded" ></Image></div>
          
          <h3 className="product-title text-lg  text-center ">{product.title}</h3>
          <div className='flex justify-between items-center  px-2'>
            <p className="product-price text-black text-3xl font-semibold mx-2">${product.price}</p>
            <div className='flex '>
            <svg aria-hidden="true" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{randomRating}</span>
        </div>
            
            </div>
            
            {/* <p className="product-description text-gray-400 text-sm text-center">{product.Description}</p> */}
            <p className="product-category text-gray-500 text-center">Category: {product.categoryName}</p>
            <div className=' flex w-full p-2  justify-center items-center  '>
              <button className='p-2 bg-gray-600 text-white  rounded-md hover:bg-gray-700 w-full flex justify-center items-center' >Shop Now <FaShoppingBag className=' mx-2 text-xl text-white'></FaShoppingBag></button>
            </div>
            
            
            
          </motion.div>
          </Link>
         )
})}
      </div>
    </div>
  )
}

export default Featured