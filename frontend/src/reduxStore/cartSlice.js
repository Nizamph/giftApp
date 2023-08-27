import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    setCartItems: (state, action) => {
      // state.cartItems = [...state.cartItems,action.payload]
      let isItem = false;
      state.cartItems = state.cartItems?.map((itm) => {
        if (itm.productId === action.payload.productId) {
          isItem = true;
          itm = { ...itm, quantity: itm.quantity + 1 };
        }
        return itm;
      });
      if (!isItem) {
        state.cartItems = [...state.cartItems, action.payload];
      }
      console.log('ui update cart', state.cartItems);
    },
    removeItems: (state, action) => {
      let isQuantityZero = true;
      state.cartItems = state.cartItems.map((itm) => {
        if (itm.productId === action.payload.productId && itm.quantity > 0) {
          isQuantityZero = false;
          itm = { ...itm, quantity: itm.quantity - 1 };
        }
        return itm;
      });
      if (isQuantityZero) {
        state.cartItems = state.cartItems.filter((itm) => {
          if (itm.productId === action.payload.productId) {
            return false;
          }
          return itm;
        });
      }
    },
    deleteItems: (state, action) => {
      state.cartItems = state.cartItems.filter((itm) => {
        return itm.productId !== action.payload.productId;
      });
    },
    setAllCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const {
  setCartItems,
  removeItems,
  setTotalQuantity,
  setTotalAmount,
  setAllCartItems,
  deleteItems,
} = cartSlice.actions;
export default cartSlice.reducer;
