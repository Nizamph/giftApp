import React, { useEffect, useState } from 'react';
import styles from './myGifts.module.css';
import { GET_ALL_GIFTS_TO_ADMIN } from '../../utils/constants';
import { useSelector } from 'react-redux';
import MyGift from './MyGift';

const AllGiftsList = () => {
  const token = useSelector((store) => store.auth.adminToken);
  const [allGifts, setAllGifts] = useState([]);
  useEffect(() => {
    fetchAllGifts();
  }, []);
  console.log('token from all gifts', token);
  const fetchAllGifts = async () => {
    try {
      const res = await fetch(GET_ALL_GIFTS_TO_ADMIN, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setAllGifts(data.allProducts);
    } catch (err) {
      console.log(err);
      alert('something went wrong');
    }
  };
  return (
    <div className={styles.productListPage}>
      <div className={styles.productListContainer}>
        <h2 style={{ color: 'white' }}>All Gifts</h2>
        <div className={styles.productList}>
          {allGifts?.map((product) => (
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

export default AllGiftsList;
