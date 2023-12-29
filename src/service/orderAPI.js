
import { postRequest, getRequest, patchRequest } from "../utils/request";
// const api = 'api'

export const getOrderDetailsAPI = (id) => getRequest(`/api/order/${id}`)
export const payOrderAPI = ({ orderId, paymentResult }) => patchRequest(`/api/order/${orderId}/pay`, paymentResult)
export const getUserOrderAPI = () => getRequest(`/api/order/user`)
export const updateOrderToDeliveredAPI = (id) => postRequest(`/api/order/${id}`)


// // admin================================>
export const getAdminOrdersAPI = () => getRequest(`/api/order`)
export const getAdminOrderDAPI = (id) => postRequest(`/api/order/admin${id}`)

// getOrderDetailsAPI