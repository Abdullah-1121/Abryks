'use Client'
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addToCart , removeProduct , Addone , removeOne} from '@/redux/CartSlice'
import Image from 'next/image'
import CheckoutButton from './checkoutbtn'
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
      <div className="p-4">
     
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cart.cartItems.map((item: any) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="">
              <Image
                src={item.ImageUrl}
                alt={item.title}
                width={150}
                height={150}
                className="rounded-md"
              />
            </div>
            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
            <p className="text-gray-600">Price: ${item.price}</p>
            
            <div className="flex items-center mt-2 space-x-2">
              <button
                onClick={() => handleAddOne(item)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md"
              >
                +
              </button>
              <p className="text-gray-600">{item.quantity}</p>
              <button
                onClick={() => handleRemoveOne(item)}
                className="bg-white text-blue-500 px-3 py-1 rounded-md"
              >
                -
              </button>

              <button
                onClick={() => handleRemoveFromCart(item)}
                className="bg-gray-500 text-white px-3 py-1 rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <p className="text-lg font-semibold">Total Quantity: {cart.totalQuantity}</p>
        <p className="text-lg font-semibold">Total Amount: ${cart.totalAmount.toFixed(2)}</p>
        <CheckoutButton></CheckoutButton>
      </div>
    </div>
     )
}
export default shoppingcart;