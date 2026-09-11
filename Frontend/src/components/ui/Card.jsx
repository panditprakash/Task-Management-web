/**
 * Reusable Card
 */
function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        shadow-sm
        border border-slate-200
        p-6
        transition-all
  duration-300
  hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
