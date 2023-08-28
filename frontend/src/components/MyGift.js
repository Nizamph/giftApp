import React, { useEffect } from 'react';
import styles from '../components/admin/myGifts.module.css';
import Button from '../UI/Button';
import { useSelector, useDispatch } from 'react-redux';
import GetCartItems from '../utils/getCartItems';
import useAddToCart from '../utils/useAddToCart';
const MyGift = ({ product, addToCart }) => {
  GetCartItems();
  const addCartItems = useAddToCart();
  const addToCartHandler = async (product) => {
    await addCartItems(product);
  };

  return (
    <>
      {product.name.length > 0 ? (
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
            <div>Occasion: {product.occasion}</div>
            <div>Delivered In: {product.deliveredIn} days</div>
            <div>In Stock: {product.inStock}</div>
            <div>Price: {product.price}</div>
          </div>
          {addToCart && (
            <Button onClick={() => addToCartHandler(product)}>
              Add to Cart
            </Button>
          )}
        </div>
      ) : (
        <h2 style={{ color: 'white' }}>No Products Found</h2>
      )}
    </>
  );
};

export default MyGift;
