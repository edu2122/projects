import { CheckTodo, DeleteTodo } from "../../icons/icons.jsx";
import { useTodos } from "../../hooks/useTodos";
import "./style.css";
export function Todo({ id, title, completed }) {
  const { handleDelete: onDeleteTodo, handleCheck: onCheck } = useTodos();
  function onToggleCompleted(event) {
    const completed = event.target.checked;
    onCheck({ id, completed });
  }
  const className = completed ? "completed" : "incomplete";
  return (
    <>
      <label
        className={`
        todo-label 
        ${className}`}
      >
        {title}
      </label>
      <div className="todo-tools">
        <span
          className={`
            todo-checkbox-icon 
            ${className}`}
        >
          <CheckTodo />
          <input
            className="todo-checkbox"
            type="checkbox"
            checked={completed}
            onChange={onToggleCompleted}
          />
        </span>
        <button className="todo-delete" onClick={() => onDeleteTodo(id)}>
          <DeleteTodo />
        </button>
      </div>
    </>
  );
}
