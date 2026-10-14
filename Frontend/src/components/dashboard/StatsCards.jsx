import Card from "../ui/Card";
import {
  CheckCircle2,
  Clock3,
  Menu,
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
      icon: Menu,
      color: "bg-sky-50 text-sky-600",
    },
    {
      label: "In Progress",
      value: progress,
      icon: Clock3,
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "Completed",
      value: completed,
      icon: CheckCircle2,
      color: "bg-emerald-50 text-emerald-600",
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
        <Card key={stat.label} className="group border-slate-100 p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-slate-500">
                {stat.label}
              </p>

              <h3 className="text-3xl font-bold tracking-tight mt-1">
                {stat.value}
              </h3>
            </div>

            <span className={`grid h-12 w-12 place-items-center rounded-2xl ${stat.color}`}><stat.icon size={23} /></span>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default StatsCards;
