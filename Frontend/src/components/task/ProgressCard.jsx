import Card from "../ui/Card";

/**
 * Overall task completion.
 */
function ProgressCard({ tasks }) {
  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const percentage =
    tasks.length === 0
      ? 0
      : Math.round((completed / tasks.length) * 100);

  return (
    <Card>
      <h3 className="font-bold text-lg">
        Task Progress
      </h3>

      <p className="text-slate-500 mt-1">
        {completed} of {tasks.length} completed
      </p>

      <div className="mt-4 h-3 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="bg-indigo-600 h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-3 font-semibold">
        {percentage}% Complete
      </p>
    </Card>
  );
}

export default ProgressCard;

