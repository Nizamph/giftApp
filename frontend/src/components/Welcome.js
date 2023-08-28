import React from 'react';
import { useSelector } from 'react-redux';
const Welcome = () => {
  const isAdminToken = useSelector((store) => store.auth.isAdminToken);
  // const isUserToken = useSelector((store) => store.auth.isUserToken);
  return (
    <div
      style={{
        color: 'white',
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      Welcome{isAdminToken ? <span>Admin</span> : <span>User</span>}
    </div>
  );
};

export default Welcome;
