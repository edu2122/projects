import "./App.css";
// import { MagicMotion } from "react-magic-motion";
import { Todos } from "./components/Todos";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos } = useTodos();
  const { filtersTodos } = useFilters();
  const filteredTodos = filtersTodos(todos);

  return (
    <>
      <Header />
      <Todos todos={filteredTodos} />
      <Footer todos={filteredTodos} />
    </>
  );
}

export default App;
