import initialTodos from "../constants/todos";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  priority: string;
}

interface IFormValues {
  title: string;
  priority: string;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(todos);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      title: "",
      priority: "",
    },
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addTodo = async (newTodo: Todo) => {
    const isValid = await trigger();
    if (!isValid) return;
    console.log(newTodo);
    setTodos((prev) => [...prev, newTodo]);
    reset();
    closeModal();
  };

  return {
    todos,
    setTodos,
    isModalOpen,
    addTodo,
    errors,
    handleSubmit,
    register,
    openModal,
    closeModal,
  };
};
