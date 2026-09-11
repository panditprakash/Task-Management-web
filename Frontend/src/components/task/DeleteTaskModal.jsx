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
        <p className="text-slate-600">
          Are you sure you want to delete{" "}
          <strong>{taskTitle}</strong>?
        </p>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button variant="danger" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteTaskModal;