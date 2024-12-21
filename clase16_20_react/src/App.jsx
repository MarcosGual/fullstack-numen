import "./App.css";
import Contador from "./components/Contador";
import ThemeProvider from "./context/themeProvider";

function App() {
  
  return (
    <div className="container">
      <h1>Efectos secundarios y Contexto en React</h1>
      <ThemeProvider>
        <Contador />
      </ThemeProvider>
    </div>
  );
}

export default App;
