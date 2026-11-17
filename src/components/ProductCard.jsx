
function ProductCard({ product, onAddToCart }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md">

      <img
        src={product.image}
        alt={product.title}
        className="h-56 w-full object-fill"
      />

      <div className="p-5">

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <h3 className="mt-2 text-xl font-semibold">
          {product.title}
        </h3>

        <p className="mt-3 text-xl font-bold text-blue-600">
          {product.price.toLocaleString()} AMD
        </p>

        
        <div className="mt-4">
          <p className="mb-2 text-sm font-medium text-gray-700">
            Select Size:
          </p>

          <div className="flex gap-2">
            {product.size.map((size) => (
              <button
                key={size}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm transition hover:border-black hover:bg-black hover:text-white"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="mt-5 w-full rounded-xl bg-black px-4 py-3 text-white hover:bg-gray-800"
        >
          Add to Cart
        </button>

      </div>
    </article>
  );
}

export default ProductCard;
