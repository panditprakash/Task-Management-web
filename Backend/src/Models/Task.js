import mongoose from "mongoose";

/**
 * Task Schema
 * Stores every task created by a user.
 */
const taskSchema = new mongoose.Schema(
  {
    // Task title
    title: {
      type: String,
      required: true,
      trim: true,
    },

    // Optional task description
    description: {
      type: String,
      default: "",
      trim: true,
    },

    // Task status
    status: {
      type: String,
      enum: ["To Do", "In Progress", "Completed"],
      default: "To Do",
    },

    // Task priority
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    // Optional due date
    dueDate: {
      type: Date,
    },

    // Task owner (logged-in user)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;