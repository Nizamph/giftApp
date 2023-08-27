export const REGISTER = 'http://localhost:4000/api/auth/register';
export const LOGIN = 'http://localhost:4000/api/auth/login';
export const ADD_PRODUCT = 'http://localhost:4000/api/products/addProducts';
export const GET_MY_GIFTS =
  'http://localhost:4000/api/products/admin/getMyProducts';
export const GET_ALL_GIFTS_TO_ADMIN =
  'http://localhost:4000/api/products/admin/getProducts';
export const GET_ALL_GIFTS_TO_USER =
  'http://localhost:4000/api/products/user/getProducts';
export const ADD_ITEMS_TO_CART = 'http://localhost:4000/api/cart/addItems';
export const GET_ALL_ITEMS_TO_CART =
  'http://localhost:4000/api/cart/getCartItems';
export const DELETE_CART = 'http://localhost:4000/api/cart/deleteCart';
export const UPDATE_CART = 'http://localhost:4000/api/cart/updateCart';
export const PLACE_ORDER = 'http://localhost:4000/api/order/placeOrder';
export const CLEAR_CART = 'http://localhost:4000/api/cart/clearCart';
export const GET_ORDER_TO_USER =
  'http://localhost:4000/api/order/getOrderToUser';
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

export const USER_SIDEBAR_CONTENT = [
  {
    name: 'User Dashboard',
    link: '/user',
  },
  {
    name: 'All gifts',
    link: '/user/giftshop',
  },
  {
    name: 'Cart',
    link: '/user/cart',
  },
  {
    name: 'My orders',
    link: '/user/myorders',
  },
];
