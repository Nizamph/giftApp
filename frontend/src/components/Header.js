import React from 'react';
import styles from './Header.module.css';
import giftIcon from '../icons/giftIcon.png';
import Button from '../UI/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const isUserToken = useSelector((store) => store.auth.isUserToken);
  const isAdminToken = useSelector((store) => store.auth.isAdminToken);
  const navigate = useNavigate();
  console.log('user token is here in header', isUserToken);
  console.log(isAdminToken);
  return (
    <div className={styles.headerContainer}>
      <div>
        <img src={giftIcon} />
        <h3>Gift for you</h3>
      </div>
      <div>
        {!isUserToken && !isAdminToken && (
          <Button onClick={() => navigate('/login')}>Login</Button>
        )}
      </div>
    </div>
  );
};

export default Header;
