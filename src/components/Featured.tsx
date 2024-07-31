'use client'
import React from 'react'
import Products from '@/lib/products'
import {useState,useEffect} from 'react'
import Link from 'next/link'

import Image from 'next/image';
import {motion} from 'framer-motion'

const Featured = () => {
 
  const [products, setProducts] = useState([]);

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
    <div className="featured-products py-8">
      <div className=' flex justify-between'><h2 className="text-2xl font-bold  mb-6 ml-4">New Arrivals</h2><span className='mx-4 mt-3 text-blue-400 flex '>See All</span></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product:any) => (
          <motion.div variants={convars} initial="initial" whileHover="animate" key={product._id} className="product-card border hover:bg-gray-100 border-gray-300 rounded-lg p-4 shadow-lg flex flex-col justify-center">
            <div className=''><Image src={product.ImageUrl} alt={product.title} width={300} height={300} className="product-image w-full h-48 object-contain mb-4 rounded" ></Image></div>
          <Link href={`/products/${product.slug}`}> <h3 className="product-title text-lg font-bold text-center">{product.title}</h3>
            <p className="product-price text-blue-600 text-lg text-center">${product.price}</p>
            {/* <p className="product-description text-gray-400 text-sm text-center">{product.Description}</p> */}
            <p className="product-category text-gray-500 text-center">Category: {product.categoryName}</p></Link>
            <div className=' flex w-full p-2  justify-center items-center '>
              <button className='p-2 bg-blue-500 text-white  rounded-lg hover:bg-blue-700'>Add to Cart</button>
            </div>
            
            
            
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Featured