import { useState } from "react";

const Busqueda = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const handleChange = (evento) => {
    setTerminoBusqueda(evento.target.value);
  };

  return (
    <div>
      <label>Buscar: </label>
      <input type="text" onChange={handleChange} />
      {/* renderizado condicional */}
      {terminoBusqueda && <h4>Buscando {terminoBusqueda}...</h4>}
    </div>
  );
};

export default Busqueda;
