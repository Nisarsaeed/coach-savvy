// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

store.subscribe(() => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart));
  }
});