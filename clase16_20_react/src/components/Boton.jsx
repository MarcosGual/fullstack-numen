const Boton = () => {
  return <button style={{
      color: "white",
      backgroundColor: "darkgreen",
      padding: "10px 20px",
      borderRadius: "5px",
      fontSize: "1.5rem"
  }} onClick={()=>alert('Componente Botón!')}>Clickeame!</button>;
};

export default Boton;