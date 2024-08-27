'use client'
import React from 'react'

import {client} from '@/sanity/lib/client'
import { FaTruck , FaStar} from 'react-icons/fa';
import { useDispatch, UseDispatch } from 'react-redux';
import {addToCart} from '@/redux/CartSlice'
import {useState , useEffect} from 'react'

import Image from 'next/image'

// async function getdata(slug:string){
//     const query = `*[_type == "products" && slug.current == "${slug}"][0] {
//   _id,
//     price,
//     title,
//     Description,
//     "slug":slug.current,
//     "categoryName": category->title,
//     "ImageUrl":image.asset->url
// }  `;
//   const data = await client.fetch(query);
//   return data
// }

export default  function ProductPage({params}:{
     params:{slug:string}
}){
  console.log(params.slug)
  const [products,setproducts]=useState<any>([]);
  const query = `*[_type == "products" && slug.current == "${params.slug}"][0] {
    _id,
      price,
      title,
      Description,
      "slug":slug.current,
      "categoryName": category->title,
      "ImageUrl":image.asset->url
  }  `;
    useEffect(()=>{
      async function getData(){
        const data = await client.fetch(query);
        setproducts(data)

      }
      getData()
    },[])
    let dispatch = useDispatch()
    const addtoCart = (product:any)=>{
      dispatch(addToCart(product))
    }
  
      
    
    return (
        <>
         <div className="container mx-auto px-4 py-8 flex flex-grow">
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
          <button className='px-4 py-2 mb-2 bg-blue-500 rounded-full w-auto flex space-x-2'><span className='text-white text-sm '> 4.1</span><FaStar className='text-white'></FaStar> </button>
          <p className="text-xl  font-bold mb-2">${products.price}</p>
          <span className='text-sm mb-2'>Incl. plus shipping</span>
          <div className='flex mb-2'>
            <FaTruck></FaTruck><span className='mx-2 text-sm '>3-5 days shipping</span>
          </div>
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
          <button 
           
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={()=>{addtoCart({products})}}
          >
            Add to Cart
          </button>
          <button 
           
            className="px-6 py-3 border-2  text-blue-600 rounded-lg hover:bg-gray-200 mx-4"
          >
            Checkout Now
          </button>
        </div>
      </div>
    </div>
        </>
    )

}
