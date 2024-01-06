import { createSlice } from "@reduxjs/toolkit";
import { getCartItems, addCartItems, deleteCartItem } from "../actions/cartActions";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isLoading: false,
        isLoadingForm: false,
        isError: false,
        cartItems: [],
        isVisible: {},
        details: { current: 0, data: {} },
        // details: {}
    },
    reducers: {
        setModalVisible: (state, action) => {
            state.isVisible = action.payload;
        },
        setCartItem: (state) => {
            state.cartItems = [];
        },
        setCurrent: (state, action) => {
            state.details = action.payload;
        },
        saveDetails: (state, action) => {
            state.cartItems = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // .addCase(getCartItems.pending, (state) => {
            //   state.isLoading = true;
            // })
            .addCase(getCartItems.fulfilled, (state, action) => {
                // state.isLoading = false;
                state.cartItems = action.payload.items
            })
            .addCase(getCartItems.rejected, (state) => {
                state.isLoading = false;
                // state.isError = true;
            })
            .addCase(addCartItems.pending, (state) => {
                state.isLoadingForm = true;
            })
            .addCase(addCartItems.fulfilled, (state) => {
                state.isLoadingForm = false;
            })
            .addCase(addCartItems.rejected, (state) => {
                state.isLoadingForm = false;
                state.isError = true;
            })
            .addCase(deleteCartItem.pending, (state) => {
                state.isLoadingForm = true;
            })
            .addCase(deleteCartItem.fulfilled, (state) => {
                state.isLoadingForm = false;
            })
            .addCase(deleteCartItem.rejected, (state) => {
                state.isLoadingForm = false;
                state.isError = true;
            })
    },
});

export const { setCartItem, setModalVisible, setCurrent, saveDetails } = cartSlice.actions;
export default cartSlice.reducer;
