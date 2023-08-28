// MyOrder.js
import React, { useState } from 'react';
import styles from './myOrder.module.css';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import { UPDATE_ORDER_STATUS } from '../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { setFetchValue } from '../reduxStore/uiSlice';

const MyOrder = ({ order, isUpdate }) => {
  const dispatch = useDispatch();
  const { items, _id, orderFrom, totalAmount, orderStatus, totalQuantity } =
    order;

  console.log('id from the order', _id);
  const adminToken = useSelector((store) => store.auth.adminToken);
  // const [giftOrderStatus, setGiftOrderStatus] = useState('ordered');
  // const submitOrderStatusHandler = async (_id) => {
  //   console.log('selected id', _id);
  //   console.log('current status is ', giftOrderStatus);
  //   const res = await fetch(UPDATE_ORDER_STATUS, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${adminToken}`,
  //     },
  //     body: JSON.stringify({ orderId: _id, newOrderStatus: giftOrderStatus }),
  //   });
  //   const data = await res.json();
  //   console.log('data after update the order status', data);
  //   dispatch(setFetchValue());
  // };
  return (
    <div className={styles.myOrderContainer}>
      <h2 style={{ color: 'white' }}>Order Details </h2>
      <h3 style={{ color: 'white' }}>Order id #{_id}</h3>
      {orderFrom !== '' ? (
        <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
          <p style={{ color: 'white' }}>Order from :- </p>{' '}
          <h3 style={{ color: 'white' }}>{orderFrom} </h3>
        </div>
      ) : (
        ''
      )}
      <div className={styles.ordersTable}>
        <div className={styles.tableRow}>
          <div className={styles.columnHeader}>Item</div>
          <div className={styles.columnHeader}>Image</div>
          <div className={styles.columnHeader}>Occasion</div>
          <div className={styles.columnHeader}>Quantity</div>
          <div className={styles.columnHeader}>Amount</div>
        </div>
        {items.map((item) => (
          <div
            key={item._id}
            className={styles.tableRow}>
            <div className={styles.columnData}>{item.name}</div>
            <div className={styles.columnData}>
              <img
                src={item.image}
                alt={item.item}
                className={styles.itemImage}
              />
            </div>
            <div className={styles.columnData}>{item.occasion}</div>
            <div className={styles.columnData}>{item.quantity || 0}</div>
            <div className={styles.columnData}>${item.amount || 0}</div>
          </div>
        ))}
      </div>
      <div className={styles.totalRow}>
        <div className={styles.totalAmount}>
          Total Quantity: {totalQuantity}
        </div>
        <div className={styles.totalAmount}>Total Amount: ${totalAmount}</div>
        <div
          onClick={() => console.log('div id', _id)}
          className={styles.orderStatus}>
          Order Status: {orderStatus}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
