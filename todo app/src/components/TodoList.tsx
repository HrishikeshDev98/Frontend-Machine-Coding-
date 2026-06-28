import type { Todo } from "../hooks/useTodos";
import { MdDeleteOutline } from "react-icons/md";

import { useDraggable } from "@dnd-kit/react";

const TodoList = ({
  todos,
  deleteTodo,
}: {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}) => {
  if (!todos || todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <p className="text-base font-medium text-gray-900">All caught up!</p>
        <p className="mt-1 text-sm text-gray-500">
          Click "Add Task" above to create your first todo item.
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-100">
      {todos.map(({ title, id, priority }) => {
        const isHighPriority = priority === "High";

        return (
          <div
            key={id}
            className="group flex items-center justify-between p-4 sm:p-5 hover:bg-gray-50/70 transition-colors duration-150"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <h3 className="text-sm font-semibold text-gray-900 leading-6">
                {title}
              </h3>

              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium w-fit ${
                  isHighPriority
                    ? "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/10"
                    : "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/10"
                }`}
              >
                {priority || "Normal"}
              </span>
            </div>

            <div className="flex items-center ml-4">
              <button
                onClick={() => deleteTodo(id)}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-200"
                aria-label="Delete todo"
              >
                <MdDeleteOutline size={20} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
