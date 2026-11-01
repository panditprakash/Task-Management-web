import api from "./api";

/**
 * Fetch all tasks.
 */
export const getTasks = () => api.get("/api/tasks");

/**
 * Create a new task.
 */
export const createTask = (taskData) =>
  api.post("/api/tasks", taskData);

/**
 * Update an existing task.
 */ 
export const updateTask = (taskId, taskData) =>
  api.put(`/api/tasks/${taskId}`, taskData);

/**
 * Delete a task.
 */
export const deleteTask = (taskId) =>
  api.delete(`/api/tasks/${taskId}`);
