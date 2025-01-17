import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { CartProvider } from "./context/CartContext";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <ProductPage />
      </CartProvider>
    </>
  );
}

export default App;
