import React from 'react';
import './sidebar.css';
import Sidebar from './Sidebar';
const SidebarList = ({ adminSidebarContent }) => {
  return (
    <>
      <nav class='main-menu'>
        {adminSidebarContent?.map((itm, i) => (
          <Sidebar
            key={i}
            name={itm.name}
          />
        ))}
        <ul class='logout'>
          <li>
            <a href='#'>
              <i class='fa fa-power-off fa-2x'></i>
              <span class='nav-text'>Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SidebarList;
