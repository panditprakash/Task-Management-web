import { ClipboardList } from "lucide-react";

/**
 * Shown when a column has no tasks.
 */
function EmptyState() {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center px-4 py-8 text-center text-slate-400 sm:py-10">
      <ClipboardList size={40} />

      <p className="mt-3 text-sm">
        No tasks in this column.
      </p>
    </div>
  );
}

export default EmptyState;
