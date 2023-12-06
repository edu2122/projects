import { CreateTodo } from "../CreateTodo";

export function Header({ onAddTodo }) {
  return (
    <header className="todo-header">
      <h1 className="todo-title">Todo App</h1>
      <CreateTodo onAddTodo={onAddTodo} />
    </header>
  );
}
