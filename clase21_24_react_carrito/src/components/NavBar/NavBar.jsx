import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./NavBar.css";

const NavBar = () => {
  const { state } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Mi Tienda</h1>
      <div className="navbar-cart">
        Carrito 🛒
        {state.itemCount > 0 && (
          <span className="cart-badge">{state.itemCount}</span>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
