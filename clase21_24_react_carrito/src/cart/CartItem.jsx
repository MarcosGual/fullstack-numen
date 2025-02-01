const CartItem = ({ item, removeFromCart }) => {
  const { id, nombre, precio, cantidad } = item;

  return (
    <div className="col-md-12 d-flex flex-row justify-content-between mb-3">
      <h4>{nombre}</h4>
      <h5>$ {precio}</h5>
      <h5>{cantidad} u</h5>
      <h5>Subtotal: $ {precio * cantidad}</h5>
      <button
        className="btn btn-warning btn-sm"
        onClick={() => removeFromCart(item, false)}
      >
        Eliminar uno
      </button>
      <button
        className="btn btn-warning btn-sm"
        onClick={() => removeFromCart(item, true)}
      >
        Eliminar todos
      </button>
    </div>
  );
};

export default CartItem;
