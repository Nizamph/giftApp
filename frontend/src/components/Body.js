import React from 'react';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      Body
      <Outlet />
    </div>
  );
};

export default Body;
