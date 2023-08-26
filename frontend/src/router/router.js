import { createBrowserRouter } from 'react-router-dom';
import Signup from '../components/authentication/Signup';
import Login from '../components/authentication/Login';
import Body from '../components/Body';
import Admin from '../components/admin/Admin';
import User from '../components/User';
import AddGifts from '../components/admin/AddGifts';
import MyOrderList from '../components/admin/MyOrderList';
import MyGiftsList from '../components/admin/MyGiftsList';
import AllGiftsList from '../components/admin/AllGiftsList';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/admin',
        element: <Admin />,
        children: [
          {
            path: 'addgifts',
            element: <AddGifts />,
          },
          {
            path: 'myorders',
            element: <MyOrderList />,
          },
          {
            path: 'mygifts',
            element: <MyGiftsList />,
          },
          {
            path: 'allgifts',
            element: <AllGiftsList />,
          },
        ],
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default appRouter;
