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
    <Card className="border-indigo-100 bg-gradient-to-r mt-5 from-white to-indigo-50/70">
      <div className="flex items-start justify-between"><div><h3 className="font-bold text-lg">
        Task Progress
      </h3>

      <p className="text-slate-500 mt-1">
        {completed} of {tasks.length} completed
      </p></div><span className="rounded-xl bg-indigo-600 px-3 py-1.5 text-sm font-bold text-white">{percentage}%</span></div>

      <div className="mt-4 h-3 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-3 text-sm font-medium text-slate-600">Keep going — every completed task counts.</p>
    </Card>
  );
}

export default ProgressCard;

