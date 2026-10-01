import Card from "../ui/Card";

/**
 * Overall task completion.
 */
function ProgressCard({ tasks }) {
  // The dashboard loads asynchronously, so avoid rendering errors if the API
  // has not returned an array yet.
  const taskList = Array.isArray(tasks) ? tasks : [];

  const completed = taskList.filter(
    (task) => task.status === "Completed"
  ).length;

  const percentage =
    taskList.length === 0
      ? 0
      : Math.round((completed / taskList.length) * 100);

  // Keep the fill visible even when a theme or an external stylesheet
  // overrides Tailwind's gradient utility classes.
  const progressStyle = {
    width: `${percentage}%`,
    backgroundColor: "#6366f1",
    backgroundImage: "linear-gradient(90deg, #6366f1, #8b5cf6)",
  };

  return (
    <Card className="mt-5 border-indigo-200 bg-gradient-to-r from-white to-indigo-50/70 p-4 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-lg font-bold">Task Progress</h3>

          <p className="mt-1 text-slate-500">
            {completed} of {taskList.length} completed
          </p>
        </div>
        <span className="self-start rounded-xl bg-indigo-600 px-3 py-1.5 text-sm font-bold text-white sm:self-auto">
          {percentage}%
        </span>
      </div>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          aria-label={`${percentage}% of tasks completed`}
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={percentage}
          aria-valuetext={`${completed} of ${taskList.length} tasks completed`}
          role="progressbar"
          className="h-full rounded-full transition-all duration-500"
          style={progressStyle}
        />
      </div>

      <p className="mt-3 text-sm font-medium text-slate-600">
        Keep going — every completed task counts.
      </p>
    </Card>
  );
}

export default ProgressCard;

