import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'
// Import your reducers here
// import cartReducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    cart:cartReducer
  },
});

export default store;
