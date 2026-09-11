import TaskColumn from "./TaskColumn";

/**
 * Task Board
 * Groups tasks by status.
 */
function TaskBoard({ tasks, onEdit, onDelete }) {
  const todo = tasks.filter((task) => task.status === "To Do");

  const progress = tasks.filter((task) => task.status === "In Progress");

  const completed = tasks.filter((task) => task.status === "Completed");
if (tasks.length === 0)
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
        <h3 className="text-xl font-bold">No matching tasks</h3>

        <p className="text-slate-500 mt-2">
          Try changing your search or filters.
        </p>
      </div>
      <TaskColumn
        title="To Do"
        color="text-sky-600"
        tasks={todo}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <TaskColumn
        title="In Progress"
        color="text-amber-600"
        tasks={progress}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <TaskColumn
        title="Completed"
        color="text-green-600"
        tasks={completed}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
}

export default TaskBoard;
