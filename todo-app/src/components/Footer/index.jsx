import { Filters } from "../Filters";
import "./style.css";
export function Footer({ activeTodos, completeTodos, onFilterChange }) {
  return (
    <footer className="footer">
      <span className="todo-active">
        <strong>{activeTodos} - pending tasks</strong>
      </span>
      <span className="todo-completes">
        <strong>{completeTodos} - completed tasks</strong>
      </span>
      <Filters onFilterChange={onFilterChange} />
    </footer>
  );
}
