import { postRequest, getRequest } from "../utils/request";

// <===============================cart=======================================>
export const getCartItemsAPI = () => getRequest(`/api/products/cart`)
export const adCartItemAPI = (data) => postRequest(`/api/products/cart`, data)

