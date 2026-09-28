import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getProfile,
  updateProfile,
  uploadAvatar,
  changePassword,
} from "../Controllers/profileController.js";
import upload from "../middleware/uploadMiddleware.js";



const router = express.Router();

/**
 * Get logged-in user's profile
 */
router.get("/", protect, getProfile);

/**
 * Update user's name and email
 * No file upload is needed here.
 */
router.put("/", protect, updateProfile);

/**
 * Upload user's avatar
 * This route accepts a single image file named "avatar".
 */
router.post(
  "/avatar",
  protect,
  upload.single("avatar"),
  uploadAvatar
);
/**
 * Change Password
 */
router.put("/change-password", protect, changePassword);

export default router;
