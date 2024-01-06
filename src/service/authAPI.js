import { postRequest } from "../utils/request";
const api = 'api'

export const loginAPI = data => postRequest(`${api}/login`, data)
export const signUpAPI = data => postRequest(`${api}/signup`, data)