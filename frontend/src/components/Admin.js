import React, { useState } from 'react';
import { ADMIN_SIDEBAR_CONTENT } from '../utils/constants';
import SidebarList from '../UI/SidebarList';

const Admin = () => {
  const [adminSidebarContent] = useState(ADMIN_SIDEBAR_CONTENT);
  return (
    <div>
      <SidebarList adminSidebarContent={adminSidebarContent} />
    </div>
  );
};

export default Admin;
