import axios from "axios";

/**
 * Axios instance
 * Every API request uses this configuration.
 */
const api = axios.create({
  baseURL:
  import.meta.env.VITE_API_URL || "http://http://localhost:5173/api",
  headers:{
    "Content-Type": "application/json",
  }
});

/**
 * Automatically attach JWT token.
 * 
 */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;