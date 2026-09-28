import { useEffect, useState } from "react";
import { ClipboardList } from "lucide-react";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";
import Loader from "../../components/ui/Loader";
import TaskCard from "../../components/task/TaskCard";
import { getTasks, updateTask } from "../../services/taskService";

/**
 * Displays every task owned by the authenticated user.
 */
function MyTasksPage() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response.data.tasks);
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to load your tasks.");
      } finally {
        setIsLoading(false);
      }
    };

    loadTasks();
  }, []);

  const handleStatusChange = async (task, status) => {
    try {
      const response = await updateTask(task._id, { ...task, status });
      setTasks((currentTasks) =>
        currentTasks.map((currentTask) =>
          currentTask._id === task._id ? response.data.task : currentTask,
        ),
      );
      toast.success("Task status updated.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update task status.");
    }
  };

  return (
    <DashboardLayout>
      <section>
        <div className="mb-6">
          <p className="text-sm font-medium text-indigo-600">Task overview</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">My Tasks</h1>
          <p className="mt-2 text-slate-500">All tasks assigned to your account.</p>
        </div>

        {isLoading ? (
          <Loader />
        ) : tasks.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center text-slate-500">
            <ClipboardList className="mx-auto mb-3 text-slate-400" size={42} />
            <p className="font-semibold text-slate-700">No tasks yet</p>
            <p className="mt-1 text-sm">Create a task from the dashboard to see it here.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        )}
      </section>
    </DashboardLayout>
  );
}

export default MyTasksPage;
