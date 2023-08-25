import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reduxStore/authSlice';
const store = configureStore({
  reducer: { auth: authReducer },
});

export default store;
