import React, { useState } from 'react';
import { ADMIN_SIDEBAR_CONTENT } from '../../utils/constants';
import SidebarList from '../../UI/SidebarList';
import { Outlet } from 'react-router-dom';
import styles from './Admin.module.css';
const Admin = () => {
  const [adminSidebarContent] = useState(ADMIN_SIDEBAR_CONTENT);
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <SidebarList sidebarContent={ADMIN_SIDEBAR_CONTENT} />
      <Outlet />
    </div>
  );
};

export default Admin;
