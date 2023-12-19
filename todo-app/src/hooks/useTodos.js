import { useContext } from "react";
import { TodosContext } from "../context/todos.jsx";
export function useTodos() {
  const { todos, setTodos } = useContext(TodosContext);

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
  return {
    todos,
    handleAddTodo,
    handleCheck,
    handleUpdate,
    handleDelete,
  };
}
