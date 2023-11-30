import { useState } from "react";

export function CreateTodo({ onAddTodo }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // const newQuery = event.target[0].value;
    onAddTodo({
      title: query,
    });
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="todo"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
