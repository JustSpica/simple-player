import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:3333',
}

const api: AxiosInstance = axios.create(config);

export default api;