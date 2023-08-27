// MyOrderList.js
import React from 'react';
import MyOrder from '../MyOrder'; // Make sure to adjust the import path
import styles from '../../components/myOrder.module.css';

const defaultOrders = [
  {
    _id: {
      $oid: '64e66f7833f5c8663b4e61f2',
    },
    items: [
      {
        item: 'flower',
        image: 'image.jpg',
        quantity: 4,
        amount: 109,
      },
      {
        item: 'rocket',
        image: 'imag.jpg',
        quantity: 2,
        amount: 109,
      },
    ],
    totalQuantity: 6,
    totalAmount: 2323,
    userId: {
      $oid: '64e65b1146d5270cd54207e0',
    },
    __v: 0,
    orderStatus: 'shipped',
  },
  {
    _id: {
      $oid: '64e66f7833f5c8663b4e61f2',
    },
    items: [
      {
        item: 'cap',
        image: 'imag.jpg',
        quantity: 4,
        amount: 109,
      },
      {
        item: 'jacket',
        image: 'imag.jpg',
        quantity: 4,
        amount: 109,
      },
    ],
    totalQuantity: 6,
    totalAmount: 2323,
    userId: {
      $oid: '64e65b1146d5270cd54207e0',
    },
    __v: 0,
    orderStatus: 'shipped',
  },
];

const MyOrderList = () => {
  return (
    <div className={styles.myOrderListContainer}>
      {defaultOrders.map((order, index) => (
        <MyOrder
          key={index}
          order={order}
          isUpdate={true}
        />
      ))}
    </div>
  );
};

export default MyOrderList;
