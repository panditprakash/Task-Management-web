import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";

/**
 * Task Column
 * Displays tasks for one status.
 */
function TaskColumn({
  title,
  color,
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  return (
    <div className="min-w-0 rounded-2xl border border-slate-200/70 bg-slate-100/80 p-3 sm:p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className={`min-w-0 break-words font-bold ${color}`}>
          {title}
        </h2>

        <span className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-500 shadow-sm">
          {tasks.length}
        </span>
      </div>

      <div className="min-h-48 space-y-3 sm:min-h-[18.75rem] sm:space-y-4">
        {tasks.length === 0 ? (
          <EmptyState />
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onStatusChange={onStatusChange}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskColumn;
