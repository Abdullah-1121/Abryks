'use client'
import React from 'react'
import Product from '@/lib/SingleProd'
import {useState , useEffect} from 'react'

const page = ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const pr:any=''
    console.log(slug)
    const [products , setproducts]=useState([]);
    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const fetchProd = await Product(slug);
                
                setproducts(fetchProd);
                

            }catch(error){
                console.log(`Error while fetching products : ${error}`)

            }
        }
        getProduct();
    },[])
    console.log(slug)
  return (
    <div>page</div>
  )
}

export default page