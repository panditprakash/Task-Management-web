import Task from "../Models/Task.js";

/**
 * Create a new task for the logged-in user.
 */
export const createTask = async (request, response) => {
  try {
    const { title, description, priority, dueDate } = request.body;

    if (!title) {
      return response.status(400).json({
        success: false,
        message: "Task title is required.",
      });
    }

    const task = await Task.create({
      title,
      description,
      priority,
      dueDate,
      user: request.user._id,
    });

    response.status(201).json({
      success: true,
      message: "Task created successfully.",
      task,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};/**
 * Get every task belonging to the logged-in user.
 */
export const getTasks = async (request, response) => {
  try {
    const tasks = await Task.find({
      user: request.user._id,
    }).sort({
      createdAt: -1,
    });

    response.json({
      success: true,
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
/**
 * Get one task by ID.
 */
export const getTaskById = async (request, response) => {
  try {
    const task = await Task.findOne({
      _id: request.params.id,
      user: request.user._id,
    });

    if (!task) {
      return response.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    response.json({
      success: true,
      task,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
/**
 * Update an existing task.
 */
export const updateTask = async (request, response) => {
  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: request.params.id,
        user: request.user._id,
      },
      request.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      return response.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    response.json({
      success: true,
      message: "Task updated successfully.",
      task,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
/**
 * Delete a task.
 */
export const deleteTask = async (request, response) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: request.params.id,
      user: request.user._id,
    });

    if (!task) {
      return response.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    response.json({
      success: true,
      message: "Task deleted successfully.",
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};