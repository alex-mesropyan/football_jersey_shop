import { products } from "../data/products";

export function fetchProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
}