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
    <div className="rounded-2xl border border-slate-200/70 bg-slate-100/80 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className={`font-bold ${color}`}>
          {title}
        </h2>

        <span className="bg-white rounded-full px-3 py-1 text-sm font-semibold text-slate-500 shadow-sm">
          {tasks.length}
        </span>
      </div>

      <div className="space-y-4 min-h-[300px]">
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
