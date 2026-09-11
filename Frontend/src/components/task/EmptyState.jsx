import { ClipboardList } from "lucide-react";

/**
 * Shown when a column has no tasks.
 */
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-slate-400">
      <ClipboardList size={40} />

      <p className="mt-3 text-sm text-center">
        No tasks in this column.
      </p>
    </div>
  );
}

export default EmptyState;