import React from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';
const Sidebar = ({ name, link }) => {
  const navigate = useNavigate();
  return (
    <ul
      onClick={() => navigate(`${link}`)}
      style={{ cursor: 'pointer' }}>
      <li className='has-subnav'>
        <a>
          <i className='fa fa-globe fa-2x'></i>
          <span className='nav-text'>{name}</span>
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
