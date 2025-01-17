import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const handleSuma = () => {
    setContador(contador + 1);
  };

  const handleResta = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h2>Contador</h2>
      <div>
        <h4>{contador}</h4>
        <button onClick={handleResta}>- 1</button>
        <button onClick={handleSuma}>+ 1</button>
      </div>
    </div>
  );
};

export default Contador;
