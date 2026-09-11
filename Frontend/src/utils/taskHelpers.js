/**
 * Filter and sort tasks.
 */
export const filterTasks = (
  tasks,
  search,
  status,
  priority,
  sort
) => {
  let filteredTasks = [...tasks];

  if (search) {
    filteredTasks = filteredTasks.filter((task) =>
      task.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }

  if (status !== "All") {
    filteredTasks = filteredTasks.filter(
      (task) => task.status === status
    );
  }

  if (priority !== "All") {
    filteredTasks = filteredTasks.filter(
      (task) => task.priority === priority
    );
  }

  if (sort === "DueDate") {
    filteredTasks.sort(
      (a, b) =>
        new Date(a.dueDate || Infinity) -
        new Date(b.dueDate || Infinity)
    );
  } else {
    filteredTasks.sort(
      (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
    );
  }

  return filteredTasks;
};