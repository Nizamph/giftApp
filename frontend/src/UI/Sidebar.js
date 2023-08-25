import React from 'react';
import './sidebar.css';
const Sidebar = ({ name }) => {
  return (
    <ul>
      <li class='has-subnav'>
        <a href='#'>
          <i class='fa fa-globe fa-2x'></i>
          <span class='nav-text'>{name}</span>
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
