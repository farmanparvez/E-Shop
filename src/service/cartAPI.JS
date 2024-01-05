import { postRequest, getRequest, deleteRequest } from "../utils/request";

// <===============================cart=======================================>
export const getCartItemsAPI = () => getRequest(`/api/products/cart`)
export const addCartItemAPI = (data) => postRequest(`/api/products/cart`, data)
export const deleteCartItemAPI = (id) => deleteRequest(`/api/products/cart/${id}`)

