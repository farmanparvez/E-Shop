import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLoginUserDetails, getUsersAPI, deleteUserAPI, editUserAPI } from "../../service/userAPI.js";
import { notificationHandler } from "../reducers/globalSlice.js";

export const getUserInfo = createAsyncThunk("Info/userInfo", async (_, thunkAPI) => {
    try {
        const res = await getLoginUserDetails()
        return res.data
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error?.toString();
        thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
        return thunkAPI.rejectWithValue(message)
    }
})

// admin--------------------------------------------------------------------------------------------------------------->
export const getUsers = createAsyncThunk("user/getUsers", async (_, thunkAPI) => {
    try {
        const res = await getUsersAPI()
        // console.log(res)
        return res.data
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error?.toString();
        thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteUser = createAsyncThunk("user/deleteUser", async (id, thunkAPI) => {
    try {
        const res = await deleteUserAPI(id)
        thunkAPI.dispatch(getUsers())
        return res.data
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error?.toString();
        thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
        return thunkAPI.rejectWithValue(message)
    }
})

export const editUser = createAsyncThunk("user/editUser", async (data, thunkAPI) => {
    try {
        const res = await editUserAPI(data)
        thunkAPI.dispatch(getUsers())
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error?.toString();
        thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
        return thunkAPI.rejectWithValue(message)
    }
})