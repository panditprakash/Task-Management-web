import api from "./api";

/**
 * Fetch all tasks.
 */
export const getTasks = () => api.get("/tasks");

/**
 * Create a new task.
 */
export const createTask = (taskData) =>
  api.post("/tasks", taskData);

/**
 * Update an existing task.
 */ 
export const updateTask = (taskId, taskData) =>
  api.put(`/tasks/${taskId}`, taskData);

/**
 * Delete a task.
 */
export const deleteTask = (taskId) =>
  api.delete(`/tasks/${taskId}`);
