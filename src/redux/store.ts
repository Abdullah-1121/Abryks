import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
// import cartReducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    // Add your reducers here
    // cart: cartReducer,
  },
});

export default store;
