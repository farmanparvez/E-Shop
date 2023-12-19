import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  uploadProductImageAPI,
  createProductAPI,
  updateProductByIdAPI,
  productAdminProductByIdAPI,
  deleteProductByIdAPI,
  getProductAPI,
  getProductByIdAPI,
  placeOrderAPI,
  productReviewsAPI,
  topRatingProductsAPI,
  // <------cart------>"
  getCartItemsAPI,
  adCartItemAPI
} from "../../service/productAPI";
import { notificationHandler } from "../reducers/globalSlice";
import { CARTITEMS } from "../../utils/enviroment";
import { setCartItem } from "../reducers/productReducer";

export const topratingproducts = createAsyncThunk(
  "product/topratingproducts",
  async (_, thunkAPI) => {
    try {
      const res = await topRatingProductsAPI();
      return res;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
      thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (data, thunkAPI) => {
    try {
      const res = await getProductAPI(data);
      return res;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
      thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getProductByID = createAsyncThunk(
  "product/getProductByID",
  async (id, thunkAPI) => {
    try {
      const res = await getProductByIdAPI(id);
      return res.product;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
      thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productReviews = createAsyncThunk(
  "product/productReviews",
  async (data, thunkAPI) => {
    try {
      const res = await productReviewsAPI(data);
      return res?.product
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
      if (message !== "Product Already Reviewed") thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const addCartItem = createAsyncThunk(
  "addCartItem/addCartItemInLocalStorege",
  async (val, thunkAPI) => {
    // thunkAPI.dispatch(setCartItem(false))
    const existItem =
      localStorage.getItem(CARTITEMS)?.length > 0 &&
      JSON.parse(localStorage.getItem(CARTITEMS)).find(
        (x) => x._id === val._id && x.user === val.user
      );
    if (existItem) return;
    const oldCartItems = localStorage.getItem(CARTITEMS)
      ? JSON.parse(localStorage.getItem(CARTITEMS))
      : [];
    const data = [...oldCartItems, val];
    localStorage.setItem(CARTITEMS, JSON.stringify(data));
    thunkAPI.dispatch(setCartItem(true))
  }
);

export const removeFromCart = createAsyncThunk(
  "removeFromCart/removeFromCartLocalStorege",
  async (id, thunkAPI) => {
    const existItem = JSON.parse(localStorage.getItem("cartItem")).filter(
      (x) => x._id !== id
    );
    if (existItem) localStorage.setItem("cartItem", JSON.stringify(existItem));
  }
);

export const saveShippingAddress = createAsyncThunk(
  "saveShippingAddress/saveShippingAddressLocalStorege",
  async (data, thunkAPI) => {
    // const existItem = JSON.parse(localStorage.getItem('cartItem')).filter(x => x._id !== id)
    localStorage.setItem("shippingAddress", JSON.stringify(data));
  }
);

export const createOrder = createAsyncThunk(
  "createOrder/createOrderProduct",
  async (data, thunkAPI) => {
    try {
      const res = await placeOrderAPI(data);
      return res;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
      thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
      const res = await adCartItemAPI(data);
      thunkAPI.dispatch(getCartItems())
      return res;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
      thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// admin--------------------------------------------------------------------------------------------------------------->
export const getAdminProductProductByID = createAsyncThunk(
  "product/productAdminProductById",
  async (data, thunkAPI) => {
    try {
      const res = await productAdminProductByIdAPI(data);
      // console.log(res)
      return res.product;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
      thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// uploadimage
export const uploadProductImage = createAsyncThunk(
  "image/uploadProductImage",
  async (formData, thunkAPI) => {
    try {
      // // console.log(formData)
      const data = await uploadProductImageAPI(formData);
      // console.log(data)
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
      thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data, thunkAPI) => {
    try {
      const res = await createProductAPI(data);
      thunkAPI.dispatch(getAdminProductProductByID())
      return res.message;
    } catch (error) {
      console.log(error);
      const message = error?.response?.data?.message || error?.message || error?.toString();
      console.log(message);
      thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateProductByID = createAsyncThunk(
  "product/updateProductByID",
  async ({ productData, id }, thunkAPI) => {
    try {
      const res = await updateProductByIdAPI(productData, id);
      thunkAPI.dispatch(getAdminProductProductByID())
      return res.message;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
      thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteProductByID = createAsyncThunk(
  "product/deleteProduct",
  async (data, thunkAPI) => {
    try {
      // console.log(data)
      const res = await deleteProductByIdAPI(data);
      thunkAPI.dispatch(getAdminProductProductByID())
      return res.message;
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || error?.toString();
      thunkAPI.dispatch(notificationHandler({ type: 'error', message }));
      return thunkAPI.rejectWithValue(message);
    }
  }
);
