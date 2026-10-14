import { useEffect, useRef, useState } from "react";
import { CalendarDays, Pencil, Trash2, ChevronDown } from "lucide-react";

import Badge from "../ui/Badge";

const STATUS_OPTIONS = ["To Do", "In Progress", "Completed"];

function formatDueDate(dueDate) {
  if (!dueDate) return null;

  const date = new Date(dueDate);

  if (Number.isNaN(date.getTime())) {
    return "Invalid due date";
  }

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the status dropdown when clicking outside the card dropdown.
  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsStatusOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Avoid rendering errors when task data is missing.
  if (!task) return null;

  const title = task.title?.trim() || "Untitled task";
  const description = task.description?.trim() || "No description provided";
  const status = STATUS_OPTIONS.includes(task.status) ? task.status : "To Do";
  const dueDate = formatDueDate(task.dueDate);

  const handleStatusChange = (newStatus) => {
    if (newStatus === status) {
      setIsStatusOpen(false);
      return;
    }

    if (typeof onStatusChange === "function") {
      onStatusChange(task, newStatus);
    }

    setIsStatusOpen(false);
  };

  return (
    <article
      className="
        relative flex h-full w-full min-w-0 flex-col
        overflow-visible rounded-2xl border border-slate-700/80
        bg-slate-900 p-3 shadow-sm
        transition-shadow duration-200
        sm:p-4 sm:hover:shadow-lg
      "
    >
      {/* Top section: priority and actions */}
      <div
        className="
          flex min-w-0 flex-col gap-3
          sm:flex-row sm:items-start sm:justify-between
        "
      >
        <div className="min-w-0 max-w-full">
          {task.priority ? (
            <Badge type={task.priority} />
          ) : (
            <span className="text-xs text-slate-400">No priority</span>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
          {typeof onEdit === "function" && (
            <button
              type="button"
              onClick={() => onEdit(task)}
              aria-label={`Edit ${title}`}
              title="Edit task"
              className="
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-lg text-slate-400 transition-colors
                hover:bg-indigo-500/10 hover:text-indigo-400
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-indigo-500
                active:bg-indigo-500/20
              "
            >
              <Pencil size={17} aria-hidden="true" />
            </button>
          )}

          {typeof onDelete === "function" && (
            <button
              type="button"
              onClick={() => onDelete(task)}
              aria-label={`Delete ${title}`}
              title="Delete task"
              className="
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-lg text-slate-400 transition-colors
                hover:bg-rose-500/10 hover:text-rose-400
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-rose-500
                active:bg-rose-500/20
              "
            >
              <Trash2 size={17} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Task title */}
      <h3
        className="
          mt-3 min-w-0 max-w-full break-words
          text-base font-semibold leading-6 text-white
          sm:mt-4 sm:text-lg
        "
      >
        {title}
      </h3>

      {/* Task description */}
      <p
        className="
          mt-2 min-w-0 max-w-full break-words
          text-sm leading-5 text-slate-400
          [overflow-wrap:anywhere]
        "
      >
        {description}
      </p>

      {/* Due date */}
      {dueDate && (
        <div className="mt-4 flex min-w-0 items-start gap-2 text-xs text-slate-400">
          <CalendarDays
            size={16}
            className="mt-0.5 shrink-0"
            aria-hidden="true"
          />
          <span className="min-w-0 break-words">Due: {dueDate}</span>
        </div>
      )}

      {/* Status dropdown */}
      <div ref={dropdownRef} className="relative mt-auto min-w-0 pt-4">
        <button
          type="button"
          onClick={() => setIsStatusOpen((previous) => !previous)}
          aria-haspopup="listbox"
          aria-expanded={isStatusOpen}
          className="
            flex h-11 w-full min-w-0 items-center justify-between
            gap-2 rounded-xl border border-slate-700
            bg-slate-800 px-3 text-left text-sm text-slate-200
            outline-none transition-colors
            hover:border-indigo-500
            focus-visible:border-indigo-500
            focus-visible:ring-2 focus-visible:ring-indigo-500/30
          "
        >
          <span className="min-w-0 truncate">{status}</span>

          <ChevronDown
            size={17}
            aria-hidden="true"
            className={`shrink-0 transition-transform duration-200 ${
              isStatusOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isStatusOpen && (
          <ul
            role="listbox"
            aria-label="Change task status"
            className="
              absolute bottom-full left-0 z-50 mb-2 w-full
              overflow-hidden rounded-xl border border-slate-700
              bg-slate-900 py-1 shadow-xl
            "
          >
            {STATUS_OPTIONS.map((option) => (
              <li key={option} role="option" aria-selected={status === option}>
                <button
                  type="button"
                  onClick={() => handleStatusChange(option)}
                  className={`
                    min-h-11 w-full px-3 py-2.5 text-left text-sm
                    transition-colors
                    focus-visible:outline-none focus-visible:bg-slate-800
                    ${
                      status === option
                        ? "bg-indigo-500/10 text-indigo-400"
                        : "text-slate-300 hover:bg-slate-800"
                    }
                  `}
                >
                  {option}
                  {status === option && (
                    <span className="float-right" aria-hidden="true">
                      ✓
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default TaskCard;
