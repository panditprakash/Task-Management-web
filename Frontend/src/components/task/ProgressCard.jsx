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
    <Card className="border-indigo-200 bg-gradient-to-r mt-5 from-white to-indigo-50/70">
      <div className="flex items-start justify-between"><div><h3 className="font-bold text-lg">
        Task Progress
      </h3>

      <p className="text-slate-500 mt-1">
        {completed} of {taskList.length} completed
      </p></div><span className="rounded-xl bg-indigo-600 px-3 py-1.5 text-sm font-bold text-white">{percentage}%</span></div>

      <div className="mt-4 h-3 bg-slate-200 rounded-full overflow-hidden">
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

      <p className="mt-3 text-sm font-medium text-slate-600">Keep going — every completed task counts.</p>
    </Card>
  );
}

export default ProgressCard;

