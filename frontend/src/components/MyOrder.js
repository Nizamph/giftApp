// MyOrder.js
import React from 'react';
import styles from './myOrder.module.css';

const MyOrder = ({ order, isUpdate }) => {
  const { items, _id, totalAmount, orderStatus, totalQuantity } = order;

  // const totalQuantity = items.reduce(
  //   (total, item) => total + (item.quantity || 0),
  //   0
  // );

  return (
    <div className={styles.myOrderContainer}>
      <h2 style={{ color: 'white' }}>Order Details </h2>
      <h3 style={{ color: 'white' }}>Order id #{_id} </h3>
      <div className={styles.ordersTable}>
        <div className={styles.tableRow}>
          <div className={styles.columnHeader}>Item</div>
          <div className={styles.columnHeader}>Image</div>
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
        {isUpdate && (
          <button className={styles.updateButton}>Update Status</button>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
