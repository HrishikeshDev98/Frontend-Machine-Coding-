import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import type { Todo } from "../hooks/useTodos";

const Todo = ({ id, completed, priority, title }: Todo) => {
  return (
    <>
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
    </>
  );
};

export default Todo;
