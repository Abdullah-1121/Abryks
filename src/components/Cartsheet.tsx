'use client'
import React from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useState , useEffect } from 'react'
import CheckoutButton from './checkoutbtn'
import { addToCart , removeProduct , Addone , removeOne ,loadCart} from '@/redux/CartSlice'
import Link from 'next/link'


const Cartsheet = () => {
    const cart = useSelector((state:any) => state.cart);
    
  const dispatch = useDispatch();
  const handleRemoveFromCart = (product:any) => { dispatch(removeProduct(product)); };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cartFromLocalStorage = JSON.parse(localStorage.getItem('cartItems') || '{}');
      if (cartFromLocalStorage.cartItems) {
        dispatch(loadCart(cartFromLocalStorage));
      }
    }
  }, [dispatch]);

  // Save cart to local storage whenever cart items change
  useEffect(() => {
    if (typeof window !== 'undefined' && cart.cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cart.cartItems));
    }
  }, [cart.cartItems]);
  
  
  return (
    <>
    <h2 className="text-xl font-bold">Shopping Cart</h2>
        <div className="h-full w-full flex flex-col justify-start items-center p-2 m-2 overflow-y-auto">
  {cart.cartItems.slice(0,2).map((item: any) => (
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
        <p className="text-gray-600 text-[10px]">{item.price}</p>

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
    <div className='flex justify-between mb-2'><p>Items</p>{cart.totalQuantity}</div>
    <div className='flex justify-between mb-2'><p>Total</p>${cart.totalAmount}</div>
    <div className='mb-2'><p className='text-[10px] text-gray-400'>Tax included and shipping calculated at checkout</p></div>
    
    <div className='mb-2'><CheckoutButton ></CheckoutButton></div>
    <div><Link href={'/cart'} className=''><button className='bg-white text-black border-2 border-black w-full p-2 rounded-md hover:underline'>View in Cart</button></Link></div>
  </div>
</div>
</>
  )
}

export default Cartsheet