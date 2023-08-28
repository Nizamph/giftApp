import React, { useEffect, useState } from 'react';
import styles from './cart.module.css';
import Cart from './Cart';
import {
  CLEAR_CART,
  GET_ALL_ITEMS_TO_CART,
  PLACE_ORDER,
} from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import {
  setAllCartItems,
  setCartItems,
  addAddress,
  clearCart,
} from '../../reduxStore/cartSlice';
import GetCartItems from '../../utils/getCartItems';
import Modal from '../../UI/Modal';
import { toast } from 'react-toastify';

const CartList = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const userAddress = useSelector((store) => store.cart.address);
  const userToken = useSelector((store) => store.auth.userToken);
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  GetCartItems();
  const totalAmount = cartItems?.reduce((acc, curr) => {
    return (acc = acc + curr.amount * curr.quantity);
  }, 0);
  const totalQuantity = cartItems?.reduce((acc, curr) => {
    return (acc = acc + curr.quantity);
  }, 0);
  let orderNeedToPlace = {};
  if (cartItems) {
    orderNeedToPlace = {
      items: [...cartItems],
      totalAmount: totalAmount,
      totalQuantity: totalQuantity,
      userAddress: userAddress,
    };
  }
  const onOrderhandler = async () => {
    try {
      const res = await fetch(PLACE_ORDER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(orderNeedToPlace),
      });

      const data = await res.json();
      console.log('data after orderplaced', data);
      if (data?.placedOrder._id) {
        toast.success('Order is placed successfully');
      } else if (data?.errorMessage) {
        toast.error('address is required');
      }
      if (data?.placedOrder._id) {
        dispatch(clearCart());
        localStorage.clear('address');
        const res = await fetch(CLEAR_CART, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify(orderNeedToPlace),
        });
        const data = await res.json();
        console.log('clearedCart meassage from backend', data);
        if (data?.message) {
          toast.success('cart is cleared');
        }
      }
    } catch (err) {
      toast.error('You should add your address');
    }
  };
  const sumbitAddressHandler = () => {
    dispatch(addAddress(address));
  };

  return (
    <>
      {cartItems?.length > 0 ? (
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
          <div className={styles.cartFooter}>
            <div>
              <Modal
                setValue={setAddress}
                value={address}
                submitData={sumbitAddressHandler}
                inputType={'text'}
                openButtonName={'Add Address'}
                contentTitle={'Your is required'}
                contentDescription={'Enter your current address for delivery'}
              />
            </div>
            <div className={styles.totalSection}>
              {userAddress !== null ? (
                <span>
                  Address:
                  {userAddress}
                </span>
              ) : (
                <span>Address must be required for order the items</span>
              )}
            </div>
            <div className={styles.totalSection}>
              <span>Total Quantity:{totalQuantity}</span>
              <span>Total Amount: {totalAmount}</span>
            </div>
          </div>
          <div
            className={styles.cartFooter}
            style={{ borderTop: 'none', justifyContent: 'end' }}>
            <Button onClick={onOrderhandler}>Order</Button>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: '100%',
            height: '93vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <h3 style={{ color: 'white', fontSize: '50px' }}>Cart Is Empty</h3>
        </div>
      )}
    </>
  );
};

export default CartList;
