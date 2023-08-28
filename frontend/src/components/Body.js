import React from 'react';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(14, 14, 30)',
      }}>
      Body
      <Outlet />
    </div>
  );
};

export default Body;
