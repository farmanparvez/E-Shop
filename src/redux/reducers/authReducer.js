import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../actions/authActions";
import { USERDETAILS, ACCESSTOKEN } from "../../utils/enviroment";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isSuccess: false,
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        localStorage.setItem(USERDETAILS, JSON.stringify(action.payload.user));
        localStorage.setItem(ACCESSTOKEN, action.payload.token);
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
