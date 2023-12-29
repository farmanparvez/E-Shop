import { createSlice } from "@reduxjs/toolkit";
import { getOrderDetails, payOrder, getUserOrder, getAdminOrders, updateOrderToDelivered } from "../actions/orderAction";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    isLoading: true,
    userOrders: [],
    orderDetails: [],
    adminOrders: [],


    // isSuccess: false,
    // isError: false,
    // isMessage: null,
    // loadingOrders: true,
    // profileSuccess: false,
    // // allOrders: [],
    // stateUpdated: false
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload.order;
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
        state.userOrders = action.payload.orders;
      })
      .addCase(getUserOrder.rejected, (state, action) => {
        state.isLoading = false;
      })

      // admin----------------------------------------------------------------------------------------->
      .addCase(getAdminOrders.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAdminOrders.fulfilled, (state, action) => {
        console.log(action.payload)
        state.isLoading = false;
        state.adminOrders = action.payload.orders;
      })
      .addCase(getAdminOrders.rejected, (state) => {
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
      })
  },
});

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;
