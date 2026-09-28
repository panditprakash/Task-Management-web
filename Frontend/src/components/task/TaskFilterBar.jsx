import { Search } from "lucide-react";

/**
 * Search and Filter Bar
 */
function TaskFilter({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
  sort,
  setSort,
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-3  mt-5 grid md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-3 shadow-sm">
      <label className="relative"><Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><input aria-label="Search tasks" placeholder="Search tasks..." name="search" value={search} onChange={(event) => setSearch(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm outline-none focus:border-indigo-400 focus:bg-white" /></label>

      <select
        value={status}
        onChange={(event) =>
          setStatus(event.target.value)
        }
        className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600 outline-none focus:border-indigo-400"
      >
        <option value="All">All Status</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={priority}
        onChange={(event) =>
          setPriority(event.target.value)
        }
        className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600 outline-none focus:border-indigo-400"
      >
        <option value="All">All Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <select
        value={sort}
        onChange={(event) =>
          setSort(event.target.value)
        }
        className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600 outline-none focus:border-indigo-400"
      >
        <option value="Newest">Newest</option>
        <option value="DueDate">Due Date</option>
      </select>
    </div>
  );
}

export default TaskFilter;
