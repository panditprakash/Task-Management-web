/**
 * Reusable Modal
 */
function Modal({ isOpen, title, children, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 sm:items-center sm:p-4">
      <div className="max-h-[90dvh] w-full overflow-y-auto rounded-t-2xl bg-white p-4 sm:max-w-lg sm:rounded-2xl sm:p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="min-w-0 break-words text-lg font-bold sm:text-xl">{title}</h2>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="shrink-0 text-slate-500 hover:text-slate-700"
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Modal;
