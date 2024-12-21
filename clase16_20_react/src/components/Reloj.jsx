import { useEffect, useState } from "react";

const Reloj = () => {
  const [time, setTime] = useState(new Date());
  const [relojVisible, setRelojVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId); //buena práctica
      console.log("reloj desmontado");
    };
  }, []);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={() => setRelojVisible(!relojVisible)}
        />
        Ver Reloj (estado: {`${relojVisible}`})
      </label>
      {relojVisible && (
        <div>
          <h2>Hora actual</h2>
          <p>{time.toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};

export default Reloj;
