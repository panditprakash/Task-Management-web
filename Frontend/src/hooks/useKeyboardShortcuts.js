import { useEffect } from "react";

/**
 * Keyboard Shortcuts
 * N = New Task
 * Esc = Close Modal
 */
function useKeyboardShortcuts({
  openTaskModal,
  closeModal,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key.toLowerCase() === "n"
      ) {
        openTaskModal();
      }

      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [openTaskModal, closeModal]);
}

export default useKeyboardShortcuts;