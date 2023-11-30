export function Todo({ id, title, completed, onDeleteTodo, onCheck }) {
  //   function handleSubmit(event) {
  //     event.preventDefault();
  //   }
  function onToggleCompleted(event) {
    onCheck({ id, completed: event.target.checked });
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
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <button onClick={() => onDeleteTodo(id)}>Delete</button>
    </>
  );
}
