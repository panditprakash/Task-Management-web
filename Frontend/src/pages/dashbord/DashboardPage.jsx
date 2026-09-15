import { useEffect, useMemo, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import StatsCards from "../../components/dashboard/StatsCards";
import TaskBoard from "../../components/task/TaskBoard";
// import { getTasks } from "../../services/taskService";
import toast from "react-hot-toast";
import ProgressCard from "../../components/task/ProgressCard"
import TaskFilter from "../../components/task/TaskFilterBar"
import TaskFormModal from "../../components/task/TaskFormModal";
import DeleteTaskModal from "../../components/task/DeleteTaskModal";
import {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
} from "../../services/taskService";
import { filterTasks } from "../../utils/taskHelpers";

function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const [editingTask, setEditingTask] = useState(null);

  const [deletingTask, setDeletingTask] = useState(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");
  const [sort, setSort] = useState("Newest");
  const filteredTasks = useMemo(
    () => filterTasks(tasks, search, status, priority, sort),
    [tasks, search, status, priority, sort],
  );

  const loadTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data.tasks);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load tasks.");
    }
  };
  /**
   * Create a new task.
   */
  const handleCreateTask = async (taskData) => {
    try {
      const response = await createTask(taskData);

      setTasks((previousTasks) => [response.data.task, ...previousTasks]);

      setIsTaskModalOpen(false);

      toast.success("Task created successfully.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create task.");
    }
  };

  /**
   * Open edit modal.
   */
  const handleEdit = (task) => {
    setEditingTask(task);

    setIsTaskModalOpen(true);
  };

  /**
   * Save edited task.
   */
  const handleUpdateTask = async (taskData) => {
    try {
      const response = await updateTask(editingTask._id, taskData);

      setTasks((previousTasks) =>
        previousTasks.map((task) =>
          task._id === editingTask._id ? response.data.task : task,
        ),
      );

      setEditingTask(null);

      setIsTaskModalOpen(false);

      toast.success("Task updated.");
    } catch {
      toast.error("Failed to update task.");
    }
  };

  // // Placeholder functions for now
  // const handleEdit = (task) => {
  //   console.log("Edit", task);
  // };

  const handleDelete = (task) => {
    setDeletingTask(task);
  };

  const handleStatusChange = async (task, status) => {
    try {
      const response = await updateTask(task._id, { ...task, status });
      setTasks((previousTasks) =>
        previousTasks.map((currentTask) =>
          currentTask._id === task._id ? response.data.task : currentTask,
        ),
      );
      toast.success("Task status updated.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update task status.");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadTasks();
  }, []); // Load the task list once when the dashboard opens.

  /**
   * Delete selected task.
   */
  const confirmDelete = async () => {
    try {
      await deleteTask(deletingTask._id);

      setTasks((previousTasks) =>
        previousTasks.filter((task) => task._id !== deletingTask._id),
      );

      toast.success("Task deleted.");

      setDeletingTask(null);
    } catch {
      toast.error("Failed to delete task.");
    }
  };
  return (
    <>
      <DashboardLayout
        openTaskModal={() => {
          setEditingTask(null);
          setIsTaskModalOpen(true);
        }}
      >
        <StatsCards tasks={filteredTasks} />

        <ProgressCard tasks={filteredTasks} />
        <TaskFilter
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          priority={priority}
          setPriority={setPriority}
          sort={sort}
          setSort={setSort}
        />

        <TaskBoard
          tasks={filteredTasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      </DashboardLayout>

      <TaskFormModal
        isOpen={isTaskModalOpen}
        onClose={() => {
          setEditingTask(null);
          setIsTaskModalOpen(false);
        }}
        initialData={editingTask}
        onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
      />

      <DeleteTaskModal
        isOpen={!!deletingTask}
        taskTitle={deletingTask?.title}
        onClose={() => setDeletingTask(null)}
        onConfirm={confirmDelete}
      />
    </>
  );
}

export default DashboardPage;
