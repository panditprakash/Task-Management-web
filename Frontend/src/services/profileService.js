// import api from "./api.js";

// /**
//  * Get logged-in user's profile.
//  */
// export const getProfile = () => api.get("/profile");

// /**
//  * Update profile.
//  */
// export const updateProfile = (data) => api.put("/profile", data);

// /**
//  * Upload avatar.
//  */
// export const uploadAvatar = (formData) =>
//   api.post("/profile/avatar", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

// /**
//  * Change password.
//  */
// export const changePassword = (passwordData) =>
//   api.put("/profile/change-password", passwordData);

// /**
//  * request a password reset link.
//  */
// export const forgetPassword = (data) => 
//   api.post("/auth/forgot-password", data);

// /**
//  * Reset password using the reset token
//  */
// export const restPassword = (token,data) =>
//   api.post(`/auth/reset-password/${token}`,data);



// import api from "./api";

// /**
//  * Get logged-in user's profile.
//  */
// export const getProfile = () => api.get("/profile");

// /**
//  * Update user's profile.
//  */
// export const updateProfile = (data) =>
//   api.put("/profile", data);

// /**
//  * Upload user's avatar.
//  */
// export const uploadAvatar = (formData) =>
//   api.post("/profile/avatar", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

// /**
//  * Change user's password.
//  */
// export const changePassword = (passwordData) =>
//   api.put("/profile/change-password", passwordData);

// /**
//  * Send password reset request.
//  */
// export const forgotPassword = (data) =>
//   api.post("/auth/forgot-password", data);

// /**
//  * Reset password using reset token.
//  */
// export const resetPassword = (token, data) =>
//   api.post(`/auth/reset-password/${token}`, data);





import api from "./api.js";

/**
 * Get logged-in user's profile.
 */
export const getProfile = () => api.get("/profile");

/**
 * Update profile.
 */
export const updateProfile = (data) => api.put("/profile", data);

/**
 * Upload avatar.
 */
export const uploadAvatar = (formData) =>
  api.post("/profile/avatar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
