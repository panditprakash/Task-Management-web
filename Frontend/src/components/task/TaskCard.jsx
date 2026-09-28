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
        border border-slate-200/80
      transition-all
  duration-300
  hover:-translate-y-1 hover:shadow-md
      "
    >
      <div className="flex justify-between items-start">
        <Badge type={task.priority} />

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            aria-label="Edit task" className="rounded-lg p-1 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(task)}
            aria-label="Delete task" className="rounded-lg p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-500"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <h3 className="font-semibold text-slate-900 mt-4 line-clamp-2">{task.title}</h3>

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
    rounded-xl border border-slate-200 bg-slate-50 p-2 text-sm text-slate-600 outline-none focus:border-indigo-400
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
