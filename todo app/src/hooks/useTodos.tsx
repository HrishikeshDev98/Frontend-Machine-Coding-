import initialTodos from "../constants/todos";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  priority: string;
}

export interface IFormValues {
  title: string;
  priority: "High" | "Medium" | "Low" | "";
  status: "Completed" | "Pending" | "";
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      status: "",
    },
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addTodo = async (data: IFormValues) => {
    const isValid = await trigger();
    if (!isValid) return;
    const id = todos.length + 1;
    const newTodo: Todo = {
      id,
      title: data.title,
      priority: data.priority,
      completed: data.status === "Completed",
    };
    setTodos((prev) => [...prev, newTodo]);
    reset();
    toast.success("Successfully created todo!");
    closeModal();
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
    toast.success("Successfully deleted todo!");
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
    deleteTodo,
  };
};
