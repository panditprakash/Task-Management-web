/**
 * Used for forms throughout the application.
 */
function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          px-4 py-3
          rounded-xl
          border border-slate-300
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
          transition-all
        "
      />
    </div>
  );
}

export default Input;