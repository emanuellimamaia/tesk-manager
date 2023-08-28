import { useState } from "react";
import { Id, Task, TaskNotes } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TrashIcon from "../icons/TrashIcon";

interface Props {
  taskNotes: TaskNotes;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function NotesCard({ taskNotes, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: taskNotes.id,
    data: {
      type: "Task",
      taskNotes,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30
      bg-white  p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-2   cursor-grab relative
      "
      />
    );
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-white p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset  relative"
      >
        {/* container para escrever */}
        
        <textarea
          className="
        h-[90%]
        w-full resize-none border-none rounded bg-transparent text-black focus:outline-none
        "
          value={taskNotes.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(taskNotes.id, e.target.value)}
        />
       
      </div>
      
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className="bg-white p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:white cursor-grab relative task"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
        {taskNotes.content}
      </p>
      <span className="">{taskNotes.data}</span>

      {mouseIsOver && (
        <button
          onClick={() => {
            deleteTask(taskNotes.id);
          }}
          className="stroke-white absolute right-8 top-1/2 -translate-y-1/2 bg-black p-2 rounded opacity-60 hover:opacity-100"
        >
          <TrashIcon/>
        </button>
      )}
    </div>
  );
}

export default NotesCard;