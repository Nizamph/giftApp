// MyOrderList.js
import React from 'react';
import MyOrder from '../MyOrder'; // Make sure to adjust the import path
import styles from '../../components/myOrder.module.css';
import GetOrders from '../../utils/GetOrders';
import { GET_ORERS_TO_ADMIN } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const MyOrderList = () => {
  const adminToken = useSelector((store) => store.auth.adminToken);

  const data = GetOrders(GET_ORERS_TO_ADMIN, adminToken);
  const { ordersToAdmin } = data;
  return (
    <div className={styles.myOrderListContainer}>
      {ordersToAdmin?.map((order, index) => (
        <MyOrder
          key={order._id}
          order={order}
          isUpdate={false}
        />
      ))}
    </div>
  );
};

export default MyOrderList;
