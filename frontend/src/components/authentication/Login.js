import React, { useState } from 'react';
import styles from './auth.module.css';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAdminDetails, setUserDetails } from '../../reduxStore/authSlice';
import Button from '../../UI/Button';
import Spinner from '../../UI/Spinner';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    role: 'User',
  });
  const [isLoading, setIsLoading] = useState(false);
  const onChangeHandler = (e) => {
    setInputValues((preValues) => {
      return { ...preValues, [e.target.name]: e.target.value };
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(LOGIN, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
          email: inputValues.email,
          userType: inputValues.role,
          password: inputValues.password,
        }),
      });
      const data = await res.json();
      setIsLoading(false);
      console.log('data from the backend in login', data);
      if (data?.errorMessage) {
        toast.error(data.errorMessage);
      }
      if (data.userType === 'User') {
        toast.success('user login successfull');
        navigate('/user/welcome', { replace: true });
        dispatch(
          setUserDetails({
            token: data.token,
            userName: data.name,
            role: data.userType,
          })
        );
      } else if (data.userType === 'Admin') {
        toast.success('admin login successfull');
        navigate('/admin/welcome', { replace: true });
        dispatch(
          setAdminDetails({
            token: data.token,
            adminName: data.name,
            role: data.userType,
          })
        );
      }
      dispatch(
        setUserDetails({
          token: data.token,
          userName: data.name,
          role: data.userType,
        })
      );
    } catch (err) {
      if (err) {
        toast.error(err.errorMessage);
      } else {
        toast.error('something went wrong');
      }
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <h2>Login</h2>
          <form onSubmit={onSubmitHandler}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={onChangeHandler}
              className={styles.inputField}
              placeholder='Enter your email'
              required
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={onChangeHandler}
              className={styles.inputField}
              placeholder='Enter your password'
              required
            />

            <label htmlFor='role'>Role</label>
            <select
              id='role'
              name='role'
              required
              onChange={onChangeHandler}
              className={styles.selectField}>
              <option value='User'>User</option>
              <option value='Admin'>Admin</option>
            </select>

            {!isLoading && <Button type='submit'>Login</Button>}
            {isLoading && <Spinner />}
          </form>
          <div className={styles.signupLink}>
            <Link to='/signup'>Not a user? Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
