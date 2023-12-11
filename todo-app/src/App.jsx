import "./App.css";
// import { MagicMotion } from "react-magic-motion";
import { TODO_FILTERS } from "./consts";
import { useState } from "react";
import { Todos } from "./components/Todos";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const mockTodos = [
  { id: crypto.randomUUID(), title: "Task 1", completed: false },
  { id: crypto.randomUUID(), title: "Task 2", completed: false },
  { id: crypto.randomUUID(), title: "Task 3", completed: false },
  { id: crypto.randomUUID(), title: "Task 4", completed: false },
];

function App() {
  const [todos, setTodos] = useState(mockTodos);
  const [filteredSelected, setFilteredSelected] = useState(TODO_FILTERS.ALL);
  // const [error, setError] = useState(null); // null, undefined, 0, "", false

  const filteredTodos = todos.filter((todo) => {
    if (filteredSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filteredSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const activeTodos = todos.filter((todo) => todo.completed === false).length;
  const completeTodos = todos.length - activeTodos;
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
  function handleFilterChange(filter) {
    setFilteredSelected(filter);
  }

  return (
    <>
      <Header onAddTodo={handleAddTodo} />
        <Todos
          todos={filteredTodos}
          onDeleteTodo={handleDelete}
          onCheck={handleCheck}
        />
      <Footer
        activeTodos={activeTodos}
        completeTodos={completeTodos}
        onFilterChange={handleFilterChange}
      />
    </>
  );
}

export default App;
