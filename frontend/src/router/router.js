import { createBrowserRouter } from 'react-router-dom';
import Signup from '../components/authentication/Signup';
import Login from '../components/authentication/Login';
import App from '../App';
import Body from '../components/Body';
import Admin from '../components/Admin';
import User from '../components/User';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/admin',
        element: <Admin />,
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
