import ItemLista from "./ItemLista";

const Lista = (props) => {
    console.log('props de componente lista', props);
    
  return (
    <ul>
      {props.productos.map((producto) => (
        <ItemLista
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
        />
      ))}
    </ul>
  );
};

export default Lista;
