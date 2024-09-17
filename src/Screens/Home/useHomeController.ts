import { useState } from "react";
import { CartItem } from "../../types/CartItem";
import { products } from "../../mocks/products";
import { Product } from "../../types/Product";

export function useHomeController() {
  const [isTabeModalVisible, setisTabeModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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
    setCartItems([]);
  }

  function handleAddToCart(product: Product) {
    if (!selectedTable) {
      handleOpenTableModal();
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product.id === product.id);

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleDecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product.id === product.id);
      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  }

  return {
    isTabeModalVisible,
    handleOpenTableModal,
    handleCloseTableModal,
    selectedTable,
    handleSaveTable,
    handleCancelOrder,
    cartItems,
    handleAddToCart,
    handleDecrementCartItem,
  };
};
