import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID, text: "hacer tareas", completed: false },
    { id: crypto.randomUUID, text: "hacer tareas", completed: false },
    { id: crypto.randomUUID, text: "hacer tareas", completed: false },
    { id: crypto.randomUUID, text: "hacer tareas", completed: false },
  ]); // [
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target[0].value;
    const newTodo = {
      id: crypto.randomUUID,
      text: value,
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Todo
          <input type="text" placeholder="todo" />
        </label>
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <input type="checkbox" checked={todo.completed} />
            </li>
          );
        })}
        {/* <li>hacer tareas</li>
        <li>hacer tareas</li>
        <li>hacer tareas</li>
        <li>hacer tareas</li> */}
      </ul>
    </>
  );
}

export default App;
