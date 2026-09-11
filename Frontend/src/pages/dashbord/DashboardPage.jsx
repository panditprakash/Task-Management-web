import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import StatsCards from "../../components/dashboard/StatsCards";
import Card from "../../components/ui/Card";
import TaskBoard from "../../components/task/TaskBoard";
// import { getTasks } from "../../services/taskService";
import toast from "react-hot-toast";
import TaskFormModal from "../../components/task/TaskFormModal";
import DeleteTaskModal from "../../components/task/DeleteTaskModal";
import {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
} from "../../services/taskService";

function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const [editingTask, setEditingTask] = useState(null);

  const [deletingTask, setDeletingTask] = useState(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");
  const [sort, setSort] = useState("Newest");
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
    } catch (error) {
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
  useEffect(() => {
    loadTasks();
  }, []);

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
    } catch (error) {
      toast.error("Failed to delete task.");
    }
  };
  const loadTasks = async () => {
    const response = await getTasks();

    setTasks(response.data.tasks);
  };

  return (
    <>
      <DashboardLayout
        openTaskModal={() => {
          setEditingTask(null);
          setIsTaskModalOpen(true);
        }}
      ></DashboardLayout>

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
    </>
  );
}

export default DashboardPage;
