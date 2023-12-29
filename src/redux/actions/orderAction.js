import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOrderDetailsAPI, payOrderAPI, getUserOrderAPI, getAdminOrdersAPI, updateOrderToDeliveredAPI } from "../../service/orderAPI";
import { notificationHandler } from "../reducers/globalSlice";

export const getUserOrder = createAsyncThunk("order/getUserOrder", async (data, thunkAPI) => {
    try {
        const res = await getUserOrderAPI(data)
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error?.toString();
        thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
        return thunkAPI.rejectWithValue(message)
    }
})

export const getOrderDetails = createAsyncThunk("order/getOrderDetails", async (data, thunkAPI) => {
    try {
        const res = await getOrderDetailsAPI(data)
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error?.toString();
        thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
        return thunkAPI.rejectWithValue(message)
    }
})

export const payOrder = createAsyncThunk("order/payOrder", async (data, thunkAPI) => {
    try {
        const res = await payOrderAPI(data)
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error?.toString();
        thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
        return thunkAPI.rejectWithValue(message)
    }
})

// admin---------------------------------------------------------------------------------------------------------------->
export const getAdminOrders = createAsyncThunk("order/getAdminOrders", async (data, thunkAPI) => {
    try {
        const res = await getAdminOrdersAPI(data)
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error?.toString();
        thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateOrderToDelivered = createAsyncThunk("order/updateOrderToDelivered", async (data, thunkAPI) => {
    try {
        const res = await updateOrderToDeliveredAPI(data)
        thunkAPI.dispatch(getAdminOrders())
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error?.toString();
        thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
        return thunkAPI.rejectWithValue(message)
    }
})