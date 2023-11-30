import "./App.css";
import { useState } from "react";
import { Todos } from "./components/Todos";
import { Header } from "./components/Header";

const mockTodos = [
  { id: crypto.randomUUID(), title: "hacer tareas", completed: false },
  { id: crypto.randomUUID(), title: "hacer tareas", completed: false },
  { id: crypto.randomUUID(), title: "hacer tareas", completed: false },
  { id: crypto.randomUUID(), title: "hacer tareas", completed: false },
];

function App() {
  const [todos, setTodos] = useState(mockTodos);
  const [error, setError] = useState(null); // null, undefined, 0, "", false

  const handleCheck = ({ id, completed }) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      })
    );
  };

  const handleAddTodo = ({ title }) => {
    // if (query === "") {
    //   setError("can't be a create todo empty");
    //   return;
    // }
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // const handleChange = (event) => {
  //   //forma controlada
  //   //prevalidacion
  //   const newQuery = event.target.value;
  //   if (newQuery.startsWith(" ")) return;
  //   setQuery(newQuery);
  // };

  function handleUpdate(id, value) {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: value };
        }
        return todo;
      })
    );
  }

  function handleDelete(id) {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  }
  return (
    <>
      {/* <TodoForm
        query={query}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      /> */}
      <Header onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onDeleteTodo={handleDelete} onCheck={handleCheck} />
    </>
  );
}

export default App;
