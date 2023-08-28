import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './reduxStore/store';
import App from './App';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import appRouter from './router/router';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  </>
);
