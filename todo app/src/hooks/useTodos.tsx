import initialTodos from "../constants/todos";
import { useCallback, useMemo, useState, type ChangeEvent } from "react";
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
  completed: boolean;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

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
      completed: false,
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
      completed: false,
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

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement, Element>) => {
      setSearch(event.target.value);
    },
    [],
  );

  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) =>  
        todo.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [todos, search],
  );

  const changeStatus = (id: Todo["id"]) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return {
    todos: filteredTodos,
    setTodos,
    isModalOpen,
    addTodo,
    errors,
    handleSubmit,
    register,
    openModal,
    closeModal,
    deleteTodo,
    changeStatus,
    handleInputChange,
    search,
  };
};
