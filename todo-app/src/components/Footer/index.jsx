import { useFilters } from "../../hooks/useFilters";
import { Filters } from "../Filters";
import "./style.css";
export function Footer({ todos }) {
  const { active, completed } = useFilters();
  const activeTodos = active(todos);
  const completeTodos = completed(todos);
  return (
    <footer className="footer">
      <div className="todo-actions">
        <span className="todo-active">
          <strong className="strong">{activeTodos} - pending</strong>
        </span>
        <span className="todo-completes">
          <strong className="strong">{completeTodos} - completed</strong>
        </span>
      </div>
      <Filters />
    </footer>
  );
}
