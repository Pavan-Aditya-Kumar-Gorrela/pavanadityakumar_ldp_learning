import { useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Learn RTL", completed: false },
    { id: 2, title: "Learn Jest", completed: false },
  ]);

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          data-testid={`todo-${todo.id}`}
        >
          <span data-testid={`title-${todo.id}`}>
            {todo.title}
          </span>

          <span data-testid={`status-${todo.id}`}>
            {todo.completed ? "Completed" : "Pending"}
          </span>

          <button
            data-testid={`toggle-${todo.id}`}
            onClick={() => toggleTodo(todo.id)}
          >
            Toggle
          </button>

          <button
            data-testid={`delete-${todo.id}`}
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;