import { CreateTodo } from "../CreateTodo";
import { useTodos } from "../../hooks/useTodos";
import "./style.css";

export function Header() {
  const { onAddTodo } = useTodos();
  return (
    <header className="todo-header">
      <h1 className="todo-title">Todo App</h1>
      <CreateTodo onAddTodo={onAddTodo} />
    </header>
  );
}
