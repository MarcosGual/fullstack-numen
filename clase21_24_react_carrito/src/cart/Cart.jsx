import { useEffect, useReducer, useState } from "react";
import { cartInitialState, cartReducer } from "./cartReducer";
import Product from "./Product";
import CartItem from "./CartItem";
import { TYPES } from "./actionTypes";
import axios from "axios";

const Cart = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const [loading, setLoading] = useState(false);

  const updateState = async () => {
    const productsUrl = "http://localhost:5000/products";

    try {
      setLoading(true);
      const productsResponse = await axios.get(productsUrl);
      const products = productsResponse.data;

      dispatch({ type: TYPES.READ_STATE, payload: products });
    } catch (error) {
      console.log("Error al cargar los productos", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    updateState();
  }, []);

  const addToCart = (id) => {
    //console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const removeFromCart = (id, removeAll) => {
    // console.log(id);
    if (removeAll) {
      const response = window.confirm(
        "¿Desea remover todos los items de este producto?"
      );
      if (!response) return;
      dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ITEM, payload: id });
    }
  };

  const clearCart = () => {
    const response = window.confirm(
      "¿Desea eliminar todos los productos del carrito?"
    );
    if (!response) return;
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      {loading ? (
        <h4>Cargando...</h4>
      ) : (
        <div className="row">
          {state.products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      )}
      <h3 className="mt-5 mb-2">Carrito</h3>
      {state.cart.length > 0 && (
        <button onClick={clearCart} className="btn btn-danger btn-sm">
          Limpiar Carrito
        </button>
      )}
      <div>
        {state.cart.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
