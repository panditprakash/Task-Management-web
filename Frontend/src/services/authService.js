import api from "./api";

/**
 * Register a new user.
 */
export const registerUser = (userData) => {
  return api.post("/api/auth/register", userData);
};

/**
 * Login existing user.
 */
export const loginUser = (credentials) => {
  return api.post("/api/auth/login", credentials);
};

