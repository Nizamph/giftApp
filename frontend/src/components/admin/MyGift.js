import React from 'react';
import styles from './myGifts.module.css';
const MyGift = ({ product }) => {
  return (
    <div
      key={product._id}
      className={styles.productBox}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{product.name}</div>
        <div>Delivered In: {product.deliveredIn} days</div>
        <div>In Stock: {product.inStock}</div>
      </div>
    </div>
  );
};

export default MyGift;
