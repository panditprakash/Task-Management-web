import Modal from "../ui/Modal";
import Button from "../ui/Button";

/**
 * Delete Confirmation Modal
 */
function DeleteTaskModal({
  isOpen,
  onClose,
  onConfirm,
  taskTitle,
}) {
  return (
    <Modal
      isOpen={isOpen}
      title="Delete Task"
      onClose={onClose}
    >
      <div className="space-y-6">
        <p className="break-words text-slate-600">
          Are you sure you want to delete{" "}
          <strong>{taskTitle}</strong>?
        </p>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button className="w-full sm:w-auto" variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button className="w-full sm:w-auto" variant="danger" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteTaskModal;
