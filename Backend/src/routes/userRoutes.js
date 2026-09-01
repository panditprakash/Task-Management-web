import express from "express";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * Current Logged-in User
 */
router.get("/profile", protect, (request, response) => {
  response.json({
    success: true,
    user: request.user,
  });
});

export default router;