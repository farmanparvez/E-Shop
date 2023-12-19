import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, signUpAPI } from "../../service/authAPI.js";
import { notificationHandler } from "../reducers/globalSlice.js";

export const login = createAsyncThunk(
  "auth/authLogin",
  async (data, thunkAPI) => {
    try {
      const res = await loginAPI(data);
      return res;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
      thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/authRegister",
  async (data, thunkAPI) => {
    try {
      const res = await signUpAPI(data);
      return res;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
      thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// export const logout = createAsyncThunk(
//   "auth/logout",
//   async (data, thunkAPI) => {
//     try {
//       // console.log(data)
//       const res = await registerAPI(data);
//       Cookies.remove('accessToken')
//       // console.log(res)
//       return res;
//     } catch (error) {
//       const message =
//         error?.response?.data?.message || error?.message || error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );
