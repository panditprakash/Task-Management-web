import Input from "../ui/Input";

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
    <div className="bg-white rounded-2xl border border-slate-200 p-4 grid md:grid-cols-4 gap-4">
      <Input
        placeholder="Search tasks..."
        name="search"
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
      />

      <select
        value={status}
        onChange={(event) =>
          setStatus(event.target.value)
        }
        className="rounded-xl border p-3"
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
        className="rounded-xl border p-3"
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
        className="rounded-xl border p-3"
      >
        <option value="Newest">Newest</option>
        <option value="DueDate">Due Date</option>
      </select>
    </div>
  );
}

export default TaskFilter;