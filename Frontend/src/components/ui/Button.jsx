/**
 * Modern Button Component
 */
function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm",
    secondary:
      "bg-slate-100 hover:bg-slate-200 text-slate-800",
    danger:
      "bg-red-500 hover:bg-red-600 text-white",
    outline:
      "border border-slate-300 hover:bg-slate-50",
  };

  return (
    <button
      type={type}
      className={`
        px-5 py-3
        rounded-xl
        font-medium
        transition-all
        duration-200
        hover:scale-[1.02]
        active:scale-[0.98]
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;