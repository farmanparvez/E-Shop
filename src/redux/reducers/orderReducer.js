import { createSlice } from "@reduxjs/toolkit";
import { getOrderDetails, payOrder, getUserOrder, getOrders, updateOrderToDelivered } from "../actions/orderAction";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    isLoading: true,


    isSuccess: false,
    isError: false,
    isMessage: null,
    order: [],
    loadingOrders: true,
    orders: null,
    profileSuccess: false,
    allOrders: [],
    stateUpdated: false
  },
  reducers: {
    reset: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isMessage = null;
      state.userInfo = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload.order;
      })
      .addCase(getOrderDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(payOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(payOrder.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(payOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getUserOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload.orders;
      })
      .addCase(getUserOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })

      // admin----------------------------------------------------------------------------------------->
      .addCase(getOrders.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allOrders = action.payload.orders;
      })
      .addCase(getOrders.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateOrderToDelivered.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateOrderToDelivered.fulfilled, (state) => {
        // state.isLoading = false;
      })
      .addCase(updateOrderToDelivered.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
  },
});

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;
