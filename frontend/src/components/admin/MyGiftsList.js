// MyProductsList.js
import React, { useEffect, useState } from 'react';
import styles from './myGifts.module.css';
import MyGift from '../MyGift';
import { GET_MY_GIFTS } from '../../utils/constants';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const MyGiftsList = () => {
  const token = useSelector((store) => store.auth.adminToken);
  const [myGifts, setGetMyGifts] = useState([]);
  useEffect(() => {
    fetchMyGifts();
  }, []);
  const fetchMyGifts = async () => {
    try {
      const res = await fetch(GET_MY_GIFTS, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      console.log('myGifts is here', data);
      setGetMyGifts(data?.products);
    } catch (err) {
      console.log(err);
      alert('something went wrong');
    }
  };
  return (
    <div className={styles.productListPage}>
      <div className={styles.productListContainer}>
        <h2 style={{ color: 'white' }}>My Gifts</h2>
        <div className={styles.productList}>
          {myGifts.map((product) => (
            <MyGift
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyGiftsList;
