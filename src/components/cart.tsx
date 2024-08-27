'use Client'
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addToCart , removeProduct , Addone , removeOne} from '@/redux/CartSlice'
import Image from 'next/image'
import CheckoutButton from './checkoutbtn'
import {FaTrash} from 'react-icons/fa'
import Link from 'next/link'
const shoppingcart = () =>{
  const cart = useSelector((state:any) => state.cart);
   const dispatch = useDispatch();
    const handleAddOne = (product:any) => { dispatch(Addone(product)); }; 
    const handleRemoveOne = (product:any) => { dispatch(removeOne(product)); }; 
    const handleRemoveFromCart = (product:any) => { dispatch(removeProduct(product)); };
     const handleaddtoCart = (product:any)=>{ dispatch(addToCart(product)); }
    //  console.log('i am in cart')
    //  console.log('cart' )
    //  console.log(cart)
    //  console.log('cartitem' )
    //  console.log(cart.cartItems)
      
     return (
      <div className='flex w-full min-h-screen border-2 border-black flex-col flex-grow'>
        <div className='heading w-full m-2 p-6 border-2'><p className='textt-xl md:text-2xl font-semibold'>YOUR CART</p></div>
        <div className='flex w-full border-2 flex-grow'>
          {cart.cartItems.length === 0 ? (
            <div className='flex border-2 justify-center items-center w-full flex-col'>
              <p className='text-xl md:text-2xl  mb-2'>No Items in the Cart</p>
              <Link href='/'><button className='bg-white px-2 py-2 font-semibold border-2 border-black rounded-lg shadow-xl hover:underline'>Continue Shopping</button></Link>
            </div>
            
          ):(
           <div className='flex w-full border-2 border-red-500 flex-col'>
           
              {cart.cartItems.map((item: any) => (
                <div key={item._id} className='flex w-[70%] border-2 justify-between items-center border-black m-2 flex-col md:flex-row'>
                  <div className='image-cont border-2 flex'>
                  <Image
                src={item.ImageUrl}
                alt={item.title}
                width={150}
                height={150}
                className="rounded- mx-2"
              />
               <div className='flex flex-col justify-center items-start mx-2'>
                 <p className='text-lg  md:text-xl font-bold'>{item.title}</p>
                    <p className='text-md  md:text-lg '><span className='font-bold text-md '>Price : </span>${item.price}</p>
                    <p className='text-md  md:text-lg '><span className='font-bold text-md '>Quantity : </span>{item.quantity}</p>
                    <div className='flex border-2 '>
                      <div className='border-2  px-2'><button className='font-bold' onClick={() => handleAddOne(item)}>+</button></div>
                      <div className='border-2  px-4'>{item.quantity}</div>
                      <div><button className='font-bold border-2  px-2' onClick={() => handleRemoveOne(item)}>-</button></div>
                    </div>
                    </div>
                  </div>
                 
                 
                    
                  
                    
                  
                  <div className='border-2 h-full'><FaTrash className='text-red-600' onClick={() => handleRemoveFromCart(item)}></FaTrash></div>
                 
                </div>
                
              ))}
          
            <div className='border-2 border-green-500'></div>
           </div>

          )}
          
        </div>
      </div>
    //   <div className="p-4 ">
     
    //   <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
    //     {cart.cartItems.map((item: any) => (
    //       <div key={item._id} className="bg-white rounded-lg shadow-md p-4">
    //         <div className="">
    //           <Image
    //             src={item.ImageUrl}
    //             alt={item.title}
    //             width={150}
    //             height={150}
    //             className="rounded-md"
    //           />
    //         </div>
    //         <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
    //         <p className="text-gray-600">Price: ${item.price}</p>
            
    //         <div className="flex items-center mt-2 space-x-2">
    //           <button
    //             onClick={() => handleAddOne(item)}
    //             className="bg-blue-500 text-white px-3 py-1 rounded-md"
    //           >
    //             +
    //           </button>
    //           <p className="text-gray-600">{item.quantity}</p>
    //           <button
    //             onClick={() => handleRemoveOne(item)}
    //             className="bg-white text-blue-500 px-3 py-1 rounded-md"
    //           >
    //             -
    //           </button>

    //           <button
    //             onClick={() => handleRemoveFromCart(item)}
    //             className="bg-gray-500 text-white px-3 py-1 rounded-md"
    //           >
    //             Remove
    //           </button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
    //     <p className="text-lg font-semibold">Total Quantity: {cart.totalQuantity}</p>
    //     <p className="text-lg font-semibold">Total Amount: ${cart.totalAmount.toFixed(2)}</p>
    //     <CheckoutButton></CheckoutButton>
    //   </div>
    // </div>
     )
}
export default shoppingcart;