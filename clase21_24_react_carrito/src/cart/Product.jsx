const Product = ({ product, addToCart }) => {
  const { id, nombre, precio } = product;

  return (
    <div className="col-sm-6 col-md-4">
      <h4>{nombre}</h4>
      <h5>$ {precio}</h5>
      <button onClick={() => addToCart(id)} className="btn btn-warning btn-sm">
        Agregar al Carrito
      </button>
    </div>
  );
};

export default Product;
