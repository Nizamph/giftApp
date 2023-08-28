import React from 'react';
import styles from './addGifts.module.css';
import { useState } from 'react';
import Button from '../../UI/Button';
import { ADD_PRODUCT } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
const AddGifts = () => {
  // (e) => setImage(e.target.files[0])
  const token = useSelector((store) => store.auth.adminToken);
  console.log('token', token);
  const [inputValues, setInputValues] = useState({
    productName: '',
    productImg: '',
    occasion: '',
    productPrice: 0,
    deliveredIn: 0,
    inStock: 0,
  });

  const onChangeHandler = (e) => {
    setInputValues((prevVal) => {
      return { ...prevVal, [e.target.name]: e.target.value };
    });
  };

  const product = {
    name: inputValues.productName,
    image: inputValues.productImg,
    occasion: inputValues.occasion,
    price: inputValues.productPrice,
    deliveredIn: inputValues.deliveredIn,
    inStock: inputValues.inStock,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submiting');
    try {
      const res = await fetch(ADD_PRODUCT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });
      const data = await res.json();
      console.log('data after addProduct', data);
      if (data?.addedProduct) {
        toast.success(`${data?.addedProduct?.name} is added as product`);
      }

      setInputValues({
        productName: '',
        productImg: '',
        occasion: '',
        productPrice: 0,
        deliveredIn: 0,
        inStock: 0,
      });
    } catch (err) {
      toast.error('something went wrong');
    }
  };
  console.log('input values', inputValues);
  return (
    <div style={{ marginTop: '100px' }}>
      <div className={styles.formContainer}>
        <h2
          style={{
            color: 'white',
            fontFamily: 'sans-serif',
            padding: '4px',
            paddingBottom: '6px',
          }}>
          Add Product
        </h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formField}>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='productName'
              id='name'
              placeholder='name of the product'
              value={inputValues.productName}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor='image'>Image</label>
            <input
              style={{ color: 'black' }}
              type='text'
              name='productImg'
              value={inputValues.productImg}
              onChange={onChangeHandler}
              placeholder='enter image URL'
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor='image'>Occasion</label>
            <input
              style={{ color: 'black' }}
              type='text'
              name='occasion'
              value={inputValues.occasion}
              onChange={onChangeHandler}
              placeholder='enter occation'
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor='price'>Price</label>
            <input
              type='number'
              name='productPrice'
              id='price'
              placeholder='price'
              value={inputValues.productPrice}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor='deliveredIn'>Delivered In</label>
            <input
              type='number'
              name='deliveredIn'
              placeholder='delivered in'
              id='deliveredIn'
              value={inputValues.deliveredIn}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor='inStock'>In Stock</label>
            <input
              type='number'
              name='inStock'
              placeholder='stocks left'
              id='inStock'
              value={inputValues.inStock}
              onChange={onChangeHandler}
              required
            />
          </div>
          <Button
            type='submit'
            className={styles.submitButton}>
            Add Product
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddGifts;
