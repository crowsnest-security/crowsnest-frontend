import axiosInstance from 'axios';

let BASE_URL = import.meta.env.VITE_BASE_URL;

export const axios = axiosInstance.create({
  baseURL: BASE_URL,
});
