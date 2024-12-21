import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/themeProvider";

const Contador = () => {
  let [contador, setContador] = useState(0);
  const { tema, cambiarTema } = useContext(ThemeContext);

  const estilosComponente = {
    backgroundColor: tema === "claro" ? "white" : "black",
    color: tema === "claro" ? "black" : "white",
  };

  return (
    <div style={estilosComponente}>
      <h2>Contador</h2>
      <button onClick={() => setContador(contador + 5)}>Agregar +5</button>
      <button onClick={() => setContador(++contador)}>Agregar</button>
      <h3>{contador}</h3>
      <button onClick={() => setContador(--contador)}>Disminuir</button>
      <button onClick={() => setContador(contador - 5)}>Disminuir -5</button>
    </div>
  );
};

export default Contador;
