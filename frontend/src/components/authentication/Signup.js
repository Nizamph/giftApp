import React, { useEffect } from 'react';
import styles from './auth.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../UI/Button';
import { useState } from 'react';
import { REGISTER } from '../../utils/constants';
import Spinner from '../../UI/Spinner';
import { useDispatch } from 'react-redux';
import { setAdminDetails, setUserDetails } from '../../reduxStore/authSlice';
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    name: '',
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
      const res = await fetch(REGISTER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inputValues.name,
          email: inputValues.email,
          userType: inputValues.role,
          password: inputValues.password,
        }),
      });
      const data = await res.json();
      setIsLoading(false);
      console.log('data from the backend', data);
      if (data.userType === 'User') {
        navigate('/user', { replace: true });
        dispatch(
          setUserDetails({
            token: data.token,
            userName: data.name,
            role: data.userType,
          })
        );
      } else if (data.userType === 'Admin') {
        navigate('/admin', { replace: true });
        dispatch(
          setAdminDetails({
            token: data.token,
            adminName: data.name,
            role: data.userType,
          })
        );
      }
    } catch (err) {
      alert(err);
    }
  };

  console.log('inputValues', inputValues);
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h2>Signup</h2>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor='name'>Name</label>
          <input
            type='name'
            name='name'
            value={inputValues.name}
            onChange={onChangeHandler}
            className={styles.inputField}
            placeholder='Enter your Name'
            required
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={inputValues.email}
            onChange={onChangeHandler}
            id='email'
            className={styles.inputField}
            placeholder='Enter your email'
            required
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={inputValues.password}
            onChange={onChangeHandler}
            className={styles.inputField}
            placeholder='Enter your password'
            required
          />

          <label htmlFor='role'>Role</label>
          <select
            id='role'
            name='role'
            onChange={onChangeHandler}
            required
            className={styles.selectField}>
            <option value='User'>User</option>
            <option value='Admin'>Admin</option>
          </select>
          {!isLoading && <Button type='submit'>SignUp</Button>}
          {isLoading && <Spinner />}
        </form>
        <div className={styles.signupLink}>
          <Link to='/login'>Already a user? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
