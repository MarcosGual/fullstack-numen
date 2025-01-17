import { useContext } from "react";
import "./ProductPage.css";
import { CartContext } from "../../context/CartContext";

const ProductPage = () => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="product-page">
      <h2>Productos</h2>
      <div className="product">
        <h4 className="product-title">Producto Ejemplo</h4>
        <button className="add-button" onClick={() => dispatch({ type: "addItem" })}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductPage;