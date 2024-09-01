'use client'
import React from 'react'
import Image from 'next/image'
import {useState , useEffect} from 'react'
import { client } from '@/sanity/lib/client'
import banner from '@/assets/Black Yellow Bold Bag Fashion Sale Banner.png'
import Link from 'next/link'
import{ motion }from 'framer-motion'
import { FaShoppingBag } from 'react-icons/fa'


const page = () => {

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
  const getRandomRating = () => {
    return (Math.random() * (5.0 - 3.8) + 3.8).toFixed(1);
  };

  type Product = {
    _id: string;
    price: number;
    title: string;
    Description: string;
    "slug": string;
    "categoryName": string;
    "ImageUrl": string;
  }
 const [products , setProducts] = useState<Product[]>([])
 const [filteredProducts, setfilteredProducts] = useState<Product[]>([])
 const [searchTerm, setSearchTerm] = useState('')
 useEffect(() => {
  const fetchProducts = async () => {
    
  
  const query = `*[_type == "products"] | order(_createdAt desc){
  _id,
  price,
  title,
  Description,
  "slug": slug.current,
  "categoryName": category->title,
  "ImageUrl": image.asset->url
}`;
const allProducts = await client.fetch(query);
console.log(allProducts)
setProducts(allProducts)
setfilteredProducts(allProducts)
  }
  fetchProducts()
   
 },[])
 // for search functionality
 const handleChange = (e :  React.ChangeEvent<HTMLInputElement>)=>{
  const searchQuery = e.target.value.toLowerCase()
  console.log(searchQuery)
  setSearchTerm(searchQuery)
 if(searchQuery){
 
  const filteredProducts = products.filter((product)=>{
    product.title.toLowerCase()===searchQuery;
    
   
    
  })
  
  products.map((product)=>{
    console.log(product.title.toLowerCase())
  })
  setfilteredProducts(filteredProducts)
  console.log("filtered products : ", filteredProducts , " search query : " , searchQuery)
 }else {
  setfilteredProducts(products)
 }
 
 }
  return (
    <div className='flex flex-grow min-h-screen flex-col'>
        <div className='w-full bg-gray-300 flex justify-center items-center mb-4'>
      <Image src={banner} width={800} height={500} alt='new arrivals' className=''></Image>
        

        </div>
        <div className='search-bar flex justify-start items-center w-full '>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder='search for product , category' className='px-2 py-1 border-gray-500 m-2 rounded-md text-sm text-gray-300' />
            <input type="checkbox" name='men'  />
        </div>
        <div className="product-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 p-2 lg:grid-cols-4 gap-4 mt-4">
  {filteredProducts.map((product: any) => {
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
  )
}

export default page