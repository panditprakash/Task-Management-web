import api from "./api";

/**
 * Register a new user.
 */
export const registerUser = (userData) => {
  return api.post("/auth/register", userData);
};

/**
 * Login existing user.
 */
export const loginUser = (credentials) => {
  return api.post("/auth/login", credentials);
};