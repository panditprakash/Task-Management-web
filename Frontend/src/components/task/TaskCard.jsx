import { CalendarDays, Pencil, Trash2 } from "lucide-react";

import Badge from "../ui/Badge";

/**
 * Task Card Component
 * Displays a single task.
 */
function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        p-4
        shadow-sm
        border border-slate-200
      transition-all
  duration-300
  hover:-translate-y-1
      "
    >
      <div className="flex justify-between items-start">
        <Badge type={task.priority} />

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="text-slate-500 hover:text-indigo-600"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(task)}
            className="text-slate-500 hover:text-red-500"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <h3 className="font-semibold text-slate-900 mt-4">{task.title}</h3>

      <p className="text-sm text-slate-500 mt-2 line-clamp-3">
        {task.description || "No description"}
      </p>

      {task.dueDate && (
        <div className="flex items-center gap-2 mt-4 text-xs text-slate-500">
          <CalendarDays size={16} />

          <span>{new Date(task.dueDate).toLocaleDateString()}</span>
        </div>
      )}
      <select
        value={task.status}
        onChange={(event) => onStatusChange(task, event.target.value)}
        className="
    mt-4
    w-full
    rounded-lg
    border
    p-2
  "
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
    </div>
  );
}

export default TaskCard;
