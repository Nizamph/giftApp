import { createSlice } from '@reduxjs/toolkit';
const getUserToken = localStorage.getItem('userToken');
const getAdminToken = localStorage.getItem('adminToken');
const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    userToken: getUserToken,
    isUserToken: false,
    userName: '',
    userRole: 'User',
    adminToken: getAdminToken,
    isAdminToken: false,
    adminName: '',
    adminRole: 'Admin',
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userToken = action.payload.token;
      state.isUserToken = !!action.payload.token;
      state.userName = action.payload.userName;
      localStorage.setItem('userToken', action.payload.token);
    },
    setAdminDetails: (state, action) => {
      state.adminToken = action.payload.token;
      state.isAdminToken = !!action.payload.token;
      state.adminName = action.payload.adminName;
      localStorage.setItem('adminToken', action.payload.token);
    },
  },
});

export const { setUserDetails, setAdminDetails } = authSlice.actions;

export default authSlice.reducer;
