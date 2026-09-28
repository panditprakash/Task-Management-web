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
  className = "",
  required = false,
  autoComplete,
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className={`
          w-full
          px-4 py-3.5
          rounded-xl bg-white/80
          border border-slate-200
          focus:outline-none
          focus:ring-2
          focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100
          transition-all
          placeholder:text-slate-400
          ${className}
        `}
      />
    </div>
  );
}

export default Input;
