import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(prevCart => [
      ...prevCart,
      product
    ]);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cartCount={cart.length} />

      <main>
        <Hero />

        <ProductList
          onAddToCart={addToCart}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;