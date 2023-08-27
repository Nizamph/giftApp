import React from 'react';
import './sidebar.css';
import Sidebar from './Sidebar';
const SidebarList = ({ sidebarContent }) => {
  return (
    <>
      <nav className='main-menu'>
        {sidebarContent?.map((itm, i) => (
          <Sidebar
            key={i}
            name={itm.name}
            link={itm.link}
          />
        ))}
        <ul className='logout'>
          <li>
            <a href='#'>
              <i className='fa fa-power-off fa-2x'></i>
              <span className='nav-text'>Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SidebarList;
