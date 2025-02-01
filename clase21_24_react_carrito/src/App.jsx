import { BrowserRouter, Route, Router, Routes } from "react-router";
import "./App.css";
import Cart from "./cart/Cart";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Main from "./pages/main/Main";
import NotFound from "./pages/not-found/NotFound";
import Product from "./cart/Product";
import Form from "./pages/form/Form";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Form />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
