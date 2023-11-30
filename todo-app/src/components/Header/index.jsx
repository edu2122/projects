import { CreateTodo } from "../CreateTodo";

export function Header({ onAddTodo }) {
  return (
    <header>
      <h1>Todo App</h1>
      <CreateTodo onAddTodo={onAddTodo} />
    </header>
  );
}
