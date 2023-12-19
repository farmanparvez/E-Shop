import { postRequest, getRequest } from "../utils/request";
const api = 'api'

// export const loginAPI = data => getRequest()
export const loginAPI = data => postRequest(`${api}/login`, data)
export const signUpAPI = data => postRequest(`${api}/signup`, data)