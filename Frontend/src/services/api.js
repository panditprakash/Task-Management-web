import axios from "axios";

/**
 * Axios instance
 * Every API request uses this configuration.
 */
const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();

const api = axios.create({
  // Use the deployed API in production and keep a sensible local fallback.
  baseURL: (configuredApiUrl || "https://task-management-web-cdn6.onrender.com").replace(/\/$/, ""),
  timeout: 15000,
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
