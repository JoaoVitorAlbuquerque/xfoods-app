import { useEffect, useState } from "react";

import { CartItem } from "../../types/CartItem";
import { Product } from "../../types/Product";

import { Category } from "../../types/Category";
import { api } from "../../utils/api";

export function useHomeController() {
  const [isTabeModalVisible, setisTabeModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  useEffect(() => {
    Promise.all([
      api.get('/categories'),
      api.get('/products'),
    ]).then(([categoriesResponse, productsResponse]) => {
      setCategories(categoriesResponse.data);
      setProducts(productsResponse.data);
      setIsLoading(false);
    });
  }, []);

  async function handleSelectCategory(categoryId: string) {
    const route = !categoryId ? '/products' : `/products/${categoryId}`;

    setIsLoadingProducts(true);

    const { data } = await api.get(route);

    setProducts(data);
    setIsLoadingProducts(false);
  }

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

  function handleResetOrder() {
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
    handleResetOrder,
    cartItems,
    handleAddToCart,
    handleDecrementCartItem,
    isLoading,
    products,
    categories,
    handleSelectCategory,
    isLoadingProducts,
  };
};
