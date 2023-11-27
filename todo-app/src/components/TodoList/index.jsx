/* eslint-disable react/prop-types */
export function TodoList({ todo, handleCheck }) {
  return (
    <li
      key={todo.id}
      style={todo.completed ? { color: "blue" } : { color: "red" }}
    >
      {todo.text}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleCheck(todo.id)}
      />
    </li>
  );
}
