import React, { useState } from 'react';
import Sidebar from '../../UI/Sidebar';
import { USER_SIDEBAR_CONTENT } from '../../utils/constants';
import SidebarList from '../../UI/SidebarList';
import { Outlet } from 'react-router-dom';

const User = () => {
  console.log('user sidebar contents', USER_SIDEBAR_CONTENT);
  const [userSidebarMenus, setUserSidebarMenus] =
    useState(USER_SIDEBAR_CONTENT);
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgb(14, 14, 30)',
      }}>
      <SidebarList sidebarContent={USER_SIDEBAR_CONTENT} />
      <Outlet />
    </div>
  );
};

export default User;
