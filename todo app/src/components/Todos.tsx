import React from "react";
import { useTodos } from "../hooks/useTodos";
import { FiPlus } from "react-icons/fi";
import Modal from "./Modal";
import TodoList from "./TodoList";

const Todos = () => {
  const {
    todos,
    isModalOpen: isOpen,
    addTodo,
    handleSubmit,
    register,
    closeModal,
    openModal,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          register={register}
          handleSubmit={handleSubmit}
          addTodo={addTodo}
        />
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
            onClick={openModal}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 active:scale-95"
          >
            <span>Add Task</span>
            <FiPlus size={18} className="stroke-[2.5]" />
          </button>
        </div>
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default Todos;
