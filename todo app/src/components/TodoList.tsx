import Actualtodo from "./Todo";

import type { Todo } from "../hooks/useTodos";

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
      {todos.map(({ title, id, priority }, index) => {
        const isHighPriority = priority === "High";

        return (
          <Actualtodo
            key={id}
            id={id}
            index={index}
            title={title}
            priority={priority}
            isHighPriority={isHighPriority}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
