import { useState } from "react";
import { CartItem } from "../../types/CartItem";
import { products } from "../../mocks/products";

export function useHomeController() {
  const [isTabeModalVisible, setisTabeModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      quantity: 1,
      product: products[0],
    },
    {
      quantity: 2,
      product: products[1],
    },
  ]);

  function handleOpenTableModal() {
    setisTabeModalVisible(true);
  };

  function handleCloseTableModal() {
    setisTabeModalVisible(false);
  };

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    handleCloseTableModal();
  }

  function handleCancelOrder() {
    setSelectedTable('');
  }

  return {
    isTabeModalVisible,
    handleOpenTableModal,
    handleCloseTableModal,
    selectedTable,
    handleSaveTable,
    handleCancelOrder,
    cartItems,
  };
};
