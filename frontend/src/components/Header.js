import React from 'react';
import styles from './Header.module.css';
import giftIcon from '../icons/giftIcon.png';
import Button from '../UI/Button';
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <img src={giftIcon} />
        <h3>Gift for you</h3>
      </div>
      <div>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
