import { useSortable } from "@dnd-kit/react/sortable";
import { MdDeleteOutline } from "react-icons/md";
import { MdDragIndicator } from "react-icons/md"; // Added a nice drag handle icon

interface TodoProps {
  id: number;
  priority: string;
  title: string;
  isHighPriority: boolean;
  deleteTodo: (id: number) => void;
  changeStatus: (id: number) => void;
  index: number;
  completed: boolean;
}

const Todo = ({
  id,
  priority,
  title,
  isHighPriority,
  deleteTodo,
  index,
  completed,
  changeStatus,
}: TodoProps) => {
  const { ref, isDragging } = useSortable({
    id,
    index,
    type: "item",
    accept: "item",
  });

  return (
    <div
      ref={ref}
      data-dragging={isDragging}
      className={`group flex items-center justify-between p-4 sm:px-5 py-4 border-b border-gray-100 last:border-none transition-all duration-150 ${
        isDragging
          ? "bg-indigo-50/50 opacity-50 shadow-inner scale-[0.99] z-10"
          : "bg-white hover:bg-gray-50/60"
      }`}
    >
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <div
          className="cursor-grab active:cursor-grabbing text-gray-300 hover:text-gray-500 p-1 rounded transition-colors md:opacity-0 group-hover:opacity-100"
          title="Drag to reorder"
        >
          <MdDragIndicator size={20} />
        </div>

        <div className="flex items-center h-5">
          <input
            id={`todo-${id}`}
            type="checkbox"
            name="completed"
            checked={completed}
            onChange={() => changeStatus(id)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transition-colors cursor-pointer"
          />
        </div>

        {/* Content Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 min-w-0">
          <label
            htmlFor={`todo-${id}`}
            className={`text-sm font-medium leading-6 truncate cursor-pointer transition-all ${
              completed
                ? "text-gray-400 line-through decoration-gray-300 decoration-1"
                : "text-gray-900"
            }`}
          >
            {title}
          </label>

          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold w-fit tracking-wide ${
              completed
                ? "bg-gray-100 text-gray-400 ring-1 ring-inset ring-gray-200"
                : isHighPriority
                  ? "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/10"
                  : "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/10"
            }`}
          >
            {priority || "Normal"}
          </span>
        </div>
      </div>

      {/* Right Section: Delete Button */}
      <div className="flex items-center ml-4 shrink-0">
        <button
          onClick={() => deleteTodo(id)}
          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-100"
          aria-label="Delete todo"
        >
          <MdDeleteOutline size={18} />
        </button>
      </div>
    </div>
  );
};

export default Todo;
