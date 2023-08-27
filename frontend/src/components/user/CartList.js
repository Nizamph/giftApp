// Cart.js
import React, { useEffect, useState } from 'react';
import styles from './cart.module.css';
import Cart from './Cart';
import { GET_ALL_ITEMS_TO_CART } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { setAllCartItems, setCartItems } from '../../reduxStore/cartSlice';
import GetCartItems from '../../utils/getCartItems';

const CartList = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  GetCartItems();

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      <div className={styles.cartTable}>
        <div className={styles.tableHeader}>
          <div>Name</div>
          <div>Image</div>
          <div>Quantity</div>
          <div>Amount</div>
          <div>Occasion</div>
          <div>Actions</div>
        </div>
        {cartItems?.map((itm) => (
          <Cart
            key={itm._id}
            item={itm}
          />
        ))}
      </div>
    </div>
  );
};

export default CartList;
