import { useEffect, useReducer, useState } from "react";
import { cartInitialState, cartReducer } from "./cartReducer";
import Product from "./Product";
import CartItem from "./CartItem";
import { TYPES } from "./actionTypes";
import axios from "axios";

const productsUrl = "http://localhost:5000/products/";
const cartUrl = "http://localhost:5000/cart/";

const Cart = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const [loading, setLoading] = useState(false);

  const updateState = async () => {
    try {
      setLoading(true);
      const productsResponse = await axios.get(productsUrl); //SOLICITUD HTTP GET (OBTENER)
      const products = productsResponse.data;
      const cartResponse = await axios.get(cartUrl);
      const cart = cartResponse.data;

      dispatch({ type: TYPES.READ_STATE, payload: { products, cart } });
    } catch (error) {
      console.log("Error al cargar los productos", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    updateState();
  }, []);

  const addToCart = async (product) => {
    const existingItem = state.cart.find((item) => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, existingItem.cantidad + 1);
    } else {
      try {
        const response = await axios.post(cartUrl, { ...product, cantidad: 1 });
        console.log("respuesta a agregar al carrito ", response);
      } catch (error) {
        console.log("Error al agregar al carrito - ", error.message);
        //alert('Error al agregar al carrito...')
      }
    }
    //console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: product.id });
  };

  const updateQuantity = async (id, quantity) => {
    try {
      console.log('update quantity id: '+id);
      await axios.patch(cartUrl+id, {cantidad: quantity});
    } catch (error) {
      console.log("Error al actualizar las cantidades - " + error.message);
    }
  };

  const removeFromCart = async (item, removeAll) => {
    // console.log(id);
    if (removeAll) {
      const response = window.confirm(
        "¿Desea remover todos los items de este producto?"
      );
      if (!response) return;
      await axios.delete(cartUrl+item.id);
      dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: item.id });
    } else {
      updateQuantity(item.id, item.cantidad-1);
      dispatch({ type: TYPES.REMOVE_ITEM, payload: item.id });
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
