import React from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';
import cart from '../icons/cart.png';
import { useSelector } from 'react-redux';
const Sidebar = ({ name, link, url }) => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log('cartItems is here in sidebar', cartItems?.length);
  return (
    <ul
      onClick={() => navigate(`${link}`)}
      style={{ cursor: 'pointer' }}>
      <li className='has-subnav'>
        <a>
          {name === 'Cart' && (
            <h3 style={{ marginLeft: '2px', fontWeight: 'bold' }}>
              {cartItems?.length}
            </h3>
          )}
          <img
            src={url}
            style={{
              width: '50px',
              height: '50px',
              objectFit: 'contain',
              margin: '2px',
            }}
          />
          <span className='nav-text'>{name}</span>
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
