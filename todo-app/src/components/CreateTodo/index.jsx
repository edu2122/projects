import { useState } from "react";
import "./style.css";

export function CreateTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo({
      title,
    });
    setTitle("");
  };
  const handleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Type your todo here"
        value={title}
        onChange={handleChange}
      />
    </form>
  );
}
