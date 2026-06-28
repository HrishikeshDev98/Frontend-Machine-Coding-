import type { Todo } from "../hooks/useTodos";
import { MdDeleteOutline } from "react-icons/md";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {todos.map(({ title, completed, id, priority }) => {
        return (
          <div className="" key={title}>
            <div className="p-4 rounded-lg border border-gray-200 shadow-md justify-between flex items-center">
              <h3>{title}</h3>
              <p>Priotity : {priority}</p>
              <MdDeleteOutline size={24} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
