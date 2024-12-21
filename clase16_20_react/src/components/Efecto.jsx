import { useEffect } from "react";

const Efecto = () => {
  useEffect(() => {
    alert("Bienvenido usuario!");
    console.log('Componente montado');
  }, []);

  return (
    <div>
      <h3>Efecto Secundario</h3>
    </div>
  );
};

export default Efecto;
