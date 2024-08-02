'use client'
import React from 'react'
import CartProvider from '@/redux/CartProvider'
import Shoppingcart from '@/components/cart'

const cart = () => {
  return (
    <CartProvider>
        <Shoppingcart></Shoppingcart>
    </CartProvider>
  )
}

export default cart