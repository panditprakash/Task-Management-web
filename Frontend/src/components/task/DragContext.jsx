import { DragDropContext } from "@hello-pangea/dnd";

/**
 * Drag Context
 * Controls drag-and-drop events.
 */
function DragContext({
  children,
  onDragEnd,
}) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {children}
    </DragDropContext>
  );
}

export default DragContext;