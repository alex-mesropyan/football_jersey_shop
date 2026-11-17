
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";
import ProductCard from "./ProductCard";

function ProductList({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const data = await fetchProducts();

        setProducts(data);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <section
      id="products"
      className="mx-auto max-w-7xl px-6 py-16"
    >
      <h2 className="mb-8 text-3xl font-bold text-gray-900">
        Our Products
      </h2>

      {loading && (
        <div className="flex flex-col items-center justify-center gap-4 py-20">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
          <p className="font-medium text-gray-600">
            Loading products...
          </p>
        </div>
      )}

      {error && (
        <p className="py-10 text-center text-red-600">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;
