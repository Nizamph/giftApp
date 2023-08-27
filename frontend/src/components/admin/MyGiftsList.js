// MyProductsList.js
import React, { useEffect, useState } from 'react';
import styles from './myGifts.module.css';
import MyGift from '../MyGift';
import { GET_MY_GIFTS } from '../../utils/constants';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
// const productData = [
//   {
//     _id: '64e8e5d9b83d3a51b50cee4b',
//     name: 'football',
//     image:
//       'https://media.istockphoto.com/id/610241662/photo/soccer-ball-isolated-on-the-white-background.jpg?s=1024x1024&w=is&k=20&c=AVfss_DhdNJ3RXx5RmxsVilvQfCsY7_0JHmR-P4Bu0I=',
//     deliveredIn: 8,
//     inStock: 10,
//   },
//   {
//     _id: '64e8e6689c2badf2a77ce375',
//     name: 'diamond necklace',
//     image:
//       'https://media.istockphoto.com/id/610241662/photo/soccer-ball-isolated-on-the-white-background.jpg?s=1024x1024&w=is&k=20&c=AVfss_DhdNJ3RXx5RmxsVilvQfCsY7_0JHmR-P4Bu0I=',
//     deliveredIn: 10,
//     inStock: 2,
//   },
//   {
//     _id: '64e8e6a19c2badf2a77ce378',
//     name: 'camera',
//     image:
//       'https://media.istockphoto.com/id/610241662/photo/soccer-ball-isolated-on-the-white-background.jpg?s=1024x1024&w=is&k=20&c=AVfss_DhdNJ3RXx5RmxsVilvQfCsY7_0JHmR-P4Bu0I=',
//     deliveredIn: 23,
//     inStock: 1,
//   },
// ];

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
