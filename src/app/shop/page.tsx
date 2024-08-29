'use client'
import React from 'react'
import Image from 'next/image'
import {useState , useEffect} from 'react'
import { client } from '@/sanity/lib/client'
import banner from '@/assets/Black Yellow Bold Bag Fashion Sale Banner.png'

const page = () => {
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
    product.title.toLowerCase().includes(searchQuery);
   
    
  })
  products.map((product)=>{
    console.log(product.title.toLowerCase())
  })
  setfilteredProducts(filteredProducts)
  console.log(filteredProducts)
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
        </div>
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredProducts.map((product:Product) => (
          <div key={product._id} className="product-card bg-white p-4 shadow-md rounded-lg">
            <Image src={product.ImageUrl} alt='product' width={200} height={200}></Image>
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default page