import { Todo } from "../Todo";
import { useTodos } from "../../hooks/useTodos";
import { useFilters } from "../../hooks/useFilters";
import { useState } from "react";
import "./style.css";

export function Todos() {
  // const handleEdit = () => {
  //   setEdit(true);
  // function FormEdit() {
  //   const [newValue, setNewValue] = useState(todo.text);
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //   };

  //   const handleChange = (event) => {
  //     const value = event.target.value;
  //     setNewValue(value);
  //   };
  //   const handleClickUpdate = () => {
  //     onUpdate(todo.id, newValue);
  //     setEdit(false);
  //   };
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" onChange={handleChange} value={newValue} />
  //       <button onClick={handleClickUpdate}>Update todo</button>
  //     </form>
  //   );
  // }
  const { todos } = useTodos();
  const { filtersTodos } = useFilters();
  const filteredTodos = filtersTodos(todos);
  const [isEditing, setIsEditing] = useState("");
  return (
    <ul className="todos-container">
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          onDoubleClick={() => setIsEditing(todo.id)}
          className={`
            todo
            ${isEditing === todo.id ? "editing" : ""}
          `}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo}
            title={todo.title}
            completed={todo.completed}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </li>
      ))}
    </ul>
  );
}
