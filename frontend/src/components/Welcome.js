import React from 'react';
import { useSelector } from 'react-redux';
const Welcome = () => {
  const isAdminToken = useSelector((store) => store.auth.isAdminToken);
  const isUserToken = useSelector((store) => store.auth.isUserToken);
  return (
    <div
      style={{
        color: 'white',
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '60px',
      }}>
      Welcome{' '}
      {isAdminToken ? (
        <span style={{ marginLeft: '10px' }}> Admin</span>
      ) : isUserToken ? (
        <span style={{ marginLeft: '10px' }}>User</span>
      ) : (
        ''
      )}
    </div>
  );
};

export default Welcome;
