import { createSlice } from "@reduxjs/toolkit";
import {
  uploadProductImage,
  createProduct,
  getAdminProductProductByID,
  updateProductByID,
  deleteProductByID,
  getProduct,
  getProductByID,
  createOrder,
  productReviews,
  topratingproducts,
  // <--------------cart------------>
  getCartItems,
  addCartItems
} from "../actions/productAction";

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: true,
    adminProductList: [],
    isVisible: {},
    isDrawerVisible: {},
    isLoadingForm: false,
    isLoadingImage: false,
    isTopRatingProductsError: false,
    isError: false,
    isMessage: null,
    products: [],
    product: {},
    cartItems: [],



    data: null,
    uploadImage: null,
    shippingAddress: JSON.parse(localStorage.getItem('shippingAddress')),
    cartItem: JSON.parse(localStorage.getItem('cartItem')),
    paymentMethod: null,
    itemsPrice: '',
    order: {},
    stateUpdated: false,
    topRatedProducts: [],
    count: null,
    // latestProduct
    page: { page: 1, limit: 12 },
  },
  reducers: {
    reset: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isMessage = null;
      state.isReviewError = false;
    },
    setDrawerVisible: (state, { payload }) => {
      state.isDrawerVisible = payload
    },
    setModalVisible: (state, action) => {
      state.isVisible = action.payload;
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    setPagination: (state, action) => {
      state.page = action.payload;
    },
    setCartItem: (state, action) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(topratingproducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(topratingproducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.topRatedProducts = action.payload.product
      })
      .addCase(topratingproducts.rejected, (state) => {
        state.isLoading = false;
        state.isTopRatingProductsError = true;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.product;
        state.count = action.payload.count;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getProductByID.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProductByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getProductByID.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload.order
      })
      .addCase(createOrder.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
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
      .addCase(productReviews.pending, (state) => {
        state.isLoadingForm = true;
      })
      .addCase(productReviews.fulfilled, (state, action) => {
        state.isLoadingForm = false;
        state.product = action.payload;
      })
      .addCase(productReviews.rejected, (state, action) => {
        state.isLoadingForm = false;
        state.isReviewError = true;
        state.isMessage = action.payload
      })


      // admin-------------------------------------------------------------------------------------------->
      .addCase(getAdminProductProductByID.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAdminProductProductByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adminProductList = action.payload;
      })
      .addCase(getAdminProductProductByID.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(uploadProductImage.pending, (state, action) => {
        state.isLoadingImage = true;
      })
      .addCase(uploadProductImage.fulfilled, (state, action) => {
        state.isLoadingImage = false;
        state.uploadImage = action.payload;
      })
      .addCase(uploadProductImage.rejected, (state, action) => {
        state.isLoadingImage = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(createProduct.pending, (state, action) => {
        state.isLoadingForm = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoadingForm = false;
        state.uploadImage = null;
        state.isDrawerVisible = {};
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoadingForm = false;
        state.isError = true;
      })
      .addCase(updateProductByID.pending, (state, action) => {
        state.isLoadingForm = true;
      })
      .addCase(updateProductByID.fulfilled, (state, action) => {
        state.isLoadingForm = false;
        state.isDrawerVisible = {};
      })
      .addCase(updateProductByID.rejected, (state, action) => {
        state.isLoadingForm = false;
        state.isError = true;
      })
      .addCase(deleteProductByID.pending, (state, action) => {
        state.isLoadingForm = true;
      })
      .addCase(deleteProductByID.fulfilled, (state, action) => {
        state.isLoadingForm = false;
      })
      .addCase(deleteProductByID.rejected, (state, action) => {
        state.isLoadingForm = false;
        state.isError = true;
      })
  },
});

export const { reset, setModalVisible, setDrawerVisible, savePaymentMethod, setPagination, setCartItem } = productSlice.actions;
export default productSlice.reducer;
