import React, { useEffect, useState } from 'react';
import MyGift from '../MyGift';
import { useSelector } from 'react-redux';
import {
  GET_ALL_GIFTS_TO_ADMIN,
  GET_ALL_GIFTS_TO_USER,
} from '../../utils/constants';
import styles from '../admin/myGifts.module.css';
import Button from '../../UI/Button';

const GiftShopList = () => {
  const token = useSelector((store) => store.auth.userToken);
  const [allGifts, setAllGifts] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState([]);
  useEffect(() => {
    fetchAllGifts();
  }, []);
  console.log('token from all gifts', token);
  const fetchAllGifts = async () => {
    try {
      const res = await fetch(GET_ALL_GIFTS_TO_USER, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setAllGifts(data.allProducts);
      setFilteredSearch(data.allProducts);
    } catch (err) {
      console.log(err);
      alert('something went wrong');
    }
  };

  const onSearchHandler = (e) => {
    const filteredData = allGifts?.filter((itm) => {
      return itm.name.toUpperCase().includes(e.target.value.toUpperCase());
    });
    setFilteredSearch(filteredData);
  };

  console.log('all gifts', allGifts);
  return (
    <div className={styles.totalContainer}>
      <div className={styles.searchSection}>
        <input
          type='text'
          placeholder='search something'
          onChange={onSearchHandler}
        />
        <Button>search</Button>
      </div>
      <div className={styles.productListPage}>
        <div className={styles.shoppingContainer}>
          <h2>Products</h2>
          <div className={styles.productList}>
            {filteredSearch?.map((product) => (
              <MyGift
                key={product._id}
                product={product}
                addToCart={'Add to Cart'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftShopList;
