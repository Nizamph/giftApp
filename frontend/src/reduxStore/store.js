import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reduxStore/authSlice';
import cartReducer from '../reduxStore/cartSlice';
import uiReducer from '../reduxStore/uiSlice';
const store = configureStore({
  reducer: { auth: authReducer, cart: cartReducer, ui: uiReducer },
});

export default store;
