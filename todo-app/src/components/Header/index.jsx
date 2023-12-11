import { CreateTodo } from "../CreateTodo";
import "./style.css";

export function Header({ onAddTodo }) {
  return (
    <header className="todo-header">
      <h1 className="todo-title">Todo App</h1>
      <CreateTodo onAddTodo={onAddTodo} />
    </header>
  );
}
