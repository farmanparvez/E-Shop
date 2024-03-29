import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductByProductTypeAPI } from "../../service/userProductAPI";
import { notificationHandler } from "../reducers/globalSlice";

export const getMenProduct = createAsyncThunk("product/getMenProduct", async (data, thunkAPI) => {
    try {
        const res = await getProductByProductTypeAPI(data)
        return res
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
        thunkAPI.dispatch(notificationHandler({ type: 'error', message })); return thunkAPI.rejectWithValue(message)
    }
})
export const getWomenProduct = createAsyncThunk("product/getWomenProduct", async (data, thunkAPI) => {
    try {
        const res = await getProductByProductTypeAPI(data)
        return res
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
        thunkAPI.dispatch(notificationHandler({ type: 'error', message })); return thunkAPI.rejectWithValue(message)
    }
})
export const getElectronicsProduct = createAsyncThunk("product/getElectronicsProduct", async (data, thunkAPI) => {
    try {
        const res = await getProductByProductTypeAPI(data)
        return res
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
        thunkAPI.dispatch(notificationHandler({ type: 'error', message })); return thunkAPI.rejectWithValue(message)
    }
})