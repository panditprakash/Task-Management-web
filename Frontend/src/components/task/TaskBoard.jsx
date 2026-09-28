import TaskColumn from "./TaskColumn";

/**
 * Task Board
 * Groups tasks by status.
 */
function TaskBoard({ tasks, onEdit, onDelete, onStatusChange }) {
  const todo = tasks.filter((task) => task.status === "To Do");

  const progress = tasks.filter((task) => task.status === "In Progress");

  const completed = tasks.filter((task) => task.status === "Completed");
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <TaskColumn className="bg-black-300 text-shadow-white" title="To Do" color="text-sky-600" tasks={todo} onEdit={onEdit} onDelete={onDelete} onStatusChange={onStatusChange} />
      <TaskColumn title="In Progress" color="text-amber-600" tasks={progress} onEdit={onEdit} onDelete={onDelete} onStatusChange={onStatusChange} />
      <TaskColumn title="Completed" color="text-green-600" tasks={completed} onEdit={onEdit} onDelete={onDelete} onStatusChange={onStatusChange} />
    </div>
  );
}

export default TaskBoard;
