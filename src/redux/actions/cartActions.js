import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCartItemsAPI, addCartItemAPI, deleteCartItemAPI } from "../../service/cartAPI.js";
import { notificationHandler } from "../reducers/globalSlice.js";

export const getCartItems = createAsyncThunk(
    "cart/getCartItem",
    async (data, thunkAPI) => {
        try {
            const res = await getCartItemsAPI(data);
            return res;
        } catch (error) {
            const message = error?.response?.data?.message || error?.message || error?.toString();
            thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const addCartItems = createAsyncThunk(
    "cart/addCartItem",
    async (data, thunkAPI) => {
        try {
            const res = await addCartItemAPI(data);
            thunkAPI.dispatch(getCartItems())
            return res;
        } catch (error) {
            const message = error?.response?.data?.message || error?.message || error?.toString();
            thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const deleteCartItem = createAsyncThunk(
    "cart/deleteCartItem",
    async (data, thunkAPI) => {
        try {
            const res = await deleteCartItemAPI(data);
            thunkAPI.dispatch(getCartItems())
            return res;
        } catch (error) {
            const message = error?.response?.data?.message || error?.message || error?.toString();
            thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
            return thunkAPI.rejectWithValue(message);
        }
    }
);