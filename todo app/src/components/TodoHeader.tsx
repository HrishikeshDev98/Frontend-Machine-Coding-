import { FiPlus } from "react-icons/fi";
import { useDraggable } from "@dnd-kit/react";

const TodoHeader = ({ openModal }: { openModal: () => void }) => {
  const { ref } = useDraggable({
    id: "draggable",
  });

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 mb-8 border-b border-gray-200 gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Workspace
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Manage your tasks, priorities, and daily productivity.
        </p>
      </div>
      <button
        ref={ref}
        onClick={openModal}
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 active:scale-95"
      >
        <span>Add Task</span>
        <FiPlus size={18} className="stroke-[2.5]" />
      </button>
    </div>
  );
};

export default TodoHeader;
