import React from 'react';
import './sidebar.css';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTokenStatus } from '../reduxStore/authSlice';
import { toast } from 'react-toastify';
const SidebarList = ({ sidebarContent }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log('sidebar contents', sidebarContent);
  const logoutHandler = () => {
    localStorage.clear('userToken');
    localStorage.clear('adminToken');
    localStorage.clear('address');
    navigate('/login', { replace: true });
    dispatch(setTokenStatus());
    toast.success('logged out successfully');
  };
  return (
    <>
      <nav className='main-menu'>
        {sidebarContent?.map((itm, i) => (
          <Sidebar
            key={i}
            name={itm.name}
            url={itm.url}
            link={itm.link}
          />
        ))}
        <ul className='logout'>
          <li>
            <a>
              <i className='fa fa-power-off fa-2x'></i>
              <button
                onClick={logoutHandler}
                className='nav-text'>
                Logout
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SidebarList;
