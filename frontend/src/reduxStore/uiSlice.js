import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { isModalOpen: false, fetchVal: false },
  reducers: {
    setModalVisibility: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setFetchValue: (state) => {
      state.fetchVal = !state.fetchVal;
    },
  },
});

export const { setModalVisibility, setFetchValue } = uiSlice.actions;

export default uiSlice.reducer;
