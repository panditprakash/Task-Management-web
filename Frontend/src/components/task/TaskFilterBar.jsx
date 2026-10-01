import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const statusOptions = ["All", "To Do", "In Progress", "Completed"];
const priorityOptions = ["All", "High", "Medium", "Low"];
const sortOptions = ["Newest", "DueDate"];

function FilterSelect({ ariaLabel, value, onChange, options, getLabel }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const selectedLabel = getLabel(value);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!selectRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div ref={selectRef} className="relative w-full min-w-0 max-w-full">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full min-w-0 max-w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-left text-sm text-slate-600 outline-none transition focus:border-indigo-400 focus:bg-white"
      >
        <span className="truncate">{selectedLabel}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={ariaLabel}
          className="absolute inset-x-0 z-30 mt-2 max-h-52 overflow-y-auto rounded-xl border border-slate-200 bg-white p-1 shadow-lg"
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={value === option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm transition hover:bg-indigo-50 ${
                value === option
                  ? "bg-indigo-50 font-medium text-indigo-700"
                  : "text-slate-600"
              }`}
            >
              {getLabel(option)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

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
    <div className="mt-5 w-full min-w-0 max-w-full rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))]">
        <label className="relative block w-full min-w-0 max-w-full sm:col-span-2 xl:col-span-1">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            aria-label="Search tasks"
            placeholder="Search tasks..."
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="block w-full min-w-0 max-w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm outline-none focus:border-indigo-400 focus:bg-white"
          />
        </label>

        <FilterSelect
          ariaLabel="Filter by status"
          value={status}
          onChange={setStatus}
          options={statusOptions}
          getLabel={(option) =>
            option === "All" ? "All Status" : option
          }
        />

        <FilterSelect
          ariaLabel="Filter by priority"
          value={priority}
          onChange={setPriority}
          options={priorityOptions}
          getLabel={(option) =>
            option === "All" ? "All Priority" : option
          }
        />

        <FilterSelect
          ariaLabel="Sort tasks"
          value={sort}
          onChange={setSort}
          options={sortOptions}
          getLabel={(option) =>
            option === "DueDate" ? "Due Date" : option
          }
        />
      </div>
    </div>
  );
}

export default TaskFilter;
