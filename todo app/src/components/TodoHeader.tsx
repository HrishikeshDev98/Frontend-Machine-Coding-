import type { ChangeEvent } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";

interface TodoHeaderProps {
  openModal: () => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

const TodoHeader = ({
  openModal,
  search,
  handleInputChange,
}: TodoHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-6 mb-8 border-b border-gray-200/80 gap-6">
      <div className="space-y-1">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Workspace
        </h2>
        <p className="text-sm font-medium text-gray-500">
          Manage your tasks, priorities, and daily productivity.
        </p>
      </div>

      <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
        <div className="relative flex-1 sm:w-64">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FiSearch className="h-4 w-4 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => handleInputChange(e)}
            placeholder="Search tasks..."
            className="w-full block pl-9 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm placeholder-gray-400 shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          onClick={openModal}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:scale-95 shrink-0"
        >
          <span>Add Task</span>
          <FiPlus size={16} className="stroke-[3]" />
        </button>
      </div>
    </div>
  );
};

export default TodoHeader;
