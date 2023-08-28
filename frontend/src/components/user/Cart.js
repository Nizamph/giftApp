import React from 'react';
import styles from './cart.module.css';
import useAddToCart from '../../utils/useAddToCart';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteItems,
  removeItems,
  setCartItems,
} from '../../reduxStore/cartSlice';
import { DELETE_CART, UPDATE_CART } from '../../utils/constants';
import Modal from '../../UI/Modal';

const Cart = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const userToken = useSelector((store) => store.auth.userToken);
  const deleteHandler = async (item) => {
    try {
      dispatch(deleteItems({ productId: item.productId }));
      const res = await fetch(DELETE_CART, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({ id: item._id }),
      });
      const deletedData = await res.json();
      console.log('deleted Data is here', deletedData);
    } catch (err) {
      console.log(err);
      alert('something went wrong');
    }
  };

  const quantityHandler = async (item, type) => {
    let hasItem = false;
    let updationId = '';
    let currentQuantity = 0;
    console.log('allProducts from redux', cartItems);
    cartItems.forEach((itm) => {
      if (itm.productId === item.productId) {
        hasItem = true;
        updationId = itm._id;
        currentQuantity = itm.quantity;
      }
    });
    let itemsToUpdate = {};
    if (type === 'increase') {
      itemsToUpdate = {
        id: updationId,
        name: item.name,
        productId: item.productId,
        image: item.image,
        occasion: item.occasion,
        quantity: currentQuantity + 1,
        amount: item.amount,
      };
      dispatch(setCartItems(itemsToUpdate));
    } else if (type === 'decrease' && currentQuantity <= 1) {
      // dispatch(removeItems({productId:item.productId}));
      deleteHandler(item);
    } else {
      itemsToUpdate = {
        id: updationId,
        name: item.name,
        productId: item.productId,
        image: item.image,
        occasion: item.occasion,
        quantity: currentQuantity - 1,
        amount: item.amount,
      };
      dispatch(removeItems({ productId: item.productId }));
    }
    if (currentQuantity >= 1) {
      const res = await fetch(UPDATE_CART, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(itemsToUpdate),
      });
      const data = await res.json();
      console.log('updated data is here', data);
    }
  };

  return (
    <div className={styles.tableRow}>
      <div>{item.name}</div>
      <div>
        <img
          src={item.image}
          alt='random'
          className={styles.itemImage}
        />
      </div>
      <div>
        <button onClick={() => quantityHandler(item, 'decrease')}>-</button>
        {item.quantity}
        <button onClick={() => quantityHandler(item, 'increase')}>+</button>
      </div>
      <div>{item.amount}</div>
      <div>{item.occasion}</div>
      <div>
        <button onClick={() => deleteHandler(item)}>Delete</button>
      </div>
    </div>
  );
};

export default Cart;
