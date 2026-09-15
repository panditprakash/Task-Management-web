import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Card from "../ui/Card";

/**
 * Task Analytics Chart
 */
function AnalyticsChart({ tasks }) {
  const data = [
    {
      status: "To Do",
      value: tasks.filter(
        (task) => task.status === "To Do"
      ).length,
    },
    {
      status: "Progress",
      value: tasks.filter(
        (task) =>
          task.status === "In Progress"
      ).length,
    },
    {
      status: "Done",
      value: tasks.filter(
        (task) =>
          task.status === "Completed"
      ).length,
    },
  ];

  return (
    <Card>
      <h3 className="text-lg font-bold mb-4">
        Task Analytics
      </h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="status" />

            <Tooltip />

            <Bar dataKey="value" radius={6} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default AnalyticsChart;