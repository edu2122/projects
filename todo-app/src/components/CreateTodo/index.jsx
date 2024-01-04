import { useState } from "react";
import "./style.css";
import { useTodos } from "../../hooks/useTodos";

export function CreateTodo() {
  const { handleAddTodo: onAddTodo } = useTodos();
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo({
      title: inputValue,
    });
    setInputValue("");
  };
  const handleChange = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Type your todo here"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
}
