import { useTodos } from "../hooks/useTodos";
import Modal from "./Modal";
import TodoList from "./TodoList";
import Header from "./Header";

const Todos = () => {
  const {
    todos,
    isModalOpen: isOpen,
    addTodo,
    handleSubmit,
    register,
    closeModal,
    openModal,
    deleteTodo,
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
        <Header openModal={openModal} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default Todos;
