import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../Controllers/taskController.js";

const router = express.Router();

/**
 * Create Task
 */
router.post("/", protect, createTask);

/**
 * Get All Tasks
 */
router.get("/", protect, getTasks);

/**
 * Get One Task
 */
router.get("/:id", protect, getTaskById);

/**
 * Update Task
 */
router.put("/:id", protect, updateTask);

/**
 * Delete Task
 */
router.delete("/:id", protect, deleteTask);

export default router;