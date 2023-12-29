import { createSlice } from "@reduxjs/toolkit";
import { getCartItems, addCartItems } from "../actions/cartActions";

const cartSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        isLoadingForm: false,
        isError: false,
        cartItems: [],
        isVisible: {},
    },
    reducers: {
        setModalVisible: (state, action) => {
            state.isVisible = action.payload;
        },
        setCartItem: (state, action) => {
            state.cartItems = [];
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
            .addCase(addCartItems.fulfilled, (state, action) => {
                state.isLoadingForm = false;
            })
            .addCase(addCartItems.rejected, (state) => {
                state.isLoadingForm = false;
                state.isError = true;
            })
    },
});

export const { setCartItem, setModalVisible } = cartSlice.actions;
export default cartSlice.reducer;
