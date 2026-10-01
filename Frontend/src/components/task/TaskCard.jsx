import { CalendarDays, Pencil, Trash2 } from "lucide-react";

import Badge from "../ui/Badge";

/**
 * Task Card Component
 * Displays a single task.
 */
function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  return (
    <div
      className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm transition-all duration-300 sm:p-4 sm:hover:-translate-y-1 sm:hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <Badge type={task.priority} />

        {(onEdit || onDelete) && (
          <div className="flex shrink-0 gap-2">
            {onEdit && (
              <button
                onClick={() => onEdit(task)}
                aria-label="Edit task" className="rounded-lg p-1 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600"
              >
                <Pencil size={18} />
              </button>
            )}

            {onDelete && (
              <button
                onClick={() => onDelete(task)}
                aria-label="Delete task" className="rounded-lg p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-500"
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>
        )}
      </div>

      <h3 className="mt-4 break-words font-semibold text-slate-900 line-clamp-2">{task.title}</h3>

      <p className="mt-2 break-words text-sm text-slate-500 line-clamp-3">
        {task.description || "No description"}
      </p>

      {task.dueDate && (
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <CalendarDays className="shrink-0" size={16} />

          <span className="min-w-0 break-words">{new Date(task.dueDate).toLocaleDateString()}</span>
        </div>
      )}
      <select
        value={task.status}
        onChange={(event) => onStatusChange?.(task, event.target.value)}
        className="mt-4 w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 p-2 text-sm text-slate-600 outline-none focus:border-indigo-400"
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
    </div>
  );
}

export default TaskCard;
