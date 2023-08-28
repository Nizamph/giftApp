import { createSlice } from '@reduxjs/toolkit';
const getUserToken = localStorage.getItem('userToken');
const getAdminToken = localStorage.getItem('adminToken');
console.log('usertoken from redux', getUserToken);
const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    userToken: getUserToken,
    isUserToken: !!getUserToken,
    userName: '',
    userRole: 'User',
    adminToken: getAdminToken,
    isAdminToken: !!getAdminToken,
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
    setTokenStatus: (state, action) => {
      state.isAdminToken = false;
      state.isUserToken = false;
    },
  },
});

export const { setUserDetails, setAdminDetails, setTokenStatus } =
  authSlice.actions;

export default authSlice.reducer;
