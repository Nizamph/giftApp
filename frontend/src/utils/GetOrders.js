import React, { useEffect, useState } from 'react';

const GetOrders = (orderApi, token) => {
  const [orderData, setOrderData] = useState({});
  useEffect(() => {
    getOrders();
  }, [orderApi, token]);

  const getOrders = async () => {
    const res = await fetch(orderApi, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log('order details is here from custom hook', data);
    setOrderData(data);
  };
  return orderData;
};

export default GetOrders;
