import './App.css';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import Body from './components/Body';
import { Navigate, Outlet } from 'react-router-dom';
import Admin from './components/admin/Admin';
import AddGifts from './components/admin/AddGifts';
import MyOrderList from './components/admin/MyOrderList';
import MyGiftsList from './components/admin/MyGiftsList';
import AllGiftsList from './components/admin/AllGiftsList';
import User from './components/user/User';
import GiftShopList from './components/user/GiftShopList';
import CartList from './components/user/CartList';
import MyOrdersList from './components/user/MyOrdersList';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
  const isUserToken = useSelector((store) => store.auth.isUserToken);
  const isAdminToken = useSelector((store) => store.auth.isAdminToken);
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Body />}>
          <Route
            path='admin'
            element={isAdminToken ? <Admin /> : <Navigate to='/login' />}>
            <Route
              path='addgifts'
              element={isAdminToken ? <AddGifts /> : <Navigate to='/login' />}
            />
            <Route
              path='myorders'
              element={
                isAdminToken ? <MyOrderList /> : <Navigate to='/login' />
              }
            />
            <Route
              path='mygifts'
              element={
                isAdminToken ? <MyGiftsList /> : <Navigate to='/login' />
              }
            />
            <Route
              path='allgifts'
              element={
                isAdminToken ? <AllGiftsList /> : <Navigate to='/login' />
              }
            />
          </Route>
          <Route
            path='/user'
            element={isUserToken ? <User /> : <Navigate to='/login' />}>
            <Route
              path='giftshop'
              element={
                isUserToken ? <GiftShopList /> : <Navigate to='/login' />
              }
            />
            <Route
              path='cart'
              element={isUserToken ? <CartList /> : <Navigate to='/login' />}
            />
            <Route
              path='myorders'
              element={
                isUserToken ? <MyOrdersList /> : <Navigate to='/login' />
              }
            />
          </Route>
        </Route>
        <Route
          path='/login'
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path='/signup'
          element={
            <>
              <Signup />
            </>
          }
        />
        <Route
          path='*'
          element={
            isAdminToken ? (
              <Admin />
            ) : isUserToken ? (
              <User />
            ) : (
              <Navigate to='/login' />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
