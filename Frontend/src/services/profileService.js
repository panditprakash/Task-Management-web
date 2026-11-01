

import api from "./api.js";

/**
 * Get logged-in user's profile.
 */
export const getProfile = () => api.get("/api/profile");

/**
 * Update profile.
 */
export const updateProfile = (data) => api.put("/api/profile", data);

/**
 * Upload avatar.
 */
export const uploadAvatar = (formData) =>
  api.post("/api/profile/avatar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
