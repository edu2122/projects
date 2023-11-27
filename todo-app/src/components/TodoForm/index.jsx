export function TodoForm({ query, handleSubmit, handleChange }) {
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        Todo
        <input
          onChange={handleChange}
          value={query}
          type="text"
          placeholder="todo"
        />
        <button type="submit">Agregar</button>
      </label>
    </form>
  );
}
