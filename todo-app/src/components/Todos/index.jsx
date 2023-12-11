import { Todo } from "../Todo";
import "./style.css";

export function Todos({ todos, onDeleteTodo, onCheck }) {
  // const [edit, setEdit] = useState(false);
  // const handleEdit = () => {
  //   setEdit(true);
  // };
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

  return (
    <ul className="todos-container">
      {todos.map((todo) => (
        <li className="todo" key={todo.id}>
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onDeleteTodo={onDeleteTodo}
            onCheck={onCheck}
          />
        </li>
      ))}
    </ul>
  );
}
