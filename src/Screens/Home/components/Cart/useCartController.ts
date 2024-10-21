import { useState } from "react";

import { CartItem } from "../../../../types/CartItem";
import { api } from "../../../../utils/api";

export function useCartController(
  cartItem: CartItem[],
  onConfirmOrder: () => void,
  selectedTable: string
) {
  const [isConfirmedModalVisible, setIsConfirmedModalVisible] = useState(false);
  const [isDescriptionModalVisible, setIsDescriptionModalVisible] = useState(false);
  const [isSizeModalVisible, setIsSizeModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>('MEAN');
  const [description, setDescription] = useState('');
  const [isLoadingCart, setIsLoadingCart] = useState(false);

  const total = cartItem.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  function handleOpenDescriptionModal() {
    setIsDescriptionModalVisible(true);
  }

  function handleCloseDescriptionModal() {
    setIsDescriptionModalVisible(false);
  }

  function handleOpenConfirmedModal() {
    setIsConfirmedModalVisible(true);
  }

  function handleCloseConfirmedModal() {
    setIsConfirmedModalVisible(false);
  }

  async function handleConfirmOrder() {
    setIsLoadingCart(true);

    const payload = {
      table: Number(selectedTable),
      description: description,
      products: cartItem.map(({ product, quantity }) => ({
        product: product._id,
        size: selectedSize,
        quantity: quantity,
      })),
    };

    console.log(JSON.stringify(payload, null, 2));

    await api.post('/orders', payload);

    setIsLoadingCart(false);
    handleOpenConfirmedModal();
  }

  function handleOpenSizeModal() {
    setIsSizeModalVisible(true);
  }

  function handleCloseSizeModal() {
    setIsSizeModalVisible(false);
  }

  function handleOk() {
    onConfirmOrder();
    handleCloseConfirmedModal();
  }

  function handleSelectSize(size: string) {
    setSelectedSize(size);
    handleCloseSizeModal();
  }

  return {
    total,
    handleConfirmOrder,
    isConfirmedModalVisible,
    handleOpenConfirmedModal,
    handleCloseConfirmedModal,
    handleOk,
    isLoadingCart,
    isSizeModalVisible,
    handleOpenSizeModal,
    handleCloseSizeModal,
    selectedSize,
    handleSelectSize,
    isDescriptionModalVisible,
    handleOpenDescriptionModal,
    handleCloseDescriptionModal,
    setDescription,
    description,
  };
}
