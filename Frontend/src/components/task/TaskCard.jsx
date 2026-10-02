// import { CalendarDays, Pencil, Trash2 } from "lucide-react";

// import Badge from "../ui/Badge";

// /**
//  * Task Card Component
//  * Displays a single task.
//  */
// function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
//   return (
//     <div
//       className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm transition-all duration-300 sm:p-4 sm:hover:-translate-y-1 sm:hover:shadow-md"
//     >
//       <div className="flex items-start justify-between gap-3">
//         <Badge type={task.priority} />

//         {(onEdit || onDelete) && (
//           <div className="flex shrink-0 gap-2">
//             {onEdit && (
//               <button
//                 onClick={() => onEdit(task)}
//                 aria-label="Edit task" className="rounded-lg p-1 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600"
//               >
//                 <Pencil size={18} />
//               </button>
//             )}

//             {onDelete && (
//               <button
//                 onClick={() => onDelete(task)}
//                 aria-label="Delete task" className="rounded-lg p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-500"
//               >
//                 <Trash2 size={18} />
//               </button>
//             )}
//           </div>
//         )}
//       </div>

//       <h3 className="mt-4 break-words font-semibold text-slate-900 line-clamp-2">{task.title}</h3>

//       <p className="mt-2 break-words text-sm text-slate-500 line-clamp-3">
//         {task.description || "No description"}
//       </p>

//       {task.dueDate && (
//         <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
//           <CalendarDays className="shrink-0" size={16} />

//           <span className="min-w-0 break-words">{new Date(task.dueDate).toLocaleDateString()}</span>
//         </div>
//       )}
//       <select
//         value={task.status}
//         onChange={(event) => onStatusChange?.(task, event.target.value)}
//         className="mt-4 w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 p-2 text-sm text-slate-600 outline-none focus:border-indigo-400"
//       >
//         <option>To Do</option>
//         <option>In Progress</option>
//         <option>Completed</option>
//       </select>
//     </div>
//   );
// }

// export default TaskCard;


import { CalendarDays, Pencil, Trash2, ChevronDown } from "lucide-react";
import { useState } from "react";
import Badge from "../ui/Badge";

/**
 * Task Card Component
 *
 * Displays a single task with:
 * - Priority
 * - Edit / Delete actions
 * - Title
 * - Description
 * - Due date
 * - Custom responsive status dropdown
 *
 * Mobile-first design:
 * - Prevents horizontal overflow
 * - Prevents native select popup from going outside screen
 * - Keeps buttons and content inside the card
 */
function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  const statusOptions = ["To Do", "In Progress", "Completed"];

  const handleStatusChange = (status) => {
    onStatusChange?.(task, status);
    setIsStatusOpen(false);
  };

  return (
    <article
      className="
        relative
        w-full
        min-w-0
        max-w-full
        overflow-visible
        rounded-2xl
        border border-slate-700/80
        bg-slate-900
        p-3
        shadow-sm
        transition-all
        duration-300
        sm:p-4
        sm:hover:-translate-y-1
        sm:hover:shadow-md
      "
    >
      {/* =========================
          Top Section
      ========================== */}
      <div
        className="
          flex
          min-w-0
          flex-col
          gap-3
          sm:flex-row
          sm:items-start
          sm:justify-between
        "
      >
        {/* Priority Badge */}
        <div className="min-w-0 max-w-full">
          <Badge type={task.priority} />
        </div>

        {/* Action Buttons */}
        {(onEdit || onDelete) && (
          <div
            className="
              flex
              shrink-0
              items-center
              gap-2
              self-end
              sm:self-auto
            "
          >
            {onEdit && (
              <button
                type="button"
                onClick={() => onEdit(task)}
                aria-label="Edit task"
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  text-slate-400
                  transition
                  hover:bg-indigo-500/10
                  hover:text-indigo-400
                  active:bg-indigo-500/20
                "
              >
                <Pencil size={17} />
              </button>
            )}

            {onDelete && (
              <button
                type="button"
                onClick={() => onDelete(task)}
                aria-label="Delete task"
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  text-slate-400
                  transition
                  hover:bg-rose-500/10
                  hover:text-rose-400
                  active:bg-rose-500/20
                "
              >
                <Trash2 size={17} />
              </button>
            )}
          </div>
        )}
      </div>

      {/* =========================
          Task Title
      ========================== */}
      <h3
        className="
          mt-3
          min-w-0
          max-w-full
          break-words
          text-base
          font-semibold
          leading-6
          text-white
          sm:mt-4
          sm:text-lg
        "
      >
        {task.title}
      </h3>

      {/* =========================
          Task Description
      ========================== */}
      <p
        className="
          mt-2
          min-w-0
          max-w-full
          break-words
          text-sm
          leading-5
          text-slate-400
          line-clamp-3
        "
      >
        {task.description || "No description"}
      </p>

      {/* =========================
          Due Date
      ========================== */}
      {task.dueDate && (
        <div
          className="
            mt-4
            flex
            min-w-0
            max-w-full
            items-start
            gap-2
            text-xs
            text-slate-400
          "
        >
          <CalendarDays
            size={16}
            className="mt-0.5 shrink-0"
          />

          <span className="min-w-0 break-words">
            {new Date(task.dueDate).toLocaleDateString()}
          </span>
        </div>
      )}

      {/* =========================
          Custom Status Dropdown
      ========================== */}
      <div className="relative mt-4 w-full min-w-0">
        {/* Dropdown Button */}
        <button
          type="button"
          onClick={() => setIsStatusOpen((prev) => !prev)}
          className="
            flex
            h-10
            w-full
            min-w-0
            max-w-full
            items-center
            justify-between
            gap-2
            rounded-xl
            border
            border-slate-700
            bg-slate-800
            px-3
            text-left
            text-sm
            text-slate-300
            outline-none
            transition
            hover:border-indigo-500
            focus:border-indigo-500
            focus:ring-2
            focus:ring-indigo-500/20
          "
        >
          <span className="min-w-0 truncate">
            {task.status}
          </span>

          <ChevronDown
            size={17}
            className={`
              shrink-0
              transition-transform
              duration-200
              ${isStatusOpen ? "rotate-180" : ""}
            `}
          />
        </button>

        {/* Dropdown Options */}
        {isStatusOpen && (
          <div
            className="
              absolute
              left-0
              right-0
              z-50
              mt-2
              w-full
              min-w-0
              overflow-hidden
              rounded-xl
              border
              border-slate-700
              bg-slate-900
              shadow-xl
            "
          >
            {statusOptions.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => handleStatusChange(status)}
                className={`
                  block
                  w-full
                  px-3
                  py-2.5
                  text-left
                  text-sm
                  transition
                  ${
                    task.status === status
                      ? "bg-indigo-500/10 text-indigo-400"
                      : "text-slate-300 hover:bg-slate-800"
                  }
                `}
              >
                {status}
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default TaskCard;