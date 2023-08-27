import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../reduxStore/cartSlice';
import { ADD_ITEMS_TO_CART, UPDATE_CART } from './constants';
async function addCartItems(dispatch, userToken, cartItems, product) {
  console.log('adding items function');
  console.log('productId from product', product._id);
  let hasItem = false;
  let updationId = '';
  let currentQuantity = 0;
  console.log('allProducts from redux', cartItems);
  cartItems.forEach((itm) => {
    if (itm.productId === product._id) {
      console.log('condition working');
      hasItem = true;
      updationId = itm._id;
      currentQuantity = itm.quantity;
    }
  });
  if (!hasItem) {
    const itemsToAdd = {
      name: product.name,
      productId: product._id,
      image: product.image,
      quantity: 1,
      amount: product.price,
    };
    const res = await fetch(ADD_ITEMS_TO_CART, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify(itemsToAdd),
    });
    const data = await res.json();
    console.log('data after add to cart', data);
    dispatch(
      setCartItems({
        _id: data.productId,
        name: data.name,
        productId: data.productId,
        image: data.image,
        quantity: data.quantity,
        amount: data.amount,
      })
    );
  } else {
    let itemsToUpdate = {
      id: updationId,
      name: product.name,
      productId: product._id,
      image: product.image,
      quantity: currentQuantity + 1,
      amount: product.price,
    };

    dispatch(setCartItems(itemsToUpdate));
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
}

export default addCartItems;
