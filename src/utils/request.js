// import axios from "axios";
import axiosConfig from "./axiosConfig"
import { ACCESSTOKEN } from "./enviroment";

export const getRequest = (url) => {
  const Etoken = localStorage.getItem(ACCESSTOKEN) ? localStorage.getItem(ACCESSTOKEN) : undefined;
  const config = {
    headers: {
      Authorization: `Bearer ${Etoken}`,
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      // Accept: 'application/json',
      // 'Content-Type': 'application/json'
    },
    // withCredentials: true,
  };
  return axiosConfig.get(url, config).then((res) => res.data);
};

export const postRequest = (url, data) => {
  const Etoken = localStorage.getItem(ACCESSTOKEN) ? localStorage.getItem(ACCESSTOKEN) : undefined;
  const config = {
    headers: {
      Authorization: `Bearer ${Etoken}`,
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      // Accept: 'application/json',
    },
    // withCredentials: true,
  };
  return axiosConfig.post(url, data, config).then((res) => res.data);
};

export const postRequestForForm = (url, data) => {
  const Etoken = localStorage.getItem(ACCESSTOKEN) ? localStorage.getItem(ACCESSTOKEN) : undefined;
  const config = {
    headers: {
      Authorization: `Bearer ${Etoken}`,
      "Content-Type": "multipart/form-data",
      'Access-Control-Allow-Origin': '*',
      // Accept: 'application/json',
    },
    // withCredentials: true,
  };
  return axiosConfig.post(url, data, config).then((res) => res.data);
};

export const deleteRequest = (url) => {
  const Etoken = localStorage.getItem(ACCESSTOKEN) ? localStorage.getItem(ACCESSTOKEN) : undefined;

  const config = {
    headers: {
      Authorization: `Bearer ${Etoken}`,
      "Content-Type": "application/json",
    },
  };
  return axiosConfig.delete(url, config).then((res) => res.data);
};

export const patchRequest = (url, data = undefined) => {
  const Etoken = localStorage.getItem(ACCESSTOKEN) ? localStorage.getItem(ACCESSTOKEN) : undefined;
  const config = {
    headers: {
      Authorization: `Bearer ${Etoken}`,
      "Content-Type": "application/json",
    },
  };
  return axiosConfig.patch(url, data, config).then((res) => res.data);
};

export const axiosRequest = (url, methods, data) => {
  const Etoken = localStorage.getItem(ACCESSTOKEN) ? localStorage.getItem(ACCESSTOKEN) : undefined;

  const config = {
    headers: {
      Authorization: `Bearer ${Etoken}`,
      "Content-Type": "application/json",
    },
  };
  return axiosConfig[methods](url, data, config).then((res) => res.data);
};
