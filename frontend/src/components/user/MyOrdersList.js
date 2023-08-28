import React, { useEffect } from 'react';
import MyOrder from '../../components/MyOrder';
import styles from '../../components/myOrder.module.css';
import GetOrders from '../../utils/GetOrders';
import { GET_ORDER_TO_USER } from '../../utils/constants';
import { useSelector } from 'react-redux';
const MyOrdersList = () => {
  const userToken = useSelector((store) => store.auth.userToken);
  let data = GetOrders(GET_ORDER_TO_USER, userToken);
  const { orderToUser } = data;
  console.log('userOrderData', orderToUser);
  return (
    <div className={styles.myOrderListContainer}>
      {orderToUser?.map((order) => (
        <MyOrder
          key={order._id}
          order={order}
        />
      ))}
    </div>
  );
};

export default MyOrdersList;
