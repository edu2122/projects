export function Todo({ id, title, completed, onDeleteTodo, onCheck }) {
  function onToggleCompleted(event) {
    const completed = event.target.checked;
    onCheck({ id, completed });
  }
  return (
    <>
      <label
        style={
          completed
            ? { color: "blue", textDecoration: "line-through" }
            : { color: "red" }
        }
      >
        {title}
      </label>
      <div className="todo-tools">
        <input
          className="todo-checkbox"
          type="checkbox"
          checked={completed}
          onChange={onToggleCompleted}
        />
        <button className="todo-delete" onClick={() => onDeleteTodo(id)}>
          Delete
        </button>
      </div>
    </>
  );
}
