/* eslint-disable react/prop-types */
export function TodoForm({ query, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
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
