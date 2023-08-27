import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reduxStore/authSlice';
import cartReducer from '../reduxStore/cartSlice';
const store = configureStore({
  reducer: { auth: authReducer, cart: cartReducer },
});

export default store;
