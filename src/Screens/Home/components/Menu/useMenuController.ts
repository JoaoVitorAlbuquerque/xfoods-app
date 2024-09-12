import { useState } from "react";
import { Product } from "../../../../types/Product";

export function useMenuController() {
  const [isProductModalVisible, setIsProductModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenProductModal(product: Product) {
    setIsProductModalVisible(true);
    setSelectedProduct(product);
  }

  function handleCloseProductModal() {
    setIsProductModalVisible(false);
  }

  return {
    isProductModalVisible,
    handleOpenProductModal,
    handleCloseProductModal,
    selectedProduct,
  };
};
