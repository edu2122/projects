import { CheckTodo, DeleteTodo } from "../../icons/icons.jsx";
import "./style.css";
export function Todo({ id, title, completed, onDeleteTodo, onCheck }) {
  function onToggleCompleted(event) {
    const completed = event.target.checked;
    onCheck({ id, completed });
  }
  return (
    <>
      <label
        className="todo-label"
        style={
          completed
            ? { color: "var(--terciary-color)", textDecoration: "line-through" }
            : { color: "var(--secondary-color)" }
        }
      >
        {title}
      </label>
      <div className="todo-tools">
        <span
          style={
            completed
              ? { fill: "var(--terciary-color)" }
              : { fill: "var(--secondary-color)" }
          }
          className="todo-checkbox-icon"
        >
          <input
            className="todo-checkbox"
            type="checkbox"
            checked={completed}
            onChange={onToggleCompleted}
          />
          <CheckTodo />
        </span>
        <button className="todo-delete" onClick={() => onDeleteTodo(id)}>
          <DeleteTodo />
        </button>
      </div>
    </>
  );
}
