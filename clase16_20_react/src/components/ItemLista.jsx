const ItemLista = (props) => {
  // console.log('prop de componente item lista', props)
  return (
    <li>
      {props.nombre} - ${props.precio}
    </li>
  );
};

export default ItemLista;
