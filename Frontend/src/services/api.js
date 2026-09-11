import axios from "axios";

/**
 * Axios instance
 * Every API request uses this configuration.
 */
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

/**
 * Automatically attach JWT token.
 */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;