import { useState } from "react";

import { CartItem } from "../../../../types/CartItem";

export function useCartController(cartItem: CartItem[], onConfirmOrder: () => void) {
  const [isConfirmedModalVisible, setIsConfirmedModalVisible] = useState(false);
  const [isDescriptionModalVisible, setIsDescriptionModalVisible] = useState(false);
  const [isSizeModalVisible, setIsSizeModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>('MEAN');
  const [isLoadingCart] = useState(false);

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

  function handleConfirmOrder() {
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
  };
}
