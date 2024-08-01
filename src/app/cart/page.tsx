import React from 'react'
import CartProvider from '@/redux/CartProvider'

const cart = () => {
  return (
    <CartProvider>
        <div>cart</div>
    </CartProvider>
  )
}

export default cart