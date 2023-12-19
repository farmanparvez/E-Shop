import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificationDetails: { type: '', message: '' },
  isNotification: false,
  isVisible: {}
};
const GlobalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    notificationHandler: (state, action) => {
      console.log(action.payload)
      state.isNotification = true
      state.notificationDetails = action.payload
    },
    reset: (state) => {
      state.isNotification = false;
      state.notificationDetails = { type: '', message: '' }
    },
    setModalVisible: (state, { payload }) => {
      state.isVisible = payload;
    },
  },
});

export const { notificationHandler, reset, setModalVisible } = GlobalSlice.actions;
export default GlobalSlice.reducer;
