import React, { useState } from 'react';
import Sidebar from '../../UI/Sidebar';
import { USER_SIDEBAR_CONTENT } from '../../utils/constants';
import SidebarList from '../../UI/SidebarList';
import { Outlet } from 'react-router-dom';

const User = () => {
  const [userSidebarMenus, setUserSidebarMenus] =
    useState(USER_SIDEBAR_CONTENT);
  return (
    <div>
      <SidebarList sidebarContent={userSidebarMenus} />
      <Outlet />
    </div>
  );
};

export default User;
