import "./App.css";
import { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [query, setQuery] = useState("");
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: "hacer tareas", completed: false },
    { id: crypto.randomUUID(), text: "hacer tareas", completed: false },
    { id: crypto.randomUUID(), text: "hacer tareas", completed: false },
    { id: crypto.randomUUID(), text: "hacer tareas", completed: false },
  ]);
  const [error, setError] = useState(null); // null, undefined, 0, "", false

  const handleCheck = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query === "") {
      setError("can't be a create todo empty");
      return;
    }
    // forma no controlada
    // const { query } = Object.fromEntries(new FormData(event.target));
    // console.log(query);
    const newTodo = {
      id: crypto.randomUUID(),
      text: query,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setQuery("");
  };

  const handleChange = (event) => {
    //forma controlada
    //prevalidacion
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return;
    setQuery(newQuery);
  };

  return (
    <>
      <TodoForm
        query={query}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ul>
        {todos.map((todo) => {
          return (
            <TodoList key={todo.id} todo={todo} handleCheck={handleCheck} />
          );
        })}
      </ul>
    </>
  );
}

export default App;
