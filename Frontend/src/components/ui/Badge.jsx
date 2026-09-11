/**
 * Displays task priority.
 */
function Badge({ type }) {
  const styles = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-amber-100 text-amber-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`
        px-3 py-1
        rounded-full
        text-xs
        font-semibold
        ${styles[type] || "bg-slate-100 text-slate-700"}
      `}
    >
      {type}
    </span>
  );
}

export default Badge;