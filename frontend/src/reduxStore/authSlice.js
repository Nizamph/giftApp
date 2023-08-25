import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authentication',
  initialState: { token: '', isToken: false, userName: '', role: '' },
  reducers: {
    setUserDetails: (state, action) => {
      state.token = action.payload.token;
      state.isToken = !!state.token;
      state.userName = action.payload.userName;
      state.role = action.payload.role;
    },
  },
});

export const { setUserDetails } = authSlice.actions;

export default authSlice.reducer;
