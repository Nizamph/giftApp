export const REGISTER = 'http://localhost:4000/api/auth/register';
export const LOGIN = 'http://localhost:4000/api/auth/login';
export const ADD_PRODUCT = 'http://localhost:4000/api/products/addProducts';
export const GET_MY_GIFTS =
  'http://localhost:4000/api/products/admin/getMyProducts';
export const GET_ALL_GIFTS_TO_ADMIN =
  'http://localhost:4000/api/products/admin/getProducts';
export const ADMIN_SIDEBAR_CONTENT = [
  {
    name: 'Admin Dashboard',
    link: '/admin',
  },
  {
    name: 'Add gifts',
    link: '/admin/addgifts',
  },
  {
    name: 'My orders',
    link: '/admin/myorders',
  },
  {
    name: 'My gifts',
    link: '/admin/mygifts',
  },
  {
    name: 'All gifts',
    link: '/admin/allgifts',
  },
];
