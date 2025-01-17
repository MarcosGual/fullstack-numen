import "./App.css";
import Contador from "./components/Contador";
import ContadorReduce from "./components/ContadorReduce";

function App() {
  return (
    <div className="container">
      <h1>Hook useReducer en React</h1>
      <Contador />
      <ContadorReduce />
    </div>
  );
}

export default App;
