
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(prevCart => [
      ...prevCart,
      product
    ]);
  }

  const mainPage = (
    <div className="min-h-screen bg-gray-100">
      <Header cartCount={cart.length} />

      <main>
        <Hero />

        <ProductList
          onAddToCart={addToCart}
        />

        <RegistrationForm />
      </main>

      <Footer />
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={mainPage} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;