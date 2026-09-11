import Card from "../ui/Card";
import {
  CheckCircle2,
  Clock3,
  Circle,
} from "lucide-react";

/**
 * Dashboard Statistics
 */
function StatsCards({ tasks }) {
  const todo = tasks.filter(
    (task) => task.status === "To Do"
  ).length;

  const progress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const stats = [
    {
      label: "To Do",
      value: todo,
      icon: Circle,
      color: "text-sky-500",
    },
    {
      label: "In Progress",
      value: progress,
      icon: Clock3,
      color: "text-amber-500",
    },
    {
      label: "Completed",
      value: completed,
      icon: CheckCircle2,
      color: "text-green-500",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
      "
    >
      {stats.map((stat) => (
        <Card key={stat.label}>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500">
                {stat.label}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {stat.value}
              </h3>
            </div>

            <stat.icon
              size={34}
              className={stat.color}
            />
          </div>
        </Card>
      ))}
    </div>
  );
}

export default StatsCards;