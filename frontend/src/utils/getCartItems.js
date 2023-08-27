import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllCartItems } from '../reduxStore/cartSlice';
import { useEffect } from 'react';
import { GET_ALL_ITEMS_TO_CART } from './constants';
const GetCartItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllCartItems();
  }, []);
  // const [cartItems, setCartItems] = useState([]);
  const userToken = useSelector((store) => store.auth.userToken);
  const getAllCartItems = async () => {
    const res = await fetch(GET_ALL_ITEMS_TO_CART, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    });
    const data = await res.json();
    dispatch(setAllCartItems(data.allCarts));
  };
};

export default GetCartItems;
