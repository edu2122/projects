import "./App.css";
// import { MagicMotion } from "react-magic-motion";
import { Todos } from "./components/Todos";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MagicMotion } from "react-magic-motion";

function App() {
  return (
    <MagicMotion>
      <Header/>
      <Todos key="exclude"/>
      <Footer/>
    </MagicMotion>
  );
}

export default App;
