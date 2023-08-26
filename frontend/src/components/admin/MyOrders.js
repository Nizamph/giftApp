// MyOrder.js
import React from 'react';
import styles from './myOrder.module.css';

const MyOrder = ({ order }) => {
  const { items, totalAmount, orderStatus } = order;

  const totalQuantity = items.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <div className={styles.myOrderContainer}>
      <h2>Order Details</h2>
      <div className={styles.ordersTable}>
        <div className={styles.tableRow}>
          <div className={styles.columnHeader}>Item</div>
          <div className={styles.columnHeader}>Image</div>
          <div className={styles.columnHeader}>Quantity</div>
          <div className={styles.columnHeader}>Amount</div>
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.tableRow}>
            <div className={styles.columnData}>{item.item}</div>
            <div className={styles.columnData}>
              <img
                src={item.image}
                alt={item.item}
                className={styles.itemImage}
              />
            </div>
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
        <div className={styles.orderStatus}>Order Status: {orderStatus}</div>
        <button className={styles.updateButton}>Update Status</button>
      </div>
    </div>
  );
};

export default MyOrder;
