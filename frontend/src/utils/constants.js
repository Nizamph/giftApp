import user from '../icons/userIcon.png';
import allItems from '../icons/allItems.png';
import cart from '../icons/cart.png';
import myOrders from '../icons/myOrders.png';
import addProduct from '../icons/addproduct.png';
import gift from '../icons/giftIcon.png';
export const REGISTER = 'https://gift-app-qtlk.onrender.com/api/auth/register';
export const LOGIN = 'https://gift-app-qtlk.onrender.com/api/auth/login';
export const ADD_PRODUCT =
  'https://gift-app-qtlk.onrender.com/api/products/addProducts';
export const GET_MY_GIFTS =
  'https://gift-app-qtlk.onrender.com/api/products/admin/getMyProducts';
export const GET_ALL_GIFTS_TO_ADMIN =
  'https://gift-app-qtlk.onrender.com/api/products/admin/getProducts';
export const GET_ALL_GIFTS_TO_USER =
  'https://gift-app-qtlk.onrender.com/api/products/user/getProducts';
export const ADD_ITEMS_TO_CART =
  'https://gift-app-qtlk.onrender.com/api/cart/addItems';
export const GET_ALL_ITEMS_TO_CART =
  'https://gift-app-qtlk.onrender.com/api/cart/getCartItems';
export const DELETE_CART =
  'https://gift-app-qtlk.onrender.com/api/cart/deleteCart';
export const UPDATE_CART =
  'https://gift-app-qtlk.onrender.com/api/cart/updateCart';
export const PLACE_ORDER =
  'https://gift-app-qtlk.onrender.com/api/order/placeOrder';
export const CLEAR_CART =
  'https://gift-app-qtlk.onrender.com/api/cart/clearCart';
export const GET_ORDER_TO_USER =
  'https://gift-app-qtlk.onrender.com/api/order/getOrderToUser';
export const GET_ORERS_TO_ADMIN =
  'https://gift-app-qtlk.onrender.com/api/order/getOrderToAdmin';

export const UPDATE_ORDER_STATUS =
  'https://gift-app-qtlk.onrender.com/api/order/updateOrderStatus';
export const ADMIN_SIDEBAR_CONTENT = [
  {
    name: 'Admin Dashboard',
    link: '/admin',
    url: user,
  },
  {
    name: 'Add gifts',
    link: '/admin/addgifts',
    url: addProduct,
  },
  {
    name: 'My orders',
    link: '/admin/myorders',
    url: myOrders,
  },
  {
    name: 'My gifts',
    link: '/admin/mygifts',
    url: gift,
  },
  {
    name: 'All gifts',
    link: '/admin/allgifts',
    url: allItems,
  },
];

export const USER_SIDEBAR_CONTENT = [
  {
    name: 'User Dashboard',
    link: '/user',
    url: user,
  },
  {
    name: 'All gifts',
    link: '/user/giftshop',
    url: allItems,
  },
  {
    name: 'Cart',
    link: '/user/cart',
    url: cart,
  },
  {
    name: 'My orders',
    link: '/user/myorders',
    url: myOrders,
  },
];
