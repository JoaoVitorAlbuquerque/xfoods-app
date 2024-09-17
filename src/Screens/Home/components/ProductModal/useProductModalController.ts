import { Product } from "../../../../types/Product";

export function useProductModalController(onAddToCart: (product: Product) => void, onCloseProductModal: () => void) {
  function handleAddToCart(product: Product) {
    onAddToCart(product);
    onCloseProductModal();
  }

  return {
    handleAddToCart,
  };
}
